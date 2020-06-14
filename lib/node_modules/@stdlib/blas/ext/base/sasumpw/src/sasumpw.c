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

#include "stdlib/blas/ext/base/sasumpw.h"
#include <stdint.h>
#include <math.h>

/**
* Computes the sum of absolute values (L1 norm) of single-precision floating-point strided array elements using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_sasumpw( const int64_t N, const float *X, const int64_t stride ) {
	float *xp1;
	float *xp2;
	int64_t ix;
	int64_t M;
	int64_t n;
	int64_t i;
	float sum;
	float s0;
	float s1;
	float s2;
	float s3;
	float s4;
	float s5;
	float s6;
	float s7;

	if ( N <= 0 ) {
		return 0.0f;
	}
	if ( N == 1 || stride == 0 ) {
		return fabsf( X[ 0 ] );
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	if ( N < 8 ) {
		// Use simple summation...
		sum = 0.0f;
		for ( i = 0; i < N; i++ ) {
			sum += fabsf( X[ ix ] );
			ix += stride;
		}
		return sum;
	}
	// Blocksize for pairwise summation: 128 (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.)
	if ( N <= 128 ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = fabsf( X[ ix ] );
		s1 = fabsf( X[ ix+stride ] );
		s2 = fabsf( X[ ix+(2*stride) ] );
		s3 = fabsf( X[ ix+(3*stride) ] );
		s4 = fabsf( X[ ix+(4*stride) ] );
		s5 = fabsf( X[ ix+(5*stride) ] );
		s6 = fabsf( X[ ix+(6*stride) ] );
		s7 = fabsf( X[ ix+(7*stride) ] );
		ix += 8 * stride;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 += fabsf( X[ ix ] );
			s1 += fabsf( X[ ix+stride ] );
			s2 += fabsf( X[ ix+(2*stride) ] );
			s3 += fabsf( X[ ix+(3*stride) ] );
			s4 += fabsf( X[ ix+(4*stride) ] );
			s5 += fabsf( X[ ix+(5*stride) ] );
			s6 += fabsf( X[ ix+(6*stride) ] );
			s7 += fabsf( X[ ix+(7*stride) ] );
			ix += 8 * stride;
		}
		// Pairwise sum the accumulators:
		sum = ((s0+s1) + (s2+s3)) + ((s4+s5) + (s6+s7));

		// Clean-up loop...
		for (; i < N; i++ ) {
			sum += fabsf( X[ ix ] );
			ix += stride;
		}
		return sum;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = N / 2;
	n -= n % 8;
	if ( stride < 0 ) {
		xp1 = (float *)X + ( (n-N)*stride );
		xp2 = (float *)X;
	} else {
		xp1 = (float *)X;
		xp2 = (float *)X + ( n*stride );
	}
	return stdlib_strided_sasumpw( n, xp1, stride ) + stdlib_strided_sasumpw( N-n, xp2, stride );
}
