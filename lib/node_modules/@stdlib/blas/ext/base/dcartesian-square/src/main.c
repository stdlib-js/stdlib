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

#include "stdlib/blas/ext/base/dcartesiansquare.h"
#include "stdlib/blas/ext/base/dfill.h"
#include "stdlib/blas/base/dcopy.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the Cartesian square for a double-precision floating-point strided array.
*
* @param order   storage layout
* @param N       number of indexed elements
* @param X       input array
* @param strideX stride length for X
* @param Out     output array
* @param LDO     stride length between successive contiguous vectors of the matrix Out (a.k.a., leading dimension of Out)
*/
void API_SUFFIX(stdlib_strided_dcartesian_square)( const CBLAS_LAYOUT order, const CBLAS_INT N, const double *X, const CBLAS_INT strideX, double *Out, const CBLAS_INT LDO ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;

	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDO;
	} else { // order == CblasRowMajor
		sa1 = LDO;
		sa2 = 1;
	}
	API_SUFFIX(stdlib_strided_dcartesian_square_ndarray)( N, X, strideX, stdlib_strided_stride2offset( N, strideX ), Out, sa1, sa2, 0 );
}

/**
* Computes the Cartesian square for a double-precision floating-point strided array using alternative indexing semantics.
*
* ## Notes
*
* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     stride length for X
* @param offsetX     starting index for X
* @param Out         output array
* @param strideOut1  stride length for the first dimension of Out
* @param strideOut2  stride length for the second dimension of Out
* @param offsetOut   starting index for Out
*/
void API_SUFFIX(stdlib_strided_dcartesian_square_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Out, const CBLAS_INT strideOut1, const CBLAS_INT strideOut2, const CBLAS_INT offsetOut ) {
	int64_t sa[ 2 ];
	CBLAS_INT isrm;
	CBLAS_INT ix;
	CBLAS_INT jx;
	CBLAS_INT io;
	CBLAS_INT i;
	CBLAS_INT j;

	if ( N <= 0 ) {
		return;
	}
	sa[ 0 ] = strideOut1;
	sa[ 1 ] = strideOut2;
	ix = offsetX;
	io = offsetOut;
	isrm = stdlib_ndarray_is_row_major( 2, sa );
	if ( isrm ) {
		for ( i = 0; i < N; i++ ) {
			jx = offsetX;
			for ( j = 0; j < N; j++ ) {
				Out[ io ] = X[ ix ];
				Out[ io + strideOut2 ] = X[ jx ];
				jx += strideX;
				io += strideOut1;
			}
			ix += strideX;
		}
	} else { // isColMajor
		for ( i = 0; i < N; i++ ) {
			API_SUFFIX(stdlib_strided_dfill_ndarray)( N, X[ ix ], Out, strideOut1, io );
			io += N * strideOut1;
			ix += strideX;
		}
		io = offsetOut + strideOut2;
		for ( i = 0; i < N; i++ ) {
			API_SUFFIX(c_dcopy_ndarray)( N, X, strideX, offsetX, Out, strideOut1, io );
			io += N * strideOut1;
		}
	}
	return;
}
