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

#include "stdlib/blas/ext/base/dapxsumkbn.h"
#include <stdint.h>
#include <math.h>

/**
* Adds a constant to each double-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N       number of indexed elements
* @param alpha   constant
* @param X       input array
* @param stride  stride length
* @return        output value
*/
double stdlib_strided_dapxsumkbn( const int64_t N, const double alpha, const double *X, const int64_t stride ) {
	double sum;
	int64_t ix;
	int64_t i;
	double v;
	double t;
	double c;

	if ( N <= 0 ) {
		return 0.0;
	}
	if ( N == 1 || stride == 0 ) {
		return alpha + X[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	sum = 0.0;
	c = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = alpha + X[ ix ];
		t = sum + v;
		if ( fabs( sum ) >= fabs( v ) ) {
			c += (sum-t) + v;
		} else {
			c += (v-t) + sum;
		}
		sum = t;
		ix += stride;
	}
	return sum + c;
}
