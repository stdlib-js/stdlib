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

#include "stdlib/stats/base/dminsorted.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_negative_zero.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the minimum value of a sorted double-precision floating-point strided array.
*
* @param N        number of indexed elements
* @param X        sorted input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dminsorted)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dminsorted_ndarray)( N, X, strideX, ox );
}

/**
* Computes the minimum value of a sorted double-precision floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        sorted input array
* @param strideX  stride length
* @param offsetX  starting index for X
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dminsorted_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	double v1;
	double v2;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return X[ 0 ];
	}
	v1 = X[ offsetX ];
	v2 = X[ ( (N-1)*strideX ) + offsetX ];
	if ( stdlib_base_is_nan( v1 ) || stdlib_base_is_nan( v2 ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( v1 == v2 ) {
		if ( stdlib_base_is_negative_zero( v1 ) || stdlib_base_is_negative_zero( v2 ) ) {
			return -0.0;
		}
		return v1;
	}
	if ( v1 < v2 ) {
		return v1;
	}
	return v2;
}
