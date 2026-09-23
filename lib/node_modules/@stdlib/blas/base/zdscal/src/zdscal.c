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

#include "stdlib/blas/base/zdscal.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Scales a double-precision complex floating-point vector by a double-precision floating-point constant.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  X stride length
*/
void API_SUFFIX(c_zdscal)( const CBLAS_INT N, const double alpha, void *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(c_zdscal_ndarray)( N, alpha, X, strideX, ox );
}
