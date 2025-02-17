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

#include "stdlib/stats/base/dsemtk.h"
#include "stdlib/stats/base/dvariancetk.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Computes the standard error of the mean for a double-precision floating-point strided array using a one-pass textbook algorithm.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dsemtk)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dsemtk_ndarray)( N, correction, X, strideX, ox );
}

/**
* Computes the standard error of the mean for a double-precision floating-point strided array using a one-pass textbook algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dsemtk_ndarray)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	return stdlib_base_sqrt( API_SUFFIX(stdlib_strided_dvariancetk_ndarray)( N, correction, X, strideX, offsetX ) / (double)N );
}
