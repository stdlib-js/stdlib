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

#include "stdlib/blas/ext/base/sindex_of.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Returns the first index of a specified search element in a single-precision floating-point strided array.
*
* @param N             number of indexed elements
* @param searchElement search element
* @param X             input array
* @param strideX       stride length
* @return              index
*/
CBLAS_INT API_SUFFIX(stdlib_strided_sindex_of)( const CBLAS_INT N, const float searchElement, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_sindex_of_ndarray)( N, searchElement, X, strideX, ox );
}

/**
* Returns the first index of a specified search element in a single-precision floating-point strided array using alternative indexing semantics.
*
* @param N             number of indexed elements
* @param searchElement search element
* @param X             input array
* @param strideX       stride length
* @param offsetX       starting index
* @return              index
*/
CBLAS_INT API_SUFFIX(stdlib_strided_sindex_of_ndarray)( const CBLAS_INT N, const float searchElement, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return -1;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( X[ ix ] == searchElement ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}
