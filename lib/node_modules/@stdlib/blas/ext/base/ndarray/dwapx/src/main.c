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

#include "stdlib/blas/ext/base/ndarray/dwapx.h"
#include "stdlib/blas/ext/base/dwapx.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/blas/base/shared.h"

/**
* Adds a scalar constant to each element in an input one-dimensional double-precision floating-point ndarray and assigns the results to elements in a one-dimensional double-precision floating-point output ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant to add.
*
* @param arrays    list containing ndarrays
*/
void stdlib_blas_ext_dwapx( const struct ndarray *arrays[] ) {
	const struct ndarray *x = arrays[ 0 ];
	const struct ndarray *w = arrays[ 1 ];

	double alpha;
	stdlib_ndarray_get_float64( arrays[ 2 ], NULL, &alpha );

	const CBLAS_INT N = stdlib_ndarray_dimension( x, 0 );
	const CBLAS_INT strideX = stdlib_ndarray_stride_elements( x, 0 );
	const CBLAS_INT offsetX = stdlib_ndarray_offset_elements( x );
	const CBLAS_INT strideW = stdlib_ndarray_stride_elements( w, 0 );
	const CBLAS_INT offsetW = stdlib_ndarray_offset_elements( w );

	const double *dataX = (const double *)stdlib_ndarray_data( x );
	double *dataW = (double *)stdlib_ndarray_data( w );
	API_SUFFIX(stdlib_strided_dwapx_ndarray)( N, alpha, dataX, strideX, offsetX, dataW, strideW, offsetW );
}
