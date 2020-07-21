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

#include "stdlib/stats/base/snanrange.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <stdint.h>

/**
* Computes the range of a single-precision floating-point strided array, ignoring `NaN` values.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_snanrange( const int64_t N, const float *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	float max;
	float min;
	float v;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		if ( stdlib_base_is_nanf( X[ 0 ] ) ) {
			return X[ 0 ];
		}
		return 0.0f;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			break;
		}
		ix += stride;
	}
	if ( i == N ) {
		return 0.0f / 0.0f; // NaN
	}
	min = v;
	max = min;
	i += 1;
	for (; i < N; i++ ) {
		ix += stride;
		v = X[ ix ];
		if ( stdlib_base_is_nanf( v ) ) {
			continue;
		}
		if ( v < min ) {
			min = v;
		} else if ( v > max ) {
			max = v;
		}
	}
	return max -  min;
}
