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

#include "stdlib/blas/base/zdrot.h"
#include "stdlib/blas/base/zdrot_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Applies a plane rotation.
*
* @param N        number of indexed elements
* @param ZX       first input array
* @param strideX  ZX stride length
* @param ZY       second input array
* @param strideY  ZY stride length
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_zdrot)( const CBLAS_INT N, void *ZX, const CBLAS_INT strideX, void *ZY, const CBLAS_INT strideY, const double c, const double s ) {
	API_SUFFIX(cblas_zdrot)( N, ZX, strideX, ZY, strideY, c, s );
}

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param ZX       first input array
* @param strideX  ZX stride length
* @param offsetX  starting index for ZX
* @param ZY       second input array
* @param strideY  ZY stride length
* @param offsetY  starting index for ZY
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_zdrot_ndarray)( const CBLAS_INT N, void *ZX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *ZY, const CBLAS_INT strideY, const CBLAS_INT offsetY, const double c, const double s ) {
	stdlib_complex128_t *zx = (stdlib_complex128_t *)ZX;
	stdlib_complex128_t *zy = (stdlib_complex128_t *)ZY;
	zx += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	zy += stdlib_strided_min_view_buffer_index( N, strideY, offsetY ); // adjust array pointer
	API_SUFFIX(cblas_zdrot)( N, (void *)zx, strideX, (void *)zy, strideY, c, s );
}
