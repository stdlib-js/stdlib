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

#include "stdlib/stats/base/dmediansorted.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the median value of a sorted double-precision floating-point strided array.
*
* @param N        number of indexed elements
* @param X        sorted input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dmediansorted)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dmediansorted_ndarray)( N, X, strideX, ox );
}

/**
* Computes the median value of a sorted double-precision floating-point strided array using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        sorted input array
* @param strideX  stride length
* @param offsetX  starting index for X
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dmediansorted_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT n;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	n = N >> 1;
	if ( N & 1 ) {
		// Odd number of elements...
		return X[ offsetX+(n*strideX)  ];
	}
	// Even number of elements...
	return ( X[ offsetX+(n*strideX) ] + X[ offsetX+((n-1)*strideX) ] ) / 2.0;
}
