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

#include "stdlib/blas/ext/base/scusumpw.h"
#include <stdint.h>

/**
* Computes the cumulative sum of single-precision floating-point strided array elements using pairwise summation.
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
* @param sum      initial sum
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void stdlib_strided_scusumpw( const int64_t N, const float sum, const float *X, const int64_t strideX, float *Y, const int64_t strideY ) {
	float *xp1;
	float *xp2;
	float *yp1;
	float *yp2;
	int64_t ix;
	int64_t iy;
	int64_t i;
	int64_t n;
	float s;

	if ( N <= 0 ) {
		return;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	// Blocksize for pairwise summation...
	if ( N <= 128 ) {
		s = 0.0f;
		for ( i = 0; i < N; i++ ) {
			s += X[ ix ];
			Y[ iy ] = sum + s;
			ix += strideX;
			iy += strideY;
		}
		return;
	}
	n = N / 2;
	if ( strideX < 0 ) {
		xp1 = (float *)X + ( (n-N)*strideX );
		xp2 = (float *)X;
	} else {
		xp1 = (float *)X;
		xp2 = (float *)X + ( n*strideX );
	}
	if ( strideY < 0 ) {
		yp1 = Y + ( (n-N)*strideY );
		yp2 = Y;
	} else {
		yp1 = Y;
		yp2 = Y + ( n*strideY );
	}
	stdlib_strided_scusumpw( n, sum, xp1, strideX, yp1, strideY );
	iy += (n-1) * strideY;
	stdlib_strided_scusumpw( N-n, Y[ iy ], xp2, strideX, yp2, strideY );
	return;
}
