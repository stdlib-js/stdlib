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

#include "stdlib/stats/base/dcumax.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_positive_zero.h"
#include <stdint.h>

/**
* Computes the cumulative maximum of double-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void stdlib_strided_dcumax( const int64_t N, const double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
	double max;
	int64_t ix;
	int64_t iy;
	int64_t i;
	double v;

	if ( N <= 0 ) {
		return;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	max = X[ ix ];
	Y[ iy ] = max;

	iy += strideY;
	i = 1;
	if ( !stdlib_base_is_nan( max ) ) {
		for (; i < N; i++ ) {
			ix += strideX;
			v = X[ ix ];
			if ( stdlib_base_is_nan( v ) ) {
				max = v;
				break;
			}
			if ( v > max || ( v == max && stdlib_base_is_positive_zero( v ) ) ) {
				max = v;
			}
			Y[ iy ] = max;
			iy += strideY;
		}
	}
	if ( stdlib_base_is_nan( max ) ) {
		for (; i < N; i++ ) {
			Y[ iy ] = max;
			iy += strideY;
		}
	}
	return;
}
