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

#include "stdlib/blas/base/dznrm2.h"
#include "stdlib/blas/base/dznrm2_fortran.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the L2-norm of a complex double-precision floating-point vector.
*
* @param N        number of indexed elements
* @param ZX       input array
* @param strideX  ZX stride length
* @return         L2-norm
*/
double API_SUFFIX(c_dznrm2)( const CBLAS_INT N, const void *ZX, const CBLAS_INT strideX ) {
	double nrm2;
	dznrm2sub( &N, ZX, &strideX, &nrm2 );
	return nrm2;
}
