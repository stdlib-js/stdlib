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

#include "stdlib/blas/base/srotm.h"
#include "stdlib/blas/base/shared.h"

/**
* Applies a plane rotation using alternative indexing semantics.
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
void API_SUFFIX(c_srotm_ndarray)( const CBLAS_INT N, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, const float *param ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	float sflag;
	CBLAS_INT i;
	float sh11;
	float sh12;
	float sh21;
	float sh22;
	float w;
	float z;

	sflag = param[ 0 ];
	if ( N <= 0 || sflag == -2.0f ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	if ( strideX == strideY && strideX > 0 ) {
		if ( sflag < 0.0f ) {
			sh11 = param[ 1 ];
			sh12 = param[ 3 ];
			sh21 = param[ 2 ];
			sh22 = param[ 4 ];
			for ( i = 0; i < N; i++ ) {
				w = X[ ix ];
				z = Y[ ix ];
				X[ ix ] = ( w * sh11 ) + ( z * sh12 );
				Y[ ix ] = ( w * sh21 ) + ( z * sh22 );
				ix += strideX;
			}
			return;
		}
		if ( sflag == 0.0f ) {
			sh12 = param[ 3 ];
			sh21 = param[ 2 ];
			for ( i = 0; i < N; i++ ) {
				w = X[ ix ];
				z = Y[ ix ];
				X[ ix ] = w + ( z * sh12 );
				Y[ ix ] = ( w * sh21 ) + z;
				ix += strideX;
			}
			return;
		}
		sh11 = param[ 1 ];
		sh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = X[ ix ];
			z = Y[ ix ];
			X[ ix ] = ( w * sh11 ) + z;
			Y[ ix ] = -w + ( z * sh22 );
			ix += strideX;
		}
		return;
	}
	if ( sflag < 0.0f ) {
		sh11 = param[ 1 ];
		sh12 = param[ 3 ];
		sh21 = param[ 2 ];
		sh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = X[ ix ];
			z = Y[ iy ];
			X[ ix ] = ( w * sh11 ) + ( z * sh12 );
			Y[ iy ] = ( w * sh21 ) + ( z * sh22 );
			ix += strideX;
			iy += strideY;
		}
		return;
	}
	if ( sflag == 0.0f ) {
		sh12 = param[ 3 ];
		sh21 = param[ 2 ];
		for ( i = 0; i < N; i++ ) {
			w = X[ ix ];
			z = Y[ iy ];
			X[ ix ] = w + ( z * sh12 );
			Y[ iy ] = ( w * sh21 ) + z;
			ix += strideX;
			iy += strideY;
		}
		return;
	}
	sh11 = param[ 1 ];
	sh22 = param[ 4 ];
	for ( i = 0; i < N; i++ ) {
		w = X[ ix ];
		z = Y[ iy ];
		X[ ix ] = ( w * sh11 ) + z;
		Y[ iy ] = -w + ( z * sh22 );
		ix += strideX;
		iy += strideY;
	}
	return;
}
