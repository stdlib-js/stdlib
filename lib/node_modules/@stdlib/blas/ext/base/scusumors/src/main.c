/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/scusumors.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation.
*
* @param N        number of indexed elements
* @param sum      initial sum
* @param X        input array
* @param strideX  stride length for X
* @param Y        output array
* @param strideY  stride length for Y
*/
void API_SUFFIX(stdlib_strided_scusumors)( const CBLAS_INT N, const float sum, const float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_scusumors_ndarray)( N, sum, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param sum      initial sum
* @param X        input array
* @param strideX  stride length for X
* @param offsetX  starting index for X
* @param Y        output array
* @param strideY  stride length for Y
* @param offsetY  starting index for Y
*/
void API_SUFFIX(stdlib_strided_scusumors_ndarray)( const CBLAS_INT N, const float sum, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	float s;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	s = sum;
	for ( i = 0; i < N; i++ ) {
		s += X[ ix ];
		Y[ iy ] = s;
		ix += strideX;
		iy += strideY;
	}
	return;
}
