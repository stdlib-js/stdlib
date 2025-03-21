#!/usr/bin/env node

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
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var extname = require( '@stdlib/utils/extname' );
var pkg2alias = require( '@stdlib/namespace/pkg2alias' );
var replace = require( '@stdlib/string/replace' );
var objectKeys = require( '@stdlib/utils/keys' );
var objectFromEntries = require( '@stdlib/utils/from-entries' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var lowercase = require( '@stdlib/string/lowercase' );
var trim = require( '@stdlib/string/trim' );
var ltrim = require( '@stdlib/string/left-trim' );
var RE_EOL = require( '@stdlib/regexp/eol' ).REGEXP;


// VARIABLES //

var debug = logger( 'repl:tutorials:build' );

// Source tutorials directory:
var SRC_DIR = path.resolve( __dirname, '..', 'docs', 'tutorials' );

// Output file directory:
var OUTPUT_DIR = path.resolve( __dirname, '..', 'data' );

// Regular expression to detect whether front matter is present:
var RE_FRONT_MATTER = /^---/;

// Regular expression to extract a tutorial name:
var RE_TUTORIAL_NAME = /^.*Tutorial:\s(.+)\\/;

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
* Filters a list of files for tutorial files.
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
* Saves a JSON database.
*
* @private
* @param {string} basename - base file name (excluding extension)
* @param {Object} json - JSON database
*/
function save( basename, json ) {
	var names;
	var fpath;
	var fopts;
	var keys;
	var csv;
	var row;
	var tmp;
	var o;
	var i;
	var j;
	var k;

	debug( 'Writing to JSON file.' );
	fopts = {
		'encoding': 'utf8'
	};
	fpath = path.join( OUTPUT_DIR, basename+'.json' );
	writeFile( fpath, JSON.stringify( json )+'\n', fopts );

	debug( 'Writing to CSV file.' );
	names = objectKeys( json );
	keys = objectKeys( json[ names[ 0 ] ] ); // Note: we assume each entry object has the same fields

	csv = '';
	for ( i = 0; i < names.length; i++ ) {
		o = json[ names[ i ] ];
		row = '';
		for ( j = 0; j < keys.length; j++ ) {
			k = keys[ j ];
			if ( k === 'text' ) {
				tmp = replace( o[ k ], /\r?\n/g, '\\n' );
				tmp = replace( tmp, '"', '\\"' );
			} else {
				tmp = o[ k ];
			}
			row += '"' + tmp + '"';
			if ( j < keys.length-1 ) {
				row += ',';
			}
		}
		csv += row + '\n'; // Note: ensures trailing newline
	}
	fpath = path.join( OUTPUT_DIR, basename+'.csv' );
	writeFile( fpath, csv, fopts );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
* @returns {void}
*/
function main() {
	var FRONT_MATTER;
	var files;
	var fpath;
	var ropts;
	var file;
	var name;
	var desc;
	var len;
	var tmp;
	var db;
	var fm;
	var p;
	var a;
	var l;
	var i;
	var j;
	var k;

	db = {};

	debug( 'Reading directory: %s', SRC_DIR );
	files = readDir( SRC_DIR );
	if ( files instanceof Error ) {
		debug( 'Encountered an error when attempting to read directory. Error: %s', files.message );
		console.error( 'Error: %s', files.message ); // eslint-disable-line no-console
		return;
	}
	debug( 'Filtering for tutorial files.' );
	files = filterFiles( files );
	len = files.length;
	if ( len === 0 ) {
		debug( 'Unable to resolve tutorial files.' );
		return;
	}
	debug( 'Found %d tutorial files.', len );

	ropts = {
		'encoding': 'utf8'
	};
	for ( i = 0; i < len; i++ ) {
		fpath = path.join( SRC_DIR, files[ i ] );
		debug( 'Attempting to read tutorial file: %s', fpath );

		file = readFile( fpath, ropts );
		if ( file instanceof Error ) {
			debug( 'Unable to read tutorial file.' );
			continue;
		}
		if ( RE_FRONT_MATTER.test( file ) ) {
			debug( 'Parsing front matter meta data.' );
			file = file.split( RE_EOL );
			fm = [];
			for ( j = 0; j < file.length; j++ ) {
				l = file[ j ];
				if ( RE_FRONT_MATTER.test( l ) ) {
					if ( FRONT_MATTER ) {
						FRONT_MATTER = false;
						break;
					}
					FRONT_MATTER = true;
				} else {
					// Find the first colon...
					for ( k = 0; k < l.length; k++ ) {
						if ( l[ k ] === ':' ) { // eslint-disable-line max-depth
							break;
						}
					}
					tmp = [];
					tmp.push( trim( l.slice( 0, k ) ) );
					tmp.push( trim( l.slice( k+1 ) ) );
					fm.push( tmp );
				}
			}
			fm = objectFromEntries( fm );
			name = fm.name;
			if ( name ) {
				name = replace( lowercase( trim( name ) ), /\s+/g, '_' );
				debug( 'Tutorial name: %s', name );
			} else {
				debug( 'Unable to resolve tutorial name.' );
				continue;
			}
			desc = fm.description || '';
			if ( desc ) {
				debug( 'Tutorial description: %s', desc );
			} else {
				debug( 'Unable to resolve tutorial description.' );
			}
			file = ltrim( file.slice( j+1 ).join( '\n' ) );
		} else {
			debug( 'Resolving tutorial name.' );
			name = file.match( RE_TUTORIAL_NAME );
			if ( name ) {
				name = replace( lowercase( trim( name[ 1 ] ) ), /\s+/g, '_' );
				debug( 'Tutorial name: %s', name );
			} else {
				debug( 'Unable to resolve tutorial name.' );
				continue;
			}
			desc = '';
			debug( 'Unable to resolve tutorial description.' );
		}
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
					console.warn( 'WARNING: unable to resolve alias `%s` for `%s`. ', p, files[ i ] ); // eslint-disable-line no-console
				} else {
					file = replace( file, tmp[ j ], a );
					debug( 'Resolved alias: %s => %s.', p, a );
				}
			}
		}
		debug( 'Successfully processed tutorial file.' );
		if ( hasOwnProp( db, name ) ) {
			debug( 'WARNING: duplicate tutorial name `%s`.', name );
		}
		db[ name ] = {
			'name': name,
			'text': file,
			'desc': desc
		};
	}

	debug( 'Saving tutorial database.' );
	save( 'tutorial', db );
}

main();
