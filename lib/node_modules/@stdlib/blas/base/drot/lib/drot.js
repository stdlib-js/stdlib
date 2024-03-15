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

// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* drot( x.length, x, 1, y, 1, 0.8, 0.6 );
* // x => <Float64Array>[ ~4.4, ~5.8, 7.2, 8.6, 10.0 ]
* // y => <Float64Array>[ ~4.2, 4.4, 4.6, 4.8, 5.0 ]
*/
function drot( N, x, strideX, y, strideY, c, s ) {
	var tmp;
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	// If both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		for ( i = 0; i < N; i++ ) {
			tmp = ( c * x[ i ] ) + ( s * y[ i ] );
			y[ i ] = ( c * y[ i ] ) - ( s * x[ i ] );
			x[ i ] = tmp;
		}
		return y;
	}
	// If both strides are not equal to `1`...
	if ( strideX < 0 ) {
		ix = ( 1 - N ) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = ( 1 - N ) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		tmp = ( c * x[ ix ] ) + ( s * y[ iy ] );
		y[ iy ] = ( c * y[ iy ] ) - ( s * x[ ix ] );
		x[ ix ] = tmp;
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = drot;
