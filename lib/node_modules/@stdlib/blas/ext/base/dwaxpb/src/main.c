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

#include "stdlib/blas/ext/base/dwaxpb.h"
#include "stdlib/blas/ext/base/dwapx.h"
#include "stdlib/blas/ext/base/dwax.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Multiplies each element in a double-precision floating-point strided array `X` by a scalar constant and adds a scalar constant before assigning the results to elements in a double-precision floating-point strided array `W`.
*
* @param N        number of indexed elements
* @param alpha    first scalar constant
* @param beta     second scalar constant
* @param X        input array
* @param strideX  stride length for `X`
* @param W        output array
* @param strideW  stride length for `W`
*/
void API_SUFFIX(stdlib_strided_dwaxpb)( const CBLAS_INT N, const double alpha, const double beta, const double *X, const CBLAS_INT strideX, double *W, const CBLAS_INT strideW ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT ow = stdlib_strided_stride2offset( N, strideW );
	API_SUFFIX(stdlib_strided_dwaxpb_ndarray)( N, alpha, beta, X, strideX, ox, W, strideW, ow );
}

/**
* Multiplies each element in a double-precision floating-point strided array `X` by a scalar constant and adds a scalar constant before assigning the results to elements in a double-precision floating-point strided array `W` using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    first scalar constant
* @param beta     second scalar constant
* @param X        input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param W        output array
* @param strideW  stride length for `W`
* @param offsetW  starting index for `W`
*/
void API_SUFFIX(stdlib_strided_dwaxpb_ndarray)( const CBLAS_INT N, const double alpha, const double beta, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *W, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
	CBLAS_INT ix;
	CBLAS_INT iw;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	// Fast path: when alpha = 1.0, delegate to dwapx (w = x + beta)
	if ( alpha == 1.0 ) {
		API_SUFFIX(stdlib_strided_dwapx_ndarray)( N, beta, X, strideX, offsetX, W, strideW, offsetW );
		return;
	}
	// Fast path: when beta = 0.0, delegate to dwax (w = alpha * x)
	if ( beta == 0.0 ) {
		API_SUFFIX(stdlib_strided_dwax_ndarray)( N, alpha, X, strideX, offsetX, W, strideW, offsetW );
		return;
	}
	ix = offsetX;
	iw = offsetW;

	// Use loop unrolling if both strides are equal to `1`...
	if ( strideX == 1 && strideW == 1 ) {
		m = N % 5;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				W[ iw ] = ( alpha * X[ ix ] ) + beta;
				ix += strideX;
				iw += strideW;
			}
		}
		if ( N < 5 ) {
			return;
		}
		for ( i = m; i < N; i += 5 ) {
			W[ iw ] = ( alpha * X[ ix ] ) + beta;
			W[ iw+1 ] = ( alpha * X[ ix+1 ] ) + beta;
			W[ iw+2 ] = ( alpha * X[ ix+2 ] ) + beta;
			W[ iw+3 ] = ( alpha * X[ ix+3 ] ) + beta;
			W[ iw+4 ] = ( alpha * X[ ix+4 ] ) + beta;
			ix += 5;
			iw += 5;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		W[ iw ] = ( alpha * X[ ix ] ) + beta;
		ix += strideX;
		iw += strideW;
	}
	return;
}
