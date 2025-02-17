/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var pkg = require( './../package.json' ).name;
var indicesComplement = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ 0, 1 ],
		[ 0, 1, 2, 3 ],
		[ 0 ],
		[],
		[ 3, 4 ],
		[ 1, 3, 4 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = indicesComplement( 5, values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array of nonnegative integers' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
