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

#include "stdlib/stats/base/smskmax.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_positive_zerof.h"
#include <stdint.h>

/**
* Computes the maximum value of a single-precision floating-point strided array according to a mask.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     X stride length
* @param Mask        mask array
* @param strideMask  Mask stride length
* @return            output value
*/
float stdlib_strided_smskmax( const int64_t N, const float *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask ) {
	int64_t ix;
	int64_t im;
	int64_t i;
	float max;
	float v;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideMask < 0 ) {
		im = (1-N) * strideMask;
	} else {
		im = 0;
	}
	for ( i = 0; i < N; i++ ) {
		if ( Mask[ im ] == 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i == N ) {
		return 0.0f / 0.0f; // NaN
	}
	max = X[ ix ];
	if ( stdlib_base_is_nanf( max ) ) {
		return 0.0f / 0.0f; // NaN
	}
	i += 1;
	for (; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( Mask[ im ] ) {
			continue;
		}
		v = X[ ix ];
		if ( stdlib_base_is_nanf( v ) ) {
			return 0.0f / 0.0f; // NaN
		}
		if ( v > max || ( v == max && stdlib_base_is_positive_zerof( v ) ) ) {
			max = v;
		}
	}
	return max;
}
