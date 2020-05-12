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

#include "stdlib/blas/base/snrm2.h"
#include <math.h>

/**
* Computes the L2-norm of a single-precision floating-point vector.
*
* @param N       number of values over which to compute the norm
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float c_snrm2( const int N, const float *X, const int stride ) {
	float scale;
	float ssq;
	float ax;
	int i;

	if ( N <= 0 || stride <= 0 ) {
		return 0.0f;
	}
	if ( N == 1 ) {
		return fabs( X[ 0 ] );
	}
	scale = 0.0f;
	ssq = 1.0f;
	for ( i = 0; i < N*stride; i += stride ) {
		if ( X[ i ] != 0.0f ) {
			ax = fabs( X[ i ] );
			if ( scale < ax ) {
				ssq = 1.0f + ( ssq * pow( scale/ax, 2 ) );
				scale = ax;
			} else {
				ssq += pow( ax/scale, 2 );
			}
		}
	}
	return scale * sqrt( ssq );
}
