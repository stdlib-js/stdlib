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

#include "stdlib/blas/ext/base/ssortins.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Sorts a single-precision floating-point strided array using insertion sort.
*
* @param N       number of indexed elements
* @param order   sort order
* @param X       input array
* @param stride  index increment
*/
void c_ssortins( const int64_t N, const float order, float *X, const int64_t stride ) {
	int64_t ix;
	int64_t jx;
	int64_t fx;
	int64_t lx;
	int64_t sx;
	int64_t i;
	bool flg;
	float v;
	float u;

	if ( N <= 0 || order == 0.0f ) {
		return;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0f ) {
		sx = -stride;
	} else {
		sx = stride;
	}
	if ( sx < 0 ) {
		// Traverse the strided array from right-to-left...
		fx = (1-N) * sx; // first index
		lx = 0;          // last index
		ix = fx + sx;

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			v = X[ ix ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( stdlib_base_is_nanf( v ) ) {
				jx = ix;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					X[ jx ] = X[ jx+sx ];
					jx += sx;
				}
				X[ lx ] = v;
			} else {
				flg = stdlib_base_is_negative_zerof( v );
				jx = ix - sx;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					u = X[ jx ];
					if ( u <= v && !(flg && u == v && !stdlib_base_is_negative_zerof( u )) ) { // Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					X[ jx+sx ] = u;
					jx -= sx;
				}
				X[ jx+sx ] = v;
				ix += sx;
			}
		}
		return;
	}
	// Traverse the strided array from left-to-right...
	fx = 0;          // first index
	lx = (N-1) * sx; // last index
	ix = fx + sx;

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		v = X[ ix ];

		// Sort `NaN` values to the end...
		if ( stdlib_base_is_nanf( v ) ) {
			jx = ix;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				X[ jx ] = X[ jx+sx ];
				jx += sx;
			}
			X[ lx ] = v;
		} else {
			flg = stdlib_base_is_negative_zerof( v );
			jx = ix - sx;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				u = X[ jx ];
				if ( u <= v && !(flg && u == v && !stdlib_base_is_negative_zerof( u )) ) { // Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				X[ jx+sx ] = u;
				jx -= sx;
			}
			X[ jx+sx ] = v;
			ix += sx;
		}
	}
	return;
}
