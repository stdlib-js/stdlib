/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/**
* Compute the dot product of two single-precision floating-point vectors.
*
* @see <a href="http://www.netlib.org/lapack/expolore-html/df/d28/group__single__blas__level1.html">sdot</a>
*/
#include "stdlib/blas/base/sdot.h"
#include "stdlib/blas/base/shared.h"

static const CBLAS_INT M = 5;

/**
* Computes the dot product of two single-precision floating-point vectors using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         the dot product
*/
float API_SUFFIX(c_sdot_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT m;
	CBLAS_INT i;
	float dot;

	dot = 0.0f;
	if ( N <= 0 ) {
		return dot;
	}
	ix = offsetX;
	iy = offsetY;
	
	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % M;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += X[ ix ] * Y[ iy ];
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return dot;
		}
		for ( i = m; i < N; i += M ) {
			dot += ( X[ ix ]*Y[ iy ] ) + ( X[ ix+1 ]*Y[ iy+1 ] ) + ( X[ ix+2 ]*Y[ iy+2 ] ) + ( X[ ix+3 ]*Y[ iy+3 ] ) + ( X[ ix+4 ]*Y[ iy+4 ] );
			ix += M;
			iy += M;
		}
		return dot;
	}
	for ( i = 0; i < N; i++ ) {
		dot += X[ ix ] * Y[ iy];
		ix += strideX;
		iy += strideY;
	}
	return dot;
}

