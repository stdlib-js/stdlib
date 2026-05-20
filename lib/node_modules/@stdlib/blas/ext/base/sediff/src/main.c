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

#include "stdlib/blas/ext/base/sediff.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/scopy.h"
#include "stdlib/blas/base/shared.h"

/**
* Calculates the differences between consecutive elements of a single-precision floating-point strided array.
*
* @param N          number of indexed elements
* @param X          input array
* @param strideX    stride length for X
* @param N1         number of indexed elements to prepend
* @param Prepend    prepend array
* @param strideP    stride length for Prepend
* @param N2         number of indexed elements to append
* @param Append     append array
* @param strideA    stride length for Append
* @param Out        output array
* @param strideOut  stride length for Out
*/
void API_SUFFIX(stdlib_strided_sediff)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, float *Out, const CBLAS_INT strideOut ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT op = stdlib_strided_stride2offset( N1, strideP );
	const CBLAS_INT oa = stdlib_strided_stride2offset( N2, strideA );
	const CBLAS_INT oo = stdlib_strided_stride2offset( N+N1+N2-1, strideOut );
	API_SUFFIX(stdlib_strided_sediff_ndarray)( N, X, strideX, ox, N1, Prepend, strideP, op, N2, Append, strideA, oa, Out, strideOut, oo );
}

/**
* Calculates the differences between consecutive elements of a single-precision floating-point strided array using alternative indexing semantics.
*
* @param N          number of indexed elements
* @param X          input array
* @param strideX    stride length for X
* @param offsetX    starting index for X
* @param N1         number of indexed elements to prepend
* @param Prepend    prepend array
* @param strideP    stride length for Prepend
* @param offsetP    starting index for Prepend
* @param N2         number of indexed elements to append
* @param Append     append array
* @param strideA    stride length for Append
* @param offsetA    starting index for Append
* @param Out        output array
* @param strideOut  stride length for Out
* @param offsetOut  starting index for Out
*/
void API_SUFFIX(stdlib_strided_sediff_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	CBLAS_INT total;
	CBLAS_INT ix;
	CBLAS_INT io;
	CBLAS_INT i;
	float prev;
	float curr;

	total = N + N1 + N2;
	if ( total <= 1 ) {
		return;
	}

	// Copy `Prepend` into output array:
	API_SUFFIX(c_scopy_ndarray)( N1, Prepend, strideP, offsetP, Out, strideOut, offsetOut );

	// Compute differences of input array:
	ix = offsetX;
	io = offsetOut + ( N1 * strideOut );
	prev = X[ ix ];
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		curr = X[ ix ];
		Out[ io ] = curr - prev;
		prev = curr;
		io += strideOut;
	}

	// Copy `Append` into output array:
	API_SUFFIX(c_scopy_ndarray)( N2, Append, strideA, offsetA, Out, strideOut, io );

	return;
}
