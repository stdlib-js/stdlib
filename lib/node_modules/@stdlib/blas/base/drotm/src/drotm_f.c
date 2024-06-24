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

#include "stdlib/blas/base/drotm.h"
#include "stdlib/blas/base/drotm_fortran.h"
#include "stdlib/blas/base/shared.h"

/**
* Applies a modified Givens plane rotation.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param Y        second input array
* @param strideY  Y stride length
* @param param    parameters for the modified Givens transformation
*/
void API_SUFFIX(c_drotm)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY, const double *param ) {
	drotm( &N, X, &strideX, Y, &strideY, param );
}
