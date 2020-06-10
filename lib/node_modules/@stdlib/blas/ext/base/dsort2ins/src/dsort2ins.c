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

#include "stdlib/blas/ext/base/dsort2ins.h"
#include "stdlib/math/base/assert/is_negative_zero.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        first input array
* @param strideX  `X` index increment
* @param Y        second input array
* @param strideY  `Y` index increment
*/
void c_dsort2ins( const int64_t N, const double order, double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
	int64_t sx;
	int64_t sy;
	int64_t ix;
	int64_t jx;
	int64_t fx;
	int64_t lx;
	int64_t iy;
	int64_t jy;
	int64_t fy;
	int64_t ly;
	int64_t i;
	double vx;
	double vy;
	double ux;
	bool flg;

	if ( N <= 0 || order == 0.0 ) {
		return;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		sx = -strideX;
		sy = -strideY;
	} else {
		sx = strideX;
		sy = strideY;
	}
	if ( sy < 0 ) {
		fy = (1-N) * sy;
		ly = 0;
	} else {
		fy = 0;
		ly = (N-1) * sy;
	}
	iy = fy + sy;

	if ( sx < 0 ) {
		// Traverse the strided array from right-to-left...
		fx = (1-N) * sx;      // first index
		lx = 0;               // last index
		ix = fx + sx;

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			vx = X[ ix ];
			vy = Y[ iy ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( stdlib_base_is_nan( vx ) ) {
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
				flg = stdlib_base_is_negative_zero( vx );
				jx = ix - sx;
				jy = iy - sy;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					ux = X[ jx ];
					if ( ux <= vx && !(flg && ux == vx && !stdlib_base_is_negative_zero( ux )) ) {
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
	fx = 0;              // first index
	lx = (N-1) * sx;     // last index
	ix = fx + sx;

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		vx = X[ ix ];
		vy = Y[ iy ];

		// Sort `NaN` values to the end...
		if ( stdlib_base_is_nan( vx ) ) {
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
			flg = stdlib_base_is_negative_zero( vx );
			jx = ix - sx;
			jy = iy - sy;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				ux = X[ jx ];
				if ( ux <= vx && !(flg && ux == vx && !stdlib_base_is_negative_zero( ux )) ) {
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
