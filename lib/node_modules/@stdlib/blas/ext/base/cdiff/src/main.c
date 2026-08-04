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

#include "stdlib/blas/ext/base/cdiff.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/ccopy.h"
#include "stdlib/blas/base/shared.h"

/**
* Calculates the forward difference of a single-precision complex floating-point strided array using alternative indexing semantics.
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
static void API_SUFFIX(stdlib_strided_internal_cdiff_ndarray)( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const stdlib_complex64_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const stdlib_complex64_t *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, stdlib_complex64_t *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	const float *pv = (float *)Prepend;
	const float *av = (float *)Append;
	const float *xv = (float *)X;
	float *ov = (float *)Out;
	CBLAS_INT total;
	CBLAS_INT sx;
	CBLAS_INT sp;
	CBLAS_INT sa;
	CBLAS_INT so;
	CBLAS_INT ix;
	CBLAS_INT ip;
	CBLAS_INT ia;
	CBLAS_INT io;
	CBLAS_INT i;
	float rprev;
	float iprev;
	float rcurr;
	float icurr;

	total = N + N1 + N2;
	if ( total <= 1 ) {
		return;
	}

	// Adjust strides and offsets for the interleaved layout:
	sx = strideX * 2;
	sp = strideP * 2;
	sa = strideA * 2;
	so = strideOut * 2;
	ix = offsetX * 2;
	ip = offsetP * 2;
	ia = offsetA * 2;
	io = offsetOut * 2;

	// Calculate the forward difference over the input array...
	if ( N1 == 0 && N2 == 0 ) {
		rprev = xv[ ix ];
		iprev = xv[ ix+1 ];
		for ( i = 1; i < N; i++ ) {
			ix += sx;
			rcurr = xv[ ix ];
			icurr = xv[ ix+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
		return;
	}
	// Calculate the forward difference over the list of prepended values...
	if ( N1 > 0 ) {
		rprev = pv[ ip ];
		iprev = pv[ ip+1 ];
		for ( i = 1; i < N1; i++ ) {
			ip += sp;
			rcurr = pv[ ip ];
			icurr = pv[ ip+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
		if ( N > 0 ) {
			rcurr = xv[ ix ];
			icurr = xv[ ix+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		} else if ( N2 > 0 ) {
			rcurr = av[ ia ];
			icurr = av[ ia+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
	} else if ( N > 0 ) {
		rprev = xv[ ix ];
		iprev = xv[ ix+1 ];
	} else {
		rprev = av[ ia ];
		iprev = av[ ia+1 ];
	}
	// Calculate the forward difference over the input array...
	if ( N > 0 ) {
		ix += sx;
		for ( i = 1; i < N; i++ ) {
			rcurr = xv[ ix ];
			icurr = xv[ ix+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
			ix += sx;
		}
		if ( N2 > 0 ) {
			rcurr = av[ ia ];
			icurr = av[ ia+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
	}
	// Calculate the forward difference over the list of appended values...
	if ( N2 > 0 ) {
		ia += sa;
		for ( i = 1; i < N2; i++ ) {
			rcurr = av[ ia ];
			icurr = av[ ia+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
			ia += sa;
		}
	}
	return;
}

/**
* Calculates the k-th discrete forward difference of a single-precision complex floating-point strided array.
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
* @param strideW    stride length for Workspace
*/
void API_SUFFIX(stdlib_strided_cdiff)( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT N1, const stdlib_complex64_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const stdlib_complex64_t *Append, const CBLAS_INT strideA, stdlib_complex64_t *Out, const CBLAS_INT strideOut, stdlib_complex64_t *Workspace, const CBLAS_INT strideW ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT op = stdlib_strided_stride2offset( N1, strideP );
	const CBLAS_INT oa = stdlib_strided_stride2offset( N2, strideA );
	const CBLAS_INT oo = stdlib_strided_stride2offset( N+N1+N2-k, strideOut );
	const CBLAS_INT ow = stdlib_strided_stride2offset( N+N1+N2-1, strideW );
	API_SUFFIX(stdlib_strided_cdiff_ndarray)( N, k, X, strideX, ox, N1, Prepend, strideP, op, N2, Append, strideA, oa, Out, strideOut, oo, Workspace, strideW, ow );
}

/**
* Calculates the k-th discrete forward difference of a single-precision complex floating-point strided array using alternative indexing semantics.
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
void API_SUFFIX(stdlib_strided_cdiff_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const stdlib_complex64_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const stdlib_complex64_t *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, stdlib_complex64_t *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut, stdlib_complex64_t *Workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
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
		API_SUFFIX(c_ccopy_ndarray)( N1, (const void *)Prepend, strideP, offsetP, (void *)Out, strideOut, offsetOut );

		// Copy `X` into output array:
		io = offsetOut + ( N1 * strideOut );
		API_SUFFIX(c_ccopy_ndarray)( N, (const void *)X, strideX, offsetX, (void *)Out, strideOut, io );

		// Copy `Append` into output array:
		io = offsetOut + ( ( N1 + N ) * strideOut );
		API_SUFFIX(c_ccopy_ndarray)( N2, (const void *)Append, strideA, offsetA, (void *)Out, strideOut, io );

		return;
	}
	// If `k` is equal to one, we can compute the forward difference while writing directly to the output array...
	if ( k == 1 ) {
		API_SUFFIX(stdlib_strided_internal_cdiff_ndarray)( N, X, strideX, offsetX, N1, Prepend, strideP, offsetP, N2, Append, strideA, offsetA, Out, strideOut, offsetOut );
		return;
	}
	// Compute the first forward difference:
	API_SUFFIX(stdlib_strided_internal_cdiff_ndarray)( N, X, strideX, offsetX, N1, Prepend, strideP, offsetP, N2, Append, strideA, offsetA, Workspace, strideW, offsetW );

	// Recursively compute the next forward differences...
	n = total - 1;
	for ( i = 1; i < k - 1; i++ ) {
		API_SUFFIX(stdlib_strided_internal_cdiff_ndarray)( n, Workspace, strideW, offsetW, 0, Prepend, strideP, offsetP, 0, Append, strideA, offsetA, Workspace, strideW, offsetW );
		n -= 1;
	}
	// For the last forward difference, ensure that results are written to the output array:
	API_SUFFIX(stdlib_strided_internal_cdiff_ndarray)( n, Workspace, strideW, offsetW, 0, Prepend, strideP, offsetP, 0, Append, strideA, offsetA, Out, strideOut, offsetOut );
	return;
}
