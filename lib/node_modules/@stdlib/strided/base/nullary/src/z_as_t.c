/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/strided/base/nullary/z_as_t.h"
#include "stdlib/strided/base/nullary/macros.h"
#include "stdlib/complex/float64.h"
#include <stdint.h>

/**
* Applies a nullary callback and assigns results to elements in a strided output array.
*
* @param arrays   array whose only element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/nullary/z_as_t.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 16 };
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* static uint16_t fcn( void ) {
*     return 3;
* }
*
* // Apply the callback:
* stdlib_strided_z_as_t( arrays, shape, strides, (void *)fcn );
*/
void stdlib_strided_z_as_t( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn ) {
	typedef uint16_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_CAST_FCN( stdlib_complex128_t, stdlib_complex128_from_uint16 )
}
