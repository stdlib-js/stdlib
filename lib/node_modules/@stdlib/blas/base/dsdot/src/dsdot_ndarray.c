/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/blas/base/dsdot.h"
#include "stdlib/blas/base/shared.h"

static const CBLAS_INT M = 5;

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation and result and using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         dot product
*/
double API_SUFFIX(c_dsdot_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	double dot;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT m;
	CBLAS_INT i;

	dot = 0.0;
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
				dot += (double)X[ ix ] * (double)Y[ iy ];
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return dot;
		}
		for ( i = m; i < N; i += M ) {
			dot += ( (double)X[ ix ]*(double)Y[ iy ] ) + ( (double)X[ ix+1 ]*(double)Y[ iy+1 ]) + ( (double)X[ ix+2 ]*(double)Y[ iy+2 ] ) + ( (double)X[ ix+3 ]*(double)Y[ iy+3 ] ) + ( (double)X[ ix+4 ]*(double)Y[ iy+4 ] );
			ix += M;
			iy += M;
		}
		return dot;
	}
	for ( i = 0; i < N; i++ ) {
		dot += (double)X[ ix ] * (double)Y[ iy ];
		ix += strideX;
		iy += strideY;
	}
	return dot;
}

