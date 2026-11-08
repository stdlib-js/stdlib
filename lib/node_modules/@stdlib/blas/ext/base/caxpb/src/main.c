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

#include "stdlib/blas/ext/base/caxpb.h"
#include "stdlib/blas/ext/base/capx.h"
#include "stdlib/blas/base/cscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include "stdlib/complex/float32/base/mul_add.h"
#include "stdlib/strided/base/stride2offset.h"

static const CBLAS_INT M = 5;

/**
* Multiplies each element in a single-precision complex floating-point strided array by a scalar constant and adds a scalar constant to each result.
*
* @param N        number of indexed elements
* @param alpha    first scalar constant
* @param beta     second scalar constant
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_caxpb)( const CBLAS_INT N, const stdlib_complex64_t alpha, const stdlib_complex64_t beta, stdlib_complex64_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_caxpb_ndarray)( N, alpha, beta, X, strideX, ox );
}

/**
* Multiplies each element in a single-precision complex floating-point strided array by a scalar constant and adds a scalar constant to each result using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param alpha    first scalar constant
* @param beta     second scalar constant
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_caxpb_ndarray)( const CBLAS_INT N, const stdlib_complex64_t alpha, const stdlib_complex64_t beta, stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	float alpha_re;
	float alpha_im;
	float beta_re;
	float beta_im;
	CBLAS_INT ix;
	CBLAS_INT m;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}

	// Decompose the constants into their real and imaginary components:
	alpha_re = stdlib_complex64_real( alpha );
	alpha_im = stdlib_complex64_imag( alpha );
	beta_re  = stdlib_complex64_real( beta );
	beta_im  = stdlib_complex64_imag( beta );

	// Fast path: when alpha = 1+0i, delegate to capx (x = x + beta)
	if ( alpha_re == 1.0f && alpha_im == 0.0f ) {
		API_SUFFIX(stdlib_strided_capx_ndarray)( N, beta, X, strideX, offsetX );
		return;
	}
	// Fast path: when beta = 0+0i, delegate to cscal (x = alpha * x)
	if ( beta_re == 0.0f && beta_im == 0.0f ) {
		API_SUFFIX(c_cscal_ndarray)( N, alpha, X, strideX, offsetX );
		return;
	}
	ix = offsetX;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX == 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				X[ ix ] = stdlib_base_complex64_muladd( alpha, X[ ix ], beta );
				ix += strideX;
			}
		}
		if ( N < M ) {
			return;
		}
		for ( i = m; i < N; i += M ) {
			X[ ix ] = stdlib_base_complex64_muladd( alpha, X[ ix ], beta );
			X[ ix+1 ] = stdlib_base_complex64_muladd( alpha, X[ ix+1 ], beta );
			X[ ix+2 ] = stdlib_base_complex64_muladd( alpha, X[ ix+2 ], beta );
			X[ ix+3 ] = stdlib_base_complex64_muladd( alpha, X[ ix+3 ], beta );
			X[ ix+4 ] = stdlib_base_complex64_muladd( alpha, X[ ix+4 ], beta );
			ix += M;
		}
		return;
	}
	for ( i = 0; i < N; i++ ) {
		X[ ix ] = stdlib_base_complex64_muladd( alpha, X[ ix ], beta );
		ix += strideX;
	}
	return;
}
