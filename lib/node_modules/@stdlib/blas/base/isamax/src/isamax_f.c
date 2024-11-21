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
#include "stdlib/blas/base/isamax_fortran.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/blas/base/scopy.h"
#include "stdlib/strided/base/min_view_buffer_index.h"
#include <stdlib.h>

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @return         index value
*/
CBLAS_INT API_SUFFIX(c_isamax)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT idx;
	CBLAS_INT sx;
	float *copyX;

	if ( strideX < 0 ) {
		// Allocate memory for a temporary workspace:
		copyX = (float *)malloc( N * sizeof(float) );
		if ( copyX == NULL ) {
			API_SUFFIX(c_xerbla)( 1, "isamax", "Memory allocation failed when copying the input array to a temporary workspace.\n" );
		}
		// Copy the input array to a temporary workspace:
		API_SUFFIX(c_scopy)( N, X, strideX, copyX, 1 );

		// Perform operation:
		sx = 1;
		isamaxsub( &N, copyX, &sx, &idx );

		// Free allocated memory:
		free( copyX );

		return idx - 1;
	}
	isamaxsub( &N, X, &strideX, &idx );
	return idx - 1;
}

/**
* Finds the index of the first element having the maximum absolute value using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @return         index value
*/
CBLAS_INT API_SUFFIX(c_isamax_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT idx;
	CBLAS_INT sx;
	float *copyX;

	if ( strideX < 0 ) {
		// Allocate memory for a temporary workspace:
		copyX = (float *)malloc( N * sizeof(float) );
		if ( copyX == NULL ) {
			API_SUFFIX(c_xerbla)( 1, "isamax", "Memory allocation failed when copying the input array to a temporary workspace.\n" );
		}
		// Copy the input array to a temporary workspace:
		API_SUFFIX(c_scopy_ndarray)( N, X, strideX, offsetX, copyX, 1, 0 );

		// Perform operation:
		sx = 1;
		isamaxsub( &N, copyX, &sx, &idx );

		// Free allocated memory:
		free( copyX );

		return idx - 1;
	}
	X += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	isamaxsub( &N, X, &strideX, &idx );
	return idx - 1;
}
