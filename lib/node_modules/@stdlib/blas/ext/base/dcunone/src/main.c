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

#include "stdlib/blas/ext/base/dcunone.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Cumulatively tests whether every element in a double-precision floating-point strided array is falsy.
*
* @param N         number of indexed elements
* @param X         input array
* @param strideX   stride length for X
* @param Out       output array
* @param strideOut stride length for Out
*/
void API_SUFFIX(stdlib_strided_dcunone)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, bool *Out, const CBLAS_INT strideOut ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oo = stdlib_strided_stride2offset( N, strideOut );
	API_SUFFIX(stdlib_strided_dcunone_ndarray)( N, X, strideX, ox, Out, strideOut, oo );
}

/**
* Cumulatively tests whether every element in a double-precision floating-point strided array is falsy using alternative indexing semantics.
*
* @param N         number of indexed elements
* @param X         input array
* @param strideX   stride length for X
* @param offsetX   starting index for X
* @param Out       output array
* @param strideOut stride length for Out
* @param offsetOut starting index for Out
*/
void API_SUFFIX(stdlib_strided_dcunone_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, bool *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	CBLAS_INT ix;
	CBLAS_INT io;
	CBLAS_INT i;
	bool flg;

	if ( N <= 0 ) {
		return;
	}
	flg = true;
	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( flg && X[ ix ] != 0.0 ) {
			flg = false;
		}
		Out[ io ] = flg;
		ix += strideX;
		io += strideOut;
	}
	return;
}
