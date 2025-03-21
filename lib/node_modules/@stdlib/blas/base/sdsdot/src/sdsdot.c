/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/**
* Compute the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @see <a href="http://www.netlib.org/lapack/expolore-html/df/d28/group__single__blas__level1.html">sdsdot</a>
*/
#include "stdlib/blas/base/sdsdot.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @param N        number of indexed elements
* @param scalar   scalar constant added to the dot product
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         dot product
*/
float API_SUFFIX(c_sdsdot)( const CBLAS_INT N, const float scalar, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX(c_sdsdot_ndarray)( N, scalar, X, strideX, ox, Y, strideY, oy );
}

