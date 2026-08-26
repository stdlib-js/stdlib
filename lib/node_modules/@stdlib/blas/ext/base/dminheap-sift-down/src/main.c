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

#include "stdlib/blas/ext/base/dminheap_sift_down.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Sifts a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored.
*
* @param N        number of indexed elements
* @param index    logical index at which to begin sifting
* @param value    value to place into the heap
* @param X        heap storage array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_dminheap_sift_down)( const CBLAS_INT N, const CBLAS_INT index, const double value, double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dminheap_sift_down_ndarray)( N, index, value, X, strideX, ox );
}

/**
* Sifts a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param index    logical index at which to begin sifting
* @param value    value to place into the heap
* @param X        heap storage array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_dminheap_sift_down_ndarray)( const CBLAS_INT N, const CBLAS_INT index, const double value, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ridx;
	CBLAS_INT cidx;
	CBLAS_INT idx;
	CBLAS_INT j;

	if ( N <= 0 ) {
		return;
	}
	idx = index;
	ridx = offsetX + ( idx*strideX );
	j = ( idx*2 ) + 1;
	while ( j < N ) {
		cidx = offsetX + ( j*strideX );

		// Find the smaller child...
		if ( j+1 < N && X[ offsetX+((j+1)*strideX) ] < X[ cidx ] ) {
			j += 1;
			cidx = offsetX + ( j*strideX );
		}
		// Stop if the value is already smaller than (or equal to) the smaller child...
		if ( X[ cidx ] >= value ) {
			break;
		}
		// Move the child up...
		X[ ridx ] = X[ cidx ];
		idx = j;
		ridx = cidx;
		j = ( idx*2 ) + 1;
	}
	X[ ridx ] = value;
	return;
}
