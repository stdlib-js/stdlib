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

#include "stdlib/blas/ext/base/cxsa.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include "stdlib/complex/float32/base/sub.h"
#include "stdlib/strided/base/stride2offset.h"

static const CBLAS_INT M = 5;

/**
* Subtracts a scalar constant from each element in a single-precision complex floating-point strided array.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_cxsa)( const CBLAS_INT N, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_cxsa_ndarray)( N, alpha, X, strideX, ox );
}

/**
* Subtracts a scalar constant from each element in a single-precision complex floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    scalar constant
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_cxsa_ndarray)( const CBLAS_INT N, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT m;
	CBLAS_INT i;
	float re;
	float im;

	re = stdlib_complex64_real( alpha );
	im = stdlib_complex64_imag( alpha );
	if ( N <= 0 || ( re == 0.0f && im == 0.0f ) ) {
		return;
	}
	ix = offsetX;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				X[ ix ] = stdlib_base_complex64_sub( X[ ix ], alpha );
				ix += strideX;
			}
		}
		if ( N < M ) {
			return;
		}
		for ( i = m; i < N; i += M ) {
			X[ ix ] = stdlib_base_complex64_sub( X[ ix ], alpha );
			X[ ix+1 ] = stdlib_base_complex64_sub( X[ ix+1 ], alpha );
			X[ ix+2 ] = stdlib_base_complex64_sub( X[ ix+2 ], alpha );
			X[ ix+3 ] = stdlib_base_complex64_sub( X[ ix+3 ], alpha );
			X[ ix+4 ] = stdlib_base_complex64_sub( X[ ix+4 ], alpha );
			ix += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		X[ ix ] = stdlib_base_complex64_sub( X[ ix ], alpha );
		ix += strideX;
	}
	return;
}
