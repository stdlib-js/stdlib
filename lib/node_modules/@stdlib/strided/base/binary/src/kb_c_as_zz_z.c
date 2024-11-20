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

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

#include "stdlib/strided/base/binary/kb_c_as_zz_z.h"
#include "stdlib/strided/base/binary/macros.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>

/**
* Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param arrays   array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/binary/kb_c_as_zz_z.h"
* #include "stdlib/complex/float64/ctor.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, out };
*
* // Define the strides:
* int64_t strides[] = { 2, 1, 8 };
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* static stdlib_complex128_t fcn( stdlib_complex128_t x, stdlib_complex128_t y ) {
*     // ...
* }
*
* // Apply the callback:
* stdlib_strided_kb_c_as_zz_z( arrays, shape, strides, (void *)fcn );
*/
void stdlib_strided_kb_c_as_zz_z( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn ) {
	typedef stdlib_complex128_t func_type( const stdlib_complex128_t x, const stdlib_complex128_t y );
	func_type *f = (func_type *)fcn;
	STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST_FCN( int16_t, uint8_t, stdlib_complex64_t, stdlib_complex128_from_int16, stdlib_complex128_from_uint8, stdlib_complex128_to_complex64 )
}
