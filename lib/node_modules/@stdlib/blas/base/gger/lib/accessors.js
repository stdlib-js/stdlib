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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );


// MAIN //

/**
* Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.
*
* @private
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Object} x - first input vector object
* @param {Collection} x.data - first input vector data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - second input vector object
* @param {Collection} y.data - second input vector data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Object} A - output matrix object
* @param {Collection} A.data - output matrix data
* @param {Array<Function>} A.accessors - array element accessors
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var x = [ 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* gger( 2, 3, 1.0, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0, arraylike2object( toAccessorArray( A ) ), 3, 1, 0 );
* // A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
function gger( M, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-params, max-len
	var getX;
	var getY;
	var getA;
	var setA;
	var xbuf;
	var ybuf;
	var Abuf;
	var tmp;
	var da0;
	var da1;
	var S0;
	var S1;
	var sx;
	var sy;
	var ia;
	var ix;
	var iy;
	var i0;
	var i1;
	var v;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;
	Abuf = A.data;

	// Cache references to element accessors:
	getX = x.accessors[ 0 ];
	getY = y.accessors[ 0 ];
	getA = A.accessors[ 0 ];
	setA = A.accessors[ 1 ];

	// Note on variable naming convention: S#, da#, ia#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		S0 = N;
		S1 = M;
		da0 = strideA2;                   // offset increment for innermost loop
		da1 = strideA1 - ( S0*strideA2 ); // offset increment for outermost loop

		// Swap the vectors...
		tmp = xbuf;
		xbuf = ybuf;
		ybuf = tmp;

		tmp = strideX;
		strideX = strideY;
		strideY = tmp;

		tmp = offsetX;
		offsetX = offsetY;
		offsetY = tmp;
	} else { // order === 'column-major'
		// For column-major matrices, the first dimension has the fastest changing index...
		S0 = M;
		S1 = N;
		da0 = strideA1;                   // offset increment for innermost loop
		da1 = strideA2 - ( S0*strideA1 ); // offset increment for outermost loop
	}
	sx = strideX;
	sy = strideY;
	ix = offsetX;
	iy = offsetY;
	ia = offsetA;
	for ( i1 = 0; i1 < S1; i1++ ) {
		// Check whether we can avoid the inner loop entirely...
		if ( getY( ybuf, iy ) === 0.0 ) {
			ia += da0 * S0;
		} else {
			tmp = alpha * getY( ybuf, iy );
			ix = offsetX;
			for ( i0 = 0; i0 < S0; i0++ ) {
				v = getX( xbuf, ix ) * tmp;
				setA( Abuf, ia, getA( Abuf, ia ) + v );
				ix += sx;
				ia += da0;
			}
		}
		iy += sy;
		ia += da1;
	}
	return A;
}


// EXPORTS //

module.exports = gger;
