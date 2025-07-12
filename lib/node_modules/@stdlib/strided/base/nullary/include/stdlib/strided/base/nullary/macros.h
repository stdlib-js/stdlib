/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
#ifndef STDLIB_STRIDED_BASE_NULLARY_MACROS_H
#define STDLIB_STRIDED_BASE_NULLARY_MACROS_H

#include <stdint.h>

/**
* Macro containing the preamble for a loop which updates a strided output array.
*
* @example
* STDLIB_STRIDED_NULLARY_LOOP_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE               \
	uint8_t *op1 = arrays[ 0 ];                            \
	int64_t os1 = strides[ 0 ];                            \
	int64_t n = shape[ 0 ];                                \
	int64_t i;                                             \
	if ( n <= 0 ) {                                        \
		return;                                            \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	for ( i = 0; i < n; i++, op1 += os1 )

/**
* Macro containing the preamble for a loop which updates two strided output arrays.
*
* @example
* STDLIB_STRIDED_NULLARY_LOOP_TWO_OUT_PREMABLE {
*     // Loop body...
* }
*/
#define STDLIB_STRIDED_NULLARY_LOOP_TWO_OUT_PREAMBLE       \
	uint8_t *op1 = arrays[ 0 ];                            \
	uint8_t *op2 = arrays[ 1 ];                            \
	int64_t os1 = strides[ 0 ];                            \
	int64_t os2 = strides[ 1 ];                            \
	int64_t n = shape[ 0 ];                                \
	int64_t i;                                             \
	if ( n <= 0 ) {                                        \
		return;                                            \
	}                                                      \
	if ( os1 < 0 ) {                                       \
		op1 += (1-n) * os1;                                \
	}                                                      \
	if ( os2 < 0 ) {                                       \
		op2 += (1-n) * os2;                                \
	}                                                      \
	for ( i = 0; i < n; i++, op1 += os1, op2 += os2 )

/**
* Macro for a nullary loop which inlines an expression.
*
* ## Notes
*
* -   Creates a pointer `tout *out` to the output strided array element.
* -   Expects a provided expression to store the expression result in `tout *out`.
*
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_STRIDED_NULLARY_LOOP_INLINE( double, *out = (double)1.0 )
*/
#define STDLIB_STRIDED_NULLARY_LOOP_INLINE( tout, expr )   \
	STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                 \
		tout *out = (tout *)op1;                           \
		expr;                                              \
	}

/**
* Macro for a nullary loop which invokes a callback.
*
* ## Notes
*
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tout  output type
*
* @example
* STDLIB_STRIDED_NULLARY_LOOP_CLBK( double )
*/
#define STDLIB_STRIDED_NULLARY_LOOP_CLBK( tout )           \
	STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                 \
		*(tout *)op1 = (tout)f();                          \
	}

/**
* Macro for a nullary loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).
*
* ## Notes
*
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t )
*/
#define STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_NOCAST( tout )                    \
	STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                                     \
		*(tout *)op1 = f();                                                    \
	}

/**
* Macro for a nullary loop which invokes a callback whose return values should be cast to a different type via casting functions.
*
* ## Notes
*
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float64/ctor.h"
*
* STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex128_to_complex64 )
*/
#define STDLIB_STRIDED_NULLARY_LOOP_CLBK_RET_CAST_FCN( tout, cout )            \
	STDLIB_STRIDED_NULLARY_LOOP_PREAMBLE {                                     \
		*(tout *)op1 = cout( f() );                                            \
	}

#endif // !STDLIB_STRIDED_BASE_NULLARY_MACROS_H
