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

#include "stdlib/stats/base/dsnanmeanors.h"
#include <stdint.h>

/**
* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
double stdlib_strided_dsnanmeanors( const int64_t N, const float *X, const int64_t stride ) {
	double sum;
	int64_t ix;
	int64_t i;
	int64_t n;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		return X[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	sum = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = (double)X[ ix ];
		if ( v == v ) {
			sum += v;
			n += 1;
		}
		ix += stride;
	}
	if ( n == 0 ) {
		return 0.0 / 0.0; // NaN
	}
	return sum / (double)n;
}
