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

#include "stdlib/blas/base/sswap.h"

/**
* Interchanges two single-precision floating-point vectors.
*
* @param N        number of elements to swap
* @param X        first input array
* @param strideX  X stride length
* @param Y        second input array
* @param strideY  Y stride length
*/
void c_sswap( const int N, float *X, const int strideX, float *Y, const int strideY ) {
	float tmp;
	int ix;
	int iy;
	int i;
	int m;

	if ( N <= 0 ) {
		return;
	}
	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % 3;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				tmp = X[ i ];
				X[ i ] = Y[ i ];
				Y[ i ] = tmp;
			}
			if ( N < 3 ) {
				return;
			}
		}
		for ( i = m; i < N; i += 3 ) {
			tmp = X[ i ];
			X[ i ] = Y[ i ];
			Y[ i ] = tmp;

			tmp = X[ i+1 ];
			X[ i+1 ] = Y[ i+1 ];
			Y[ i+1 ] = tmp;

			tmp = X[ i+2 ];
			X[ i+2 ] = Y[ i+2 ];
			Y[ i+2 ] = tmp;
		}
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
	for ( i = 0; i < N; i++ ) {
		tmp = X[ ix ];
		X[ ix ] = Y[ iy ];
		Y[ iy ] = tmp;
		ix += strideX;
		iy += strideY;
	}
	return;
}
