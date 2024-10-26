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
#include "stdlib/blas/base/cscal_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @param N        number of indexed elements
* @param ca       scalar constant
* @param CX       input array
* @param strideX  CX stride length
*/
void API_SUFFIX(c_cscal)( const CBLAS_INT N, const stdlib_complex64_t ca, void *CX, const CBLAS_INT strideX ) {
	CBLAS_INT sx = strideX;
	if ( sx < 0 ) {
		sx = -sx;
	}
	API_SUFFIX(cblas_cscal)( N, ca, CX, sx );
}

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param ca       scalar constant
* @param CX       input array
* @param strideX  CX stride length
* @param offsetX  starting index for CX
*/
void API_SUFFIX(c_cscal_ndarray)( const CBLAS_INT N, const stdlib_complex64_t ca, void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	stdlib_complex64_t *cx = (stdlib_complex64_t *)CX;
	CBLAS_INT sx = strideX;

    cx += stdlib_strided_min_view_buffer_index( N, strideX, offsetX );
	if ( sx < 0 ) {
		sx = -sx;
	}
	API_SUFFIX(cblas_cscal)( N, ca, (void *)cx, sx );
}
