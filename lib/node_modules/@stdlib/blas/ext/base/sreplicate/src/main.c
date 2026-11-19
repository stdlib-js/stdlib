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

#include "stdlib/blas/ext/base/sreplicate.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Replicates each single-precision floating-point strided array element a specified number of times.
*
* @param N         number of indexed elements
* @param k         number of times to replicate each element
* @param X         input array
* @param strideX   stride length for X
* @param Out       output array
* @param strideOut stride length for Out
*/
void API_SUFFIX(stdlib_strided_sreplicate)( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, float *Out, const CBLAS_INT strideOut ) {
	const CBLAS_INT offsetX = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT offsetOut = stdlib_strided_stride2offset( N * k, strideOut );
	API_SUFFIX(stdlib_strided_sreplicate_ndarray)( N, k, X, strideX, offsetX, Out, strideOut, offsetOut );
}

/**
* Replicates each single-precision floating-point strided array element a specified number of times using alternative indexing semantics.
*
* @param N         number of indexed elements
* @param k         number of times to replicate each element
* @param X         input array
* @param strideX   stride length for X
* @param offsetX   starting index for X
* @param Out       output array
* @param strideOut stride length for Out
* @param offsetOut starting index for Out
*/
void API_SUFFIX(stdlib_strided_sreplicate_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	CBLAS_INT ix;
	CBLAS_INT io;
	CBLAS_INT i;
	CBLAS_INT j;
	float v;

	if ( N <= 0 || k <= 0 ) {
		return;
	}
	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		for ( j = 0; j < k; j++ ) {
			Out[ io ] = v;
			io += strideOut;
		}
		ix += strideX;
	}
}
