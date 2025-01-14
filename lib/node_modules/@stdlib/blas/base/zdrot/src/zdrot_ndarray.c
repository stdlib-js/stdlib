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
#include "stdlib/blas/base/shared.h"

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
	double *zx = (double *)ZX;
	double *zy = (double *)ZY;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT sx;
	CBLAS_INT sy;
	CBLAS_INT i;
	double tmp;

	if ( N <= 0 ) {
		return;
	}
	sx = strideX * 2;
	sy = strideY * 2;
	ix = offsetX * 2;
	iy = offsetY * 2;
	for ( i = 0; i < N; i++ ) {
		tmp = ( c*zx[ ix ] ) + ( s*zy[ iy ] );
		zy[ iy ] = ( c*zy[ iy ] ) - ( s*zx[ ix ] );
		zx[ ix ] = tmp;

		tmp = ( c*zx[ ix+1 ] ) + ( s*zy[ iy+1 ] );
		zy[ iy+1 ] = ( c*zy[ iy+1 ] ) - ( s*zx[ ix+1 ] );
		zx[ ix+1 ] = tmp;

		ix += sx;
		iy += sy;
	}
	return;
}
