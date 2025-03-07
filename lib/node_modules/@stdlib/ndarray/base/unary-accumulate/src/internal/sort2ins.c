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

#include "stdlib/ndarray/base/unary-accumulate/internal/sort2ins.h"
#include <stdint.h>

/**
* Simultaneously sorts two arrays based on the sort order of the first array using insertion sort.
*
* ## Notes
*
* -   The first array is sorted in increasing order according to absolute value.
* -   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
* -   The algorithm is efficient for small arrays (typically `N <= 20``) and is particularly efficient for sorting arrays which are already substantially sorted.
* -   The algorithm is **stable**, meaning that the algorithm does **not** change the order of array elements which are equal or equivalent.
* -   The input arrays are sorted in-place (i.e., the input arrays are mutated).
*
* @param n   number of elements
* @param x   first array
* @param y   second array
*/
void stdlib_ndarray_base_unary_accumulate_internal_sort2ins( const int64_t n, int64_t *x, int64_t *y ) {
	int64_t avx;
	int64_t aux;
	int64_t ix;
	int64_t iy;
	int64_t jx;
	int64_t jy;
	int64_t vx;
	int64_t vy;
	int64_t ux;
	int64_t i;

	ix = 1;
	iy = 1;

	// Sort in increasing order...
	for ( i = 1; i < n; i++ ) {
		vx = x[ ix ];
		avx = ( vx < 0 ) ? -vx : vx;

		vy = y[ iy ];

		jx = ix - 1;
		jy = iy - 1;

		// Shift all larger values to the left of the current element to the right...
		while ( jx >= 0 ) {
			ux = x[ jx ];
			aux = ( ux < 0 ) ? -ux : ux;
			if ( aux <= avx ) {
				break;
			}
			x[ jx+1 ] = ux;
			y[ jy+1 ] = y[ jy ];
			jx -= 1;
			jy -= 1;
		}
		x[ jx+1 ] = vx;
		y[ jy+1 ] = vy;
		ix += 1;
		iy += 1;
	}
}
