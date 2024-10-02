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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// VARIABLES //

var M = 8;


// MAIN //

/**
* Fills a double-precision complex floating-point strided array with a specified scalar constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {ComplexLike} alpha - scalar constant
* @param {Complex128Array} x - input array
* @param {integer} strideX - index increment
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex128Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var x = new Complex128Array( arr );
*
* var alpha = new Complex128( 10.0, 10.0 );
*
* zfill( x.length, alpha, x, 1, 0 );
*
* var y = x.get( 0 );
* // returns <Complex128>
*
* var re = real( y );
* // returns 10.0
*
* var im = imag( y );
* // returns 10.0
*/
function zfill( N, alpha, x, strideX, offsetX ) {
	var view;
	var re;
	var im;
	var ix;
	var m;
	var i;

	if ( N <= 0 ) {
		return x;
	}

	// Decompose the constant into its real and imaginary components:
	re = real( alpha );
	im = imag( alpha );

	// Reinterpret the complex input array as a real-valued array:
	view = reinterpret( x, 0 );

	// Adjust the stride and offset according to real-valued array:
	ix = offsetX * 2;
	strideX *= 2;

	// Use loop unrolling if the stride is equal to `2`...
	if ( strideX === 2 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				view[ ix ] = re;
				view[ ix+1 ] = im;
				ix += strideX;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			view[ ix ] = re;
			view[ ix+1 ] = im;
			view[ ix+2 ] = re;
			view[ ix+3 ] = im;
			view[ ix+4 ] = re;
			view[ ix+5 ] = im;
			view[ ix+6 ] = re;
			view[ ix+7 ] = im;
			view[ ix+8 ] = re;
			view[ ix+9 ] = im;
			view[ ix+10 ] = re;
			view[ ix+11 ] = im;
			view[ ix+12 ] = re;
			view[ ix+13 ] = im;
			view[ ix+14 ] = re;
			view[ ix+15 ] = im;
			ix += M * 2;
		}
		return x;
	}
	for ( i = 0; i < N; i++ ) {
		view[ ix ] = re;
		view[ ix+1 ] = im;
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = zfill;
