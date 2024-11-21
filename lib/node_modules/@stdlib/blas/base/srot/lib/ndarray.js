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

var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* srot( 2, x, 2, 2, y, 2, 2, 0.8, 0.6 );
* // x => <Float32Array>[ 1.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
* // y => <Float32Array>[ 7.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
*/
function srot( N, x, strideX, offsetX, y, strideY, offsetY, c, s ) {
	var tmp;
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	c = f32( c );
	s = f32( s );
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		tmp = f32( c * x[ ix ] ) + f32( s * y[ iy ] );
		y[ iy ] = f32( c * y[ iy ] ) - f32( s * x[ ix ] );
		x[ ix ] = tmp;
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = srot;
