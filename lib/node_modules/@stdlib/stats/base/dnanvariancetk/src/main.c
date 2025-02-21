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
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     stride length
* @return            output value
*/
double API_SUFFIX(stdlib_strided_dnanvariancetk)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnanvariancetk_ndarray)( N, correction, X, strideX, ox );
}

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dnanvariancetk_ndarray)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT n;
	CBLAS_INT i;
	double S2;
	double nc;
	double dn;
	double S;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		v = X[ 0 ];
		if ( v == v && (double)N-correction > 0.0 ) {
			return 0.0;
		}
		return 0.0 / 0.0; // NaN
	}
	ix = offsetX;
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
		ix += strideX;
	}
	dn = (double)n;
	nc = dn - correction;
	if ( nc <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return (S2 - ((S/dn)*S)) / nc;
}
