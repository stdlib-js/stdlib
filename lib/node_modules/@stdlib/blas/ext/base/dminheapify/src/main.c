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

#include "stdlib/blas/ext/base/dminheapify.h"
#include "stdlib/blas/ext/base/dminheap_sift_down.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Converts a double-precision floating-point strided array to a min-heap.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_dminheapify)( const CBLAS_INT N, double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dminheapify_ndarray)( N, X, strideX, ox );
}

/**
* Converts a double-precision floating-point strided array to a min-heap using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dminheapify_ndarray)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	for ( i = (N-1)/2; i >= 0; i-- ) {
		API_SUFFIX(stdlib_strided_dminheap_sift_down_ndarray)( N, i, X[ offsetX+(i*strideX) ], X, strideX, offsetX );
	}
	return;
}
