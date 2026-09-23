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

#include "stdlib/stats/base/ndarray/dmean.h"
#include "stdlib/stats/strided/dmean.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the arithmetic mean of a one-dimensional double-precision floating-point ndarray.
*
* @param arrays    list containing an input ndarray
* @return          arithmetic mean
*/
double stdlib_stats_dmean( const struct ndarray *arrays[] ) {
	const struct ndarray *x = arrays[ 0 ];
	return API_SUFFIX(stdlib_strided_dmean_ndarray)( stdlib_ndarray_dimension( x, 0 ), (const double *)stdlib_ndarray_data( x ), stdlib_ndarray_stride_elements( x, 0 ), stdlib_ndarray_offset_elements( x ) );
}
