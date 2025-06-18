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
* Strided array functions for quinary callbacks.
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
*/

#include "stdlib/strided/common/quinary.h"
#include "stdlib/strided/common/quinary_typedefs.h"
#include "stdlib/strided/common/quinary_macros.h"
#include <stdint.h>

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 8, 8, 8, 8, 8, 8 }; // 8 bytes per double
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* double add5( double x, double y, double z, double w, double v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_ddddd_d( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_ddddd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnFloat64 *f = (QuinaryFcnFloat64 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( double, double )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 4, 4, 4, 4, 4, 4 }; // 4 bytes per float
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* float add5( float x, float y, float z, float w, float v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_fffff_f( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_fffff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnFloat32 *f = (QuinaryFcnFloat32 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( float, float )
}

/**
* Applies a quinary callback to strided input arrays, casting the callback's double-precision return value to a single-precision floating-point number.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 4, 4, 4, 4, 4, 4 }; // 4 bytes per float
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* double add5( double x, double y, double z, double w, double v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_fffff_f_as_ddddd_d( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_fffff_f_as_ddddd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnFloat64 *f = (QuinaryFcnFloat64 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK_ARG_CAST( float, float, double )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 4, 4, 4, 4, 4, 4 }; // 4 bytes per uint32
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint32_t add5( uint32_t x, uint32_t y, uint32_t z, uint32_t w, uint32_t v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_IIIII_I( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_IIIII_I( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnUint32 *f = (QuinaryFcnUint32 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( uint32_t, uint32_t )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 4, 4, 4, 4, 4, 4 }; // 4 bytes per int32
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* int32_t add5( int32_t x, int32_t y, int32_t z, int32_t w, int32_t v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_iiiii_i( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_iiiii_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnInt32 *f = (QuinaryFcnInt32 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( int32_t, int32_t )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 2, 2, 2, 2, 2, 2 }; // 2 bytes per uint16
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint16_t add5( uint16_t x, uint16_t y, uint16_t z, uint16_t w, uint16_t v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_HHHHH_H( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_HHHHH_H( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnUint16 *f = (QuinaryFcnUint16 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( uint16_t, uint16_t )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 2, 2, 2, 2, 2, 2 }; // 2 bytes per int16
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* int16_t add5( int16_t x, int16_t y, int16_t z, int16_t w, int16_t v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_hhhhh_h( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_hhhhh_h( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnInt16 *f = (QuinaryFcnInt16 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( int16_t, int16_t )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 1, 1, 1, 1, 1, 1 }; // 1 bytes per uint8
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint8_t add5( uint8_t x, uint8_t y, uint8_t z, uint8_t w, uint8_t v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_BBBBB_B( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_BBBBB_B( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnUint8 *f = (QuinaryFcnUint8 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( uint8_t, uint8_t )
}

/**
* Applies a quinary callback to strided input arrays.
*
* @param arrays   array whose first five elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/common/quinary.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0 };
* uint8_t y[] = { 0, 0, 0 };
* uint8_t z[] = { 0, 0, 0 };
* uint8_t w[] = { 0, 0, 0 };
* uint8_t v[] = { 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, y, z, w, v, out };
*
* // Define the strides:
* int64_t strides[] = { 1, 1, 1, 1, 1, 1 }; // 1 bytes per int8
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* int8_t add5( int8_t x, int8_t y, int8_t z, int8_t w, int8_t v ) {
*     return x + y + z + w + v;
* }
*
* // Apply the callback:
* stdlib_strided_bbbbb_b( arrays, shape, strides, (void *)add5 );
*/
void stdlib_strided_bbbbb_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	QuinaryFcnInt8 *f = (QuinaryFcnInt8 *)fcn;
	STDLIB_QUINARY_LOOP_CLBK( int8_t, int8_t )
}
