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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the dot product of `x` and `y`.
*
* @param {PositiveInteger} N - number of values over which to compute the dot product
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {number} dot product of `x` and `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdot( x.length, x, 1, y, 1 );
* // returns -5.0
*/
function sdot( N, x, strideX, y, strideY ) {
	var dot;
	var ix;
	var iy;
	var i;

	dot = 0.0;
	if ( N <= 0 ) {
		return dot;
	}
	if ( strideX < 0 ) {
		ix = ( 1-N ) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = ( 1-N ) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		dot = float64ToFloat32( dot + float64ToFloat32( x[ ix ] * y[ iy ] ) );
		ix += strideX;
		iy += strideY;
	}
	return dot;
}


// EXPORTS //

module.exports = sdot;
