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

#include "stdlib/blas/ext/base/cfill_equal.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Replaces single-precision complex floating-point strided array elements equal to a provided search element with a specified scalar constant.
*
* @param N             number of indexed elements
* @param searchElement search element
* @param alpha         scalar constant
* @param X             input array
* @param strideX       stride length
*/
void API_SUFFIX(stdlib_strided_cfill_equal)( const CBLAS_INT N, const stdlib_complex64_t searchElement, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_cfill_equal_ndarray)( N, searchElement, alpha, X, strideX, ox );
}

/**
* Replaces single-precision complex floating-point strided array elements equal to a provided search element with a specified scalar constant using alternative indexing semantics.
*
* @param N             number of indexed elements
* @param searchElement search element
* @param alpha         scalar constant
* @param X             input array
* @param strideX       stride length
* @param offsetX       starting index
*/
void API_SUFFIX(stdlib_strided_cfill_equal_ndarray)( const CBLAS_INT N, const stdlib_complex64_t searchElement, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	stdlib_complex64_t v;
	CBLAS_INT ix;
	CBLAS_INT i;
	float re;
	float im;

	if ( N <= 0 ) {
		return;
	}
	re = stdlib_complex64_real( searchElement );
	im = stdlib_complex64_imag( searchElement );
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( stdlib_complex64_real( v ) == re && stdlib_complex64_imag( v ) == im ) {
			X[ ix ] = alpha;
		}
		ix += strideX;
	}
	return;
}
