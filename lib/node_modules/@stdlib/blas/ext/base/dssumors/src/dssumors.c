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

#include "stdlib/blas/ext/base/dssumors.h"
#include <stdint.h>

/**
* Computes the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
double stdlib_strided_dssumors( const int64_t N, const float *X, const int64_t stride ) {
	double sum;
	int64_t ix;
	int64_t m;
	int64_t i;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	if ( N == 1 || stride == 0 ) {
		return X[ 0 ];
	}
	// If the stride is equal to `1`, use unrolled loops...
	if ( stride == 1 ) {
		m = N % 6;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += (double)X[ i ];
			}
		}
		if ( N < 6 ) {
			return sum;
		}
		for ( i = m; i < N; i += 6 ) {
			sum += (double)X[i] + (double)X[i+1] + (double)X[i+2] + (double)X[i+3] + (double)X[i+4] + (double)X[i+5];
		}
		return sum;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		sum += (double)X[ ix ];
		ix += stride;
	}
	return sum;
}
