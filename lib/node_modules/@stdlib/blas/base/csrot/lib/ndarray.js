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
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );


// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex64Array} `y`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* csrot( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6 );
* // x => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
* // y => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
*/
function csrot( N, x, strideX, offsetX, y, strideY, offsetY, c, s ) {
	var viewX;
	var viewY;
	var tmp;
	var sx;
	var sy;
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	viewX = reinterpret( x, 0 );
	viewY = reinterpret( y, 0 );
	c = f32( c );
	s = f32( s );
	sx = strideX * 2;
	sy = strideY * 2;
	ix = offsetX * 2;
	iy = offsetY * 2;
	for ( i = 0; i < N; i++ ) {
		tmp = f32( c*viewX[ ix ] ) + f32( s*viewY[ iy ] );
		viewY[ iy ] = f32( c*viewY[ iy ] ) - f32( s*viewX[ ix ] );
		viewX[ ix ] = tmp;

		tmp = f32( c*viewX[ ix+1 ] ) + f32( s*viewY[ iy+1 ] );
		viewY[ iy+1 ] = f32( c*viewY[ iy+1 ] ) - f32( s*viewX[ ix+1 ] );
		viewX[ ix+1 ] = tmp;

		ix += sx;
		iy += sy;
	}
	return y;
}


// EXPORTS //

module.exports = csrot;
