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

#include "stdlib/blas/base/dsdot.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation and result.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         the dot product
*/
double API_SUFFIX(c_dsdot)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY ) {
	double dot;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT m;
	CBLAS_INT i;

	dot = 0.0;
	if ( N <= 0 ) {
		return dot;
	}
	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % 5;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += (double)X[ i ] * (double)Y[ i ];
			}
		}
		if ( N < 5 ) {
			return dot;
		}
		for ( i = m; i < N; i += 5 ) {
			dot += ( (double)X[i]*(double)Y[i] ) + ( (double)X[i+1]*(double)Y[i+1]) + ( (double)X[i+2]*(double)Y[i+2] ) + ( (double)X[i+3]*(double)Y[i+3] ) + ( (double)X[i+4]*(double)Y[i+4] );
		}
		return dot;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		dot += (double)X[ ix ] * (double)Y[ iy ];
		ix += strideX;
		iy += strideY;
	}
	return dot;
}

