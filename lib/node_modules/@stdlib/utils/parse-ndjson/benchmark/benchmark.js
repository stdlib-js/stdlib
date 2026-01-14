/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var parseNDJSON = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var str;
	var out;
	var i;
	var j;

	b.tic();

	for ( i = 0; i < b.iterations; i++ ) {
		// Generate an NDJSON string with a changing property key in each line:
		str = '{"beep":"boop","'+fromCodePoint( 97 + (i%26) ) + '":true}\n{"example":' + i + '}';
		out = parseNDJSON( str );

		if ( out !== out ) {
			b.fail( 'should return an array of JSON objects' );
		}
	}

	b.toc();

	for ( j = 0; j < out.length; j++ ) {
		if ( out[j] instanceof Error ) {
			b.fail( 'should return an array of JSON objects' );
		}
	}

	b.pass( 'benchmark finished' );
	b.end();
});

// TODO: Add benchmarks with different sized NDJSON strings
