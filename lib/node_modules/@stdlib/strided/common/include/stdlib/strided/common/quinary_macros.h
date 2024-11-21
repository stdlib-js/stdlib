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
* Header file containing strided array macros for loops involving "quinary" functions or expressions.
*/
#ifndef STDLIB_STRIDED_COMMON_QUINARY_MACROS_H
#define STDLIB_STRIDED_COMMON_QUINARY_MACROS_H

#include <stdint.h>

/**
* Macro containing the preamble for a loop which applies a quinary function to strided array elements.
*
* @example
* STDLIB_QUINARY_LOOP_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_QUINARY_LOOP_PREAMBLE                       \
	uint8_t *ip1 = arrays[ 0 ];                            \
	uint8_t *ip2 = arrays[ 1 ];                            \
	uint8_t *ip3 = arrays[ 2 ];                            \
	uint8_t *ip4 = arrays[ 3 ];                            \
	uint8_t *ip5 = arrays[ 4 ];                            \
	uint8_t *op1 = arrays[ 5 ];                            \
	int64_t is1 = strides[ 0 ];                            \
	int64_t is2 = strides[ 1 ];                            \
	int64_t is3 = strides[ 2 ];                            \
	int64_t is4 = strides[ 3 ];                            \
	int64_t is5 = strides[ 4 ];                            \
	int64_t os1 = strides[ 5 ];                            \
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
	if ( is3 < 0 ) {                                       \
		ip3 += (1-n) * is3;                                \
	}                                                      \
	if ( is4 < 0 ) {                                       \
		ip4 += (1-n) * is4;                                \
	}                                                      \
	if ( is5 < 0 ) {                                       \
		ip5 += (1-n) * is5;                                \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	for ( i = 0; i < n; i++, ip1 += is1, ip2 += is2, ip3 += is3, ip4 += is4, ip5 += is5, op1 += os1 )

/**
* Macro containing the preamble for a loop which applies a quinary function to strided array elements and updates two strided output arrays.
*
* @example
* STDLIB_QUINARY_LOOP_TWO_OUT_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_QUINARY_LOOP_TWO_OUT_PREAMBLE               \
	uint8_t *ip1 = arrays[ 0 ];                            \
	uint8_t *ip2 = arrays[ 1 ];                            \
	uint8_t *ip3 = arrays[ 2 ];                            \
	uint8_t *ip4 = arrays[ 3 ];                            \
	uint8_t *ip5 = arrays[ 4 ];                            \
	uint8_t *op1 = arrays[ 5 ];                            \
	uint8_t *op2 = arrays[ 6 ];                            \
	int64_t is1 = strides[ 0 ];                            \
	int64_t is2 = strides[ 1 ];                            \
	int64_t is3 = strides[ 2 ];                            \
	int64_t is4 = strides[ 3 ];                            \
	int64_t is5 = strides[ 4 ];                            \
	int64_t os1 = strides[ 5 ];                            \
	int64_t os2 = strides[ 6 ];                            \
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
	if ( is3 < 0 ) {                                       \
		ip3 += (1-n) * is3;                                \
	}                                                      \
	if ( is4 < 0 ) {                                       \
		ip4 += (1-n) * is4;                                \
	}                                                      \
	if ( is5 < 0 ) {                                       \
		ip5 += (1-n) * is5;                                \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	if ( os2 < 0 ) {                                       \
		op2 += (1-n) * os2;                                \
	}                                                      \
	for ( i = 0; i < n; i++, ip1 += is1, ip2 += is2, ip3 += is3, ip4 += is4, ip5 += is5, op1 += os1, op2 += os2 )

/**
* Macro for a quinary loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via pointers `ip` as `in1`, `in2`, `in3`, `in4`, and `in5`, respectively.
* -   Creates a pointer `tout *out` to the output strided array element.
* -   Expects a provided expression to operate on `tin in1`, `tin in2`, `tin in3`, `tin in4`, and `tin in5` and to store the result in `tout *out`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_QUINARY_LOOP_INLINE( double, double, *out = in1 * in2 * in3 * in4 * in5 )
*/
#define STDLIB_QUINARY_LOOP_INLINE( tin, tout, expr )      \
	STDLIB_QUINARY_LOOP_PREAMBLE {                         \
		const tin in1 = *(tin *)ip1;                       \
		const tin in2 = *(tin *)ip2;                       \
		const tin in3 = *(tin *)ip3;                       \
		const tin in4 = *(tin *)ip4;                       \
		const tin in5 = *(tin *)ip5;                       \
		tout *out = (tout *)op1;                           \
		expr;                                              \
	}

/**
* Macro for a quinary loop which invokes a callback.
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
* STDLIB_QUINARY_LOOP_CLBK( double, double )
*/
#define STDLIB_QUINARY_LOOP_CLBK( tin, tout )              \
	STDLIB_QUINARY_LOOP_PREAMBLE {                         \
		const tin x = *(tin *)ip1;                         \
		const tin y = *(tin *)ip2;                         \
		const tin z = *(tin *)ip3;                         \
		const tin w = *(tin *)ip4;                         \
		const tin v = *(tin *)ip5;                         \
		*(tout *)op1 = (tout)f( x, y, z, w, v );           \
	}

/**
* Macro for a quinary loop which invokes a callback requiring arguments be cast to a different type.
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
* STDLIB_QUINARY_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_QUINARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )                  \
	STDLIB_QUINARY_LOOP_PREAMBLE {                                           \
		const tin x = *(tin *)ip1;                                           \
		const tin y = *(tin *)ip2;                                           \
		const tin z = *(tin *)ip3;                                           \
		const tin w = *(tin *)ip4;                                           \
		const tin v = *(tin *)ip5;                                           \
		*(tout *)op1 = (tout)f( (fin)x, (fin)y, (fin)z, (fin)w, (fin)v );    \
	}

/**
* Macro for a quinary loop which invokes a callback while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tin3  data type for the third input strided array
* @param tin4  data type for the fourth input strided array
* @param tin5  data type for the fifth input strided array
* @param tout  output type
*
* @example
* STDLIB_QUINARY_LOOP_CLBK_MIXED( double, double, double, uint32_t, uint32_t, double )
*/
#define STDLIB_QUINARY_LOOP_CLBK_MIXED( tin1, tin2, tin3, tin4, tin5, tout )   \
	STDLIB_QUINARY_LOOP_PREAMBLE {                                             \
		const tin1 x = *(tin1 *)ip1;                                           \
		const tin2 y = *(tin2 *)ip2;                                           \
		const tin3 z = *(tin3 *)ip3;                                           \
		const tin4 w = *(tin4 *)ip4;                                           \
		const tin5 v = *(tin5 *)ip5;                                           \
		*(tout *)op1 = (tout)f( x, y, z, w, v );                               \
	}

/**
* Macro for a quinary loop which invokes a callback requiring arguments be cast to a different type while operating on mixed strided input arrays.
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
* @param tin3  data type for the third input strided array
* @param tin4  data type for the fourth input strided array
* @param tin5  data type for the fifth input strided array
* @param fin1  data type for first callback argument
* @param fin2  data type for second callback argument
* @param fin3  data type for third callback argument
* @param fin4  data type for fourth callback argument
* @param fin5  data type for fifth callback argument
* @param tout  output type
*
* @example
* STDLIB_QUINARY_LOOP_CLBK_MIXED_ARG_CAST( float, float, float, uint16_t, uint16_t, double, double, double, uint32_t, uint32_t, float )
*/
#define STDLIB_QUINARY_LOOP_CLBK_MIXED_ARG_CAST( tin1, tin2, tin3, tin4, tin5, fin1, fin2, fin3, fin4, fin5, tout ) \
	STDLIB_QUINARY_LOOP_PREAMBLE {                                                \
		const tin1 x = *(tin1 *)ip1;                                              \
		const tin2 y = *(tin2 *)ip2;                                              \
		const tin3 z = *(tin3 *)ip3;                                              \
		const tin4 w = *(tin4 *)ip4;                                              \
		const tin5 v = *(tin5 *)ip5;                                              \
		*(tout *)op1 = (tout)f( (fin1)x, (fin2)y, (fin3)z, (fin4)w, (fin5)v );    \
	}

#endif // !STDLIB_STRIDED_COMMON_QUINARY_MACROS_H
