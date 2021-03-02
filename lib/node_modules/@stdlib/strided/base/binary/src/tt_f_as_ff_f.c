/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/strided/base/binary/tt_f_as_ff_f.h"
#include "stdlib/strided/base/binary/typedefs.h"
#include "stdlib/strided/base/binary/macros.h"
#include <stdint.h>

/**
* Applies a binary callback accepting and returning single-precision floating-point numbers to unsigned 16-bit integer strided input arrays and assigns results to elements in a single-precision floating-point strided output array.
*
* @param arrays   array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/binary/tt_f_as_ff_f.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, out };
*
* // Define the strides:
* int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per float
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* float add( float x, float y ) {
*     return x + y;
* }
*
* // Apply the callback:
* stdlib_strided_tt_f_as_ff_f( arrays, shape, strides, (void *)add );
*/
void stdlib_strided_tt_f_as_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	BinaryFcnFloat32 *f = (BinaryFcnFloat32 *)fcn;
	STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( uint16_t, float, float )
}
