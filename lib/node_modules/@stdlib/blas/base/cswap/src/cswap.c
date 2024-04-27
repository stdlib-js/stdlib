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

#include "stdlib/blas/base/cswap.h"
#include "stdlib/blas/base/shared.h"

/**
* Interchanges two complex single-precision floating-point vectors.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param Y        second input array
* @param strideY  Y stride length
*/
void c_cswap( const CBLAS_INT N, void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY ) {
	float *x = (float *)X;
	float *y = (float *)Y;
	float tmp;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	CBLAS_INT j;

	if ( N <= 0 ) {
		return;
	}
	if ( strideX == 1 && strideY == 1 ) {
		for ( i = 0; i < N*2; i += 2 ) {
			tmp = x[ i ];
			x[ i ] = y[ i ];
			y[ i ] = tmp;

			j = i + 1;
			tmp = x[ j ];
			x[ j ] = y[ j ];
			y[ j ] = tmp;
		}
		return;
	}
	if ( strideX < 0 ) {
		ix = 2 * (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = 2 * (1-N) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		tmp = x[ ix ];
		x[ ix ] = y[ iy ];
		y[ iy ] = tmp;

		tmp = x[ ix+1 ];
		x[ ix+1 ] = y[ iy+1 ];
		y[ iy+1 ] = tmp;

		ix += strideX * 2;
		iy += strideY * 2;
	}
	return;
}
