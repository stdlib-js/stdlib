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

#include "stdlib/blas/base/zswap.h"
#include "stdlib/blas/base/zswap_fortran.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Interchanges two complex double-precision floating-point vectors.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param Y        second input array
* @param strideY  Y stride length
*/
void API_SUFFIX(c_zswap)( const CBLAS_INT N, void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY ) {
	zswap( &N, X, &strideX, Y, &strideY );
}

/**
* Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second input array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
*/
void API_SUFFIX(c_zswap_ndarray)( const CBLAS_INT N, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	stdlib_complex128_t *zx = (stdlib_complex128_t *)X;
	stdlib_complex128_t *zy = (stdlib_complex128_t *)Y;

	zx += stdlib_strided_min_view_buffer_index( N, strideX, offsetX );
	zy += stdlib_strided_min_view_buffer_index( N, strideY, offsetY );
	zswap( &N, (void *)zx, &strideX, (void *)zy, &strideY );
}
