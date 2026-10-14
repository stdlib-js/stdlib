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

#include "stdlib/blas/ext/base/ndarray/zwxsa.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	// Create data buffers:
	const double dataX[] = { -2.0, 1.0, 3.0, -5.0 };
	double dataW[] = { 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of array dimensions:
	const int64_t ndims = 1;

	// Specify the array shape:
	int64_t shape[] = { 2 };

	// Specify the array strides:
	int64_t strides[] = { STDLIB_NDARRAY_COMPLEX128_BYTES_PER_ELEMENT };

	// Specify the byte offset:
	const int64_t offset = 0;

	// Specify the array order:
	const enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

	// Specify the index mode:
	const enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

	// Specify the subscript index modes:
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
	const int64_t nsubmodes = 1;

	// Create ndarrays:
	// cppcheck-suppress invalidPointerCast
	struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataX, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );

	// cppcheck-suppress invalidPointerCast
	struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataW, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );

	// Create a data buffer for an ndarray containing the scalar constant to subtract:
	const double adata[] = { 5.0, 0.0 };

	// Specify the array strides for a zero-dimensional ndarray:
	int64_t astrides[] = { 0 };

	// Create an ndarray containing the scalar constant to subtract:
	// cppcheck-suppress invalidPointerCast
	struct ndarray *alpha = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)adata, 0, NULL, astrides, 0, order, imode, nsubmodes, submodes );
	if ( x == NULL || w == NULL || alpha == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}

	// Define a list of ndarrays:
	const struct ndarray *arrays[] = { x, w, alpha };

	// Perform computation:
	stdlib_blas_ext_zwxsa( arrays );

	// Print the result:
	// cppcheck-suppress invalidPointerCast
	const stdlib_complex128_t *v = (const stdlib_complex128_t *)dataW;
	for ( int i = 0; i < 2; i++ ) {
		printf( "w[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( v[ i ] ), stdlib_complex128_imag( v[ i ] ) );
	}

	// Free allocated memory:
	stdlib_ndarray_free( x );
	stdlib_ndarray_free( w );
	stdlib_ndarray_free( alpha );
}
