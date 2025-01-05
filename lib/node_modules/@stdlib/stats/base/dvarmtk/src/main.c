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

#include "stdlib/stats/base/dvarmtk.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.
*
* @param N            number of indexed elements
* @param mean         mean
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvarmtk)( const CBLAS_INT N, const double mean, const double correction, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dvarmtk_ndarray)( N, mean, correction, X, strideX, ox );
}

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param mean         mean
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvarmtk_ndarray)( const CBLAS_INT N, const double mean, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	double M2;
	double n;
	double d;

	n = (double)N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return 0.0;
	}
	ix = offsetX;
	M2 = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = X[ ix ] - mean;
		M2 += d * d;
		ix += strideX;
	}
	return M2 / n;
}
