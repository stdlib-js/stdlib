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

var path = require( 'path' );
var logger = require( 'debug' );
var objectKeys = require( '@stdlib/utils/keys' );
var replace = require( '@stdlib/string/replace' );
var extname = require( '@stdlib/utils/extname' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var parse = require( '@stdlib/_tools/repl-txt/parse' );
var node2info = require( '@stdlib/_tools/repl-txt/abridge' );


// VARIABLES //

var debug = logger( 'repl:help:build' );

// Source documentation directory:
var SRC_DIR = path.resolve( __dirname, '..', 'docs', 'commands' );

// Output file directory:
var OUTPUT_DIR = path.resolve( __dirname, '..', 'data' );


// FUNCTIONS //

/**
* Filters a list of files for documentation files.
*
* @private
* @param {Array} list - file list
* @returns {Array} filtered list
*/
function filterFiles( list ) {
	var out;
	var ext;
	var i;

	out = [];
	for ( i = 0; i < list.length; i++ ) {
		ext = extname( list[ i ] );
		if ( ext === '.txt' ) {
			out.push( list[ i ] );
		}
	}
	return out;
}

/**
* Returns a section AST node having a specified title.
*
* @private
* @param {ObjectArray} nodes - section AST nodes
* @param {string} name - section name
* @returns {(Object|null)} AST node or null
*/
function findSection( nodes, name ) {
	var i;
	for ( i = 0; i < nodes.length; i++ ) {
		if ( nodes[ i ].title === name ) {
			return nodes[ i ];
		}
	}
	return null;
}

/**
* Saves a JSON database.
*
* @private
* @param {string} basename - base file name (excluding extension)
* @param {Object} json - JSON database
*/
function save( basename, json ) {
	var fpath;
	var fopts;
	var keys;
	var csv;
	var tmp;
	var i;

	debug( 'Writing to JSON file.' );
	fopts = {
		'encoding': 'utf8'
	};
	fpath = path.join( OUTPUT_DIR, basename+'.json' );
	writeFile( fpath, JSON.stringify( json )+'\n', fopts );

	debug( 'Writing to CSV file.' );
	keys = objectKeys( json );
	csv = '';
	for ( i = 0; i < keys.length; i++ ) {
		tmp = replace( json[ keys[i] ], /\r?\n/g, '\\n' );
		tmp = replace( tmp, '"', '\\"' );
		csv += keys[ i ] + ',"' + tmp + '"\n'; // Note: ensures trailing newline
	}
	fpath = path.join( OUTPUT_DIR, basename+'.csv' );
	writeFile( fpath, csv, fopts );
}

/**
* Main execution sequence.
*
* @private
* @returns {void}
*/
function main() {
	var files;
	var ropts;
	var alias;
	var asts;
	var code;
	var len;
	var ast;
	var dbs;
	var tmp;
	var s;
	var i;
	var j;
	var k;

	debug( 'Reading directory: %s', SRC_DIR );
	files = readDir( SRC_DIR );
	if ( files instanceof Error ) {
		debug( 'Encountered an error when attempting to read directory. Error: %s', files.message );
		console.error( 'Error: %s', files.message ); // eslint-disable-line no-console
		return;
	}
	debug( 'Filtering for documentation files.' );
	files = filterFiles( files );
	len = files.length;
	if ( len === 0 ) {
		debug( 'Unable to resolve documentation files.' );
		return;
	}
	debug( 'Found %d documentation files.', len );

	debug( 'Generating ASTs.' );
	ropts = {
		'encoding': 'utf8'
	};
	asts = [];
	for ( i = 0; i < len; i++ ) {
		files[ i ] = readFile( path.join( SRC_DIR, files[ i ] ), ropts );
		asts.push( parse( files[ i ] ) );
	}
	debug( 'Finished generating ASTs.' );

	debug( 'Generating databases.' );
	dbs = {
		'help': {},
		'info': {},
		'example': {}
	};
	for ( i = 0; i < len; i++ ) {
		ast = asts[ i ];
		alias = ast[ 0 ].signature.name;

		debug( 'Processing alias: %s', alias );
		dbs.help[ alias ] = files[ i ];

		debug( 'Number of documented interfaces: %d', ast.length );
		debug( 'Processing interfaces.' );
		for ( j = 0; j < ast.length; j++ ) {
			tmp = ast[ j ].signature.name;
			debug( 'Interface: %s', tmp );

			if ( tmp.slice( 0, alias.length ) !== alias ) {
				debug( 'Interface is documented neither as the alias nor an associated method. Skipping...' );
				continue;
			}

			// Help text:
			if ( tmp === alias ) {
				// Main alias should exclusively correspond to the full help text:
				debug( 'Interface corresponds to the main alias.' );
			} else if ( hasOwnProp( dbs.help, tmp ) ) {
				// Concatenate associated signatures (e.g., same API, but multiple parameterizations based on argument types, etc):
				dbs.help[ tmp ] += ast[ j ].raw;
			} else {
				dbs.help[ tmp ] = '\n' + ast[ j ].raw;
			}

			// Info:
			if ( hasOwnProp( dbs.info, tmp ) ) {
				dbs.info[ tmp ] += node2info( ast[ j ] );
			} else {
				dbs.info[ tmp ] = node2info( ast[ j ] );
			}

			// Example:
			s = findSection( ast[ j ].sections, 'Examples' );
			if ( s ) {
				code = '';
				for ( k = 0; k < s.examples.length; k++ ) {
					code += s.examples[ k ].code + '\n';
				}
				if ( hasOwnProp( dbs.example, tmp ) ) {
					// Concatenate associated examples (e.g., same API, but multiple parameterizations based on argument types, etc):
					dbs.example[ tmp ] += code;
				} else {
					dbs.example[ tmp ] = code;
				}
			} else {
				debug( 'Unable to resolve examples.' );
			}

			debug( 'Finished processing interface.' );
		}
		debug( 'Successfully processed alias: %s', alias );
	}

	debug( 'Saving help text database.' );
	save( 'help', dbs.help );

	debug( 'Saving abbreviate help text database.' );
	save( 'info', dbs.info );

	debug( 'Saving example database.' );
	save( 'example', dbs.example );
}


// MAIN //

main();
