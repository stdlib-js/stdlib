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

#include "stdlib/strided/base/binary/bb_d.h"
#include "stdlib/strided/base/binary/typedefs.h"
#include "stdlib/strided/base/binary/macros.h"
#include <stdint.h>

/**
* Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.
*
* @param arrays   array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/binary/bb_d.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, out };
*
* // Define the strides:
* int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint8_t add( uint8_t x, uint8_t y ) {
*     return x + y;
* }
*
* // Apply the callback:
* stdlib_strided_bb_d( arrays, shape, strides, (void *)add );
*/
void stdlib_strided_bb_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	BinaryFcnUint8 *f = (BinaryFcnUint8 *)fcn;
	STDLIB_STRIDED_BINARY_LOOP_CLBK( uint8_t, double )
}
