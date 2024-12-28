/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/snanminabs.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/absf.h"

/**
* Computes the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_snanminabs)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_snanminabs_ndarray)( N, X, strideX, ox );
}

/**
* Computes the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index for X
* @return         output value
*/
float API_SUFFIX(stdlib_strided_snanminabs_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	float min;
	float v;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return stdlib_base_absf( X[ offsetX ] );
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			break;
		}
		ix += strideX;
	}
	if ( i == N ) {
		return 0.0f / 0.0f; // NaN
	}
	min = stdlib_base_absf( v );
	i += 1;
	for (; i < N; i++ ) {
		ix += strideX;
		v = stdlib_base_absf( X[ ix ] );
		if ( stdlib_base_is_nanf( v ) ) {
			continue;
		}
		if ( v < min ) {
			min = v;
		}
	}
	return min;
}
