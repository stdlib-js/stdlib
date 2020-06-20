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

#include "stdlib/stats/base/smediansorted.h"
#include <stdint.h>

/**
* Computes the median value of a sorted single-precision floating-point strided array.
*
* @param N       number of indexed elements
* @param X       sorted input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_smediansorted( const int64_t N, const float *X, const int64_t stride ) {
	int64_t offset;
	int64_t n;

	if ( N <= 0 ) {
		return 0.0f/0.0f; // NaN
	}
	if ( stride < 0 ) {
		offset = (1-N) * stride;
	} else {
		offset = 0;
	}
	n = N >> 1;
	if ( N & 1 ) {
		// Odd number of elements...
		return X[ offset+(n*stride) ];
	}
	// Even number of elements...
	return ( X[ offset+(n*stride) ] + X[ offset+((n-1)*stride) ] ) / 2.0f;
}
