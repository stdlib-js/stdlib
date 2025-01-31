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
#include "stdlib/blas/base/caxpy_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
*
* @param N        number of indexed elements
* @param ca       scalar constant
* @param CX       input array
* @param strideX  CX stride length
* @param CY       output array
* @param strideY  CY stride length
*/
void API_SUFFIX(c_caxpy)( const CBLAS_INT N, const stdlib_complex64_t ca, const void *CX, const CBLAS_INT strideX, void *CY, const CBLAS_INT strideY ) {
	API_SUFFIX(cblas_caxpy)( N, ca, CX, strideX, CY, strideY );
}

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
	stdlib_complex64_t *cx = (stdlib_complex64_t *)CX;
	stdlib_complex64_t *cy = (stdlib_complex64_t *)CY;

	cx += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	cy += stdlib_strided_min_view_buffer_index( N, strideY, offsetY ); // adjust array pointer
	API_SUFFIX(cblas_caxpy)( N, ca, (void *)cx, sx, (void *)cy, sy );
}
