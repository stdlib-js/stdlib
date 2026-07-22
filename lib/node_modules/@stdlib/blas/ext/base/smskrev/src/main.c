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

#include "stdlib/blas/ext/base/smskrev.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Reverses a single-precision floating-point strided array in-place according to a mask.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     stride length for X
* @param Mask        mask array
* @param strideMask  stride length for Mask
*/
void API_SUFFIX(stdlib_strided_smskrev)( const CBLAS_INT N, float *X, const CBLAS_INT strideX, const uint8_t *Mask, const CBLAS_INT strideMask ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT om = stdlib_strided_stride2offset( N, strideMask );
	API_SUFFIX(stdlib_strided_smskrev_ndarray)( N, X, strideX, ox, Mask, strideMask, om );
}

/**
* Reverses a single-precision floating-point strided array in-place according to a mask and using alternative indexing semantics.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     stride length for X
* @param offsetX     starting index for X
* @param Mask        mask array
* @param strideMask  stride length for Mask
* @param offsetMask  starting index for Mask
*/
void API_SUFFIX(stdlib_strided_smskrev_ndarray)( const CBLAS_INT N, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const uint8_t *Mask, const CBLAS_INT strideMask, const CBLAS_INT offsetMask ) {
	CBLAS_INT right;
	CBLAS_INT left;
	CBLAS_INT ix;
	CBLAS_INT jx;
	CBLAS_INT im;
	CBLAS_INT jm;
	float tmp;

	if ( N <= 0 ) {
		return;
	}
	left = 0;
	right = N - 1;
	ix = offsetX;
	jx = offsetX + ( right * strideX );
	im = offsetMask;
	jm = offsetMask + ( right * strideMask );
	while ( left < right ) {
		// Scan to find the next unmasked elements...
		while ( left < right && Mask[ im ] != 0 ) {
			left += 1;
			ix += strideX;
			im += strideMask;
		}
		while ( right > left && Mask[ jm ] != 0 ) {
			right -= 1;
			jx -= strideX;
			jm -= strideMask;
		}
		// Check whether there are any more elements left to reverse...
		if ( left >= right ) {
			break;
		}
		// Swap unmasked elements...
		tmp = X[ ix ];
		X[ ix ] = X[ jx ];
		X[ jx ] = tmp;

		// Adjust indices to point to the next reversal candidates...
		left += 1;
		ix += strideX;
		im += strideMask;
		right -= 1;
		jx -= strideX;
		jm -= strideMask;
	}
	return;
}
