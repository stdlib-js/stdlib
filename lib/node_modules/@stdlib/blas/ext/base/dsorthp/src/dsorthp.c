/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
#include <stdint.h>
#include <math.h>

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
* @param N       number of indexed elements
* @param order   sort order
* @param X       input array
* @param stride  index increment
*/
void c_dsorthp( const int64_t N, const double order, double *X, const int64_t stride ) {
	int64_t offset;
	int64_t parent;
	int64_t child;
	int64_t sx;
	int64_t n;
	int64_t i;
	int64_t j;
	int64_t k;
	double v1;
	double v2;
	double t;

	if ( N <= 0 || order == 0.0 ) {
		return;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		sx = -stride;
	} else {
		sx = stride;
	}
	if ( sx < 0 ) {
		offset = (1-N) * sx;
	} else {
		offset = 0;
	}
	// Set the initial heap size:
	n = N;

	// Specify an initial "parent" index for building the heap:
	parent = floor( N / 2 );

	// Continue looping until the array is sorted...
	while ( true ) {
		if ( parent > 0 ) {
			// We need to build the heap...
			parent -= 1;
			t = X[ offset+(parent*sx) ];
		} else {
			// Reduce the heap size:
			n -= 1;

			// Check if the heap is empty, and, if so, we are finished sorting...
			if ( n == 0 ) {
				return;
			}
			// Store the last heap value in a temporary variable in order to make room for the heap root being placed into its sorted position:
			i = offset + (n*sx);
			t = X[ i ];

			// Move the heap root to its sorted position:
			X[ i ] = X[ offset ];
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
				v1 = X[ offset+(k*sx) ];
				v2 = X[ offset+(child*sx) ];

				// Check if a "right" child exists and is "bigger"...
				if ( v1 > v2 || stdlib_base_is_nan( v1 ) || (v1 == v2 && stdlib_base_is_positive_zero( v1 ) ) ) {
					child += 1;
				}
			}
			// Check if the largest child is bigger than `t`...
			v1 = X[ offset+(child*sx) ];
			if ( v1 > t || stdlib_base_is_nan( v1 ) || ( v1 == t && stdlib_base_is_positive_zero( v1 ) ) ) {
				// Insert the larger child value:
				X[ offset+(j*sx) ] = v1;

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
		X[ offset+(j*sx) ] = t;
	}
}
