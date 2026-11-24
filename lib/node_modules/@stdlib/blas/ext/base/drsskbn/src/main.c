/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/drsskbn.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the residual sum of squares of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N            number of indexed elements
* @param X            first input array
* @param strideX      stride length of `X`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @return             output value
*/
double API_SUFFIX(stdlib_strided_drsskbn)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX(stdlib_strided_drsskbn_ndarray)( N, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the residual sum of squares of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm and alternative indexing semantics.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N            number of indexed elements
* @param X            first input array
* @param strideX      stride length of `X`
* @param offsetX      starting index for `X`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @param offsetY      starting index for `Y`
* @return             output value
*/
double API_SUFFIX(stdlib_strided_drsskbn_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	double sum;
	double r;
	double v;
	double t;
	double c;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	iy = offsetY;
	sum = 0.0;
	c = 0.0;
	for ( i = 0; i < N; i++ ) {
		r = X[ ix ] - Y[ iy ];
		v = r * r;
		t = sum + v;
		if ( stdlib_base_abs( sum ) >= stdlib_base_abs( v ) ) {
			c += ( sum - t ) + v;
		} else {
			c += ( v - t ) + sum;
		}
		sum = t;
		ix += strideX;
		iy += strideY;
	}
	return sum + c;
}
