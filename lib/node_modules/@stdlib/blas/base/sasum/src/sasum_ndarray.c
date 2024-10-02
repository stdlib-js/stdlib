/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/blas/base/sasum.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/absf.h"

static const CBLAS_INT M = 6;

/**
* Computes the sum of absolute values using alternative indexing semantics.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @param offset  starting index
* @return        sum of absolute values
*/
float API_SUFFIX(c_sasum_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT stride, const CBLAS_INT offset ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	CBLAS_INT m;
	float sum;

	sum = 0.0f;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offset;

	// If the stride is equal to `1`, use unrolled loops...
	if ( stride == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += stdlib_base_absf( X[ ix ] );
				ix += stride;
			}
		}
		if ( N < 6 ) {
			return sum;
		}
		for ( i = m; i < N; i += M ) {
			sum += stdlib_base_absf( X[ ix ] ) + stdlib_base_absf( X[ ix+1 ] ) + stdlib_base_absf( X[ ix+2 ] ) + stdlib_base_absf( X[ ix+3 ] ) + stdlib_base_absf( X[ ix+4 ] ) + stdlib_base_absf( X[ ix+5 ] );
			ix += M;
		}
		return sum;
	}
	for ( i = 0; i < N; i ++ ) {
		sum += stdlib_base_absf( X[ ix ] );
		ix += stride;
	}
	return sum;
}
