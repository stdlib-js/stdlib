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

#include "stdlib/blas/ext/base/dnannsumpw.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @param sum      pointer for storing the sum
* @param n        pointer for storing the number of non-NaN elements
*/
static void sumpw( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *sum, CBLAS_INT *n ) {
	CBLAS_INT ix;
	CBLAS_INT M;
	CBLAS_INT m;
	CBLAS_INT i;
	double s0;
	double s1;
	double s2;
	double s3;
	double s4;
	double s5;
	double s6;
	double s7;
	double s;
	double v;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nan( X[ ix ] ) ) {
			return;
		}
		*sum = X[ ix ] * N;
		*n += N;
		return;
	}
	// Find the first non-NaN element...
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( !stdlib_base_is_nan( v ) ) {
			break;
		}
		ix += strideX;
	}
	// If every element was NaN, we are done...
	if ( i == N ) {
		return;
	}
	*n += 1;
	s = v;
	ix += strideX;
	i += 1;

	// In order to preserve the sign of zero which can be lost during pairwise summation below, find the first non-zero element...
	if ( s == 0.0 ) {
		for ( ; i < N; i++ ) {
			v = X[ ix ];
			if ( !stdlib_base_is_nan( v ) ) {
				if ( v != 0.0 ) {
					break;
				}
				s += v;
				*n += 1;
			}
			ix += strideX;
		}
	}
	// If every subsequent element was either NaN or zero, we are done...
	if ( i == N ) {
		*sum += s;
		return;
	}
	// If we are here, then we found a non-zero element and we no longer have to be concerned about preserving zero's sign...

	if ( (N-i) < 8 ) {
		// Use simple summation...
		for ( ; i < N; i++ ) {
			v = X[ ix ];
			if ( v == v ) {
				s += v;
				*n += 1;
			}
			ix += strideX;
		}
		*sum += s;
		return;
	}
	// Blocksize for pairwise summation: 128 (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.)
	if ( (N-i) <= 128 ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = 0.0;
		s1 = 0.0;
		s2 = 0.0;
		s3 = 0.0;
		s4 = 0.0;
		s5 = 0.0;
		s6 = 0.0;
		s7 = 0.0;

		M = (N-i) % 8;
		for ( ; i < N-M; i += 8 ) {
			v = X[ ix ];
			if ( v == v ) {
				s0 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s1 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s2 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s3 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s4 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s5 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s6 += v;
				*n += 1;
			}
			ix += strideX;
			v = X[ ix ];
			if ( v == v ) {
				s7 += v;
				*n += 1;
			}
			ix += strideX;
		}
		// Pairwise sum the accumulators:
		s += ( (s0+s1) + (s2+s3) ) + ( (s4+s5) + (s6+s7) );

		// Clean-up loop...
		for ( ; i < N; i++ ) {
			v = X[ ix ];
			if ( v == v ) {
				s += v;
				*n += 1;
			}
			ix += strideX;
		}
		*sum += s;
		return;
	}
	*sum += s;

	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	m = (N-i) / 2;
	m -= m % 8;
	sumpw( m, X, strideX, ix, sum, n );
	sumpw( N-i-m, X, strideX, ix+(m*strideX), sum, n );
	return;
}

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
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
* @param n        pointer for storing the number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsumpw)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, CBLAS_INT *n ) {
	CBLAS_INT ox;

	*n = 0;
	ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnannsumpw_ndarray)( N, X, strideX, ox, n );
}

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.
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
* @param n        pointer for storing the number of non-NaN elements
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnannsumpw_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n ) {
	double sum;
	double *sp = &sum;

	// Initialize output values:
	*sp = -0.0; // note: initialize to negative zero to allow preservation of negative zero for the edge case of an input array containing only negative zeros
	*n = 0;

	// Perform pairwise summation:
	sumpw( N, X, strideX, offsetX, sp, n );

	// If all elements were `NaN`, the default sum is positive zero...
	if ( *n == 0 ) {
		*sp = 0.0;
	}
	return *sp;
}
