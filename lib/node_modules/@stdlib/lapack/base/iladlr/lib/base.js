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
* Returns the index of the last non-zero row in a matrix `A`.
*
* ## Notes
*
* -   If provided an empty matrix or a matrix containing only zeros, the function returns `-1` (i.e., an invalid index).
*
* @private
* @param {PositiveInteger} M - number of rows in `A`
* @param {PositiveInteger} N - number of columns in `A`
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - index offset for `A`
* @returns {integer} index of the last non-zero row
*
* @example
* var Float64array = require( '@stdlib/array/float64' );
*
* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
*
* var out = iladlr( 3, 2, A, 2, 1, 0 );
* // returns 1
*
* @example
* var Float64array = require( '@stdlib/array/float64' );
*
* var A = new Float64array( [ 1.0, 3.0, 0.0, 2.0, 4.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
*
* var out = iladlr( 3, 2, A, 1, 3, 0 );
* // returns 1
*/
function iladlr( M, N, A, strideA1, strideA2, offsetA ) {
	var last;
	var da0;
	var da1;
	var S0;
	var S1;
	var ia;
	var i0;
	var i1;
	var k;

	// Check whether the matrix is an empty matrix...
	if ( M <= 0 || N <= 0 ) {
		return -1;
	}
	// Compute the index of the first element in the last row:
	ia = offsetA + ( (M-1) * strideA1 );

	// Compute the index offset for the last element in the last row:
	last = ( N-1 ) * strideA2;

	// Check for the common case where the first and last elements in the last row are non-zero...
	if ( A[ ia ] !== 0.0 || A[ ia+last ] !== 0.0 ) {
		return M - 1;
	}
	// Search for the last row containing at least one non-zero element...
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		S0 = N;
		S1 = M;

		// Resolve loop offset (pointer) increments:
		da0 = strideA2;
		da1 = strideA1 - ( S0*strideA2 );

		// Scan a row-major linear buffer from the last indexed element to the first indexed element, always moving in the same direction when both strides are the same sign, thus ensuring cache optimal traversal...
		ia += last;
		for ( i1 = S1-1; i1 >= 0; i1-- ) {
			for ( i0 = 0; i0 < S0; i0++ ) {
				if ( A[ ia ] !== 0.0 ) {
					// We found a row with a non-zero element!
					return i1;
				}
				ia -= da0;
			}
			ia -= da1;
		}
		// If we've made it here, then all entries in the matrix are zero:
		return -1;
	}
	// Column-major...
	S0 = M;
	S1 = N;

	// Resolve loop offset (pointer) increments:
	da0 = strideA1;
	da1 = strideA2;

	// Compute the index offset for the last element in each row:
	last = offsetA + ( (S0-1)*da0 );

	// Initialize an index of the last row in which a non-zero element was seen:
	k = -1;

	// Finding the last non-zero row when a matrix is stored in column-major order requires effectively performing a full linear scan. In order to ensure cache-efficient traversal, scan up each column (otherwise, if we went row-by-row, we'd hop around linear memory, resulting in poor cache behavior)...
	for ( i1 = 0; i1 < S1; i1++ ) {
		// Reset the pointer to point to the last element in the current column:
		ia = last + ( i1*da1 );

		// Scan up the rows in a column looking for a non-zero element...
		for ( i0 = S0-1; i0 > k; i0-- ) { // note: `k` serves as a lower row index bound, thus shrinking the number of rows we need to check when scanning columns
			if ( A[ ia ] !== 0.0 ) {
				// We found a non-zero element, which means we no longer have to search this row...
				k = i0;
				break; // note: in principle, if `k == M-1`, we could early return; however, this is a hot loop and adding an additional conditional is likely to degrade average performance in order to cater to what is effectively an edge case
			}
			ia -= da0;
		}
	}
	return k;
}


// EXPORTS //

module.exports = iladlr;
