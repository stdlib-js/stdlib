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
#include "stdlib/math/base/ops/cmulf.h"
#include <stdint.h>

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @param N        number of indexed elements
* @param ca       scalar constant
* @param CX       input array
* @param strideX  CX stride length
*/
void API_SUFFIX(c_cscal)( const CBLAS_INT N, const stdlib_complex64_t ca, void *CX, const CBLAS_INT strideX ) {
	stdlib_complex64_t z;
	CBLAS_INT i;

	uint8_t *ip1 = (uint8_t *)CX;
	int64_t is1 = 8 * strideX;

	if ( N <= 0 || strideX <= 0 ) {
		return;
	}
	for ( i = 0; i < N; i++, ip1 += is1 ) {
		z = *( (stdlib_complex64_t *)ip1 );
		*( (stdlib_complex64_t *)ip1 ) = stdlib_base_cmulf( ca, z );
	}
	return;
}
