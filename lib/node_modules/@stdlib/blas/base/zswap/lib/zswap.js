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
* Interchanges two complex double-precision floating-point vectors.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {Complex128Array} `y`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* zswap( x.length, x, 1, y, 1 );
*
* var z = y.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*
* z = x.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns 7.0
*
* im = imag( z );
* // returns 8.0
*/
function zswap( N, x, strideX, y, strideY ) {
	var viewX;
	var viewY;
	var tmp;
	var sx;
	var sy;
	var ix;
	var iy;
	var i;
	var j;

	if ( N <= 0 ) {
		return y;
	}
	viewX = reinterpret( x, 0 );
	viewY = reinterpret( y, 0 );
	if ( strideX === 1 && strideY === 1 ) {
		for ( i = 0; i < N*2; i += 2 ) {
			tmp = viewX[ i ];
			viewX[ i ] = viewY[ i ];
			viewY[ i ] = tmp;

			j = i + 1;
			tmp = viewX[ j ];
			viewX[ j ] = viewY[ j ];
			viewY[ j ] = tmp;
		}
		return y;
	}
	if ( strideX < 0 ) {
		ix = 2 * ( 1-N ) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = 2 * ( 1-N ) * strideY;
	} else {
		iy = 0;
	}
	sx = strideX * 2;
	sy = strideY * 2;
	for ( i = 0; i < N; i++ ) {
		tmp = viewX[ ix ];
		viewX[ ix ] = viewY[ iy ];
		viewY[ iy ] = tmp;

		tmp = viewX[ ix+1 ];
		viewX[ ix+1 ] = viewY[ iy+1 ];
		viewY[ iy+1 ] = tmp;

		ix += sx;
		iy += sy;
	}
	return y;
}


// EXPORTS //

module.exports = zswap;
