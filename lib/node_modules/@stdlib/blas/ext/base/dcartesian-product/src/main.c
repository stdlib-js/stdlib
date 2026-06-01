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

#include "stdlib/blas/ext/base/dcartesianproduct.h"
#include "stdlib/blas/ext/base/dfill.h"
#include "stdlib/blas/base/dcopy.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the Cartesian product for two double-precision floating-point strided arrays.
*
* ## Notes
*
* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
*
* @param order    storage layout
* @param M        number of indexed elements in X
* @param N        number of indexed elements in Y
* @param X        first input array
* @param strideX  stride length for X
* @param Y        second input array
* @param strideY  stride length for Y
* @param Out      output array
* @param LDO      stride length between successive contiguous vectors of the matrix Out (a.k.a., leading dimension of Out)
*/
void API_SUFFIX(stdlib_strided_dcartesian_product)( const CBLAS_LAYOUT order, const CBLAS_INT M, const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY, double *Out, const CBLAS_INT LDO ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;
	CBLAS_INT oy;

	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDO;
	} else { // order == CblasRowMajor
		sa1 = LDO;
		sa2 = 1;
	}
	ox = stdlib_strided_stride2offset( M, strideX );
	oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_dcartesian_product_ndarray)( M, N, X, strideX, ox, Y, strideY, oy, Out, sa1, sa2, 0 );
}

/**
* Computes the Cartesian product for two double-precision floating-point strided arrays using alternative indexing semantics.
*
* ## Notes
*
* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
*
* @param M           number of indexed elements in X
* @param N           number of indexed elements in Y
* @param X           first input array
* @param strideX     stride length for X
* @param offsetX     starting index for X
* @param Y           second input array
* @param strideY     stride length for Y
* @param offsetY     starting index for Y
* @param Out         output array
* @param strideOut1  stride length for the first dimension of Out
* @param strideOut2  stride length for the second dimension of Out
* @param offsetOut   starting index for Out
*/
void API_SUFFIX(stdlib_strided_dcartesian_product_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, double *Out, const CBLAS_INT strideOut1, const CBLAS_INT strideOut2, const CBLAS_INT offsetOut ) {
	int64_t sa[ 2 ];
	CBLAS_INT isrm;
	CBLAS_INT iy;
	CBLAS_INT ix;
	CBLAS_INT io;
	CBLAS_INT i;
	CBLAS_INT j;
	double v;

	if ( M <= 0 || N <= 0 ) {
		return;
	}
	sa[ 0 ] = strideOut1;
	sa[ 1 ] = strideOut2;
	isrm = stdlib_ndarray_is_row_major( 2, sa );
	ix = offsetX;
	io = offsetOut;
	if ( isrm ) {
		for ( i = 0; i < M; i++ ) {
			v = X[ ix ];
			iy = offsetY;
			for ( j = 0; j < N; j++ ) {
				Out[ io ] = v;
				Out[ io + strideOut2 ] = Y[ iy ];
				iy += strideY;
				io += strideOut1;
			}
			ix += strideX;
		}
		return;
	}
	// Column-major...
	for ( i = 0; i < M; i++ ) {
		API_SUFFIX(stdlib_strided_dfill_ndarray)( N, X[ ix ], Out, strideOut1, io );
		io += N * strideOut1;
		ix += strideX;
	}
	io = offsetOut + strideOut2;
	for ( i = 0; i < M; i++ ) {
		API_SUFFIX(c_dcopy_ndarray)( N, Y, strideY, offsetY, Out, strideOut1, io );
		io += N * strideOut1;
	}
	return;
}
