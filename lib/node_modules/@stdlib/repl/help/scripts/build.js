/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolvePath = require( 'path' ).resolve;
var join = require( 'path' ).join;
var resolve = require( 'resolve' ).sync;
var logger = require( 'debug' );
var objectKeys = require( '@stdlib/utils/keys' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' ).sync;
var dirname = require( '@stdlib/utils/dirname' );
var replace = require( '@stdlib/string/replace' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var namespace = require( '@stdlib/namespace' );
var pkg2alias = require( '@stdlib/namespace/pkg2alias' );
var parse = require( '@stdlib/_tools/repl-txt/parse' );


// VARIABLES //

var debug = logger( 'repl:help:build' );

// Filepath convention for REPL text:
var REPL_TEXT = 'docs/repl.txt';

// Root search directory:
var ROOT = resolvePath( __dirname, '..', '..', '..' );

// Output file paths:
var OUTPUT_JSON = resolvePath( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolvePath( __dirname, '..', 'data', 'data.csv' );

// Identifier for inserting 'See Also' links:
var SEE_ALSO = '\n    See Also\n    --------\n';

// Regular expression to detect package aliases:
var RE_ALIASES = /(?:{{alias:[^}]+}})+/g;

// Regular expression to capture a package alias:
var RE_ALIAS = /\{\{alias:([^}]+)\}\}/;


// FUNCTIONS //

/**
* Returns an array of unique items.
*
* @private
* @param {Array} arr - input array
* @returns {Array} array containing only unique items
*/
function unique( arr ) {
	var obj;
	var i;

	obj = {};
	for ( i = 0; i < arr.length; i++ ) {
		if ( !hasOwnProp( obj, arr[ i ] ) ) {
			obj[ arr[ i ] ] = true;
		}
	}
	return objectKeys( obj );
}

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var related;
	var fpath;
	var alias;
	var ropts;
	var fopts;
	var keys;
	var json;
	var file;
	var pkg;
	var len;
	var tmp;
	var csv;
	var ast;
	var ns;
	var a;
	var p;
	var i;
	var j;

	debug( 'Generating REPL help documentation.' );
	ns = namespace();

	ropts = {
		'basedir': ROOT
	};
	fopts = {
		'encoding': 'utf8'
	};
	debug( 'Package resolve options: %s', JSON.stringify( ropts ) );

	json = {};
	for ( i = 0; i < ns.length; i++ ) {
		alias = ns[ i ].alias;
		debug( 'Resolving `%s`', alias );

		fpath = resolve( ns[ i ].path, ropts );
		debug( 'Resolved module path: %s', fpath );

		debug( 'Resolving package information.' );
		fpath = resolveParentPath( 'package.json', {
			'dir': dirname( fpath )
		});
		if ( fpath === null ) {
			debug( 'Unable to resolve package information.' );
			continue;
		}
		debug( 'Reading package information.' );
		pkg = readJSON( fpath, fopts );
		if ( pkg instanceof Error ) {
			debug( 'Unable to read package information: %s', pkg.message );
			continue;
		}
		debug( 'Checking package information.' );
		if ( pkg.name !== ns[ i ].path ) {
			debug( 'Package information does not match path. Expected: %s. Actual: %s.', ns[ i ].path, pkg.name );
			continue;
		}
		fpath = join( dirname( fpath ), REPL_TEXT );
		debug( 'Attempting to read REPL text: %s', fpath );

		file = readFile( fpath, fopts );
		if ( file instanceof Error ) {
			debug( 'Unable to read REPL text.' );
			continue;
		}
		debug( 'Successfully read REPL text.' );

		debug( 'Processing REPL text.' );
		file = replace( file, '{{alias}}', alias );

		debug( 'Checking for package identifiers.' );
		tmp = file.match( RE_ALIASES );
		if ( tmp ) {
			debug( 'Resolving package identifier aliases.' );
			tmp = unique( tmp );
			for ( j = 0; j < tmp.length; j++ ) {
				p = RE_ALIAS.exec( tmp[ j ] )[ 1 ]; // extracts a package identifier
				a = pkg2alias( p );
				if ( a === null ) {
					debug( 'Unable to resolve alias: %s.', p );
					console.warn( 'WARNING: unable to resolve alias `%s` for `%s`. ', p, alias ); // eslint-disable-line no-console
				} else {
					file = replace( file, tmp[ j ], a );
					debug( 'Resolved alias: %s => %s.', p, a );
				}
			}
		}
		debug( 'Resolving related aliases.' );
		len = ns[ i ].related.length;
		if ( len ) {
			tmp = [];
			related = ns[ i ].related;
			for ( j = 0; j < len; j++ ) {
				a = pkg2alias( related[ j ] );
				if ( a === null ) {
					debug( 'Unable to resolve related alias: %s.', related[ j ] );
					console.warn( 'WARNING: unable to resolve related alias `%s` for `%s`. ', related[ j ], alias ); // eslint-disable-line no-console
				} else {
					tmp.push( a );
					debug( 'Resolved alias: %s => %s.', related[ j ], a );
				}
			}
			if ( tmp.length ) {
				file = replace( file, SEE_ALSO, SEE_ALSO+'    '+tmp.join( ', ' ) );
			} else {
				file = replace( file, SEE_ALSO, '' );
			}
		} else {
			file = replace( file, SEE_ALSO, '' );
		}
		json[ alias ] = file;

		debug( 'Generating AST.' );
		ast = parse( file );
		len = ast.length;

		debug( 'Number of documented interfaces: %d', len );
		debug( 'Generating REPL help text for each documented interface.' );
		for ( j = 0; j < len; j++ ) {
			tmp = ast[ j ].signature.name;
			debug( 'Interface: %s', tmp );
			if ( tmp === alias ) {
				// Main alias should exclusively correspond to the full help text:
				debug( 'Interface corresponds to the main alias. Skipping...' );
				continue;
			}
			if ( tmp.slice( 0, alias.length ) !== alias ) {
				debug( 'Interface is documented neither as the alias nor an associated method. Skipping...' );
				continue;
			}
			if ( hasOwnProp( json, tmp ) ) {
				// Concatenate associated signatures (e.g., same API, but multiple parameterizations based on argument types, etc):
				json[ tmp ] += ast[ j ].raw;
			} else {
				json[ tmp ] = '\n' + ast[ j ].raw;
			}
			debug( 'Finished processing interface.' );
		}
		debug( 'Successfully processed `%s`.', alias );
	}
	debug( 'Writing to JSON file.' );
	writeFile( OUTPUT_JSON, JSON.stringify( json )+'\n', fopts );

	debug( 'Writing to CSV file.' );
	keys = objectKeys( json );
	csv = '';
	for ( i = 0; i < keys.length; i++ ) {
		tmp = replace( json[ keys[i] ], /\r?\n/g, '\\n' );
		tmp = replace( tmp, '"', '\\"' );
		csv += keys[ i ] + ',"' + tmp + '"\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
