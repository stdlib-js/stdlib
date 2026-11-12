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

#include "stdlib/blas/ext/base/ndarray/sany.h"
#include "stdlib/blas/ext/base/sany.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/blas/base/shared.h"
#include <stdbool.h>

/**
* Tests whether at least one element in a one-dimensional single-precision floating-point ndarray is truthy.
*
* @param arrays    list containing an input ndarray
* @return          boolean indicating whether at least one element is truthy
*/
bool stdlib_blas_ext_sany( const struct ndarray *arrays[] ) {
	const struct ndarray *x = arrays[ 0 ];
	return API_SUFFIX(stdlib_strided_sany_ndarray)( stdlib_ndarray_dimension( x, 0 ), (const float *)stdlib_ndarray_data( x ), stdlib_ndarray_stride_elements( x, 0 ), stdlib_ndarray_offset_elements( x ) );
}
