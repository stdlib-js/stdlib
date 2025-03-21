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

#include "stdlib/blas/ext/base/ssortsh.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Sorts a single-precision floating-point strided array using Shellsort.
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
* @param N       number of indexed elements
* @param order   sort order
* @param X       input array
* @param stride  index increment
*/
void c_ssortsh( const int64_t N, const float order, float *X, const int64_t stride ) {
	int64_t offset;
	int64_t gap;
	int64_t sx;
	int64_t i;
	int64_t j;
	int64_t k;
	bool flg;
	float v;
	float u;

	// Ciura's gap sequence:
	const static int64_t GAPS[] = { 701, 301, 132, 57, 23, 10, 4, 1 };
	const static int64_t NGAPS = 8;

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
		offset = (1-N) * sx;
	} else {
		offset = 0;
	}
	for ( i = 0; i < NGAPS; i++ ) {
		gap = GAPS[ i ];
		for ( j = gap; j < N; j++ ) {
			v = X[ offset+(j*sx) ];

			// If `NaN`, the current value is already sorted to its place...
			if ( stdlib_base_is_nanf( v ) ) {
				continue;
			}
			// Perform insertion sort on the "gapped" subarray...
			flg = stdlib_base_is_negative_zerof( v );
			for ( k = j; k >= gap; k -= gap ) {
				u = X[ offset+((k-gap)*sx) ];
				if ( u <= v && !(flg && u == v) ) {
					break;
				}
				X[ offset+(k*sx) ] = u;
			}
			X[ offset+(k*sx) ] = v;
		}
	}
	return;
}
