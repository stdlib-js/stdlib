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

#include "stdlib/blas/ext/base/cone_to.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_cone_to)( const CBLAS_INT N, stdlib_complex64_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_cone_to_ndarray)( N, X, strideX, ox );
}

/**
* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_cone_to_ndarray)( const CBLAS_INT N, stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	float v;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	v = 1.0f;
	for ( i = 0; i < N; i++ ) {
		X[ ix ] = stdlib_complex64( v, 0.0f );
		v += 1.0f;
		ix += strideX;
	}
	return;
}
