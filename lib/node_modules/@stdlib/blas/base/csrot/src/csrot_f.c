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

#include "stdlib/blas/base/csrot.h"
#include "stdlib/blas/base/csrot_fortran.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Applies a plane rotation.
*
* @param N        number of indexed elements
* @param X       first input array
* @param strideX  X stride length
* @param Y       second input array
* @param strideY  Y stride length
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_csrot)( const CBLAS_INT N, void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY, const float c, const float s ) {
	csrot( &N, X, &strideX, Y, &strideY, &c, &s );
}

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X       first input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y       second input array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_csrot_ndarray)( const CBLAS_INT N, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, const float c, const float s ) {
	stdlib_complex64_t *x = (stdlib_complex64_t *)X;
	stdlib_complex64_t *y = (stdlib_complex64_t *)Y;

	x += stdlib_strided_min_view_buffer_index( N, strideX, offsetX );
	y += stdlib_strided_min_view_buffer_index( N, strideY, offsetY );
	csrot( &N, (void *)x, &strideX, (void *)y, &strideY, &c, &s );
}
