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

var resolve = require( 'path' ).resolve;
var logger = require( 'debug' );
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var pluck = require( '@stdlib/utils/pluck' );
var contains = require( '@stdlib/assert/contains' );
var aliases = require( '@stdlib/namespace/aliases' );
var help = require( '@stdlib/repl/help' );
var parse = require( '@stdlib/_tools/repl-txt/parse' );
var signature2typed = require( '@stdlib/_tools/repl-txt/typed-signature' );


// VARIABLES //

var debug = logger( 'repl:typed-signature:build' );

// Output file paths:
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );


// FUNCTIONS //

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
* Filters section tag objects (nodes) based on a list of provided tag names.
*
* @private
* @param {ObjectArray} tags - list of tag objects
* @param {Array} names - list of tag names
* @returns {Array} filtered array
*/
function filterTags( tags, names ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < tags.length; i++ ) {
		if ( contains( names, tags[ i ].name ) ) {
			out.push( tags[ i ] );
		}
	}
	return out;
}

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var alias;
	var fopts;
	var json;
	var tags;
	var tmp;
	var csv;
	var txt;
	var sig;
	var ns;
	var s;
	var t;
	var i;
	var j;

	debug( 'Generating REPL typed signatures.' );
	ns = aliases();

	// Why an array? In order to support multiple signatures for the same interface (e.g., `Uint32Array`, etc). Up to consumer to determine which signature is most appropriate.
	json = [];

	for ( i = 0; i < ns.length; i++ ) {
		alias = ns[ i ];
		debug( 'Resolving the REPL help documentation for alias: %s', alias );
		txt = help( alias );
		if ( txt === null ) {
			debug( 'Unable to resolve REPL help documentation. Skipping...', ns[ i ] );
			continue;
		}
		debug( 'Successfully resolved REPL help documentation. Generating AST...' );
		txt = parse( txt );

		debug( 'Number of documented interfaces: %d', txt.length );
		debug( 'Generating typed signatures for each documented interface...' );
		for ( j = 0; j < txt.length; j++ ) {
			t = txt[ j ].signature;
			debug( 'Interface: %s', t );
			if ( t.name.slice( 0, alias.length ) !== alias ) {
				debug( 'Interface is documented neither as the alias nor an associated method. Skipping...' );
				continue;
			}
			sig = t.raw;
			if ( sig.length === t.name.length ) {
				debug( 'Interface is not documented as a function.' );
			} else {
				s = findSection( txt[ j ].sections, 'Parameters' );
				if ( s ) {
					// Note: number of tags may not match the number of signature parameters, as the parameters section may also document option properties, etc.
					tags = filterTags( s.tags, pluck( t.parameters, 'name' ) );

					debug( 'Resolving interface signature.' );
					sig = signature2typed( sig, tags );
				}
			}
			t = [ t.name, sig ];
			json.push( t );
			debug( 'Finished processing interface.' );
		}
	}
	debug( 'Writing to JSON file.' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( json )+'\n', fopts );

	debug( 'Writing to CSV file.' );
	csv = '';
	for ( i = 0; i < json.length; i++ ) {
		tmp = replace( json[ i ][ 1 ], /\r?\n/g, '\\n' );
		tmp = replace( tmp, '"', '\\"' );
		csv += json[ i ][ 0 ] + ',"' + tmp + '"\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
