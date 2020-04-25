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

/**
 * Compute the dot product of two double-precision floating-point vectors.
 *
 * @see <a href="http://www.netlib.org/lapack/expolore-html/df/d28/group__single__blas__level1.html">ddot</a>
 */
#include "stdlib/blas/base/ddot.h"

/**
* Computes the dot product of two double-precision floating-point vectors.
*
* @param N        number of values over which to compute the dot product
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @returns        the dot product of X and Y
*/
double c_ddot( const int N, const double *X, const int strideX, const double *Y, const int strideY ) {
	double dot;
	int ix;
	int iy;
	int m;
	int i;

	dot = 0.0;
	if ( N <= 0 ) {
		return dot;
	}
	// If both strides are equal to `1`, use unrolled loops...
	if ( strideX == 1 && strideY == 1 ) {
		m = N % 5;

		// If we have a remainder, do a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += X[ i ] * Y[ i ];
			}
		}
		if ( N < 5 ) {
			return dot;
		}
		for ( i = m; i < N; i += 5 ) {
			dot += ( X[i]*Y[i] ) + ( X[i+1]*Y[i+1] ) + ( X[i+2]*Y[i+2] ) + ( X[i+3]*Y[i+3] ) + ( X[i+4]*Y[i+4] );
		}
		return dot;
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
		dot += X[ ix ] * Y[ iy ];
		ix += strideX;
		iy += strideY;
	}
	return dot;
}

