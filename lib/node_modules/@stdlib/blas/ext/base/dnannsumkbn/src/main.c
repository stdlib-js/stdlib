/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/dnannsumkbn.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param n        pointer for storing the number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsumkbn)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, CBLAS_INT *n ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnannsumkbn_ndarray)( N, X, strideX, ox, n );
}

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm and alternative indexing semantics.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @param n        pointer for storing the number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsumkbn_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	double sum;
	double v;
	double t;
	double c;
	int flg;

	*n = 0;
	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nan( X[ ix ] ) ) {
			return 0.0;
		}
		*n += N;
		return X[ ix ] * N;
	}
	// Find the first non-NaN element...
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( !stdlib_base_is_nan( v ) ) {
			break;
		}
		ix += strideX;
	}
	if ( i == N ) {
		return 0.0;
	}
	*n += 1;
	sum = v;
	ix += strideX;
	i += 1;
	flg = 0;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero element...
	if ( sum == 0.0 ) {
		for ( ; i < N; i++ ) {
			v = X[ ix ];
			if ( !stdlib_base_is_nan( v ) ) {
				if ( v != 0.0 ) {
					flg = 1;
					break;
				}
				sum += v;
				*n += 1;
			}
			ix += strideX;
		}
	} else {
		flg = 1;
	}
	c = 0.0;
	for ( ; i < N; i++ ) {
		v = X[ ix ];
		if ( !stdlib_base_is_nan( v ) ) {
			t = sum + v;
			if ( stdlib_base_abs( sum ) >= stdlib_base_abs( v ) ) {
				c += (sum-t) + v;
			} else {
				c += (v-t) + sum;
			}
			sum = t;
			*n += 1;
		}
		ix += strideX;
	}
	return ( flg == 1 ) ? sum+c : sum;
}
