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
* ## Notes
*
* -   To help motivate the use of loop interchange below, we first recognize that a matrix stored in row-major order is equivalent to storing the matrix's transpose in column-major order. For example, consider the following 2-by-3 matrix `A`
*
*     ```tex
*     A = \begin{bmatrix}
*         1 & 2 & 3 \\
*         4 & 5 & 6
*         \end{bmatrix}
*     ```
*
*     When stored in a linear buffer in column-major order, `A` becomes
*
*     ```text
*     [ 1 4 2 5 3 6]
*     ```
*
*     When stored in a linear buffer in row-major order, `A` becomes
*
*     ```text
*     [ 1 2 3 4 5 6]
*     ```
*
*     Now consider the transpose of `A`
*
*     ```tex
*     A^T = \begin{bmatrix}
*         1 & 4 \\
*         2 & 5 \\
*         3 & 6
*         \end{bmatrix}
*     ```
*
*     When the transpose is stored in a linear buffer in column-major order, the transpose becomes
*
*     ```text
*     [ 1 2 3 4 5 6 ]
*     ```
*
*     Similarly, when stored in row-major order, the transpose becomes
*
*     ```text
*     [ 1 4 2 5 3 6 ]
*     ```
*
*     As may be observed, `A` stored in column-major order is equivalent to storing the transpose of `A` in row-major order, and storing `A` in row-major order is equivalent to storing the transpose of `A` in column-major order, and vice versa.
*
*     Hence, we can interpret an `M` by `N` row-major matrix `B` as the matrix `A^T` stored in column-major order. In which case, we can derive an update equation for `B` as follows:
*
*     ```tex
*     \begin{align*}
*     B &= A^T \\
*       &= (\alpha \bar{x} \bar{y}^T + A)^T \\
*       &= (\alpha \bar{x} \bar{y}^T)^T + A^T \\
*       &= \alpha (\bar{x} \bar{y}^T)^T + A^T \\
*       &= \alpha \bar{y} \bar{x}^T + A^T \\
*       &= \alpha \bar{y} \bar{x}^T + B
*     \end{align*}
*     ```
*
*     Accordingly, we can reuse the same loop logic for column-major and row-major `A` by simply swapping `x` and `y` and `M` and `N` when `A` is row-major order. That is the essence of loop interchange.
*
* @private
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Float32Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float32Array( [ 1.0, 1.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
*
* sger( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
* // A => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
function sger( M, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-params, max-len
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

	// Note on variable naming convention: S#, da#, ia#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		S0 = N;
		S1 = M;
		da0 = strideA2;                   // offset increment for innermost loop
		da1 = strideA1 - ( S0*strideA2 ); // offset increment for outermost loop

		// Swap the vectors...
		tmp = x;
		x = y;
		y = tmp;

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
		if ( y[ iy ] === 0.0 ) {
			ia += da0 * S0;
		} else {
			tmp = alpha * y[ iy ];
			ix = offsetX;
			for ( i0 = 0; i0 < S0; i0++ ) {
				A[ ia ] += x[ ix ] * tmp;
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

module.exports = sger;
