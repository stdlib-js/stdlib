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

#include "stdlib/blas/base/drot.h"
#include "stdlib/blas/base/drot_cblas.h"

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
void c_drot( const int N, double *X, const int strideX, double *Y, const int strideY, const double c, const double s ) {
	cblas_drot( N, X, strideX, Y, strideY, c, s );
}
