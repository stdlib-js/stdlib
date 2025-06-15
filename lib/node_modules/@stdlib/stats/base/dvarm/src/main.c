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

#include "stdlib/stats/base/dvarm.h"
#include "stdlib/stats/strided/dvarmpn.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean.
*
* @param N            number of indexed elements
* @param mean         mean
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvarm)( const CBLAS_INT N, const double mean, const double correction, const double *X, const CBLAS_INT strideX ) {
	return API_SUFFIX(stdlib_strided_dvarmpn)( N, mean, correction, X, strideX );
}

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean and using alternative indexing semantics.
*
* @param N            number of indexed elements
* @param mean         mean
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvarm_ndarray)( const CBLAS_INT N, const double mean, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	return API_SUFFIX(stdlib_strided_dvarmpn_ndarray)( N, mean, correction, X, strideX, offsetX );
}
