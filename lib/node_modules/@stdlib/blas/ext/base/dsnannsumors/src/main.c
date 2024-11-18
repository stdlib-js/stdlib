/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/dsnannsumors.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param n        number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dsnannsumors)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, CBLAS_INT *n ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dsnannsumors_ndarray)( N, X, strideX, ox, n );
}

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation with extended accumulation and alternative indexing semantics and returning an extended precision result.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @param n        number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dsnannsumors_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n ) {
	double sum;
	CBLAS_INT ix;
	CBLAS_INT i;

	sum = 0.0;
	*n = 0;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nanf( X[ ix ] ) ) {
			return sum;
		}
		*n += N;
		return X[ ix ] * N;
	}
	for ( i = 0; i < N; i++ ) {
		if ( !stdlib_base_is_nanf( X[ ix ] ) ) {
			sum += (double)X[ ix ];
			*n += 1;
		}
		ix += strideX;
	}
	return sum;
}
