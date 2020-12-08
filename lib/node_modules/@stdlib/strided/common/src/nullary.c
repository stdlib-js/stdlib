/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Strided array functions for nullary callbacks.
*
* ## Notes
*
* -   Character codes for data types:
*
*     -   d: float64 (double)
*     -   f: float32 (float)
*     -   b: int8 (signed char)
*     -   B: uint8 (unsigned char)
*     -   h: int16 (signed short)
*     -   H: uint16 (unsigned short)
*     -   i: int32 (signed int)
*     -   I: uint32 (unsigned int)
*
* -   Function name suffix naming convention:
*
*     ```text
*     <base_function_name>[_<input_data_types>]_<output_data_type>[_as_<callback_arg_data_types>_<callback_return_data_type>]
*     ```
*
*     For example,
*
*     ```c
*     void stdlib_strided_dd_d(...) {...}
*     ```
*
*     is a function which accepts two strided input arrays containing double-precision floating-point numbers and whose results are cast as double-precision floating-point numbers. In other words, the suffix encodes the function type signature.
*
* -   To support callbacks whose input arguments and/or return values are of a different data type than the input and/or output strided array data types, the naming convention supports appending an `as` suffix. For example,
*
*     ```c
*     void stdlib_strided_ff_f_as_dd_d(...) {...}
*     ```
*
*     is a function which accepts two strided input arrays containing single-precision floating-point numbers and whose results are cast as single-precision floating-point numbers. However, the callback requires each pair of single-precision floating-point numbers be cast to double-precision floating-point numbers when provided as arguments, and the callback return value is a double-precision floating-point number. Accordingly, the conversion process would be
*
*     ```text
*     float in1 -> double in1
*     float in2 -> double in2
*     double out1 = f( in1, in2 )
*     float out1 <- double out1
*     ```
*
* -   The functions included in this file are **not** exhaustive and that is intentional. Namely, with few exceptions, functions which convert nullary callback return values to a different type are not included (e.g., widening an `int16` to an `int32`). Nullary functions should be simple enough that this can be handled in userland via function wrappers which return the desired types.
*/
#include "stdlib/strided/common/nullary.h"
#include "stdlib/strided/common/nullary_typedefs.h"
#include "stdlib/strided/common/nullary_macros.h"
#include <stdint.h>

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 8 }; // 8 bytes per double
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* double ones() {
*     return 1.0;
* }
*
* // Fill the output array with ones:
* stdlib_strided_d( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnFloat64 *f = (NullaryFcnFloat64 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( double )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 4 }; // 4 bytes per float
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* float ones() {
*     return 1.0f;
* }
*
* // Fill the output array with ones:
* stdlib_strided_f( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnFloat32 *f = (NullaryFcnFloat32 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( float )
}

/**
* Applies a nullary callback to each element in a strided output array, casting the callback's double-precision return value to a single-precision floating-point number.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 4 }; // 4 bytes per float
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* double ones() {
*     return 1.0;
* }
*
* // Fill the output array with ones:
* stdlib_strided_f_as_d( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_f_as_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnFloat64 *f = (NullaryFcnFloat64 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( float )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 4 }; // 4 bytes per uint32
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint32_t ones() {
*     return 1;
* }
*
* // Fill the output array with ones:
* stdlib_strided_I( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_I( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnUint32 *f = (NullaryFcnUint32 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( uint32_t )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 4 }; // 4 bytes per int32
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* int32_t ones() {
*     return 1;
* }
*
* // Fill the output array with ones:
* stdlib_strided_i( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnInt32 *f = (NullaryFcnInt32 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( int32_t )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 2 }; // 2 bytes per uint16
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint16_t ones() {
*     return 1;
* }
*
* // Fill the output array with ones:
* stdlib_strided_H( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_H( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnUint16 *f = (NullaryFcnUint16 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( uint16_t )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 2 }; // 2 bytes per int16
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* int16_t ones() {
*     return 1;
* }
*
* // Fill the output array with ones:
* stdlib_strided_h( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_h( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnInt16 *f = (NullaryFcnInt16 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( int16_t )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 1 }; // 1 byte per uint8
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint8_t ones() {
*     return 1;
* }
*
* // Fill the output array with ones:
* stdlib_strided_B( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_B( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnUint8 *f = (NullaryFcnUint8 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( uint8_t )
}

/**
* Applies a nullary callback to each element in a strided output array.
*
* @param arrays   array whose only element is a pointer to the output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/nullary.h"
* #include <stdint.h>
*
* // Create a zeroed underlying byte array:
* uint8_t out[] = { 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { out };
*
* // Define the strides:
* int64_t strides[] = { 1 }; // 1 byte per int8
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* int8_t ones() {
*     return 1;
* }
*
* // Fill the output array with ones:
* stdlib_strided_b( arrays, shape, strides, (void *)ones );
*/
void stdlib_strided_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	NullaryFcnInt8 *f = (NullaryFcnInt8 *)fcn;
	STDLIB_NULLARY_LOOP_CLBK( int8_t )
}
