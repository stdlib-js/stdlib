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

#include "stdlib/stats/strided/dcovarmtk.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the covariance of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param meanx        mean of `X`
* @param X            first input array
* @param strideX      stride length of `X`
* @param meany        mean of `Y`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dcovarmtk)( const CBLAS_INT N, const double correction, const double meanx, const double *X, const CBLAS_INT strideX, const double meany, const double *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX(stdlib_strided_dcovarmtk_ndarray)( N, correction, meanx, X, strideX, ox, meany, Y, strideY, oy );
}

/**
* Computes the covariance of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param meanx        mean of `X`
* @param X            first input array
* @param strideX      stride length of `X`
* @param offsetX      starting index for X
* @param meany        mean of `Y`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @param offsetY      starting index for Y
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dcovarmtk_ndarray)( const CBLAS_INT N, const double correction, const double meanx, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double meany, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	double C;
	double n;

	n = (double)N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	ix = offsetX;
	iy = offsetY;
	C = 0.0;
	for ( i = 0; i < N; i++ ) {
		C += ( X[ ix ] - meanx ) * ( Y[ iy ] - meany );
		ix += strideX;
		iy += strideY;
	}
	return C / n;
}
