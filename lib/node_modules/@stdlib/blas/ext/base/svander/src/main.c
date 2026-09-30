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

#include "stdlib/blas/ext/base/svander.h"
#include "stdlib/blas/ext/base/sfill.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Generates a single-precision floating-point Vandermonde matrix.
*
* @param order   storage layout
* @param mode    specifies whether powers are increasing (1) or decreasing (-1)
* @param M       number of rows in `Out`
* @param N       number of columns in `Out`
* @param X       input array
* @param strideX stride length for `X`
* @param Out     output matrix
* @param LDO     stride between successive contiguous vectors of the matrix `Out` (a.k.a., leading dimension of the matrix `Out`)
*/
void API_SUFFIX(stdlib_strided_svander)( const CBLAS_LAYOUT order, const float mode, const CBLAS_INT M, const CBLAS_INT N, const float *X, const CBLAS_INT strideX, float *Out, const CBLAS_INT LDO ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;
	CBLAS_INT k;
	CBLAS_INT v;

	if ( order != CblasRowMajor && order != CblasColMajor ) {
		c_xerbla( 1, "stdlib_strided_svander", "Error: invalid argument. First argument must be a valid storage layout. Value: `%d`.", order );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 3, "stdlib_strided_svander", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 4, "stdlib_strided_svander", "Error: invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( order == CblasColMajor ) {
		v = M;
	} else {
		v = N;
	}
	if ( v < 1 ) {
		k = 1;
	} else {
		k = v;
	}
	if ( LDO < k ) {
		c_xerbla( 8, "stdlib_strided_svander", "Error: invalid argument. Eighth argument must be greater than or equal to max(1,%d). Value: `%d`.", v, LDO );
		return;
	}
	if ( M == 0 || N == 0 ) {
		return;
	}
	ox = stdlib_strided_stride2offset( M, strideX );
	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDO;
	} else { // order == CblasRowMajor
		sa1 = LDO;
		sa2 = 1;
	}
	API_SUFFIX(stdlib_strided_svander_ndarray)( mode, M, N, X, strideX, ox, Out, sa1, sa2, 0 );
}

/**
* Generates a single-precision floating-point Vandermonde matrix using alternative indexing semantics.
*
* @param mode       specifies whether powers are increasing (1) or decreasing (-1)
* @param M          number of rows in `Out`
* @param N          number of columns in `Out`
* @param X          input array
* @param strideX    stride length for `X`
* @param offsetX    starting index for `X`
* @param Out        output matrix
* @param strideOut1 stride length for the first dimension of `Out`
* @param strideOut2 stride length for the second dimension of `Out`
* @param offsetOut  starting index for `Out`
*/
void API_SUFFIX(stdlib_strided_svander_ndarray)( const float mode, const CBLAS_INT M, const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Out, const CBLAS_INT strideOut1, const CBLAS_INT strideOut2, const CBLAS_INT offsetOut ) {
	int64_t sa[ 2 ];
	CBLAS_INT do0;
	CBLAS_INT do1;
	CBLAS_INT S0;
	CBLAS_INT S1;
	CBLAS_INT io;
	CBLAS_INT ix;
	CBLAS_INT i0;
	CBLAS_INT i1;

	if ( M < 0 ) {
		c_xerbla( 2, "stdlib_strided_svander_ndarray", "Error: invalid argument. Second argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 3, "stdlib_strided_svander_ndarray", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( M == 0 || N == 0 ) {
		return;
	}

	// Determine whether the matrix is row-major...
	sa[ 0 ] = strideOut1;
	sa[ 1 ] = strideOut2;
	if ( stdlib_ndarray_is_row_major( 2, sa ) ) {
		S0 = N;
		S1 = M;
		do0 = strideOut2;
		do1 = strideOut1 - ( S0*strideOut2 );

		// Increasing: x^0, x^1, ..., x^(N-1)
		if ( mode > 0 ) {
			io = offsetOut;
			ix = offsetX;
			for ( i1 = 0; i1 < S1; i1++ ) {
				Out[ io ] = 1.0f;
				io += do0;
				for ( i0 = 1; i0 < S0; i0++ ) {
					Out[ io ] = Out[ io-do0 ] * X[ ix ];
					io += do0;
				}
				ix += strideX;
				io += do1;
			}
			return;
		}
		// Decreasing: x^(N-1), x^(N-2), ..., x^0
		io = offsetOut + ( ( S1-1 ) * strideOut1 ) + ( ( S0-1 ) * strideOut2 );
		ix = offsetX + ( ( S1-1 ) * strideX );
		for ( i1 = S1-1; i1 >= 0; i1-- ) {
			Out[ io ] = 1.0f;
			io -= do0;
			for ( i0 = 1; i0 < S0; i0++ ) {
				Out[ io ] = Out[ io+do0 ] * X[ ix ];
				io -= do0;
			}
			ix -= strideX;
			io -= do1;
		}
		return;
	}
	// Column-major...
	S0 = M;
	S1 = N;
	do0 = strideOut1;
	do1 = strideOut2 - ( S0*strideOut1 );

	// Increasing: column j contains x^j
	if ( mode > 0 ) {
		API_SUFFIX(stdlib_strided_sfill_ndarray)( S0, 1.0f, Out, strideOut1, offsetOut );
		io = offsetOut + strideOut2;
		for ( i1 = 1; i1 < S1; i1++ ) {
			ix = offsetX;
			for ( i0 = 0; i0 < S0; i0++ ) {
				Out[ io ] = Out[ io-strideOut2 ] * X[ ix ];
				ix += strideX;
				io += do0;
			}
			io += do1;
		}
		return;
	}
	// Decreasing: column 0 contains x^(N-1), last column all ones
	API_SUFFIX(stdlib_strided_sfill_ndarray)( S0, 1.0f, Out, strideOut1, offsetOut + ( ( S1-1 ) * strideOut2 ) );
	io = offsetOut + ( ( S1-2 ) * strideOut2 ) + ( ( S0-1 ) * strideOut1 );
	for ( i1 = S1-2; i1 >= 0; i1-- ) {
		ix = offsetX + ( ( S0-1 ) * strideX );
		for ( i0 = S0-1; i0 >= 0; i0-- ) {
			Out[ io ] = Out[ io+strideOut2 ] * X[ ix ];
			ix -= strideX;
			io -= do0;
		}
		io -= do1;
	}
}
