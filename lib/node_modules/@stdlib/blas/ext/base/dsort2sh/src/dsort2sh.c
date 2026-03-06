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

#include "stdlib/blas/ext/base/dsort2sh.h"
#include "stdlib/math/base/assert/is_negative_zero.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.
*
* ## Notes
*
* -   This implementation uses the gap sequence proposed by Ciura (2001).
*
* ## References
*
* -   Shell, Donald L. 1959. "A High-Speed Sorting Procedure." _Communications of the ACM_ 2 (7). Association for Computing Machinery: 30–32. doi:[10.1145/368370.368387](https://doi.org/10.1145/368370.368387).
* -   Ciura, Marcin. 2001. "Best Increments for the Average Case of Shellsort." In _Fundamentals of Computation Theory_, 106–17. Springer Berlin Heidelberg. doi:[10.1007/3-540-44669-9\_12](https://doi.org/10.1007/3-540-44669-9_12).
*
* @param N        number of indexed elements
* @param order    sort order
* @param X        first input array
* @param strideX  `X` index increment
* @param Y        second input array
* @param strideY  `Y` index increment
*/
void c_dsort2sh( const int64_t N, const double order, double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
	int64_t offsetX;
	int64_t offsetY;
	int64_t gap;
	int64_t sx;
	int64_t sy;
	int64_t i;
	int64_t j;
	int64_t k;
	double vx;
	double vy;
	double ux;
	bool flg;

	// Ciura's gap sequence:
	const static int64_t GAPS[] = { 701, 301, 132, 57, 23, 10, 4, 1 };
	const static int64_t NGAPS = 8;

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
	if ( sx < 0 ) {
		offsetX = (1-N) * sx;
	} else {
		offsetX = 0;
	}
	if ( sy < 0 ) {
		offsetY = (1-N) * sy;
	} else {
		offsetY = 0;
	}
	for ( i = 0; i < NGAPS; i++ ) {
		gap = GAPS[ i ];
		for ( j = gap; j < N; j++ ) {
			vx = X[ offsetX+(j*sx) ];

			// If `NaN`, the current value is already sorted to its place...
			if ( stdlib_base_is_nan( vx ) ) {
				continue;
			}
			vy = Y[ offsetY+(j*sy) ];

			// Perform insertion sort on the "gapped" subarray...
			flg = stdlib_base_is_negative_zero( vx );
			for ( k = j; k >= gap; k -= gap ) {
				ux = X[ offsetX+((k-gap)*sx) ];
				if ( ux <= vx && !(flg && ux == vx) ) {
					break;
				}
				X[ offsetX+(k*sx) ] = ux;
				Y[ offsetY+(k*sy) ] = Y[ offsetY+((k-gap)*sy) ];
			}
			X[ offsetX+(k*sx) ] = vx;
			Y[ offsetY+(k*sy) ] = vy;
		}
	}
	return;
}
