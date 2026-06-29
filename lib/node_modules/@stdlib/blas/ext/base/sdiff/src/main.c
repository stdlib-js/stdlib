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

#include "stdlib/blas/ext/base/sdiff.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/scopy.h"
#include "stdlib/blas/base/shared.h"

/**
* Calculates the forward difference of a single-precision floating-point strided array using alternative indexing semantics.
*
* @param N          number of indexed elements
* @param X          input array
* @param strideX    stride length for X
* @param offsetX    starting index for X
* @param N1         number of indexed elements for Prepend
* @param Prepend    prepend array
* @param strideP    stride length for Prepend
* @param offsetP    starting index for Prepend
* @param N2         number of indexed elements for Append
* @param Append     append array
* @param strideA    stride length for Append
* @param offsetA    starting index for Append
* @param Out        output array
* @param strideOut  stride length for Out
* @param offsetOut  starting index for Out
*/
static void stdlib_strided_internal_sdiff_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	CBLAS_INT total;
	CBLAS_INT ix;
	CBLAS_INT ip;
	CBLAS_INT ia;
	CBLAS_INT io;
	CBLAS_INT i;
	float prev;
	float curr;

	total = N + N1 + N2;
	if ( total <= 1 ) {
		return;
	}
	// Calculate the forward difference over the input array...
	if ( N1 == 0 && N2 == 0 ) {
		ix = offsetX;
		io = offsetOut;
		prev = X[ ix ];
		for ( i = 1; i < N; i++ ) {
			ix += strideX;
			curr = X[ ix ];
			Out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
		return;
	}
	// Calculate the forward difference over the list of prepended values...
	if ( N1 > 0 ) {
		io = offsetOut;
		ip = offsetP;
		prev = Prepend[ ip ];
		for ( i = 1; i < N1; i++ ) {
			ip += strideP;
			curr = Prepend[ ip ];
			Out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
		if ( N > 0 ) {
			curr = X[ offsetX ];
			Out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		} else if ( N2 > 0 ) {
			curr = Append[ offsetA ];
			Out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
	} else if ( N > 0 ) {
		prev = X[ offsetX ];
		io = offsetOut;
	} else {
		prev = Append[ offsetA ];
		io = offsetOut;
	}
	// Calculate the forward difference over the input array...
	if ( N > 0 ) {
		ix = offsetX;
		if ( N1 == 0 ) {
			prev = X[ ix ];
			ix += strideX;
			for ( i = 1; i < N; i++ ) {
				curr = X[ ix ];
				Out[ io ] = curr - prev;
				prev = curr;
				io += strideOut;
				ix += strideX;
			}
		} else {
			ix += strideX;
			for ( i = 1; i < N; i++ ) {
				curr = X[ ix ];
				Out[ io ] = curr - prev;
				prev = curr;
				io += strideOut;
				ix += strideX;
			}
		}
		if ( N2 > 0 ) {
			curr = Append[ offsetA ];
			Out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
	}
	// Calculate the forward difference over the list of appended values...
	if ( N2 > 0 ) {
		ia = offsetA + strideA;
		for ( i = 1; i < N2; i++ ) {
			curr = Append[ ia ];
			Out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
			ia += strideA;
		}
	}
	return;
}

/**
* Calculates the k-th discrete forward difference of a single-precision floating-point strided array.
*
* @param N          number of indexed elements
* @param k          number of times to recursively compute differences
* @param X          input array
* @param strideX    stride length for X
* @param N1         number of indexed elements for Prepend
* @param Prepend    prepend array
* @param strideP    stride length for Prepend
* @param N2         number of indexed elements for Append
* @param Append     append array
* @param strideA    stride length for Append
* @param Out        output array
* @param strideOut  stride length for Out
* @param Workspace  workspace array
* @param strideW    stride length for workspace
*/
void API_SUFFIX(stdlib_strided_sdiff)( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, float *Out, const CBLAS_INT strideOut, float *Workspace, const CBLAS_INT strideW ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT op = stdlib_strided_stride2offset( N1, strideP );
	const CBLAS_INT oa = stdlib_strided_stride2offset( N2, strideA );
	const CBLAS_INT oo = stdlib_strided_stride2offset( N+N1+N2-k, strideOut );
	const CBLAS_INT ow = stdlib_strided_stride2offset( N+N1+N2-1, strideW );
	API_SUFFIX(stdlib_strided_sdiff_ndarray)( N, k, X, strideX, ox, N1, Prepend, strideP, op, N2, Append, strideA, oa, Out, strideOut, oo, Workspace, strideW, ow );
}

/**
* Calculates the k-th discrete forward difference of a single-precision floating-point strided array using alternative indexing semantics.
*
* @param N          number of indexed elements
* @param k          number of times to recursively compute differences
* @param X          input array
* @param strideX    stride length for X
* @param offsetX    starting index for X
* @param N1         number of indexed elements for Prepend
* @param Prepend    prepend array
* @param strideP    stride length for Prepend
* @param offsetP    starting index for Prepend
* @param N2         number of indexed elements for Append
* @param Append     append array
* @param strideA    stride length for Append
* @param offsetA    starting index for Append
* @param Out        output array
* @param strideOut  stride length for Out
* @param offsetOut  starting index for Out
* @param Workspace  workspace array
* @param strideW    stride length for Workspace
* @param offsetW    starting index for Workspace
*/
void API_SUFFIX(stdlib_strided_sdiff_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut, float *Workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
	CBLAS_INT total;
	CBLAS_INT io;
	CBLAS_INT n;
	CBLAS_INT i;

	total = N + N1 + N2;

	// If k >= total number of elements, the k-th forward difference results in an empty array, so this function is a no-op...
	if ( total <= 1 || k >= total ) {
		return;
	}
	// If `k` is equal to zero, there are no differences to compute, so we merely copy the various arrays into the output array...
	if ( k == 0 ) {
		// Copy `Prepend` into output array:
		c_scopy_ndarray( N1, Prepend, strideP, offsetP, Out, strideOut, offsetOut );

		// Copy `X` into output array:
		io = offsetOut + ( N1 * strideOut );
		c_scopy_ndarray( N, X, strideX, offsetX, Out, strideOut, io );

		// Copy `Append` into output array:
		io = offsetOut + ( ( N1 + N ) * strideOut );
		c_scopy_ndarray( N2, Append, strideA, offsetA, Out, strideOut, io );

		return;
	}
	// If `k` is equal to one, we can compute the forward difference while writing directly to the output array...
	if ( k == 1 ) {
		stdlib_strided_internal_sdiff_ndarray( N, X, strideX, offsetX, N1, Prepend, strideP, offsetP, N2, Append, strideA, offsetA, Out, strideOut, offsetOut );
		return;
	}
	// Compute the first forward difference:
	stdlib_strided_internal_sdiff_ndarray( N, X, strideX, offsetX, N1, Prepend, strideP, offsetP, N2, Append, strideA, offsetA, Workspace, strideW, offsetW );

	// Recursively compute the next forward differences...
	n = total - 1;
	for ( i = 1; i < k - 1; i++ ) {
		stdlib_strided_internal_sdiff_ndarray( n, Workspace, strideW, offsetW, 0, Prepend, strideP, offsetP, 0, Append, strideA, offsetA, Workspace, strideW, offsetW );
		n -= 1;
	}
	// For the last forward difference, ensure that results are written to the output array:
	stdlib_strided_internal_sdiff_ndarray( n, Workspace, strideW, offsetW, 0, Prepend, strideP, offsetP, 0, Append, strideA, offsetA, Out, strideOut, offsetOut );
	return;
}
