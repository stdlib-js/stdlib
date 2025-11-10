/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/dlinspace.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Fills a double-precision floating-point strided array with linearly spaced values over a specified interval.
*
* @param N        number of indexed elements
* @param start    start of interval
* @param stop     end of interval
* @param endpoint boolean indicating whether to include the `stop` value when writing values to the input array
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_dlinspace)( const CBLAS_INT N, const double start, const double stop, const bool endpoint, double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dlinspace_ndarray)( N, start, stop, endpoint, X, strideX, ox );
}

/**
* Fills a double-precision floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param start    start of interval
* @param stop     end of interval
* @param endpoint boolean indicating whether to include the `stop` value when writing values to the input array
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dlinspace_ndarray)( const CBLAS_INT N, const double start, const double stop, const bool endpoint, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
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
			X[ ix ] = stop;
		} else {
			X[ ix ] = start;
		}
		return;
	}
	X[ ix ] = start;
	ix += strideX;

	// Calculate the increment:
	if ( endpoint ) {
		M = N - 1;
	} else{
		M = N;
	}
	d = ( stop-start ) / M;

	// Generate linearly spaced values:
	for ( i = 1; i < M; i++ ) {
		X[ ix ] = start + (d*i);
		ix += strideX;
	}
	// Check whether to include the `stop` value:
	if ( endpoint ) {
		X[ ix ] = stop;
	}
	return;
}
