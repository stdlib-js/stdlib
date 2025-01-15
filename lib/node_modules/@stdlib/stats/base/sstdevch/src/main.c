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

#include "stdlib/stats/base/sstdevch.h"
#include "stdlib/stats/base/svariancech.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
float API_SUFFIX(stdlib_strided_sstdevch)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_sstdevch_ndarray)( N, correction, X, strideX, ox );
}

/**
* Computes the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
float API_SUFFIX(stdlib_strided_sstdevch_ndarray)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	return stdlib_base_sqrtf( API_SUFFIX(stdlib_strided_svariancech_ndarray)( N, correction, X, strideX, offsetX ) );
}
