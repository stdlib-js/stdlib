/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/stats/strided/distances/dchebychev.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the Chebychev distance between two double-precision floating-point strided arrays.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         Chebychev distance
*/
double API_SUFFIX(stdlib_strided_dchebychev)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX(stdlib_strided_dchebychev_ndarray)( N, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the Chebychev distance between two double-precision floating-point strided arrays using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         Chebychev distance
*/
double API_SUFFIX(stdlib_strided_dchebychev_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ox;
	CBLAS_INT oy;
	CBLAS_INT i;
	double max;
	double d;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	ox = offsetX;
	oy = offsetY;

	max = stdlib_base_abs( X[ ox ] - Y[ oy ] );
	ox += strideX;
	oy += strideY;
	for ( i = 1; i < N; i++ ) {
		d = stdlib_base_abs( X[ ox ] - Y[ oy ] );
		if ( d > max ) {
			max = d;
		}
		ox += strideX;
		oy += strideY;
	}
	return max;
}
