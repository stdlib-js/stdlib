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

#include "stdlib/blas/base/sspr.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @param order    storage layout
* @param uplo     specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N        number of elements along each dimension of `A`
* @param alpha    scalar
* @param X        input vector
* @param strideX  `X` stride length
* @param AP       packed form of a symmetric matrix `A`
*/
void API_SUFFIX(c_sspr)( const CBLAS_LAYOUT order, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, float *AP ) {
	const CBLAS_INT ox = STDLIB_BLAS_BASE_STRIDE2OFFSET( N, strideX );
	API_SUFFIX(c_sspr_ndarray)( order, uplo, N, alpha, X, strideX, ox, AP, 1, 0 );
	return;
}

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form using alternative indexing semantics.
*
* @param uplo      specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N         number of elements along each dimension of `A`
* @param alpha     scalar
* @param X         input vector
* @param strideX   `X` stride length
* @param offsetX   starting index of `x`
* @param AP        packed form of a symmetric matrix `A`
* @param strideAP  stride of the first dimension of `AP`
* @param offsetAP  starting index of `AP`
*/
void API_SUFFIX(c_sspr_ndarray)( const CBLAS_LAYOUT order, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *AP, const CBLAS_INT strideAP, const CBLAS_INT offsetAP ) {
	CBLAS_INT iap;
	CBLAS_INT ix0;
	CBLAS_INT ix1;
	CBLAS_INT i0;
	CBLAS_INT i1;
	CBLAS_INT kk;
	CBLAS_INT ox;
	float tmp;

	if ( N == 0 || alpha == 0.0f ) {
		return;
	}
	ox = offsetX;
	kk = offsetAP;
	if (
		( order == CblasRowMajor && uplo == CblasLower ) ||
		( order == CblasColMajor && uplo == CblasUpper )
	) {
		ix1 = ox;
		for ( i1 = 0; i1 < N; i1++ ) {
			if ( X[ ix1 ] != 0.0f ) {
				tmp = alpha * X[ ix1 ];
				ix0 = ox;
				iap = kk;
				for ( i0 = 0; i0 <= i1; i0++ ) {
					AP[ iap ] += X[ ix0 ] * tmp;
					ix0 += strideX;
					iap += strideAP;
				}
			}
			ix1 += strideX;
			kk += ( i1 + 1 ) * strideAP;
		}
		return;
	}
	// ( order == CblasColMajor && uplo == CblasLower ) || ( order == CblasRowMajor && uplo == CblasUpper )
	ix1 = ox;
	for ( i1 = 0; i1 < N; i1++ ) {
		if ( X[ ix1 ] != 0.0f ) {
			tmp = alpha * X[ ix1 ];
			ix0 = ix1;
			iap = kk;
			for ( i0 = 0; i0 < N - i1; i0++ ) {
				AP[ iap ] += X[ ix0 ] * tmp;
				ix0 += strideX;
				iap += strideAP;
			}
		}
		ix1 += strideX;
		kk += ( N - i1 ) * strideAP;
	}
	return;
}
