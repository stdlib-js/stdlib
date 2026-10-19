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

#include "stdlib/blas/ext/base/ndarray/dxpy.h"
#include "stdlib/blas/ext/base/dxpy.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/blas/base/shared.h"

/**
* Adds elements of a one-dimensional double-precision floating-point ndarray to the corresponding elements of a second one-dimensional double-precision floating-point ndarray and assigns the results to the second ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a one-dimensional output ndarray.
*
* @param arrays    list containing ndarrays
*/
void stdlib_blas_ext_dxpy( const struct ndarray *arrays[] ) {
	const struct ndarray *x = arrays[ 0 ];
	const struct ndarray *y = arrays[ 1 ];

	const CBLAS_INT N = stdlib_ndarray_dimension( x, 0 );

	const CBLAS_INT strideX = stdlib_ndarray_stride_elements( x, 0 );
	const CBLAS_INT offsetX = stdlib_ndarray_offset_elements( x );
	const CBLAS_INT strideY = stdlib_ndarray_stride_elements( y, 0 );
	const CBLAS_INT offsetY = stdlib_ndarray_offset_elements( y );

	const double *dataX = (const double *)stdlib_ndarray_data( x );
	double *dataY = (double *)stdlib_ndarray_data( y );
	API_SUFFIX(stdlib_strided_dxpy_ndarray)( N, dataX, strideX, offsetX, dataY, strideY, offsetY );
}
