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

#include "stdlib/blas/ext/base/zwxsa.h"
#include "stdlib/blas/base/zcopy.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include "stdlib/complex/float64/base/sub.h"
#include "stdlib/strided/base/stride2offset.h"

static const CBLAS_INT M = 5;

/**
* Subtracts a scalar constant from each element in a double-precision complex floating-point strided array `X` and assigns the results to elements in a double-precision complex floating-point strided array `W`.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length for `X`
* @param W        output array
* @param strideW  stride length for `W`
*/
void API_SUFFIX(stdlib_strided_zwxsa)( const CBLAS_INT N, const stdlib_complex128_t alpha, const stdlib_complex128_t *X, const CBLAS_INT strideX, stdlib_complex128_t *W, const CBLAS_INT strideW ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT ow = stdlib_strided_stride2offset( N, strideW );
	API_SUFFIX(stdlib_strided_zwxsa_ndarray)( N, alpha, X, strideX, ox, W, strideW, ow );
}

/**
* Subtracts a scalar constant from each element in a double-precision complex floating-point strided array `X` and assigns the results to elements in a double-precision complex floating-point strided array `W` using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param W        output array
* @param strideW  stride length for `W`
* @param offsetW  starting index for `W`
*/
void API_SUFFIX(stdlib_strided_zwxsa_ndarray)( const CBLAS_INT N, const stdlib_complex128_t alpha, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex128_t *W, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
	CBLAS_INT ix;
	CBLAS_INT iw;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	// Fast path: when alpha = 0+0i, delegate to zcopy (w = x)
	if ( stdlib_complex128_real( alpha ) == 0.0 && stdlib_complex128_imag( alpha ) == 0.0 ) {
		API_SUFFIX(c_zcopy_ndarray)( N, X, strideX, offsetX, W, strideW, offsetW );
		return;
	}
	ix = offsetX;
	iw = offsetW;

	// Use loop unrolling if both strides are equal to `1`...
	if ( strideX == 1 && strideW == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				W[ iw ] = stdlib_base_complex128_sub( X[ ix ], alpha );
				ix += strideX;
				iw += strideW;
			}
		}
		if ( N < M ) {
			return;
		}
		for ( i = m; i < N; i += M ) {
			W[ iw ] = stdlib_base_complex128_sub( X[ ix ], alpha );
			W[ iw+1 ] = stdlib_base_complex128_sub( X[ ix+1 ], alpha );
			W[ iw+2 ] = stdlib_base_complex128_sub( X[ ix+2 ], alpha );
			W[ iw+3 ] = stdlib_base_complex128_sub( X[ ix+3 ], alpha );
			W[ iw+4 ] = stdlib_base_complex128_sub( X[ ix+4 ], alpha );
			ix += M;
			iw += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		W[ iw ] = stdlib_base_complex128_sub( X[ ix ], alpha );
		ix += strideX;
		iw += strideW;
	}
	return;
}
