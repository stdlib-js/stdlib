/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/dfill.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Fills a double-precision floating-point strided array with a specified scalar constant.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_dfill)( const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dfill_ndarray)( N, alpha, X, strideX, ox );
}

/**
* Fills a double-precision floating-point strided array with a specified scalar constant using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dfill_ndarray)( const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX == 1 ) {
		m = N % 8;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				X[ ix ] = alpha;
				ix += strideX;
			}
		}
		if ( N < 8 ) {
			return;
		}
		for ( i = m; i < N; i += 8 ) {
			X[ ix ] = alpha;
			X[ ix+1 ] = alpha;
			X[ ix+2 ] = alpha;
			X[ ix+3 ] = alpha;
			X[ ix+4 ] = alpha;
			X[ ix+5 ] = alpha;
			X[ ix+6 ] = alpha;
			X[ ix+7 ] = alpha;
			ix += 8;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		X[ ix ] = alpha;
		ix += strideX;
	}
	return;
}
