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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// FUNCTIONS //

/**
* Reducer function.
*
* @private
* @param {integer} acc - accumulated value
* @param {number} value - current array element
* @param {integer} index - current array index
* @returns {integer} accumulated value
*/
function reducer( acc, value ) {
	if ( value ) {
		return acc + 1;
	}
	return acc;
}


// MAIN //

bench( pkg+':reduce', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Float64ArrayFE( 'little-endian', [ 1.0, 0.0, 0.0, 1.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.reduce( reducer, 0 );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
