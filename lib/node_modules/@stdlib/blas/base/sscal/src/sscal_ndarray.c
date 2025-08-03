/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/blas/base/sscal.h"
#include "stdlib/blas/base/shared.h"

static const CBLAS_INT M = 5;

/**
* Multiplies a single-precision floating-point vector `X` by a constant using alternative indexing semantics.
*
* @param N       number of indexed elements
* @param alpha   scalar
* @param X       input array
* @param stride  index increment
* @param offset  starting index
*/
void API_SUFFIX(c_sscal_ndarray)( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT stride, const CBLAS_INT offset ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	CBLAS_INT m;

	if ( N <= 0 || alpha == 1.0f ) {
		return;
	}
	ix = offset;

	// Use loop unrolling if the stride is equal to `1`...
	if ( stride == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				X[ ix ] *= alpha;
				ix += stride;
			}
		}
		if ( N < M ) {
			return;
		}
		for ( i = m; i < N; i += M ) {
			X[ ix ] *= alpha;
			X[ ix+1 ] *= alpha;
			X[ ix+2 ] *= alpha;
			X[ ix+3 ] *= alpha;
			X[ ix+4 ] *= alpha;
			ix += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		X[ ix ] *= alpha;
		ix += stride;
	}
	return;
}
