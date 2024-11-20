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

#include "stdlib/stats/base/smaxsorted.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_positive_zerof.h"
#include <stdint.h>

/**
* Computes the maximum value of a sorted single-precision floating-point strided array.
*
* @param N       number of indexed elements
* @param X       sorted input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_smaxsorted( const int64_t N, const float *X, const int64_t stride ) {
	float v1;
	float v2;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		return X[ 0 ];
	}
	if ( stride < 0 ) {
		v1 = X[ (1-N) * stride ];
		v2 = X[ 0 ];
	} else {
		v1 = X[ 0 ];
		v2 = X[ (N-1) * stride ];
	}
	if ( stdlib_base_is_nanf( v1 ) || stdlib_base_is_nanf( v2 ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( v1 == v2 ) {
		if ( stdlib_base_is_positive_zerof( v1 ) || stdlib_base_is_positive_zerof( v2 ) ) {
			return 0.0f;
		}
		return v1;
	}
	if ( v1 > v2 ) {
		return v1;
	}
	return v2;
}
