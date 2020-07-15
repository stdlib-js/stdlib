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

#include "stdlib/stats/base/dnanvariancetk.h"
#include <stdint.h>

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
double stdlib_strided_dnanvariancetk( const int64_t N, const double correction, const double *X, const int64_t stride ) {
	int64_t ix;
	int64_t n;
	int64_t i;
	double S2;
	double nc;
	double dn;
	double S;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		v = X[ 0 ];
		if ( v == v && (double)N-correction > 0.0 ) {
			return 0.0;
		}
		return 0.0 / 0.0; // NaN
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	S2 = 0.0;
	S = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			S2 += v * v;
			S += v;
			n += 1;
		}
		ix += stride;
	}
	dn = (double)n;
	nc = dn - correction;
	if ( nc <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return (S2 - ((S/dn)*S)) / nc;
}
