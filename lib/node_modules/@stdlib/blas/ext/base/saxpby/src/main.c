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

#include "stdlib/blas/ext/base/saxpby.h"
#include "stdlib/blas/base/saxpy.h"
#include "stdlib/blas/base/sscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

static const CBLAS_INT M = 5;

/**
* Multiplies a single-precision floating-point strided array `x` by a constant and adds the result to a single-precision floating-point strided array `y` multiplied by a constant.
*
* @param N        number of indexed elements
* @param alpha    first scalar constant
* @param X        input array
* @param strideX  stride length for `X`
* @param beta     second scalar constant
* @param Y        output array
* @param strideY  stride length for `Y`
*/
void API_SUFFIX(stdlib_strided_saxpby)( const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const float beta, float *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_saxpby_ndarray)( N, alpha, X, strideX, ox, beta, Y, strideY, oy );
}

/**
* Multiplies a single-precision floating-point strided array `x` by a constant and adds the result to a single-precision floating-point strided array `y` multiplied by a constant using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    first scalar constant
* @param X        input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param beta     second scalar constant
* @param Y        output array
* @param strideY  stride length for `Y`
* @param offsetY  starting index for `Y`
*/
void API_SUFFIX(stdlib_strided_saxpby_ndarray)( const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float beta, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	// Fast path: when alpha = 0.0, delegate to sscal (y = beta * y)
	if ( alpha == 0.0f ) {
		API_SUFFIX(c_sscal_ndarray)( N, beta, Y, strideY, offsetY );
		return;
	}
	// Fast path: when beta = 1.0, delegate to saxpy (y = alpha * x + y)
	if ( beta == 1.0f ) {
		API_SUFFIX(c_saxpy_ndarray)( N, alpha, X, strideX, offsetX, Y, strideY, offsetY );
		return;
	}
	ix = offsetX;
	iy = offsetY;

	// Use loop unrolling if both strides are equal to `1`...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				Y[ iy ] = ( alpha * X[ ix ] ) + ( beta * Y[ iy ] );
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return;
		}
		for ( i = m; i < N; i += M ) {
			Y[ iy ] = ( alpha * X[ ix ] ) + ( beta * Y[ iy ] );
			Y[ iy+1 ] = ( alpha * X[ ix+1 ] ) + ( beta * Y[ iy+1 ] );
			Y[ iy+2 ] = ( alpha * X[ ix+2 ] ) + ( beta * Y[ iy+2 ] );
			Y[ iy+3 ] = ( alpha * X[ ix+3 ] ) + ( beta * Y[ iy+3 ] );
			Y[ iy+4 ] = ( alpha * X[ ix+4 ] ) + ( beta * Y[ iy+4 ] );
			ix += M;
			iy += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		Y[ iy ] = ( alpha * X[ ix ] ) + ( beta * Y[ iy ] );
		ix += strideX;
		iy += strideY;
	}
	return;
}
