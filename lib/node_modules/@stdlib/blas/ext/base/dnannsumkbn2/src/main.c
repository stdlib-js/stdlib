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

#include "stdlib/blas/ext/base/dnannsumkbn2.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
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
* @param n        number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsumkbn2)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, CBLAS_INT *n ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnannsumkbn2_ndarray)( N, X, strideX, ox, n );
}

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm and alternative indexing semantics.
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
* @param offsetX  starting index
* @param n        number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsumkbn2_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n ) {
	double sum;
	double ccs;
	double cs;
	double cc;
	CBLAS_INT ix;
	CBLAS_INT i;
	double v;
	double t;
	double c;

	sum = 0.0;
	*n = 0;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nan( X[ ix ] ) ) {
			return sum;
		}
		*n += N;
		return X[ ix ] * N;
	}
	ccs = 0.0; // second order correction term for lost lower order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( !stdlib_base_is_nan( v ) ) {
			t = sum + v;
			if ( stdlib_base_abs( sum ) >= stdlib_base_abs( v ) ) {
				c = (sum-t) + v;
			} else {
				c = (v-t) + sum;
			}
			sum = t;
			t = cs + c;
			if ( stdlib_base_abs( cs ) >= stdlib_base_abs( c ) ) {
				cc = (cs-t) + c;
			} else {
				cc = (c-t) + cs;
			}
			cs = t;
			ccs += cc;
			*n += 1;
		}
		ix += strideX;
	}
	return sum + cs + ccs;
}
