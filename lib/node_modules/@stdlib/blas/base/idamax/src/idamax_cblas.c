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
#include "stdlib/blas/base/idamax_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/dcopy.h"
#include "stdlib/blas/base/xerbla.h"
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
CBLAS_INT API_SUFFIX(c_idamax)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	CBLAS_INT idx;
	double *copyX;

	if ( strideX < 0 ) {
		// Allocate memory for a temporary workspace:
		copyX = (double *)malloc( N * sizeof(double) );
		if ( copyX == NULL ) {
			API_SUFFIX(c_xerbla)( 1, "idamax", "Memory allocation failed when copying the input array to a temporary workspace.\n" );
		}
		// Copy the input array to a temporary workspace:
		API_SUFFIX(c_dcopy)( N, X, strideX, copyX, 1 );

		// Perform operation:
		idx = API_SUFFIX(cblas_idamax)( N, copyX, 1 );

		// Free allocated memory:
		free( copyX );

		return idx;
	}
	return API_SUFFIX(cblas_idamax)( N, X, strideX );
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
CBLAS_INT API_SUFFIX(c_idamax_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT idx;
	double *copyX;

	if ( strideX < 0 ) {
		// Allocate memory for a temporary workspace:
		copyX = (double *)malloc( N * sizeof(double) );
		if ( copyX == NULL ) {
			API_SUFFIX(c_xerbla)( 1, "idamax", "Memory allocation failed when copying the input array to a temporary workspace.\n" );
		}
		// Copy values to a temporary workspace:
		API_SUFFIX(c_dcopy_ndarray)( N, X, strideX, offsetX, copyX, 1, 0 );

		// Perform operation:
		idx = API_SUFFIX(cblas_idamax)( N, copyX, 1 );

		// Free allocated memory:
		free( copyX );

		return idx;
	}
	X += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	return API_SUFFIX(cblas_idamax)( N, X, strideX );
}
