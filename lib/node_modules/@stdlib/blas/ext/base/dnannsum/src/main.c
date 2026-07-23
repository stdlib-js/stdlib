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

#include "stdlib/blas/ext/base/dnannsum.h"
#include "stdlib/blas/ext/base/dnannsumkbn.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @param n       pointer for storing the number of non-NaN elements
* @return        output value
*/
double API_SUFFIX(stdlib_strided_dnannsum)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, CBLAS_INT *n ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnannsum_ndarray)( N, X, strideX, ox, n );
}

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @param n        pointer for storing the number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsum_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n ) {
	return API_SUFFIX(stdlib_strided_dnannsumkbn_ndarray)( N, X, strideX, offsetX, n );
}
