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

#ifndef STDLIB_NDARRAY_BASE_NULLARY_MACROS_3D_H
#define STDLIB_NDARRAY_BASE_NULLARY_MACROS_3D_H

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
* @example
* STDLIB_NDARRAY_NULLARY_3D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_PREAMBLE                                \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
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
	/* Set a pointers to the first indexed element... */                       \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i2 = 0; i2 < S2; i2++, px1 += d2x1 ) {                               \
		for ( i1 = 0; i1 < S1; i1++, px1 += d1x1 ) {                           \
			for ( i0 = 0; i0 < S0; i0++, px1 += d0x1 )

/**
* Macro containing the preamble for nested loops which update two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_NULLARY_3D_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_TWO_OUT_PREAMBLE                        \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t *sx2 = stdlib_ndarray_strides( x2 );                               \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 2 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 2 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[2] );                                       \
		d2x1 = sx1[ 0 ] - ( S1*sx1[1] );                                       \
		d0x2 = sx2[ 2 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[2] );                                       \
		d2x2 = sx2[ 0 ] - ( S1*sx2[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d0x2 = sx2[ 0 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[0] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[1] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i2 = 0; i2 < S2; i2++, px1 += d2x1, px2 += d2x2 ) {                  \
		for ( i1 = 0; i1 < S1; i1++, px1 += d1x1, px2 += d1x2 ) {              \
			for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the epilogue for nested loops which operate on elements of a three-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_NULLARY_3D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE                                \
		}                                                                      \
	}

/**
* Macro for a nullary three-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Creates a pointer `tout *out` to the output ndarray element.
* -   Expects a provided expression to store the result in `tout *out`.
*
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_NULLARY_3D_LOOP_INLINE( double, *out = 10.0 )
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_INLINE( tout, expr )                    \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_PREAMBLE {                                  \
		tout *out = (tout *)px1;                                               \
		expr;                                                                  \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE

/**
* Macro for a nullary three-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output ndarray via the pointer `px1`.
*
* @param tout  output type
*
* @example
* // e.g., d
* STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK( double )
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK( tout )                            \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_PREAMBLE {                                  \
		*(tout *)px1 = (tout)f();                                              \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE

/**
* Macro for a nullary three-dimensional loop which invokes a callback and does not cast the return callback's return value (e.g., a `struct`).
*
* ## Notes
*
* -   Stores the result in an output ndarray of type `tout` via the pointer `px1`.
*
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z
* STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK_RET_NOCAST( stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK_RET_NOCAST( tout )                 \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_PREAMBLE {                                  \
		*(tout *)px1 = f();                                                    \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE

/**
* Macro for a nullary three-dimensional ndarray loop which invokes a callback whose return value must be cast to a different type via a casting function.
*
* ## Notes
*
* -   Explicitly casts each function `f` invocation result via `cout`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px1`.
*
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., z_as_d
* STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK_RET_CAST_FCN( tout, cout )         \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_PREAMBLE {                                  \
		*(tout *)px1 = cout( f() );                                            \
	}                                                                          \
	STDLIB_NDARRAY_NULLARY_3D_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_NULLARY_MACROS_3D_H
