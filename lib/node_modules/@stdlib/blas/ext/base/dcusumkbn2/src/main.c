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

#include "stdlib/blas/ext/base/dcusumkbn2.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/abs.h"

/**
* Computes the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
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
* @param strideX  stride length for X
* @param Y        output array
* @param strideY  stride length for Y
*/
void API_SUFFIX(stdlib_strided_dcusumkbn2)( const CBLAS_INT N, const double sum, const double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_dcusumkbn2_ndarray)( N, sum, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm and alternative indexing semantics.
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
* @param sum      initial sum
* @param X        input array
* @param strideX  stride length for X
* @param offsetX  starting index for X
* @param Y        output array
* @param strideY  stride length for Y
* @param offsetY  stating index for Y
*/
void API_SUFFIX(stdlib_strided_dcusumkbn2_ndarray)( const CBLAS_INT N, const double sum, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	double ccs;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	double cs;
	double cc;
	double v;
	double t;
	double c;
	double s;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	s = sum;
	ccs = 0.0; // second order correction term for lost lower order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		t = s + v;
		if ( stdlib_base_abs( s ) >= stdlib_base_abs( v ) ) {
			c = (s-t) + v;
		} else {
			c = (v-t) + s;
		}
		s = t;
		t = cs + c;
		if ( stdlib_base_abs( cs ) >= stdlib_base_abs( c ) ) {
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
