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

#include "stdlib/blas/ext/base/dsorthp.h"
#include "stdlib/math/base/assert/is_positive_zero.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Sorts a double-precision floating-point strided array using heapsort.
*
* ## Notes
*
* -   This implementation uses an in-place algorithm derived from the work of Floyd (1964).
*
* ## References
*
* -   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284](https://doi.org/10.1145/512274.512284).
* -   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103](https://doi.org/10.1145/355588.365103).
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_dsorthp)( const CBLAS_INT N, const double order, double *X, const CBLAS_INT strideX) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dsorthp_ndarray)( N, order, X, strideX, ox );
}

/**
* Sorts a double-precision floating-point strided array using heapsort and alternative indexing semantics.
*
* ## Notes
*
* -   This implementation uses an in-place algorithm derived from the work of Floyd (1964).
*
* ## References
*
* -   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284](https://doi.org/10.1145/512274.512284).
* -   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103](https://doi.org/10.1145/355588.365103).
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dsorthp_ndarray)( const CBLAS_INT N, const double order, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT parent;
	CBLAS_INT child;
	CBLAS_INT ox;
	CBLAS_INT sx;
	CBLAS_INT n;
	CBLAS_INT i;
	CBLAS_INT j;
	CBLAS_INT k;
	double v1;
	double v2;
	double t;

	if ( N <= 0 || order == 0.0 ) {
		return;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		sx = -strideX;
		ox = offsetX - ( (N-1)*sx );
	} else {
		sx = strideX;
		ox = offsetX;
	}
	// Set the initial heap size:
	n = N;

	// Specify an initial "parent" index for building the heap:
	parent = N / 2;

	// Continue looping until the array is sorted...
	while ( true ) {
		if ( parent > 0 ) {
			// We need to build the heap...
			parent -= 1;
			t = X[ ox+(parent*sx) ];
		} else {
			// Reduce the heap size:
			n -= 1;

			// Check if the heap is empty, and, if so, we are finished sorting...
			if ( n == 0 ) {
				return;
			}
			// Store the last heap value in a temporary variable in order to make room for the heap root being placed into its sorted position:
			i = ox + (n*sx);
			t = X[ i ];

			// Move the heap root to its sorted position:
			X[ i ] = X[ ox ];
		}
		// We need to "sift down", pushing `t` down the heap to in order to replace the parent and satisfy the heap property...

		// Start at the parent index:
		j = parent;

		// Get the "left" child index:
		child = (j*2) + 1;

		while ( child < n ) {
			// Find the largest child...
			k = child + 1;
			if ( k < n ) {
				v1 = X[ ox+(k*sx) ];
				v2 = X[ ox+(child*sx) ];

				// Check if a "right" child exists and is "bigger"...
				if ( v1 > v2 || stdlib_base_is_nan( v1 ) || (v1 == v2 && stdlib_base_is_positive_zero( v1 ) ) ) {
					child += 1;
				}
			}
			// Check if the largest child is bigger than `t`...
			v1 = X[ ox+(child*sx) ];
			if ( v1 > t || stdlib_base_is_nan( v1 ) || ( v1 == t && stdlib_base_is_positive_zero( v1 ) ) ) {
				// Insert the larger child value:
				X[ ox+(j*sx) ] = v1;

				// Update `j` to point to the child index:
				j = child;

				// Get the "left" child index and repeat...
				child = (j*2) + 1;
			} else {
				// We've found `t`'s place in the heap...
				break;
			}
		}
		// Insert `t` into the heap:
		X[ ox+(j*sx) ] = t;
	}
}
