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
var objectKeys = require( '@stdlib/utils/keys' );
var replace = require( '@stdlib/string/replace' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var aliases = require( '@stdlib/namespace/aliases' );
var help = require( '@stdlib/repl/help' );
var parse = require( '@stdlib/_tools/repl-txt/parse' );
var node2info = require( '@stdlib/_tools/repl-txt/abridge' );


// VARIABLES //

var debug = logger( 'repl:info:build' );

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
	var keys;
	var tmp;
	var csv;
	var txt;
	var ast;
	var ns;
	var t;
	var i;
	var j;

	debug( 'Generating abbreviated REPL help documentation.' );
	ns = aliases();

	json = {};
	for ( i = 0; i < ns.length; i++ ) {
		alias = ns[ i ];
		debug( 'Resolving the REPL help documentation for alias: %s', alias );
		txt = help( alias );
		if ( txt === null ) {
			debug( 'Unable to resolve REPL help documentation. Skipping...', alias );
			continue;
		}
		debug( 'Successfully resolved REPL help documentation. Generating AST...' );
		ast = parse( txt );

		debug( 'Number of documented interfaces: %d', ast.length );
		debug( 'Generating abbreviated help for each documented interface...' );
		for ( j = 0; j < ast.length; j++ ) {
			t = ast[ j ].signature.name;
			debug( 'Interface: %s', t );
			if ( t.slice( 0, alias.length ) !== alias ) {
				debug( 'Interface is documented neither as the alias nor an associated method. Skipping...' );
				continue;
			}
			if ( hasOwnProp( json, t ) ) {
				json[ t ] += node2info( ast[ j ] );
			} else {
				json[ t ] = node2info( ast[ j ] );
			}
			debug( 'Finished processing interface.' );
		}
	}
	debug( 'Writing to JSON file.' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( json )+'\n', fopts );

	debug( 'Writing to CSV file.' );
	keys = objectKeys( json );
	csv = '';
	for ( i = 0; i < keys.length; i++ ) {
		tmp = replace( json[ keys[ i ] ], /\r?\n/g, '\\n' );
		tmp = replace( tmp, '"', '\\"' );
		csv += keys[ i ] + ',"' + tmp + '"\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
