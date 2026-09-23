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

#include "stdlib/blas/ext/base/dfirst_index_less_than.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Returns the index of the first element in a double-precision floating-point strided array which is less than a corresponding element in another double-precision floating-point strided array.
*
* @param N             number of indexed elements
* @param X             first input array
* @param strideX       stride length for X
* @param Y             second input array
* @param strideY       stride length for Y
* @return              index
*/
CBLAS_INT API_SUFFIX(stdlib_strided_dfirst_index_less_than)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX(stdlib_strided_dfirst_index_less_than_ndarray)( N, X, strideX, ox, Y, strideY, oy );
}

/**
* Returns the index of the first element in a double-precision floating-point strided array which is less than a corresponding element in another double-precision floating-point strided array using alternative indexing semantics.
*
* @param N             number of indexed elements
* @param X             first input array
* @param strideX       stride length for X
* @param offsetX       starting index for X
* @param Y             second input array
* @param strideY       stride length for Y
* @param offsetY       starting index for Y
* @return              index
*/
CBLAS_INT API_SUFFIX(stdlib_strided_dfirst_index_less_than_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return -1;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		if ( X[ ix ] < Y[ iy ] ) {
			return i;
		}
		ix += strideX;
		iy += strideY;
	}
	return -1;
}
