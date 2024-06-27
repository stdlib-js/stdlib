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

#include "stdlib/blas/base/dswap.h"
#include "stdlib/blas/base/dswap_fortran.h"
#include "stdlib/blas/base/shared.h"

/**
* Interchanges two double-precision floating-point vectors.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param Y        second input array
* @param strideY  Y stride length
*/
void API_SUFFIX(c_dswap)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY ) {
	dswap( &N, X, &strideX, Y, &strideY );
}
