/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/base/zscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/base/mul.h"
#include <stdint.h>

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting index for X
*/
void API_SUFFIX(c_zscal_ndarray)( const CBLAS_INT N, const stdlib_complex128_t alpha, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	stdlib_complex128_t z;
	int64_t is1;
	int64_t i;

	if ( N <= 0 ) {
		return;
	}
	stdlib_complex128_t *ip1 = (stdlib_complex128_t *)X;
	is1 = (int64_t)strideX;
	ip1 += offsetX;
	for ( i = 0; i < N; i++, ip1 += is1 ) {
		z = *ip1;
		*ip1 = stdlib_base_complex128_mul( alpha, z );
	}
	return;
}
