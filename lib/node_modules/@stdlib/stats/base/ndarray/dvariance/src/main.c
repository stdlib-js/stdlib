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

#include "stdlib/stats/base/ndarray/dvariance.h"
#include "stdlib/stats/strided/dvariance.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the variance of a one-dimensional double-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the degrees of freedom adjustment.
*
* @param arrays    list containing ndarrays
* @return          variance
*/
double stdlib_stats_dvariance( const struct ndarray *arrays[] ) {
	const struct ndarray *x = arrays[ 0 ];

	double correction;
	stdlib_ndarray_get_float64( arrays[ 1 ], NULL, &correction );

	return API_SUFFIX(stdlib_strided_dvariance_ndarray)( stdlib_ndarray_dimension( x, 0 ), correction, (const double *)stdlib_ndarray_data( x ), stdlib_ndarray_stride_elements( x, 0 ), stdlib_ndarray_offset_elements( x ) );
}
