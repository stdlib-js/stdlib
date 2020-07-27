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

#include "stdlib/stats/base/snanvariancepn.h"
#include <stdint.h>

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @private
* @param N       number of indexed elements
* @param W       two-element output array
* @param X       input array
* @param stride  stride length
* @return        output value
*/
static void snansumpw( const int64_t N, double *W, const float *X, const int64_t stride ) {
	int64_t ix;
	float *xp1;
	float *xp2;
	float sum;
	int64_t M;
	int64_t n;
	int64_t i;
	float s0;
	float s1;
	float s2;
	float s3;
	float s4;
	float s5;
	float s6;
	float s7;
	float v;

	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	if ( N < 8 ) {
		// Use simple summation...
		sum = 0.0f;
		n = 0;
		for ( i = 0; i < N; i++ ) {
			v = X[ ix ];
			if ( v == v ) {
				sum += X[ ix ];
				n += 1;
			}
			ix += stride;
		}
		W[ 0 ] += (double)sum;
		W[ 1 ] += (double)n;
		return;
	}
	// Blocksize for pairwise summation: 128 (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.)
	if ( N <= 128 ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = 0.0f;
		s1 = 0.0f;
		s2 = 0.0f;
		s3 = 0.0f;
		s4 = 0.0f;
		s5 = 0.0f;
		s6 = 0.0f;
		s7 = 0.0f;
		n = 0;

		M = N % 8;
		for ( i = 0; i < N-M; i += 8 ) {
			v = X[ ix ];
			if ( v == v ) {
				s0 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s1 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s2 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s3 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s4 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s5 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s6 += v;
				n += 1;
			}
			ix += stride;
			v = X[ ix ];
			if ( v == v ) {
				s7 += v;
				n += 1;
			}
			ix += stride;
		}
		// Pairwise sum the accumulators:
		sum = ((s0+s1) + (s2+s3)) + ((s4+s5) + (s6+s7));

		// Clean-up loop...
		for (; i < N; i++ ) {
			v = X[ ix ];
			if ( v == v ) {
				sum += X[ ix ];
				n += 1;
			}
			ix += stride;
		}
		W[ 0 ] += (double)sum;
		W[ 1 ] += (double)n;
		return;
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
	snansumpw( n, W, xp1, stride );
	snansumpw( N-n, W, xp2, stride );
}

/**
* Computes the variance of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.
*
* ## Method
*
* -   This implementation uses a two-pass approach, as suggested by Neely (1966).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
float stdlib_strided_snanvariancepn( const int64_t N, const float correction, const float *X, const int64_t stride ) {
	double W[] = { 0.0, 0.0 };
	int64_t ix;
	int64_t i;
	double nc;
	double dM;
	double n;
	float M2;
	float mu;
	float M;
	float d;
	float v;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		v = X[ 0 ];
		if ( v == v && (double)N-(double)correction > 0.0 ) {
			return 0.0f;
		}
		return 0.0f / 0.0f; // NaN
	}
	// Compute an estimate for the mean...
	snansumpw( N, W, X, stride );
	n = W[ 1 ];
	nc = n - (double)correction;
	if ( nc <= 0.0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	mu = (float)( W[ 0 ] / n );

	// Compute the variance...
	M2 = 0.0f;
	M = 0.0f;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			d = v - mu;
			M2 += d * d;
			M += d;
			n += 1;
		}
		ix += stride;
	}
	dM = (double)M;
	return (float)((double)M2/nc) - ( (float)(dM/n) * (float)(dM/nc) );
}
