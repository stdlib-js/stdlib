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

#include "stdlib/blas/ext/base/sdsnansumpw.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_sdsnansumpw)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_sdsnansumpw_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation and alternative indexing semantics.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
float API_SUFFIX(stdlib_strided_sdsnansumpw_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT M;
	CBLAS_INT n;
	CBLAS_INT i;
	double sum;
	double s0;
	double s1;
	double s2;
	double s3;
	double s4;
	double s5;
	double s6;
	double s7;

	if ( N <= 0 ) {
		return 0.0f;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nanf( X[ ix ] ) ) {
			return 0.0f;
		}
		return N * X[ ix ];
	}
	if ( N < 8 ) {
		// Use simple summation...
		sum = 0.0;
		for ( i = 0; i < N; i++ ) {
			if ( !stdlib_base_is_nanf( X[ ix ] ) ) {
				sum += X[ ix ];
			}
			ix += strideX;
		}
		return sum;
	}
	// Blocksize for pairwise summation: 128 (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.)
	if ( N <= 128 ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s1 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s2 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s3 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s4 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s5 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s6 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;
		s7 = ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
		ix += strideX;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s1 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s2 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s3 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s4 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s5 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s6 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
			s7 += ( stdlib_base_is_nanf( X[ ix ] ) ) ? 0.0 : X[ ix ];
			ix += strideX;
		}
		// Pairwise sum the accumulators:
		sum = ( (s0+s1) + (s2+s3) ) + ( (s4+s5) + (s6+s7) );

		// Clean-up loop...
		for (; i < N; i++ ) {
			if ( !stdlib_base_is_nanf( X[ ix ] ) ) {
				sum += X[ ix ];
			}
			ix += strideX;
		}
		return sum;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = N / 2;
	n -= n % 8;
	return API_SUFFIX(stdlib_strided_sdsnansumpw_ndarray)( n, X, strideX, ix ) + API_SUFFIX(stdlib_strided_sdsnansumpw_ndarray)( N-n, X, strideX, ix+(n*strideX) );
}
