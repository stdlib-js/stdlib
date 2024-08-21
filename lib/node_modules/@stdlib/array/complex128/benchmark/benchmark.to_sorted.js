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
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var pkg = require( './../package.json' ).name;
var Complex128Array = require( './../lib' );


// FUNCTIONS //

/**
* Comparison function.
*
* @private
* @param {Complex128} a - first value for comparison
* @param {Complex128} b - second value for comparison
* @returns {number} comparison result
*/
function compareFcn( a, b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	re1 = real( a );
	re2 = real( b );
	if ( re1 < re2 ) {
		return -1;
	}
	if ( re1 > re2 ) {
		return 1;
	}
	im1 = imag( a );
	im2 = imag( b );
	if ( im1 < im2 ) {
		return -1;
	}
	if ( im1 > im2 ) {
		return 1;
	}
	return 0;
}


// MAIN //

bench( pkg+':toSorted', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.toSorted( compareFcn );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex128Array( out ) ) {
		b.fail( 'should return a Complex128Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
