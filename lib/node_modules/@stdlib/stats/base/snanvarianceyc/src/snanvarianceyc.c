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

#include "stdlib/stats/base/snanvarianceyc.h"
#include <stdint.h>

/**
* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
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
float stdlib_strided_snanvarianceyc( const int64_t N, const float correction, const float *X, const int64_t stride ) {
	int64_t ix;
	float sum;
	double nc;
	double n;
	double i;
	float S;
	float v;
	float d;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		v = X[ 0 ];
		if ( v == v && (double)N-(double)correction > 0.0 ) {
			return 0.0f;
		}
		return 0.0f / 0.0f; // NaN
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	// Find the first non-NaN element...
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
	ix += stride;
	sum = v;
	S = 0.0f;
	n = 1.0;
	i += 1;
	for (; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			n += 1.0;
			sum += v;
			d = (float)(n*(double)v) - sum;
			S += (float)(1.0/(n*(n-1.0))) * d * d;
		}
		ix += stride;
	}
	nc = n - (double)correction;
	if ( nc <= 0.0 ) {
		return 0.0f / 0.0f; // NaN
	}
	return (double)S / nc;
}
