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

#include "stdlib/blas/ext/base/dcartesianpower.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the Cartesian power for a double-precision floating-point strided array.
*
* @param order   storage layout
* @param N       number of indexed elements
* @param k       power
* @param X       input array
* @param strideX stride length for X
* @param Out     output array
* @param LDO     stride length between successive contiguous vectors of the matrix Out (a.k.a., leading dimension of Out)
*/
void API_SUFFIX(stdlib_strided_dcartesian_power)( const CBLAS_LAYOUT order, const CBLAS_INT N, const CBLAS_INT k, const double *X, const CBLAS_INT strideX, double *Out, const CBLAS_INT LDO ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;

	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDO;
	} else { // order == CblasRowMajor
		sa1 = LDO;
		sa2 = 1;
	}
	API_SUFFIX(stdlib_strided_dcartesian_power_ndarray)( N, k, X, strideX, stdlib_strided_stride2offset( N, strideX ), Out, sa1, sa2, 0 );
}

/**
* Computes the Cartesian power for a double-precision floating-point strided array using alternative indexing semantics.
*
* ## Notes
*
* -   k-tuples are stored as rows in the output matrix, where the j-th column contains the j-th element of each tuple.
*
* @param N           number of indexed elements
* @param k           power
* @param X           input array
* @param strideX     stride length for X
* @param offsetX     starting index for X
* @param Out         output array
* @param strideOut1  stride length for the first dimension of Out
* @param strideOut2  stride length for the second dimension of Out
* @param offsetOut   starting index for Out
*/
void API_SUFFIX(stdlib_strided_dcartesian_power_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Out, const CBLAS_INT strideOut1, const CBLAS_INT strideOut2, const CBLAS_INT offsetOut ) {
	int64_t sa[ 2 ];
	int64_t len;
	int64_t io;
	int64_t oj;
	int64_t sj;
	int64_t i;
	int64_t t;
	CBLAS_INT isrm;
	CBLAS_INT ix;
	CBLAS_INT j;
	CBLAS_INT s;

	if ( N <= 0 || k <= 0 ) {
		return;
	}
	len = (int64_t)stdlib_base_pow( N, k ); // TODO: replace with a dedicated integer exponentiation routine
	sa[ 0 ] = strideOut1;
	sa[ 1 ] = strideOut2;
	isrm = stdlib_ndarray_is_row_major( 2, sa );
	if ( isrm ) {
		io = offsetOut;
		for ( i = 0; i < len; i++ ) {
			t = i;
			for ( j = k-1; j >= 0; j-- ) {
				s = t % N;
				t = (t-s) / N;
				ix = offsetX + (s*strideX);
				oj = io + (j*strideOut2);
				Out[ oj ] = X[ ix ];
			}
			io += strideOut1;
		}
	} else { // isColMajor
		sj = len;
		for ( j = 0; j < k; j++ ) {
			sj /= N;
			io = offsetOut + (j*strideOut2);
			for ( i = 0; i < len; i++ ) {
				s = ((i-(i%sj))/sj) % N;
				ix = offsetX + (s*strideX);
				Out[ io ] = X[ ix ];
				io += strideOut1;
			}
		}
	}
	return;
}
