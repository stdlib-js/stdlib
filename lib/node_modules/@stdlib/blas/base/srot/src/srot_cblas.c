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

#include "stdlib/blas/base/srot.h"
#include "stdlib/blas/base/srot_cblas.h"
#include "stdlib/blas/base/shared.h"

/**
* Applies a plane rotation.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_srot)( const CBLAS_INT N, float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY, const float c, const float s ) {
	API_SUFFIX(cblas_srot)( N, X, strideX, Y, strideY, c, s );
}
