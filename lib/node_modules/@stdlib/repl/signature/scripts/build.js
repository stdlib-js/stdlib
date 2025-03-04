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
var aliases = require( '@stdlib/namespace/aliases' );
var help = require( '@stdlib/repl/help' );
var parse = require( '@stdlib/_tools/repl-txt/parse' );


// VARIABLES //

var debug = logger( 'repl:signature:build' );

// Output file paths:
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );


// FUNCTIONS //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var alias;
	var fopts;
	var json;
	var tmp;
	var csv;
	var txt;
	var ns;
	var t;
	var i;
	var j;

	debug( 'Generating REPL alias signatures.' );
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
		debug( 'Generating signatures for each documented interface...' );
		for ( j = 0; j < txt.length; j++ ) {
			t = txt[ j ].signature;
			debug( 'Interface: %s', t );
			if ( t.name.slice( 0, alias.length ) !== alias ) {
				debug( 'Interface is documented neither as the alias nor an associated method. Skipping...' );
				continue;
			}
			t = [ t.name, t.raw ];
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
