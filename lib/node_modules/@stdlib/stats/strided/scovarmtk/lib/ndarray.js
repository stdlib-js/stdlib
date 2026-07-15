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

var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the covariance of two single-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {number} meanx - mean of `x`
* @param {Float32Array} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {NonNegativeInteger} offsetX - starting index of `x`
* @param {number} meany - mean of `y`
* @param {Float32Array} y - second input array
* @param {integer} strideY - stride length of `y`
* @param {NonNegativeInteger} offsetY - starting index of `y`
* @returns {number} covariance
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = scovarmtk( 4, 1, 1.25, x, 2, 1, 1.25, x, 2, 1 );
* // returns 6.25
*/
function scovarmtk( N, correction, meanx, x, strideX, offsetX, meany, y, strideY, offsetY ) { // eslint-disable-line max-len
	var ix;
	var iy;
	var C;
	var n;
	var i;

	// "Cast" input values to single-precision:
	correction = f32( correction );
	meanx = f32( meanx );
	meany = f32( meany );

	n = f32( f32( N ) - correction );
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	ix = offsetX;
	iy = offsetY;
	C = 0.0;
	for ( i = 0; i < N; i++ ) {
		C = f32( C + f32( f32( x[ ix ] - meanx ) * f32( y[ iy ] - meany ) ) );
		ix += strideX;
		iy += strideY;
	}
	return f32( C / n );
}


// EXPORTS //

module.exports = scovarmtk;
