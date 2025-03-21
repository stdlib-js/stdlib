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

#include "stdlib/stats/base/dnanmeanpw.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/ext/base/dnannsumpw.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnanmeanpw)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnanmeanpw_ndarray)( N, X, strideX, ox );
}

/**
* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnanmeanpw_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT n; // variable to store number of non `NaN` elements

	const double sum = API_SUFFIX(stdlib_strided_dnannsumpw_ndarray)( N, X, strideX, offsetX, &n );
	return sum / (double)n;
}
