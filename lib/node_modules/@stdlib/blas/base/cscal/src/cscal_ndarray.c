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

#include "stdlib/blas/base/cscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/base/mul.h"
#include <stdint.h>

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @param N        number of indexed elements
* @param ca       scalar constant
* @param CX       input array
* @param strideX  CX stride length
* @param offsetX  starting index for CX
*/
void API_SUFFIX(c_cscal_ndarray)( const CBLAS_INT N, const stdlib_complex64_t ca, void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	stdlib_complex64_t z;
	int64_t is1;
	int64_t i;

	if ( N <= 0 ) {
		return;
	}
	stdlib_complex64_t *ip1 = (stdlib_complex64_t *)CX;
	is1 = (int64_t)strideX;
	ip1 += offsetX;
	for ( i = 0; i < N; i++, ip1 += is1 ) {
		z = *ip1;
		*ip1 = stdlib_base_complex64_mul( ca, z );
	}
	return;
}
