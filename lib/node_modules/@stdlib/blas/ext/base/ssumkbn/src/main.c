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

#include "stdlib/blas/ext/base/ssumkbn.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
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
* @return         output value
*/
float API_SUFFIX(stdlib_strided_ssumkbn)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_ssumkbn_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm and alternative indexing semantics.
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
* @return         output value
*/
float API_SUFFIX(stdlib_strided_ssumkbn_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	float sum;
	float v;
	float t;
	float c;

	if ( N <= 0 ) {
		return 0.0f;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		return N * X[ ix ];
	}
	sum = 0.0f;
	c = 0.0f;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		t = sum + v;
		if ( stdlib_base_absf( sum ) >= stdlib_base_absf( v ) ) {
			c += ( sum - t ) + v;
		} else {
			c += ( v - t ) + sum;
		}
		sum = t;
		ix += strideX;
	}
	return sum + c;
}
