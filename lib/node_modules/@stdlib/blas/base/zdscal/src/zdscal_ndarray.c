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

#include "stdlib/blas/base/zdscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/base/scale.h"

/**
* Scales a double-precision complex floating-point vector by a double-precision floating-point constant using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting index for X
*/
void API_SUFFIX(c_zdscal_ndarray)( const CBLAS_INT N, const double alpha, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	stdlib_complex128_t *x = (stdlib_complex128_t *)X;
	CBLAS_INT ix;
	CBLAS_INT i;

	if ( N <= 0 || alpha == 1.0 ) {
		return;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		x[ ix ] = stdlib_base_complex128_scale( alpha, x[ ix ] );
		ix += strideX;
	}
	return;
}
