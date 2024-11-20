/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

#include "stdlib/blas/base/sscal.h"

/**
* Multiplies a single-precision floating-point vector `X` by a constant.
*
* @param N       number of indexed elements
* @param alpha   scalar
* @param X       input array
* @param stride  index increment
*/
void c_sscal( const int N, const float alpha, float *X, const int stride ) {
	int i;
	int m;

	if ( N <= 0 || stride <= 0 || alpha == 1.0f ) {
		return;
	}
	// Use loop unrolling if the stride is equal to `1`...
	if ( stride == 1 ) {
		m = N % 5;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				X[ i ] *= alpha;
			}
		}
		if ( N < 5 ) {
			return;
		}
		for ( i = m; i < N; i += 5 ) {
			X[ i ] *= alpha;
			X[ i+1 ] *= alpha;
			X[ i+2 ] *= alpha;
			X[ i+3 ] *= alpha;
			X[ i+4 ] *= alpha;
		}
		return;
	}
	for ( i = 0; i < N*stride; i += stride ) {
		X[ i ] *= alpha;
	}
	return;
}
