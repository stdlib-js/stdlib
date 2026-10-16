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

#include "stdlib/blas/ext/base/ssome.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Tests whether a single-precision floating-point strided array contains at least `k` truthy elements.
*
* @param N          number of indexed elements
* @param k          minimum number of truthy elements
* @param X          input array
* @param strideX    stride length for X
* @return           boolean result
*/
bool API_SUFFIX(stdlib_strided_ssome)( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_ssome_ndarray)( N, k, X, strideX, ox );
}

/**
* Tests whether a single-precision floating-point strided array contains at least `k` truthy elements using alternative indexing semantics.
*
* @param N          number of indexed elements
* @param k          minimum number of truthy elements
* @param X          input array
* @param strideX    stride length for X
* @param offsetX    starting index for X
* @return           boolean result
*/
bool API_SUFFIX(stdlib_strided_ssome_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT cnt;
	CBLAS_INT ix;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return false;
	}
	if ( strideX == 0 ) {
		if ( X[ offsetX ] != 0.0f && !stdlib_base_is_nanf( X[ offsetX ] ) ) {
			return k <= N;
		}
		return k <= 0;
	}
	cnt = 0;
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( X[ ix ] != 0.0f && !stdlib_base_is_nanf( X[ ix ] ) ) {
			cnt += 1;
			if ( cnt >= k ) {
				return true;
			}
		}
		ix += strideX;
	}
	return false;
}
