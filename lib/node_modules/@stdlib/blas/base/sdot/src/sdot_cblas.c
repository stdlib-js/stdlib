/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/blas/base/sdot.h"
#include "stdlib/blas/base/sdot_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Computes the dot product of two single-precision floating-point vectors.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         the dot product
*/
float API_SUFFIX(c_sdot)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY ) {
	return API_SUFFIX(cblas_sdot)( N, X, strideX, Y, strideY );
}

/**
* Computes the dot product of two single-precision floating-point vectors using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         the dot product
*/
float API_SUFFIX(c_sdot_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	X += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	Y += stdlib_strided_min_view_buffer_index( N, strideY, offsetY ); // adjust array pointer
	return API_SUFFIX(cblas_sdot)( N, X, strideX, Y, strideY );
}
