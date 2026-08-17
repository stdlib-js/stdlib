/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/scircshift.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Circularly shifts the elements of a single-precision floating-point strided array by a specified number of positions.
*
* @param N        number of indexed elements
* @param k        number of positions to shift
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_scircshift)( const CBLAS_INT N, const CBLAS_INT k, float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_scircshift_ndarray)( N, k, X, strideX, ox );
}

/**
* Circularly shifts the elements of a single-precision floating-point strided array by a specified number of positions using alternative indexing semantics.
*
* ## Notes
*
* -   This implementation is based on the "trinity rotation" (a.k.a., conjoined triple reversal) algorithm introduced in <https://github.com/scandum/rotate/tree/6d0d2d56d10454def027e35921890200b45fe82c>, by Igor van den Hoven.
*
* @param N        number of indexed elements
* @param k        number of positions to shift
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_scircshift_ndarray)( const CBLAS_INT N, const CBLAS_INT k, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT right;
	CBLAS_INT left;
	CBLAS_INT pa;
	CBLAS_INT pb;
	CBLAS_INT pc;
	CBLAS_INT pd;
	CBLAS_INT s;
	CBLAS_INT n;
	CBLAS_INT i;
	CBLAS_INT j;
	float tmp;

	if ( N <= 0 ) {
		return;
	}
	// Normalize `k`:
	j = k % N;
	if ( j < 0 ) {
		j += N;
	}
	if ( j == 0 ) {
		return;
	}
	s = strideX;

	// For a right circular shift by `j`, the left partition has `N-j` elements...
	left = N - j;
	right = j;
	if ( left < right ) {
		pa = offsetX;
		pb = pa + ( left * s );
		pc = pb;
		pd = pb + ( right * s );

		// Four-way swap from both ends and the split point...
		n = left / 2;
		for ( i = 0; i < n; i++ ) {
			pb -= s;
			pd -= s;
			tmp = X[ pb ];
			X[ pb ] = X[ pa ];
			X[ pa ] = X[ pc ];
			X[ pc ] = X[ pd ];
			X[ pd ] = tmp;
			pa += s;
			pc += s;
		}
		// Three-way rotation for the remaining bridge...
		n = ( ( pd - pc ) / s ) / 2;
		for ( i = 0; i < n; i++ ) {
			pd -= s;
			tmp = X[ pc ];
			X[ pc ] = X[ pd ];
			X[ pd ] = X[ pa ];
			X[ pa ] = tmp;
			pa += s;
			pc += s;
		}
		// Standard reversal of any remaining elements...
		n = ( ( pd - pa ) / s ) / 2;
		for ( i = 0; i < n; i++ ) {
			pd -= s;
			tmp = X[ pa ];
			X[ pa ] = X[ pd ];
			X[ pd ] = tmp;
			pa += s;
		}
	} else if ( left > right ) {
		pa = offsetX;
		pb = pa + ( left * s );
		pc = pb;
		pd = pb + ( right * s );

		// Four-way swap from both ends and the split point...
		n = right / 2;
		for ( i = 0; i < n; i++ ) {
			pb -= s;
			pd -= s;
			tmp = X[ pb ];
			X[ pb ] = X[ pa ];
			X[ pa ] = X[ pc ];
			X[ pc ] = X[ pd ];
			X[ pd ] = tmp;
			pa += s;
			pc += s;
		}
		// Three-way rotation for the remaining bridge...
		n = ( ( pb - pa ) / s ) / 2;
		for ( i = 0; i < n; i++ ) {
			pb -= s;
			pd -= s;
			tmp = X[ pb ];
			X[ pb ] = X[ pa ];
			X[ pa ] = X[ pd ];
			X[ pd ] = tmp;
			pa += s;
		}
		// Standard reversal of any remaining elements...
		n = ( ( pd - pa ) / s ) / 2;
		for ( i = 0; i < n; i++ ) {
			pd -= s;
			tmp = X[ pa ];
			X[ pa ] = X[ pd ];
			X[ pd ] = tmp;
			pa += s;
		}
	} else {
		// Simple pairwise swap...
		pa = offsetX;
		pb = pa + ( left * s );
		for ( i = 0; i < left; i++ ) {
			tmp = X[ pa ];
			X[ pa ] = X[ pb ];
			X[ pb ] = tmp;
			pa += s;
			pb += s;
		}
	}
}
