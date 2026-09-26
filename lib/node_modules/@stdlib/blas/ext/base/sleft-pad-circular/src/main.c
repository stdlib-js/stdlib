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

#include "stdlib/blas/ext/base/sleft_pad_circular.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Prepends elements to a single-precision floating-point strided array by circularly repeating existing elements.
*
* @param N       number of indexed elements in X
* @param k       number of elements to pad
* @param X       input array
* @param strideX stride length for X
* @param Y       output array
* @param strideY stride length for Y
*/
void API_SUFFIX(stdlib_strided_sleft_pad_circular)( const CBLAS_INT N, CBLAS_INT k, const float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox;
	CBLAS_INT oy;

	if ( k < 0 ) {
		k = 0;
	}
	ox = stdlib_strided_stride2offset( N, strideX );
	oy = stdlib_strided_stride2offset( N + k, strideY );
	API_SUFFIX(stdlib_strided_sleft_pad_circular_ndarray)( N, k, X, strideX, ox, Y, strideY, oy );
}

/**
* Prepends elements to a single-precision floating-point strided array by circularly repeating existing elements using alternative indexing semantics.
*
* @param N       number of indexed elements in X
* @param k       number of elements to pad
* @param X       input array
* @param strideX stride length for X
* @param offsetX starting index for X
* @param Y       output array
* @param strideY stride length for Y
* @param offsetY starting index for Y
*/
void API_SUFFIX(stdlib_strided_sleft_pad_circular_ndarray)( const CBLAS_INT N, CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT M;
	CBLAS_INT i;
	CBLAS_INT j;

	if ( N <= 0 ) {
		return;
	}
	if ( k < 0 ) {
		k = 0;
	}
	// Resolve the index of the first element in the left padding:
	j = k % N;
	if ( j > 0 ) {
		j = N - j;
	}
	M = N + k;
	ix = offsetX + ( j * strideX );
	iy = offsetY;
	for ( i = 0; i < M; i++ ) {
		Y[ iy ] = X[ ix ];
		iy += strideY;
		j += 1;
		if ( j == N ) {
			j = 0;
			ix = offsetX;
		} else {
			ix += strideX;
		}
	}
}
