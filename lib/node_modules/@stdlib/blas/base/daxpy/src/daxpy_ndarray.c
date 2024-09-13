/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/blas/base/daxpy.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Multiplies a vector `X` by a constant and adds the result to `Y` using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    scalar
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting X index
* @param Y        output array
* @param strideY  Y stride length
* @param offsetY  starting Y index
*/
void API_SUFFIX(c_daxpy_ndarray)( const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	// If `alpha` is `0`, then `y` is unchanged...
	if ( alpha == 0.0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		Y[ iy ] += alpha * X[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return;
}
