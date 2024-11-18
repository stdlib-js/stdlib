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

#include "stdlib/blas/base/csrot.h"
#include "stdlib/blas/base/shared.h"

/**
* Applies a plane rotation.
*
* @param N        number of indexed elements
* @param CX       first input array
* @param strideX  CX stride length
* @param offsetX  starting index for CX
* @param CY       second input array
* @param strideY  CY stride length
* @param offsetY  starting index for CY
* @param c        cosine of the angle of rotation
* @param s        sine of the angle of rotation
*/
void API_SUFFIX(c_csrot_ndarray)( const CBLAS_INT N, void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *CY, const CBLAS_INT strideY, const CBLAS_INT offsetY, const float c, const float s ) {
	float *x = (float *)CX;
	float *y = (float *)CY;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT sx;
	CBLAS_INT sy;
	CBLAS_INT i;
	float tmp;

	if ( N <= 0 ) {
		return;
	}
	sx = strideX * 2;
	sy = strideY * 2;
	ix = offsetX * 2;
	iy = offsetY * 2;
	for ( i = 0; i < N; i++ ) {
		tmp = ( c*x[ ix ] ) + ( s*y[ iy ] );
		y[ iy ] = ( c*y[ iy ] ) - ( s*x[ ix ] );
		x[ ix ] = tmp;

		tmp = ( c*x[ ix+1 ] ) + ( s*y[ iy+1 ] );
		y[ iy+1 ] = ( c*y[ iy+1 ] ) - ( s*x[ ix+1 ] );
		x[ ix+1 ] = tmp;

		ix += sx;
		iy += sy;
	}
	return;
}
