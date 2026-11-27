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

#include "stdlib/blas/ext/base/ndarray/daxpb.h"
#include "stdlib/blas/ext/base/daxpb.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/blas/base/shared.h"

/**
* Multiplies each element in a one-dimensional double-precision floating-point ndarray by a scalar constant and adds a scalar constant to each result.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant to multiply.
*     -   a zero-dimensional ndarray containing the scalar constant to add.
*
* @param arrays    list containing ndarrays
*/
void stdlib_blas_ext_daxpb( const struct ndarray *arrays[] ) {
	const struct ndarray *x = arrays[ 0 ];

	double alpha;
	double beta;
	stdlib_ndarray_get_float64( arrays[ 1 ], NULL, &alpha );
	stdlib_ndarray_get_float64( arrays[ 2 ], NULL, &beta );

	const CBLAS_INT N = stdlib_ndarray_dimension( x, 0 );
	const CBLAS_INT strideX = stdlib_ndarray_stride_elements( x, 0 );
	const CBLAS_INT offsetX = stdlib_ndarray_offset_elements( x );

	double *dataX = (double *)stdlib_ndarray_data( x );
	API_SUFFIX(stdlib_strided_daxpb_ndarray)( N, alpha, beta, dataX, strideX, offsetX );
}
