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

#include "stdlib/blas/ext/base/drev.h"
#include <stdint.h>

/**
* Reverses a double-precision floating-point strided array in-place.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  index increment
*/
void c_drev( const int64_t N, double *X, const int64_t stride ) {
	double tmp;
	int64_t ix;
	int64_t iy;
	int64_t m;
	int64_t n;
	int64_t i;

	if ( N <= 0 ) {
		return;
	}
	n = N / 2;

	// Use loop unrolling if the stride is equal to `1`...
	if ( stride == 1 ) {
		m = n % 3;
		iy = N - 1;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( ix = 0; ix < m; ix++ ) {
				tmp = X[ ix ];
				X[ ix ] = X[ iy ];
				X[ iy ] = tmp;
				iy -= 1;
			}
		}
		if ( n < 3 ) {
			return;
		}
		for ( ix = m; ix < n; ix += 3 ) {
			tmp = X[ ix ];
			X[ ix ] = X[ iy ];
			X[ iy ] = tmp;

			tmp = X[ ix+1 ];
			X[ ix+1 ] = X[ iy-1 ];
			X[ iy-1 ] = tmp;

			tmp = X[ ix+2 ];
			X[ ix+2 ] = X[ iy-2 ];
			X[ iy-2 ] = tmp;

			iy -= 3;
		}
		return;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	iy = ix + ((N-1)*stride);
	for ( i = 0; i < n; i++ ) {
		tmp = X[ ix ];
		X[ ix ] = X[ iy ];
		X[ iy ] = tmp;
		ix += stride;
		iy -= stride;
	}
	return;
}
