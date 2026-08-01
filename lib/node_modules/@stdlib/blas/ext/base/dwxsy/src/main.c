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

#include "stdlib/blas/ext/base/dwxsy.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Subtracts elements of a double-precision floating-point strided array `Y` from the corresponding elements of a double-precision floating-point strided array `X` and assigns the results to elements in a double-precision floating-point strided array `W`.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  stride length for `X`
* @param Y        second input array
* @param strideY  stride length for `Y`
* @param W        output array
* @param strideW  stride length for `W`
*/
void API_SUFFIX(stdlib_strided_dwxsy)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY, double *W, const CBLAS_INT strideW ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	const CBLAS_INT ow = stdlib_strided_stride2offset( N, strideW );
	API_SUFFIX(stdlib_strided_dwxsy_ndarray)( N, X, strideX, ox, Y, strideY, oy, W, strideW, ow );
}

/**
* Subtracts elements of a double-precision floating-point strided array `Y` from the corresponding elements of a double-precision floating-point strided array `X` and assigns the results to elements in a double-precision floating-point strided array `W` using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param Y        second input array
* @param strideY  stride length for `Y`
* @param offsetY  starting index for `Y`
* @param W        output array
* @param strideW  stride length for `W`
* @param offsetW  starting index for `W`
*/
void API_SUFFIX(stdlib_strided_dwxsy_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, double *W, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT iw;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	iw = offsetW;

	// Use loop unrolling if all strides are equal to `1`...
	if ( strideX == 1 && strideY == 1 && strideW == 1 ) {
		m = N % 5;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				W[ iw ] = X[ ix ] - Y[ iy ];
				ix += strideX;
				iy += strideY;
				iw += strideW;
			}
		}
		if ( N < 5 ) {
			return;
		}
		for ( i = m; i < N; i += 5 ) {
			W[ iw ] = X[ ix ] - Y[ iy ];
			W[ iw+1 ] = X[ ix+1 ] - Y[ iy+1 ];
			W[ iw+2 ] = X[ ix+2 ] - Y[ iy+2 ];
			W[ iw+3 ] = X[ ix+3 ] - Y[ iy+3 ];
			W[ iw+4 ] = X[ ix+4 ] - Y[ iy+4 ];
			ix += 5;
			iy += 5;
			iw += 5;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		W[ iw ] = X[ ix ] - Y[ iy ];
		ix += strideX;
		iy += strideY;
		iw += strideW;
	}
	return;
}
