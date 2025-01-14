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

#include "stdlib/blas/base/dswap.h"
#include "stdlib/blas/base/shared.h"

static const CBLAS_INT M = 3;

/**
* Interchanges two single-precision floating-point vectors using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second input array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
*/
void API_SUFFIX(c_dswap_ndarray)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	CBLAS_INT m;
	double tmp;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;

	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % M;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				tmp = X[ ix ];
				X[ ix ] = Y[ iy ];
				Y[ iy ] = tmp;
				ix += strideX;
				iy += strideY;
			}
			if ( N < M ) {
				return;
			}
		}
		for ( i = m; i < N; i += M ) {
			tmp = X[ ix ];
			X[ ix ] = Y[ iy ];
			Y[ iy ] = tmp;

			tmp = X[ ix+1 ];
			X[ ix+1 ] = Y[ iy+1 ];
			Y[ iy+1 ] = tmp;

			tmp = X[ ix+2 ];
			X[ ix+2 ] = Y[ iy+2 ];
			Y[ iy+2 ] = tmp;

			ix += M;
			iy += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		tmp = X[ ix ];
		X[ ix ] = Y[ iy ];
		Y[ iy ] = tmp;
		ix += strideX;
		iy += strideY;
	}
	return;
}
