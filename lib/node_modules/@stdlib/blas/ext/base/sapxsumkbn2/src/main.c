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

#include "stdlib/blas/ext/base/sapxsumkbn2.h"
#include <stdint.h>
#include <math.h>

/**
* Adds a constant to each single-precision floating-point strided array element and computes the sum using a second-order iterative Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses a second-order iterative Kahan–Babuška algorithm, as described by Klein (2005).
*
* ## References
*
* -   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x](https://doi.org/10.1007/s00607-005-0139-x).
*
* @param N       number of indexed elements
* @param alpha   constant
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_sapxsumkbn2( const int64_t N, const float alpha, const float *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	float sum;
	float ccs;
	float cs;
	float cc;
	float v;
	float t;
	float c;

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
	ccs = 0.0f; // second order correction term for lost lower order bits
	cs = 0.0f; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = alpha + X[ ix ];
		t = sum + v;
		if ( fabsf( sum ) >= fabsf( v ) ) {
			c = (sum-t) + v;
		} else {
			c = (v-t) + sum;
		}
		sum = t;
		t = cs + c;
		if ( fabsf( cs ) >= fabsf( c ) ) {
			cc = (cs-t) + c;
		} else {
			cc = (c-t) + cs;
		}
		cs = t;
		ccs += cc;
		ix += stride;
	}
	return sum + cs + ccs;
}
