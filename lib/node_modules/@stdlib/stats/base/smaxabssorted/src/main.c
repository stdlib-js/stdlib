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

#include "stdlib/stats/base/smaxabssorted.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the maximum absolute value of a sorted single-precision floating-point strided array.
*
* @param N        number of indexed elements
* @param X        sorted input array
* @param strideX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_smaxabssorted)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_smaxabssorted_ndarray)( N, X, strideX, ox );
}

/**
* Computes the maximum absolute value of a sorted single-precision floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        sorted input array
* @param strideX  stride length
* @param offsetX  starting index for X
* @return         output value
*/
float API_SUFFIX(stdlib_strided_smaxabssorted_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	float v1;
	float v2;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return X[ 0 ];
	}
	v1 = X[ offsetX ];
	v2 = X[ ( ( N - 1 ) * strideX ) + offsetX ];
	if ( stdlib_base_is_nanf( v1 ) || stdlib_base_is_nanf( v2 ) ) {
		return 0.0f / 0.0f; // NaN
	}
	v1 = stdlib_base_absf( v1 );
	v2 = stdlib_base_absf( v2 );
	if ( v1 > v2 ) {
		return v1;
	}
	return v2;
}
