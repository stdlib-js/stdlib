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

#include "stdlib/blas/ext/base/zcopy_within.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/zcopy.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Performs an in-place copy of elements within a double-precision complex floating-point strided array.
*
* @param N        number of indexed elements
* @param target   target index
* @param start    source start index (inclusive)
* @param end      source end index (exclusive)
* @param X        input array
* @param strideX  stride length for `X`
* @param W        workspace array
* @param strideW  stride length for `W`
*/
void API_SUFFIX(stdlib_strided_zcopy_within)( const CBLAS_INT N, const CBLAS_INT target, const CBLAS_INT start, const CBLAS_INT end, stdlib_complex128_t *X, const CBLAS_INT strideX, stdlib_complex128_t *W, const CBLAS_INT strideW ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT ow = stdlib_strided_stride2offset( N, strideW );
	API_SUFFIX(stdlib_strided_zcopy_within_ndarray)( N, target, start, end, X, strideX, ox, W, strideW, ow );
}

/**
* Performs an in-place copy of elements within a double-precision complex floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param target   target index
* @param start    source start index (inclusive)
* @param end      source end index (exclusive)
* @param X        input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param W        workspace array
* @param strideW  stride length for `W`
* @param offsetW  starting index for `W`
*/
void API_SUFFIX(stdlib_strided_zcopy_within_ndarray)( const CBLAS_INT N, const CBLAS_INT target, const CBLAS_INT start, const CBLAS_INT end, stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex128_t *W, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
	CBLAS_INT ssi;
	CBLAS_INT tsi;
	CBLAS_INT cl;

	if ( N <= 0 || strideX == 0 || target >= N ) {
		return;
	}
	// Resolve the number of elements to copy...
	cl = ( ( end < N ) ? end : N ) - start;
	if ( cl > N - target ) {
		cl = N - target;
	}
	if ( cl <= 0 ) {
		return;
	}
	// Resolve the starting source and target indices...
	ssi = offsetX + ( start * strideX );
	tsi = offsetX + ( target * strideX );

	// When the source and target index ranges overlap, copying directly could overwrite source elements before they are read, and, thus, we first copy the source elements to a workspace array:
	if ( start < target + cl && target < start + cl ) {
		API_SUFFIX(c_zcopy_ndarray)( cl, X, strideX, ssi, W, strideW, offsetW );
		API_SUFFIX(c_zcopy_ndarray)( cl, W, strideW, offsetW, X, strideX, tsi );
		return;
	}
	API_SUFFIX(c_zcopy_ndarray)( cl, X, strideX, ssi, X, strideX, tsi );
	return;
}
