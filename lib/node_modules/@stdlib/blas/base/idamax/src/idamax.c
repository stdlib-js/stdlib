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

#include "stdlib/blas/base/idamax.h"
#include "stdlib/math/base/special/abs.h"

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         index value
*/
int c_idamax( const int N, const double *X, const int strideX ) {
	double dmax;
	double v;
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
		dmax = stdlib_base_abs( X[ 0 ] );
		for ( i = 1; i < N; i++ ) {
			v = stdlib_base_abs( X[ i ] );
			if ( v > dmax ) {
				idx = i;
				dmax = v;
			}
		}
		return idx;
	}
	// Code for stride not equal to `1`...
	dmax = stdlib_base_abs( X[ 0 ] );
	ix = strideX;
	for ( i = 1; i < N; i++ ) {
		v = stdlib_base_abs( X[ ix ] );
		if ( v > dmax ) {
			idx = i;
			dmax = v;
		}
		ix += strideX;
	}
	return idx;
}
