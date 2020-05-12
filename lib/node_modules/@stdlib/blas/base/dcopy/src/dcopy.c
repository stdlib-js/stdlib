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

#include "stdlib/blas/base/dcopy.h"

/**
* Copies values from `X` into `Y`.
*
* @param N        number of elements to copy
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
*/
void c_dcopy( const int N, const double *X, const int strideX, double *Y, const int strideY ) {
	int ix;
	int iy;
	int i;
	int m;

	if ( N <= 0 ) {
		return;
	}
	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % 7;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				Y[ i ] = X[ i ];
			}
			if ( N < 7 ) {
				return;
			}
		}
		for ( i = m; i < N; i += 7 ) {
			Y[ i ] = X[ i ];
			Y[ i+1 ] = X[ i+1 ];
			Y[ i+2 ] = X[ i+2 ];
			Y[ i+3 ] = X[ i+3 ];
			Y[ i+4 ] = X[ i+4 ];
			Y[ i+5 ] = X[ i+5 ];
			Y[ i+6 ] = X[ i+6 ];
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
		Y[ iy ] = X[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return;
}
