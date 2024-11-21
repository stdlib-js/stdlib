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

#include "stdlib/stats/base/dvarmtk.h"
#include <stdint.h>

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.
*
* @param N           number of indexed elements
* @param mean        mean
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
double stdlib_strided_dvarmtk( const int64_t N, const double mean, const double correction, const double *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	double M2;
	double n;
	double d;

	n = (double)N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		return 0.0;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	M2 = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = X[ ix ] - mean;
		M2 += d * d;
		ix += stride;
	}
	return M2 / n;
}
