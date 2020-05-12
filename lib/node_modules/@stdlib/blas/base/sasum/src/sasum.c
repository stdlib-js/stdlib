/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/blas/base/sasum.h"
#include <math.h>

/**
* Computes the sum of absolute values.
*
* @param N       number of elements to sum
* @param X       input array
* @param stride  stride length
* @return        sum of absolute values
*/
float c_sasum( const int N, const float *X, const int stride ) {
	float sum;
	int m;
	int i;

	sum = 0.0f;
	if ( N <= 0 || stride <= 0 ) {
		return sum;
	}
	// If the stride is equal to `1`, use unrolled loops...
	if ( stride == 1 ) {
		m = N % 6;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += fabsf( X[i] );
			}
		}
		if ( N < 6 ) {
			return sum;
		}
		for ( i = m; i < N; i += 6 ) {
			sum += fabsf( X[i] ) + fabsf( X[i+1] ) + fabsf( X[i+2] ) + fabsf( X[i+3] ) + fabsf( X[i+4] ) + fabsf( X[i+5] );
		}
		return sum;
	}
	for ( i = 0; i < N*stride; i += stride ) {
		sum += fabsf( X[i] );
	}
	return sum;
}
