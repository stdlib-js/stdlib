/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/blas/base/isamax.h"
#include <stdlib/math/base/special/absf.h>

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  index increment for `x`
* @return         index value
*/
int c_isamax( const int N, const float *X, const int strideX ) {
	float smax;
	float v;
	int idx;
	int ix;
	int i;

	if ( N < 1 || strideX <= 0 ) {
		return -1;
	}
	idx = 0;
	if ( N == 1 ) {
		return idx;
	}
	if ( strideX == 1 ) {
		// Code for stride equal to `1`...
		smax = stdlib_base_absf( X[ 0 ] );
		for ( i = 1; i < N; i++ ) {
			v = stdlib_base_absf( X[ i ] );
			if ( v > smax ) {
				idx = i;
				smax = v;
			}
		}
		return idx;
	}
	// Code for stride not equal to `1`...
	smax = stdlib_base_absf( X[ 0 ] );
	ix = strideX;
	for ( i = 1; i < N; i++ ) {
		v = stdlib_base_absf( X[ ix ] );
		if ( v > smax ) {
			idx = i;
			smax = v;
		}
		ix += strideX;
	}
	return idx;
}
