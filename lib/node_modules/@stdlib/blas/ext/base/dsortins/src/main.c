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

#include "stdlib/blas/ext/base/dsortins.h"
#include "stdlib/math/base/assert/is_negative_zero.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Sorts a double-precision floating-point strided array using insertion sort.
*
* @param N       number of indexed elements
* @param order   sort order
* @param X       input array
* @param strideX index increment
*/
void API_SUFFIX(stdlib_strided_dsortins)( const CBLAS_INT N, const double order, double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dsortins_ndarray)( N, order, X, strideX, ox );
}

/**
* Sorts a double-precision floating-point strided array using insertion sort and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        input array
* @param strideX  index increment
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dsortins_ndarray)( const CBLAS_INT N, const double order, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT jx;
	CBLAS_INT fx;
	CBLAS_INT lx;
	CBLAS_INT sx;
	CBLAS_INT ox;
	CBLAS_INT i;
	double v;
	double u;
	bool flg;

	if ( N <= 0 || order == 0.0 ) {
		return;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		sx = -strideX;
		ox = offsetX - ( (N-1) * sx );
	} else {
		sx = strideX;
		ox = offsetX;
	}
	fx = ox;
	lx = fx + ( (N-1) * sx );
	ix = fx + sx;
	if ( sx < 0 ) {
		// Traverse the strided array from right-to-left...

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			v = X[ ix ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( stdlib_base_is_nan( v ) ) {
				jx = ix;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					X[ jx ] = X[ jx+sx ];
					jx += sx;
				}
				X[ lx ] = v;
			} else {
				flg = stdlib_base_is_negative_zero( v );
				jx = ix - sx;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					u = X[ jx ];
					if ( u <= v && !(flg && u == v && !stdlib_base_is_negative_zero( u )) ) { // Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
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

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		v = X[ ix ];

		// Sort `NaN` values to the end...
		if ( stdlib_base_is_nan( v ) ) {
			jx = ix;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				X[ jx ] = X[ jx+sx ];
				jx += sx;
			}
			X[ lx ] = v;
		} else {
			flg = stdlib_base_is_negative_zero( v );
			jx = ix - sx;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				u = X[ jx ];
				if ( u <= v && !(flg && u == v && !stdlib_base_is_negative_zero( u )) ) { // Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
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
