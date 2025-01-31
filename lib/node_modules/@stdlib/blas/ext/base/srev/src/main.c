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

#include "stdlib/blas/ext/base/srev.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Reverses a single-precision floating-point strided array in-place.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_srev)( const CBLAS_INT N, float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_srev_ndarray)( N, X, strideX, ox );
}

/**
* Reverses a single-precision floating-point strided array in-place using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  stride length
*/
void API_SUFFIX(stdlib_strided_srev_ndarray)( const CBLAS_INT N, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT m;
	CBLAS_INT n;
	CBLAS_INT i;
	float tmp;

	if ( N <= 0 ) {
		return;
	}
	n = N / 2;
	ix = offsetX;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX == 1 ) {
		m = n % 3;
		iy = ix + N - 1;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				tmp = X[ ix ];
				X[ ix ] = X[ iy ];
				X[ iy ] = tmp;
				ix += strideX;
				iy -= strideX;
			}
		}
		if ( n < 3 ) {
			return;
		}
		for ( i = m; i < n; i += 3 ) {
			tmp = X[ ix ];
			X[ ix ] = X[ iy ];
			X[ iy ] = tmp;

			tmp = X[ ix+1 ];
			X[ ix+1 ] = X[ iy-1 ];
			X[ iy-1 ] = tmp;

			tmp = X[ ix+2 ];
			X[ ix+2 ] = X[ iy-2 ];
			X[ iy-2 ] = tmp;

			ix += 3;
			iy -= 3;
		}
		return;
	}
	iy = ix + ( (N-1) * strideX );
	for ( i = 0; i < n; i++ ) {
		tmp = X[ ix ];
		X[ ix ] = X[ iy ];
		X[ iy ] = tmp;
		ix += strideX;
		iy -= strideX;
	}
	return;
}
