/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/snansumkbn2.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
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
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_snansumkbn2)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_snansumkbn2_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm and alternative indexing semantics.
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
* @param X        input array
* @param strideX  stride length
* @param offsetX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_snansumkbn2_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	float sum;
	float ccs;
	float cs;
	float cc;
	float v;
	float t;
	float c;

	sum = 0.0f;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nanf( X[ ix ] ) ) {
			return sum;
		}
		return N * X[ ix ];
	}
	ccs = 0.0f; // second order correction term for lost lower order bits
	cs = 0.0f; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( !stdlib_base_is_nanf( v ) ) {
			t = sum + v;
			if ( stdlib_base_absf( sum ) >= stdlib_base_absf( v ) ) {
				c = (sum-t) + v;
			} else {
				c = (v-t) + sum;
			}
			sum = t;
			t = cs + c;
			if ( stdlib_base_absf( cs ) >= stdlib_base_absf( c ) ) {
				cc = (cs-t) + c;
			} else {
				cc = (c-t) + cs;
			}
			cs = t;
			ccs += cc;
		}
		ix += strideX;
	}
	return sum + cs + ccs;
}
