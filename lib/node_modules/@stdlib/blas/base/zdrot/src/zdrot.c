/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/blas/base/zdrot.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Applies a plane rotation.
*
* @param N        number of indexed elements
* @param ZX       first input array
* @param strideX  ZX stride length
* @param ZY       second input array
* @param strideY  ZY stride length
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_zdrot)( const CBLAS_INT N, void *ZX, const CBLAS_INT strideX, void *ZY, const CBLAS_INT strideY, const double c, const double s ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(c_zdrot_ndarray)( N, ZX, strideX, ox, ZY, strideY, oy, c, s );
}
