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

#include "stdlib/blas/ext/base/dany.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Tests whether at least one element in a double-precision floating-point strided array is truthy.
*
* @param N          number of indexed elements
* @param X          input array
* @param strideX    stride length
* @return           boolean result
*/
bool API_SUFFIX(stdlib_strided_dany)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dany_ndarray)( N, X, strideX, ox );
}

/**
* Tests whether at least one element in a double-precision floating-point strided array is truthy using alternative indexing semantics.
*
* @param N          number of indexed elements
* @param X          input array
* @param strideX    stride length
* @param offsetX    starting index
* @return           boolean result
*/
bool API_SUFFIX(stdlib_strided_dany_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return false;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( X[ ix ] != 0.0 && !stdlib_base_is_nan( X[ ix ] ) ) {
			return true;
		}
		ix += strideX;
	}
	return false;
}
