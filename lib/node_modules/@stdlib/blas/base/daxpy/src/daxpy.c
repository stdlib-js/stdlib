/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/blas/base/daxpy.h"
#include "stdlib/blas/base/shared.h"

/**
* Multiplies a vector `X` by a constant and adds the result to `Y`.
*
* @param N        number of indexed elements
* @param alpha    scalar
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void c_daxpy( const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	CBLAS_INT m;

	if ( N <= 0 ) {
		return;
	}
	// If `alpha` is `0`, then `y` is unchanged...
	if ( alpha == 0.0 ) {
		return;
	}
	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % 4;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				Y[ i ] += alpha * X[ i ];
			}
			if ( N < 4 ) {
				return;
			}
		}
		for ( i = m; i < N; i += 4 ) {
			Y[ i ] += alpha * X[ i ];
			Y[ i+1 ] += alpha * X[ i+1 ];
			Y[ i+2 ] += alpha * X[ i+2 ];
			Y[ i+3 ] += alpha * X[ i+3 ];
		}
		return;
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
		Y[ iy ] += alpha * X[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return;
}
