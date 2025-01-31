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

#include "stdlib/stats/base/svariancetk.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
float API_SUFFIX(stdlib_strided_svariancetk)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_svariancetk_ndarray)( N, correction, X, strideX, ox );
}

/**
* Computes the variance of a single-precision floating-point strided array using a one-pass textbook algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
float API_SUFFIX(stdlib_strided_svariancetk_ndarray)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	double dN;
	double n;
	float S2;
	float S;
	float v;

	dN = (double)N;
	n = dN - (double)correction;
	if ( N <= 0 || n <= 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return 0.0f;
	}
	ix = offsetX;
	S2 = 0.0f;
	S = 0.0f;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		S2 += v * v;
		S += v;
		ix += strideX;
	}
	return (double)(S2 - ( (float)((double)S/dN) * S ) ) / n;
}
