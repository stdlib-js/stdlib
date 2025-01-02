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

#include "stdlib/blas/ext/base/dsum.h"
#include "stdlib/blas/ext/base/dsumkbn.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the sum of double-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dsum)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dsum_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of double-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dsum_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	return API_SUFFIX(stdlib_strided_dsumkbn_ndarray)( N, X, strideX, offsetX );
}
