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

#include "stdlib/blas/ext/base/dsnannsumors.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <stdint.h>

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @param n       pointer for storing the number of non-NaN elements
* @return        output value
*/
double stdlib_strided_dsnannsumors( const int64_t N, const float *X, const int64_t stride, int64_t *n ) {
	double sum;
	int64_t ix;
	int64_t i;

	sum = 0.0;
	*n = 0;
	if ( N <= 0 ) {
		return sum;
	}
	if ( N == 1 || stride == 0 ) {
		if ( stdlib_base_is_nanf( X[ 0 ] ) ) {
			return sum;
		}
		*n += 1;
		return X[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		if ( !stdlib_base_is_nanf( X[ ix ] ) ) {
			sum += (double)X[ ix ];
			*n += 1;
		}
		ix += stride;
	}
	return sum;
}
