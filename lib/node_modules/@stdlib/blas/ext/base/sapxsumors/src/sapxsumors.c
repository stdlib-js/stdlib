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

#include "stdlib/blas/ext/base/sapxsumors.h"
#include <stdint.h>

/**
* Adds a constant to each single-precision floating-point strided array element and computes the sum using ordinary recursive summation.
*
* @param N       number of indexed elements
* @param alpha   constant
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_sapxsumors( const int64_t N, const float alpha, const float *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	float sum;

	if ( N <= 0 ) {
		return 0.0f;
	}
	if ( N == 1 || stride == 0 ) {
		return alpha + X[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	sum = 0.0f;
	for ( i = 0; i < N; i++ ) {
		sum += alpha + X[ ix ];
		ix += stride;
	}
	return sum;
}
