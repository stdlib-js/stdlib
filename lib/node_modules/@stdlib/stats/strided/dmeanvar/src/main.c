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

#include "stdlib/stats/strided/dmeanvar.h"
#include "stdlib/stats/strided/dmeanvarpn.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the mean and variance of a double-precision floating-point strided array.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     X stride length
* @param Out         output array
* @param strideOut   Out stride length
*/
void API_SUFFIX(stdlib_strided_dmeanvar)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, double *Out, const CBLAS_INT strideOut ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oo = ( strideOut >= 0 ) ? 0 : -strideOut;
	API_SUFFIX(stdlib_strided_dmeanvar_ndarray)( N, correction, X, strideX, ox, Out, strideOut, oo  );
	return;
}

/**
* Computes the mean and variance of a double-precision floating-point strided array using alternative indexing semantics.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     X stride length
* @param offsetX     starting index for X
* @param Out         output array
* @param strideOut   Out stride length
* @param offsetOut   starting index for Out
*/
void API_SUFFIX(stdlib_strided_dmeanvar_ndarray)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	API_SUFFIX(stdlib_strided_dmeanvarpn_ndarray)( N, correction, X, strideX, offsetX, Out, strideOut, offsetOut );
	return;
}
