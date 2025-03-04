/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// MAIN //

/**
* Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} y - destination array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Function} fcn - unary function to apply
* @returns {Complex64Array} `y`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* function scale( x ) {
*     var re = real( x );
*     var im = imag( x );
*     return new Complex64( re*10.0, im*10.0 );
* }
*
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
* var y = new Complex64Array( x.length );
*
* cmap( x.length, x, 1, 0, y, 1, 0, scale );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 10.0
*/
function cmap( N, x, strideX, offsetX, y, strideY, offsetY, fcn ) {
	var ix;
	var iy;
	var i;
	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		y.set( fcn( x.get( ix ) ), iy );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = cmap;
