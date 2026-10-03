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

#include "stdlib/blas/ext/base/cxsy.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/base/sub.h"
#include "stdlib/strided/base/stride2offset.h"

static const CBLAS_INT M = 5;

/**
* Subtracts elements of a single-precision complex floating-point strided array `y` from the corresponding elements of a single-precision complex floating-point strided array `x` and assigns the results to `y`.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length for `X`
* @param Y        output array
* @param strideY  stride length for `Y`
*/
void API_SUFFIX(stdlib_strided_cxsy)( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX, stdlib_complex64_t *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_cxsy_ndarray)( N, X, strideX, ox, Y, strideY, oy );
}

/**
* Subtracts elements of a single-precision complex floating-point strided array `y` from the corresponding elements of a single-precision complex floating-point strided array `x` and assigns the results to `y` using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length for `X`
* @param offsetX  starting index for `X`
* @param Y        output array
* @param strideY  stride length for `Y`
* @param offsetY  starting index for `Y`
*/
void API_SUFFIX(stdlib_strided_cxsy_ndarray)( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex64_t *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;

	// Use loop unrolling if both strides are equal to `1`...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				Y[ iy ] = stdlib_base_complex64_sub( X[ ix ], Y[ iy ] );
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return;
		}
		for ( i = m; i < N; i += M ) {
			Y[ iy ] = stdlib_base_complex64_sub( X[ ix ], Y[ iy ] );
			Y[ iy+1 ] = stdlib_base_complex64_sub( X[ ix+1 ], Y[ iy+1 ] );
			Y[ iy+2 ] = stdlib_base_complex64_sub( X[ ix+2 ], Y[ iy+2 ] );
			Y[ iy+3 ] = stdlib_base_complex64_sub( X[ ix+3 ], Y[ iy+3 ] );
			Y[ iy+4 ] = stdlib_base_complex64_sub( X[ ix+4 ], Y[ iy+4 ] );
			ix += M;
			iy += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		Y[ iy ] = stdlib_base_complex64_sub( X[ ix ], Y[ iy ] );
		ix += strideX;
		iy += strideY;
	}
	return;
}
