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

/**
* Compute the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @see <a href="http://www.netlib.org/lapack/expolore-html/df/d28/group__single__blas__level1.html">sdsdot</a>
*/
#include "stdlib/blas/base/sdsdot.h"
#include "stdlib/blas/base/sdsdot_fortran.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* Arguments are passed by reference to a Fortran subroutine implementing `sdsdot`.
*
* @param N        number of indexed elements
* @param scalar   scalar constant added to the dot product
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         dot product
*/
float API_SUFFIX(c_sdsdot)( const CBLAS_INT N, const float scalar, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY ) {
	float dot;
	sdsdotsub( &N, &scalar, X, &strideX, Y, &strideY, &dot );
	return dot;
}

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation using alternative indexing semantics.
*
* Arguments are passed by reference to a Fortran subroutine implementing `sdsdot`.
*
* @param N        number of indexed elements
* @param scalar   scalar constant added to the dot product
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         dot product
*/
float API_SUFFIX(c_sdsdot_ndarray)( const CBLAS_INT N, const float scalar, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	float dot;

	X += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	Y += stdlib_strided_min_view_buffer_index( N, strideY, offsetY ); // adjust array pointer
	sdsdotsub( &N, &scalar, X, &strideX, Y, &strideY, &dot );
	return dot;
}
