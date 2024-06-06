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
* Header file for strided array macros.
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
* // e.g., dd_d
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
* // e.g., ff_f_as_dd_d
* STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )  \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                           \
		const tin x = *(tin *)ip1;                                  \
		const tin y = *(tin *)ip2;                                  \
		*(tout *)op1 = (tout)f( (fin)x, (fin)y );                   \
	}

/**
* Macro for a binary loop which invokes a callback requiring arguments be cast to a different type via casting functions.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
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
* // e.g., ff_c_as_zz_z
* STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST_FCN( float, stdlib_complex64_t, stdlib_complex128_from_float32, stdlib_complex128_to_complex64 )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST_FCN( tin, tout, cin, cout )   \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                      \
		const tin x = *(tin *)ip1;                                             \
		const tin y = *(tin *)ip2;                                             \
		*(tout *)op1 = cout( f( cin( x ), cin( y ) ) );                        \
	}

/**
* Macro for a binary loop which invokes a callback whose return value must be cast to a different type via a casting function.
*
* ## Notes
*
* -   Retrieves each strided array element according to type `tin` via a pointer `ip`.
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
* // e.g., dd_z
* STDLIB_STRIDED_BINARY_LOOP_CLBK_RET_CAST_FCN( double, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_RET_CAST_FCN( tin, tout, cout )   \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                 \
		const tin x = *(tin *)ip1;                                        \
		const tin y = *(tin *)ip2;                                        \
		*(tout *)op1 = cout( f( x, y ) );                                 \
	}

/**
* Macro for a binary loop which invokes a callback while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element for the first input array according to type `tin1` via a pointer `ip1`.
* -   Retrieves each strided array element for the second input array according to type `tin2` via a pointer `ip2`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output strided array via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tout  output type
*
* @example
* #include <stdint.h>
*
* // e.g., du_d
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( double, uint32_t, double )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( tin1, tin2, tout )  \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                          \
		const tin1 x = *(tin1 *)ip1;                               \
		const tin2 y = *(tin2 *)ip2;                               \
		*(tout *)op1 = (tout)f( x, y );                            \
	}

/**
* Macro for a binary loop which invokes a callback while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element for the first input array according to type `tin1` via a pointer `ip1`.
* -   Retrieves each strided array element for the second input array according to type `tin2` via a pointer `ip2`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include <stdint.h>
*
* // e.g., zi_z
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_RET_NOCAST( stdlib_complex128_t, int32_t, stdlib_complex128_t )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_RET_NOCAST( tin1, tin2, tout )     \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                        \
		const tin1 x = *(tin1 *)ip1;                                             \
		const tin2 y = *(tin2 *)ip2;                                             \
		*(tout *)op1 = f( x, y );                                                \
	}

/**
* Macro for a binary loop which invokes a callback requiring arguments be cast to a different type while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element for the first input array according to type `tin1` via a pointer `ip1`.
* -   Retrieves each strided array element for the second input array according to type `tin2` via a pointer `ip2`.
* -   Explicitly casts the first function argument according to type `fin1`.
* -   Explicitly casts the second function argument according to type `fin2`.
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
* #include <stdint.h>
*
* // e.g., ft_f_as_du_d
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( float, uint16_t, float, double, uint32_t )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( tin1, tin2, tout, fin1, fin2 ) \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                              \
		const tin1 x = *(tin1 *)ip1;                                                   \
		const tin2 y = *(tin2 *)ip2;                                                   \
		*(tout *)op1 = (tout)f( (fin1)x, (fin2)y );                                    \
	}

/**
* Macro for a binary loop which invokes a callback requiring arguments be cast to a different type via casting functions while operating on mixed strided input arrays.
*
* ## Notes
*
* -   Retrieves each strided array element for the first input array according to type `tin1` via a pointer `ip1`.
* -   Retrieves each strided array element for the second input array according to type `tin2` via a pointer `ip2`.
* -   Explicitly casts the first function argument via `cin1`.
* -   Explicitly casts the second function argument via `cin2`.
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tout  output type
* @param cin1  casting function for first callback argument
* @param cin2  casting function for second callback argument
* @param cout  casting function for the callback return value
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., cf_c_as_zz_z
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST_FCN( stdlib_complex64_t, float, stdlib_complex64_t, stdlib_complex128_from_complex64, stdlib_complex128_from_float32, stdlib_complex128_to_complex64 )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST_FCN( tin1, tin2, tout, cin1, cin2, cout ) \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                                        \
		const tin1 x = *(tin1 *)ip1;                                                             \
		const tin2 y = *(tin2 *)ip2;                                                             \
		*(tout *)op1 = cout( f( cin1( x ), cin2( y ) ) );                                        \
	}

/**
* Macro for a binary loop which invokes a callback operating on mixed strided input arrays and whose return value must be cast to a different type via a casting function.
*
* ## Notes
*
* -   Retrieves each strided array element for the first input array according to type `tin1` via a pointer `ip1`.
* -   Retrieves each strided array element for the second input array according to type `tin2` via a pointer `ip2`.
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output strided array of type `tout` via the pointer `op1`.
*
* @param tin1  data type for the first input strided array
* @param tin2  data type for the second input strided array
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include <stdint.h>
*
* // e.g., du_z
* STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_RET_CAST_FCN( double, uint32_t, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_RET_CAST_FCN( tin1, tin2, tout, cout )  \
	STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                             \
		const tin1 x = *(tin1 *)ip1;                                                  \
		const tin2 y = *(tin2 *)ip2;                                                  \
		*(tout *)op1 = cout( f( x, y ) );                                             \
	}

#endif // !STDLIB_STRIDED_BASE_BINARY_MACROS_H
