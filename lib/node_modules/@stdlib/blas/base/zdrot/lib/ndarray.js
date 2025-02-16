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


// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - first input array
* @param {integer} strideX - `zx` stride length
* @param {NonNegativeInteger} offsetX - starting `zx` index
* @param {Complex128Array} zy - second input array
* @param {integer} strideY - `zy` stride length
* @param {NonNegativeInteger} offsetY - starting `zy` index
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex128Array} `zy`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zdrot( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
* // zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
* // zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
*/
function zdrot( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s ) {
	var viewX;
	var viewY;
	var tmp;
	var sx;
	var sy;
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return zy;
	}
	viewX = reinterpret( zx, 0 );
	viewY = reinterpret( zy, 0 );
	sx = strideX * 2;
	sy = strideY * 2;
	ix = offsetX * 2;
	iy = offsetY * 2;
	for ( i = 0; i < N; i++ ) {
		tmp = ( c*viewX[ ix ] ) + ( s*viewY[ iy ] );
		viewY[ iy ] = ( c*viewY[ iy ] ) - ( s*viewX[ ix ] );
		viewX[ ix ] = tmp;

		tmp = ( c*viewX[ ix+1 ] ) + ( s*viewY[ iy+1 ] );
		viewY[ iy+1 ] = ( c*viewY[ iy+1 ] ) - ( s*viewX[ ix+1 ] );
		viewX[ ix+1 ] = tmp;

		ix += sx;
		iy += sy;
	}
	return zy;
}


// EXPORTS //

module.exports = zdrot;
