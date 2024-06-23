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
var logger = require( 'debug' );
var objectKeys = require( '@stdlib/utils/keys' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var replace = require( '@stdlib/string/replace' );
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var aliases = require( '@stdlib/namespace/aliases' );
var help = require( '@stdlib/repl/help' );
var parse = require( '@stdlib/_tools/repl-txt/parse' );


// VARIABLES //

var debug = logger( 'repl:code-blocks:build' );

// Output file paths:
var OUTPUT_JSON = resolvePath( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolvePath( __dirname, '..', 'data', 'data.csv' );


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
* Main execution sequence.
*
* @private
*/
function main() {
	var alias;
	var fopts;
	var json;
	var keys;
	var code;
	var csv;
	var txt;
	var ast;
	var tmp;
	var ns;
	var s;
	var i;
	var j;
	var k;

	debug( 'Generating REPL examples.' );
	json = {};

	ns = aliases();
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
		debug( 'Generating examples for each documented interface...' );
		for ( j = 0; j < ast.length; j++ ) {
			tmp = ast[ j ].signature.name;
			debug( 'Interface: %s', tmp );
			if ( tmp.slice( 0, alias.length ) !== alias ) {
				debug( 'Interface is documented neither as the alias nor an associated method. Skipping...' );
				continue;
			}
			s = findSection( ast[ j ].sections, 'Examples' );
			if ( s === null ) {
				debug( 'Unable to resolve examples. Skipping...' );
				continue;
			}
			code = '';
			for ( k = 0; k < s.examples.length; k++ ) {
				code += s.examples[ k ].code + '\n';
			}
			if ( hasOwnProp( json, tmp ) ) {
				// Concatenate associated examples (e.g., same API, but multiple parameterizations based on argument types, etc):
				json[ tmp ] += code;
			} else {
				json[ tmp ] = code;
			}
			debug( 'Finished processing interface.' );
		}
		debug( 'Successfully processed `%s`.', alias );
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
		tmp = replace( json[ keys[i] ], /\r?\n/g, '\\n' );
		tmp = replace( tmp, '"', '\\"' );
		csv += keys[ i ] + ',"' + tmp + '"\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
