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

#include "stdlib/blas/base/drotm.h"
#include "stdlib/blas/base/shared.h"

/**
* Applies a plane rotation.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second input array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @param param    parameters for the modified Givens transformation
*/
void API_SUFFIX(c_drotm_ndarray)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, const double *param ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	double dflag;
	double dh11;
	double dh12;
	double dh21;
	double dh22;
	CBLAS_INT i;
	double w;
	double z;

	dflag = param[ 0 ];
	if ( N <= 0 || dflag == -2.0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	if ( strideX == strideY && strideX > 0 ) {
		if ( dflag < 0.0 ) {
			dh11 = param[ 1 ];
			dh12 = param[ 3 ];
			dh21 = param[ 2 ];
			dh22 = param[ 4 ];
			for ( i = 0; i < N; i++ ) {
				w = X[ ix ];
				z = Y[ ix ];
				X[ ix ] = ( w * dh11 ) + ( z * dh12 );
				Y[ ix ] = ( w * dh21 ) + ( z * dh22 );
				ix += strideX;
			}
			return;
		}
		if ( dflag == 0.0 ) {
			dh12 = param[ 3 ];
			dh21 = param[ 2 ];
			for ( i = 0; i < N; i++ ) {
				w = X[ ix ];
				z = Y[ ix ];
				X[ ix ] = w + ( z * dh12 );
				Y[ ix ] = ( w * dh21 ) + z;
				ix += strideX;
			}
			return;
		}
		dh11 = param[ 1 ];
		dh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = X[ ix ];
			z = Y[ ix ];
			X[ ix ] = ( w * dh11 ) + z;
			Y[ ix ] = -w + ( z * dh22 );
			ix += strideX;
		}
		return;
	}
	if ( dflag < 0.0 ) {
		dh11 = param[ 1 ];
		dh12 = param[ 3 ];
		dh21 = param[ 2 ];
		dh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = X[ ix ];
			z = Y[ iy ];
			X[ ix ] = ( w * dh11 ) + ( z * dh12 );
			Y[ iy ] = ( w * dh21 ) + ( z * dh22 );
			ix += strideX;
			iy += strideY;
		}
		return;
	}
	if ( dflag == 0.0 ) {
		dh12 = param[ 3 ];
		dh21 = param[ 2 ];
		for ( i = 0; i < N; i++ ) {
			w = X[ ix ];
			z = Y[ iy ];
			X[ ix ] = w + ( z * dh12 );
			Y[ iy ] = ( w * dh21 ) + z;
			ix += strideX;
			iy += strideY;
		}
		return;
	}
	dh11 = param[ 1 ];
	dh22 = param[ 4 ];
	for ( i = 0; i < N; i++ ) {
		w = X[ ix ];
		z = Y[ iy ];
		X[ ix ] = ( w * dh11 ) + z;
		Y[ iy ] = -w + ( z * dh22 );
		ix += strideX;
		iy += strideY;
	}
	return;
}
