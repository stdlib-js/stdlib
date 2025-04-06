/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/sapxsumors.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using ordinary recursive summation.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_sapxsumors)( const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_sapxsumors_ndarray)( N, alpha, X, strideX, ox );
}

/**
* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using ordinary recursive summation and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
float API_SUFFIX(stdlib_strided_sapxsumors_ndarray)( const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	float sum;

	if ( N <= 0 ) {
		return 0.0f;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		return N * ( alpha + X[ ix ] );
	}
	sum = 0.0f;
	for ( i = 0; i < N; i++ ) {
		sum += alpha + X[ ix ];
		ix += strideX;
	}
	return sum;
}
