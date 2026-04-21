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

#include "stdlib/blas/ext/base/znancount.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         number of non-`NaN` elements
*/
CBLAS_INT API_SUFFIX(stdlib_strided_znancount)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_znancount_ndarray)( N, X, strideX, ox );
}

/**
* Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         number of non-`NaN` elements
*/
CBLAS_INT API_SUFFIX(stdlib_strided_znancount_ndarray)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	const double *view = (const double *)X;
	CBLAS_INT count;
	CBLAS_INT sx;
	CBLAS_INT ix;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return 0;
	}
	ix = offsetX * 2;
	sx = strideX * 2;
	count = 0;
	for ( i = 0; i < N; i++ ) {
		if ( !stdlib_base_is_nan( view[ ix ] ) && !stdlib_base_is_nan( view[ ix+1 ] ) ) {
			count += 1;
		}
		ix += sx;
	}
	return count;
}
