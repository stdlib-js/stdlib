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

#include "stdlib/blas/ext/base/dlogspace.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/pow.h"
#include <stdbool.h>

/**
* Fills a double-precision floating-point strided array with logarithmically spaced values over a specified interval.
*
* @param N        number of indexed elements
* @param base     base of the logarithmic scale
* @param start    exponent of the starting value
* @param stop     exponent of the final value
* @param endpoint boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_dlogspace)( const CBLAS_INT N, const double base, const double start, const double stop, const bool endpoint, double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dlogspace_ndarray)( N, base, start, stop, endpoint, X, strideX, ox );
}

/**
* Fills a double-precision floating-point strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param base     base of the logarithmic scale
* @param start    exponent of the starting value
* @param stop     exponent of the final value
* @param endpoint boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dlogspace_ndarray)( const CBLAS_INT N, const double base, const double start, const double stop, const bool endpoint, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT M;
	CBLAS_INT i;
	double d;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;

	// Set the first value:
	if ( N == 1 ) {
		if ( endpoint ) {
			X[ ix ] = stdlib_base_pow( base, stop );
		} else {
			X[ ix ] = stdlib_base_pow( base, start );
		}
		return;
	}
	X[ ix ] = stdlib_base_pow( base, start );
	ix += strideX;

	// Calculate the increment:
	if ( endpoint ) {
		M = N - 1;
	} else {
		M = N;
	}
	d = ( stop-start ) / M;

	// Generate logarithmically spaced values:
	for ( i = 1; i < M; i++ ) {
		X[ ix ] = stdlib_base_pow( base, start + (d*i) );
		ix += strideX;
	}
	// Check whether to include the `base^stop` value:
	if ( endpoint ) {
		X[ ix ] = stdlib_base_pow( base, stop );
	}
	return;
}
