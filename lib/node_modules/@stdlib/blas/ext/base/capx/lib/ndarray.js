/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// VARIABLES //

var M = 5;


// MAIN //

/**
* Adds a scalar constant to each element in a single-precision complex floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} alpha - scalar constant
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 ] );
*
* var alpha = new Complex64( 5.0, 0.0 );
*
* capx( 2, alpha, x, 2, 1 );
* // x => <Complex64Array>[ 1.0, -2.0, 8.0, -4.0, 5.0, -6.0, 12.0, -8.0 ]
*/
function capx( N, alpha, x, strideX, offsetX ) {
	var view;
	var re;
	var im;
	var ix;
	var sx;
	var m;
	var i;

	if ( N <= 0 ) {
		return x;
	}

	// Decompose the constant into its real and imaginary components:
	re = realf( alpha );
	im = imagf( alpha );
	if ( re === 0.0 && im === 0.0 ) {
		return x;
	}

	// Reinterpret the complex input array as a real-valued array:
	view = reinterpret( x, 0 );

	// Adjust the stride and offset according to the real-valued array:
	ix = offsetX * 2;
	sx = strideX * 2;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				view[ ix ] += re;
				view[ ix+1 ] += im;
				ix += sx;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			view[ ix ] += re;
			view[ ix+1 ] += im;
			view[ ix+2 ] += re;
			view[ ix+3 ] += im;
			view[ ix+4 ] += re;
			view[ ix+5 ] += im;
			view[ ix+6 ] += re;
			view[ ix+7 ] += im;
			view[ ix+8 ] += re;
			view[ ix+9 ] += im;
			ix += M * 2;
		}
		return x;
	}
	for ( i = 0; i < N; i++ ) {
		view[ ix ] += re;
		view[ ix+1 ] += im;
		ix += sx;
	}
	return x;
}


// EXPORTS //

module.exports = capx;
