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
* Header file containing strided array macros for loops involving "binary" functions or expressions.
*/
#ifndef STDLIB_STRIDED_BASE_BINARY_MACROS_H
#define STDLIB_STRIDED_BASE_BINARY_MACROS_H

#include <stdint.h>

/**
* Macro containing the preamble for a loop which operates on strided array elements.
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_STRIDED_BINARY_LOOP_PREAMBLE                \
	uint8_t *ip1 = arrays[ 0 ];                            \
	uint8_t *ip2 = arrays[ 1 ];                            \
	uint8_t *op1 = arrays[ 2 ];                            \
	int64_t is1 = strides[ 0 ];                            \
	int64_t is2 = strides[ 1 ];                            \
	int64_t os1 = strides[ 2 ];                            \
	int64_t n = shape[ 0 ];                                \
	int64_t i;                                             \
	if ( n <= 0 ) {                                        \
		return;                                            \
	}                                                      \
	if ( is1 < 0 ) {                                       \
		ip1 += (1-n) * is1;                                \
	}                                                      \
	if ( is2 < 0 ) {                                       \
		ip2 += (1-n) * is2;                                \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	for ( i = 0; i < n; i++, ip1 += is1, ip2 += is2, op1 += os1 )

/**
* Macro containing the preamble for a loop which operates on strided array elements and updates two strided output arrays.
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_TWO_OUT_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_STRIDED_BINARY_LOOP_TWO_OUT_PREAMBLE        \
	uint8_t *ip1 = arrays[ 0 ];                            \
	uint8_t *ip2 = arrays[ 1 ];                            \
	uint8_t *op1 = arrays[ 2 ];                            \
	uint8_t *op2 = arrays[ 3 ];                            \
	int64_t is1 = strides[ 0 ];                            \
	int64_t is2 = strides[ 1 ];                            \
	int64_t os1 = strides[ 2 ];                            \
	int64_t os2 = strides[ 3 ];                            \
	int64_t n = shape[ 0 ];                                \
	int64_t i;                                             \
	if ( n <= 0 ) {                                        \
		return;                                            \
	}                                                      \
	if ( is1 < 0 ) {                                       \
		ip1 += (1-n) * is1;                                \
	}                                                      \
	if ( is2 < 0 ) {                                       \
		ip2 += (1-n) * is2;                                \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	if ( os2 < 0 ) {                                       \
		op2 += (1-n) * os2;                                \
	}                                                      \
	for ( i = 0; i < n; i++, ip1 += is1, ip2 += is2, op1 += os1, op2 += os2 )

/**
* Macro for a binary loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via pointers `ip1` and `ip2` as `in1` and `in2`, respectively.
* -   Creates a pointer `tout *out` to the output strided array element.
* -   Expects a provided expression to operate on `tin in1` and `tin in2` and to store the result in `tout *out`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_INLINE( double, double, *out = in1 * in2 )
*/
#define STDLIB_STRIDED_BINARY_LOOP_INLINE( tin, tout, expr )       \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                          \
		const tin in1 = *(tin *)ip1;                               \
		const tin in2 = *(tin *)ip2;                               \
		tout *out = (tout *)op1;                                   \
		expr;                                                      \
	}

/**
* Macro for a binary loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_CLBK( double, double )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK( tin, tout )       \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                  \
		const tin x = *(tin *)ip1;                         \
		const tin y = *(tin *)ip2;                         \
		*(tout *)op1 = (tout)f( x, y );                    \
	}

/**
* Macro for a binary loop which invokes a callback requiring arguments be cast to a different type.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
* -   Explicitly casts each function argument to `fin`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
* @param fin   callback argument type
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )  \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                           \
		const tin x = *(tin *)ip1;                                  \
		const tin y = *(tin *)ip2;                                  \
		*(tout *)op1 = (tout)f( (fin)x, (fin)y );                   \
	}

/**
* Macro for a binary loop which invokes a callback while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tout  output type
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( double, uint32_t, double )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( tin1, tin2, tout )  \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                          \
		const tin1 x = *(tin1 *)ip1;                               \
		const tin2 y = *(tin2 *)ip2;                               \
		*(tout *)op1 = (tout)f( x, y );                            \
	}

/**
* Macro for a binary loop which invokes a callback requiring arguments be cast to a different type while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
* -   Explicitly casts each function argument according to type `fin`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tout  output type
* @param fin1  data type for first callback argument
* @param fin2  data type for second callback argument
*
* @example
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( float, uint16_t, double, uint32_t, float )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( tin1, tin2, tout, fin1, fin2 ) \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                              \
		const tin1 x = *(tin1 *)ip1;                                                   \
		const tin2 y = *(tin2 *)ip2;                                                   \
		*(tout *)op1 = (tout)f( (fin1)x, (fin2)y );                                    \
	}

#endif // !STDLIB_STRIDED_BASE_BINARY_MACROS_H
