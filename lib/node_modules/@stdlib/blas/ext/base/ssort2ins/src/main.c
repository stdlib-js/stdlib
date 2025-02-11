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

#include "stdlib/blas/ext/base/ssort2ins.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"
#include <stdbool.h>

/**
* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        first input array
* @param strideX  stride length for `X`
* @param Y        second input array
* @param strideY  stride length for `Y`
*/
void API_SUFFIX(stdlib_strided_ssort2ins)( const CBLAS_INT N, const float order, float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_ssort2ins_ndarray)( N, order, X, strideX, ox, Y, strideY, oy );
}


/**
* Simultaneously sorts two signle-precision floating-point strided arrays based on the sort order of the first array using insertion sort and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        first input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param Y        second input array
* @param strideY  stride length for `Y`
* @param offsetY  starting index for `Y`
*/
void API_SUFFIX(stdlib_strided_ssort2ins_ndarray)( const CBLAS_INT N, const float order, float *X, CBLAS_INT strideX, CBLAS_INT offsetX, float *Y, CBLAS_INT strideY, CBLAS_INT offsetY ) {
	CBLAS_INT sx;
	CBLAS_INT sy;
	CBLAS_INT ox;
	CBLAS_INT oy;
	CBLAS_INT ix;
	CBLAS_INT jx;
	CBLAS_INT fx;
	CBLAS_INT lx;
	CBLAS_INT iy;
	CBLAS_INT jy;
	CBLAS_INT fy;
	CBLAS_INT ly;
	CBLAS_INT i;
	float vx;
	float vy;
	float ux;
	bool flg;

	if ( N <= 0 || order == 0.0f ) {
		return;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0f ) {
		sx = strideX * -1;
		sy = strideY * -1;
		ox = offsetX - ( (N-1) * sx );
		oy = offsetY - ( (N-1) * sy );
	} else {
		sx = strideX;
		sy = strideY;
		ox = offsetX;
		oy = offsetY;
	}
	fx = ox;                // first index
	lx = fx + ( (N-1)*sx ); // last index
	ix = fx + sx;

	fy = oy;                // first index
	ly = fy + ( (N-1)*sy ); // last index
	iy = fy + sy;

	if ( sx < 0 ) {
		// Traverse the strided array from right-to-left...

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			vx = X[ ix ];
			vy = Y[ iy ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( stdlib_base_is_nanf( vx ) ) {
				jx = ix;
				jy = iy;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					X[ jx ] = X[ jx+sx ];
					Y[ jy ] = Y[ jy+sy ];
					jx += sx;
					jy += sy;
				}
				X[ lx ] = vx;
				Y[ ly ] = vy;
			} else {
				flg = stdlib_base_is_negative_zerof( vx );
				jx = ix - sx;
				jy = iy - sy;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					ux = X[ jx ];
					if ( ux <= vx && !(flg && ux == vx && !stdlib_base_is_negative_zerof( ux )) ) {
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					X[ jx+sx ] = ux;
					Y[ jy+sy ] = Y[ jy ];
					jx -= sx;
					jy -= sy;
				}
				X[ jx+sx ] = vx;
				Y[ jy+sy ] = vy;
				ix += sx;
				iy += sy;
			}
		}
		return;
	}
	// Traverse the strided array from left-to-right...

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		vx = X[ ix ];
		vy = Y[ iy ];

		// Sort `NaN` values to the end...
		if ( stdlib_base_is_nanf( vx ) ) {
			jx = ix;
			jy = iy;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				X[ jx ] = X[ jx+sx ];
				Y[ jy ] = Y[ jy+sy ];
				jx += sx;
				jy += sy;
			}
			X[ lx ] = vx;
			Y[ ly ] = vy;
		} else {
			flg = stdlib_base_is_negative_zerof( vx );
			jx = ix - sx;
			jy = iy - sy;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				ux = X[ jx ];
				if ( ux <= vx && !(flg && ux == vx && !stdlib_base_is_negative_zerof( ux )) ) {
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				X[ jx+sx ] = ux;
				Y[ jy+sy ] = Y[ jy ];
				jx -= sx;
				jy -= sy;
			}
			X[ jx+sx ] = vx;
			Y[ jy+sy ] = vy;
			ix += sx;
			iy += sy;
		}
	}
	return;
}
