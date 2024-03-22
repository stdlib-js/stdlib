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

#include "stdlib/blas/ext/base/scusumkbn2.h"
#include <stdint.h>
#include <math.h>

/**
* Computes the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses a second-order iterative Kahan–Babuška algorithm, as described by Klein (2005).
*
* ## References
*
* -   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x](https://doi.org/10.1007/s00607-005-0139-x).
*
* @param N        number of indexed elements
* @param sum      initial sum
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void stdlib_strided_scusumkbn2( const int64_t N, const float sum, const float *X, const int64_t strideX, float *Y, const int64_t strideY ) {
	int64_t ix;
	int64_t iy;
	int64_t i;
	float ccs;
	float cs;
	float cc;
	float v;
	float t;
	float c;
	float s;

	if ( N <= 0 ) {
		return;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	s = sum;
	ccs = 0.0f; // second order correction term for lost lower order bits
	cs = 0.0f; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		t = s + v;
		if ( fabsf( s ) >= fabsf( v ) ) {
			c = (s-t) + v;
		} else {
			c = (v-t) + s;
		}
		s = t;
		t = cs + c;
		if ( fabsf( cs ) >= fabsf( c ) ) {
			cc = (cs-t) + c;
		} else {
			cc = (c-t) + cs;
		}
		cs = t;
		ccs += cc;

		Y[ iy ] = s + cs + ccs;
		ix += strideX;
		iy += strideY;
	}
	return;
}
