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

#include "stdlib/blas/base/caxpy.h"
#include "stdlib/blas/base/scabs1.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/base/add.h"
#include "stdlib/complex/float32/base/mul.h"
#include <stdint.h>

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param ca       scalar constant
* @param CX       input array
* @param strideX  CX stride length
* @param offsetX  starting index for CX
* @param CY       output array
* @param strideY  CY stride length
* @param offsetY  starting index for CY
*/
void API_SUFFIX(c_caxpy_ndarray)( const CBLAS_INT N, const stdlib_complex64_t ca, const void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *CY, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	stdlib_complex64_t x;
	stdlib_complex64_t y;
	int64_t is1;
	int64_t is2;
	int64_t i;

	if ( N <= 0 ) {
		return;
	}
	if ( c_scabs1( ca ) == 0.0f ) {
		return;
	}
	stdlib_complex64_t *ip1 = (stdlib_complex64_t *)CX;
	stdlib_complex64_t *ip2 = (stdlib_complex64_t *)CY;
	is1 = (int64_t)strideX;
	is2 = (int64_t)strideY;
	ip1 += offsetX;
	ip2 += offsetY;
	for ( i = 0; i < N; i++, ip1 += is1, ip2 += is2 ) {
		x = *ip1;
		y = *ip2;
		*ip2 = stdlib_base_complex64_add( stdlib_base_complex64_mul( ca, x ), y );
	}
	return;
}
