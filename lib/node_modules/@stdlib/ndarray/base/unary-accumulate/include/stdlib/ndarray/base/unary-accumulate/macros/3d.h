/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_MACROS_3D_H
#define STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_MACROS_3D_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Macro containing the preamble for nested loops which operate on elements of a three-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @param tout  output type
*
* @example
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREMABLE( double ) {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( double )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREAMBLE( tout )               \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	struct ndarray *x3 = arrays[ 2 ];                                          \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	uint8_t *px3 = stdlib_ndarray_data( x3 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	tout acc;                                                                  \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 2 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 2 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[2] );                                       \
		d2x1 = sx1[ 0 ] - ( S1*sx1[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	px3 += stdlib_ndarray_offset( x3 );                                        \
	/* Initialize the accumulator: */                                          \
	acc = (tout *)px2;                                                         \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i2 = 0; i2 < S2; i2++, px1 += d2x1 ) {                               \
		for ( i1 = 0; i1 < S1; i1++, px1 += d1x1 ) {                           \
			for ( i0 = 0; i0 < S0; i0++, px1 += d0x1 )

/**
* Macro containing the epilogue for nested loops which operate on elements of a three-dimensional ndarray.
*
* @param tout  output type
*
* @example
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREMABLE( double ) {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( double )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( tout )               \
		}                                                                      \
	}                                                                          \
	*(tout *)px3 = acc;

/**
* Macro for a three-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Expects a provided expression to operate on `tin in1` and update `acc`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_INLINE( double, double, acc += in1 )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_INLINE( tin, tout, expr )      \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREAMBLE( tout ) {                 \
		const tin in1 = *(tin *)px1;                                           \
		expr;                                                                  \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( tout )

/**
* Macro for a three-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function `f` invocation result to `tout`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* // e.g., dd_d
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK( double, double )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK( tin, tout )              \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREAMBLE( tout ) {                 \
		const tin x = *(tin *)px1;                                             \
		acc = (tout)f( acc, x );                                               \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( tout )

/**
* Macro for a three-dimensional loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via a pointer `px1`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., zz_z
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t, stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK_RET_NOCAST( tin, tout )   \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREAMBLE( tout ) {                 \
		const tin x = *(tin *)px1;                                             \
		acc = f( acc, x );                                                     \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( tout )

/**
* Macro for a three-dimensional ndarray loop which invokes a callback requiring arguments be explicitly cast to a different type.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function accumulator argument to `fin1`.
* -   Explicitly casts each function element argument to `fin2`.
* -   Explicitly casts each function `f` invocation result to `tout`.
*
* @param tin   input type
* @param tout  output type
* @param fin1  callback accumulator argument type
* @param fin2  callback element argument type
*
* @example
* // e.g., ff_f_as_dd_d
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK_ARG_CAST( float, float, double, double )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK_ARG_CAST( tin, tout, fin1, fin2 ) \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREAMBLE( tout ) {                 \
		const tin x = *(tin *)px1;                                             \
		acc = (tout)f( (fin1)acc, (fin2)x );                                   \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( tout )

/**
* Macro for a three-dimensional ndarray loop which invokes a callback requiring arguments be cast to a different type via casting functions.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each function accumulator argument via `cin1`.
* -   Explicitly casts each function element argument via `cin2`.
* -   Explicitly casts each function `f` invocation result via `cout`.
*
* @param tin   input type
* @param tout  output type
* @param cin1  input casting function for the accumulator argument
* @param cin2  input casting function for the element argument
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., cf_c_as_zz_z
* STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK_ARG_CAST_FCN( float, stdlib_complex64_t, stdlib_complex128_from_complex64, stdlib_complex128_from_float32, stdlib_complex128_to_complex64 )
*/
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_CLBK_ARG_CAST_FCN( tin, tout, cin1, cin2, cout ) \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_PREAMBLE( tout ) {                 \
		const tin x = *(tin *)px1;                                             \
		acc = cout( f( cin1( acc ), cin2( x ) ) );                             \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_ACCUMULATE_3D_LOOP_EPILOGUE( tout )

#endif // !STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_MACROS_3D_H
