/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array and assigns each result to an element in a single-precision floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - destination array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Function} fcn - unary function to apply
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( x.length );
*
* smap( x.length, x, 1, 0, y, 1, 0, scale );
*
* console.log( y );
* // => <Float32Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*/
function smap( N, x, strideX, offsetX, y, strideY, offsetY, fcn ) {
	var ix;
	var iy;
	var i;
	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		y[ iy ] = fcn( x[ ix ] );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = smap;
