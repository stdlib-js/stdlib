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

#include "stdlib/stats/base/svarianceyc.h"
#include <stdint.h>

/**
* Computes the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
*
* ## Method
*
* -   This implementation uses a one-pass algorithm, as proposed by Youngs and Cramer (1971).
*
* ## References
*
* -   Youngs, Edward A., and Elliot M. Cramer. 1971. "Some Results Relevant to Choice of Sum and Sum-of-Product Algorithms." _Technometrics_ 13 (3): 657–65. doi:[10.1080/00401706.1971.10488826](https://doi.org/10.1080/00401706.1971.10488826).
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
float stdlib_strided_svarianceyc( const int64_t N, const float correction, const float *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	double di;
	float sum;
	double n;
	float S;
	float v;
	float d;

	n = (double)N - (double)correction;
	if ( N <= 0 || n <= 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		return 0.0f;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	sum = X[ ix ];
	ix += stride;
	S = 0.0f;
	for ( i = 2; i <= N; i++ ) {
		di = (double)i;
		v = X[ ix ];
		sum += v;
		d = (float)(di*(double)v) - sum;
		S += (float)(1.0/(di*(di-1.0))) * d * d;
		ix += stride;
	}
	return (double)S / n;
}
