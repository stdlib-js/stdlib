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
* Header file containing strided array macros.
*/
#ifndef STDLIB_STRIDED_BASE_UNARY_MACROS_H
#define STDLIB_STRIDED_BASE_UNARY_MACROS_H

#include <stdint.h>

/**
* Macro containing the preamble for a loop which operates on strided array elements.
*
* @example
* STDLIB_STRIDED_UNARY_LOOP_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_STRIDED_UNARY_LOOP_PREAMBLE                 \
	uint8_t *ip1 = arrays[ 0 ];                            \
	uint8_t *op1 = arrays[ 1 ];                            \
	int64_t is1 = strides[ 0 ];                            \
	int64_t os1 = strides[ 1 ];                            \
	int64_t n = shape[ 0 ];                                \
	int64_t i;                                             \
	if ( n <= 0 ) {                                        \
		return;                                            \
	}                                                      \
	if ( is1 < 0 ) {                                       \
		ip1 += (1-n) * is1;                                \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	for ( i = 0; i < n; i++, ip1 += is1, op1 += os1 )

/**
* Macro containing the preamble for a loop which operates on strided array elements and updates two strided output arrays.
*
* @example
* STDLIB_STRIDED_UNARY_LOOP_TWO_OUT_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_STRIDED_UNARY_LOOP_TWO_OUT_PREAMBLE         \
	uint8_t *ip1 = arrays[ 0 ];                            \
	uint8_t *op1 = arrays[ 1 ];                            \
	uint8_t *op2 = arrays[ 2 ];                            \
	int64_t is1 = strides[ 0 ];                            \
	int64_t os1 = strides[ 1 ];                            \
	int64_t os2 = strides[ 2 ];                            \
	int64_t n = shape[ 0 ];                                \
	int64_t i;                                             \
	if ( n <= 0 ) {                                        \
		return;                                            \
	}                                                      \
	if ( is1 < 0 ) {                                       \
		ip1 += (1-n) * is1;                                \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	if ( os2 < 0 ) {                                       \
		op2 += (1-n) * os2;                                \
	}                                                      \
	for ( i = 0; i < n; i++, ip1 += os1, op1 += os1, op2 += os2 )

/**
* Macro for a unary loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via the pointer `ip1` as `in1`.
* -   Creates a pointer `tout *out` to the output strided array element.
* -   Expects a provided expression to operate on `tin in1` and to store the result in `tout *out`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_STRIDED_UNARY_LOOP_INLINE( double, double, *out = in1 * in1 )
*/
#define STDLIB_STRIDED_UNARY_LOOP_INLINE( tin, tout, expr )        \
	STDLIB_STRIDED_UNARY_LOOP_PREAMBLE {                           \
		const tin in1 = *(tin *)ip1;                               \
		tout *out = (tout *)op1;                                   \
		expr;                                                      \
	}

/**
* Macro for a unary loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via the pointer `ip1`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* // e.g., d_d
* STDLIB_STRIDED_UNARY_LOOP_CLBK( double, double )
*/
#define STDLIB_STRIDED_UNARY_LOOP_CLBK( tin, tout )        \
	STDLIB_STRIDED_UNARY_LOOP_PREAMBLE {                   \
		const tin x = *(tin *)ip1;                         \
		*(tout *)op1 = (tout)f( x );                       \
	}

/**
* Macro for a unary loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip1`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z_z
* STDLIB_STRIDED_UNARY_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t, stdlib_complex128_t )
*/
#define STDLIB_STRIDED_UNARY_LOOP_CLBK_RET_NOCAST( tin, tout )                 \
	STDLIB_STRIDED_UNARY_LOOP_PREAMBLE {                                       \
		const tin x = *(tin *)ip1;                                             \
		*(tout *)op1 = f( x );                                                 \
	}

/**
* Macro for a unary loop which invokes a callback requiring arguments be explicitly cast to a different type.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via the pointer `ip1`.
* -   Explicitly casts each function argument to `fin`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
* @param fin   callback argument type
*
* @example
* // e.g., f_f_as_d_d
* STDLIB_STRIDED_UNARY_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_STRIDED_UNARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )  \
	STDLIB_STRIDED_UNARY_LOOP_PREAMBLE {                           \
		const tin x = *(tin *)ip1;                                 \
		*(tout *)op1 = (tout)f( (fin)x );                          \
	}

/**
* Macro for a unary loop which invokes a callback requiring arguments be cast to a different type via casting functions.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip1`.
* -   Explicitly casts each function argument via `cin`.
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
* @param cin   input casting function
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., f_c_as_z_z
* STDLIB_STRIDED_UNARY_LOOP_CLBK_ARG_CAST_FCN( float, stdlib_complex64_t, stdlib_complex128_from_float32, stdlib_complex128_to_complex64 )
*/
#define STDLIB_STRIDED_UNARY_LOOP_CLBK_ARG_CAST_FCN( tin, tout, cin, cout )    \
	STDLIB_STRIDED_UNARY_LOOP_PREAMBLE {                                       \
		const tin x = *(tin *)ip1;                                             \
		*(tout *)op1 = cout( f( cin( x ) ) );                                  \
	}

/**
* Macro for a unary loop which invokes a callback whose return value must be cast to a different type via a casting function.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip1`.
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tin   input type
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., d_z
* STDLIB_STRIDED_UNARY_LOOP_CLBK_RET_CAST_FCN( double, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_STRIDED_UNARY_LOOP_CLBK_RET_CAST_FCN( tin, tout, cout )    \
	STDLIB_STRIDED_UNARY_LOOP_PREAMBLE {                                  \
		const tin x = *(tin *)ip1;                                        \
		*(tout *)op1 = cout( f( x ) );                                    \
	}

#endif // !STDLIB_STRIDED_BASE_UNARY_MACROS_H
