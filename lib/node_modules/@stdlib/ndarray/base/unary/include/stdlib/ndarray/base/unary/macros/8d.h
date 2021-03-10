/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_UNARY_MACROS_8D_H
#define STDLIB_NDARRAY_BASE_UNARY_MACROS_8D_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Macro containing the preamble for nested loops which operate on elements of an eight-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_UNARY_8D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_8D_LOOP_PREAMBLE                                  \
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
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d5x1;                                                              \
	int64_t d6x1;                                                              \
	int64_t d7x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t d5x2;                                                              \
	int64_t d6x2;                                                              \
	int64_t d7x2;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t S5;                                                                \
	int64_t S6;                                                                \
	int64_t S7;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t i5;                                                                \
	int64_t i6;                                                                \
	int64_t i7;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 7 ];                                                       \
		S1 = shape[ 6 ];                                                       \
		S2 = shape[ 5 ];                                                       \
		S3 = shape[ 4 ];                                                       \
		S4 = shape[ 3 ];                                                       \
		S5 = shape[ 2 ];                                                       \
		S6 = shape[ 1 ];                                                       \
		S7 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 7 ];                                                       \
		d1x1 = sx1[ 6 ] - ( S0*sx1[7] );                                       \
		d2x1 = sx1[ 5 ] - ( S1*sx1[6] );                                       \
		d3x1 = sx1[ 4 ] - ( S2*sx1[5] );                                       \
		d4x1 = sx1[ 3 ] - ( S3*sx1[4] );                                       \
		d5x1 = sx1[ 2 ] - ( S4*sx1[3] );                                       \
		d6x1 = sx1[ 1 ] - ( S5*sx1[2] );                                       \
		d7x1 = sx1[ 0 ] - ( S6*sx1[1] );                                       \
		d0x2 = sx2[ 7 ];                                                       \
		d1x2 = sx2[ 6 ] - ( S0*sx2[7] );                                       \
		d2x2 = sx2[ 5 ] - ( S1*sx2[6] );                                       \
		d3x2 = sx2[ 4 ] - ( S2*sx2[5] );                                       \
		d4x2 = sx2[ 3 ] - ( S3*sx2[4] );                                       \
		d5x2 = sx2[ 2 ] - ( S4*sx2[3] );                                       \
		d6x2 = sx2[ 1 ] - ( S5*sx2[2] );                                       \
		d7x2 = sx2[ 0 ] - ( S6*sx2[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		S5 = shape[ 5 ];                                                       \
		S6 = shape[ 6 ];                                                       \
		S7 = shape[ 7 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
		d5x1 = sx1[ 5 ] - ( S4*sx1[4] );                                       \
		d6x1 = sx1[ 6 ] - ( S5*sx1[5] );                                       \
		d7x1 = sx1[ 7 ] - ( S6*sx1[6] );                                       \
		d0x2 = sx2[ 0 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[0] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[1] );                                       \
		d3x2 = sx2[ 3 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 4 ] - ( S3*sx2[3] );                                       \
		d5x2 = sx2[ 5 ] - ( S4*sx2[4] );                                       \
		d6x2 = sx2[ 6 ] - ( S5*sx2[5] );                                       \
		d7x2 = sx2[ 7 ] - ( S6*sx2[6] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i7 = 0; i7 < S7; i7++, px1 += d7x1, px2 += d7x2 ) {                  \
		for ( i6 = 0; i6 < S6; i6++, px1 += d6x1, px2 += d6x2 ) {              \
			for ( i5 = 0; i5 < S5; i5++, px1 += d5x1, px2 += d5x2 ) {          \
				for ( i4 = 0; i4 < S4; i4++, px1 += d4x1, px2 += d4x2 ) {      \
					for ( i3 = 0; i3 < S3; i3++, px1 += d3x1, px2 += d3x2 ) {  \
						for ( i2 = 0; i2 < S2; i2++, px1 += d2x1, px2 += d2x2 ) { \
							for ( i1 = 0; i1 < S1; i1++, px1 += d1x1, px2 += d1x2 ) { \
								for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the preamble for nested loops which operate on elements of an eight-dimensional input ndarray and updates two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_UNARY_8D_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_8D_LOOP_TWO_OUT_PREAMBLE                          \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	struct ndarray *x3 = arrays[ 2 ];                                          \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t *sx2 = stdlib_ndarray_strides( x2 );                               \
	int64_t *sx3 = stdlib_ndarray_strides( x3 );                               \
	uint8_t *px1 = stdlib_ndarray_data( x1 );                                  \
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	uint8_t *px3 = stdlib_ndarray_data( x3 );                                  \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d5x1;                                                              \
	int64_t d6x1;                                                              \
	int64_t d7x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t d5x2;                                                              \
	int64_t d6x2;                                                              \
	int64_t d7x2;                                                              \
	int64_t d0x3;                                                              \
	int64_t d1x3;                                                              \
	int64_t d2x3;                                                              \
	int64_t d3x3;                                                              \
	int64_t d4x3;                                                              \
	int64_t d5x3;                                                              \
	int64_t d6x3;                                                              \
	int64_t d7x3;                                                              \
	int64_t S0;                                                                \
	int64_t S1;                                                                \
	int64_t S2;                                                                \
	int64_t S3;                                                                \
	int64_t S4;                                                                \
	int64_t S5;                                                                \
	int64_t S6;                                                                \
	int64_t S7;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t i5;                                                                \
	int64_t i6;                                                                \
	int64_t i7;                                                                \
	/* Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments... */ \
	if ( stdlib_ndarray_order( x1 ) == STDLIB_NDARRAY_ROW_MAJOR ) {            \
		/* For row-major ndarrays, the last dimensions have the fastest changing indices... */ \
		S0 = shape[ 7 ];                                                       \
		S1 = shape[ 6 ];                                                       \
		S2 = shape[ 5 ];                                                       \
		S3 = shape[ 4 ];                                                       \
		S4 = shape[ 3 ];                                                       \
		S5 = shape[ 2 ];                                                       \
		S6 = shape[ 1 ];                                                       \
		S7 = shape[ 0 ];                                                       \
		d0x1 = sx1[ 7 ];                                                       \
		d1x1 = sx1[ 6 ] - ( S0*sx1[7] );                                       \
		d2x1 = sx1[ 5 ] - ( S1*sx1[6] );                                       \
		d3x1 = sx1[ 4 ] - ( S2*sx1[5] );                                       \
		d4x1 = sx1[ 3 ] - ( S3*sx1[4] );                                       \
		d5x1 = sx1[ 2 ] - ( S4*sx1[3] );                                       \
		d6x1 = sx1[ 1 ] - ( S5*sx1[2] );                                       \
		d7x1 = sx1[ 0 ] - ( S6*sx1[1] );                                       \
		d0x2 = sx2[ 7 ];                                                       \
		d1x2 = sx2[ 6 ] - ( S0*sx2[7] );                                       \
		d2x2 = sx2[ 5 ] - ( S1*sx2[6] );                                       \
		d3x2 = sx2[ 4 ] - ( S2*sx2[5] );                                       \
		d4x2 = sx2[ 3 ] - ( S3*sx2[4] );                                       \
		d5x2 = sx2[ 2 ] - ( S4*sx2[3] );                                       \
		d6x2 = sx2[ 1 ] - ( S5*sx2[2] );                                       \
		d7x2 = sx2[ 0 ] - ( S6*sx2[1] );                                       \
		d0x3 = sx3[ 7 ];                                                       \
		d1x3 = sx3[ 6 ] - ( S0*sx3[7] );                                       \
		d2x3 = sx3[ 5 ] - ( S1*sx3[6] );                                       \
		d3x3 = sx3[ 4 ] - ( S2*sx3[5] );                                       \
		d4x3 = sx3[ 3 ] - ( S3*sx3[4] );                                       \
		d5x3 = sx3[ 2 ] - ( S4*sx3[3] );                                       \
		d6x3 = sx3[ 1 ] - ( S5*sx3[2] );                                       \
		d7x3 = sx3[ 0 ] - ( S6*sx3[1] );                                       \
	} else {                                                                   \
		/* For column-major ndarrays, the first dimensions have the fastest changing indices... */ \
		S0 = shape[ 0 ];                                                       \
		S1 = shape[ 1 ];                                                       \
		S2 = shape[ 2 ];                                                       \
		S3 = shape[ 3 ];                                                       \
		S4 = shape[ 4 ];                                                       \
		S5 = shape[ 5 ];                                                       \
		S6 = shape[ 6 ];                                                       \
		S7 = shape[ 7 ];                                                       \
		d0x1 = sx1[ 0 ];                                                       \
		d1x1 = sx1[ 1 ] - ( S0*sx1[0] );                                       \
		d2x1 = sx1[ 2 ] - ( S1*sx1[1] );                                       \
		d3x1 = sx1[ 3 ] - ( S2*sx1[2] );                                       \
		d4x1 = sx1[ 4 ] - ( S3*sx1[3] );                                       \
		d5x1 = sx1[ 5 ] - ( S4*sx1[4] );                                       \
		d6x1 = sx1[ 6 ] - ( S5*sx1[5] );                                       \
		d7x1 = sx1[ 7 ] - ( S6*sx1[6] );                                       \
		d0x2 = sx2[ 0 ];                                                       \
		d1x2 = sx2[ 1 ] - ( S0*sx2[0] );                                       \
		d2x2 = sx2[ 2 ] - ( S1*sx2[1] );                                       \
		d3x2 = sx2[ 3 ] - ( S2*sx2[2] );                                       \
		d4x2 = sx2[ 4 ] - ( S3*sx2[3] );                                       \
		d5x2 = sx2[ 5 ] - ( S4*sx2[4] );                                       \
		d6x2 = sx2[ 6 ] - ( S5*sx2[5] );                                       \
		d7x2 = sx2[ 7 ] - ( S6*sx2[6] );                                       \
		d0x3 = sx3[ 0 ];                                                       \
		d1x3 = sx3[ 1 ] - ( S0*sx3[0] );                                       \
		d2x3 = sx3[ 2 ] - ( S1*sx3[1] );                                       \
		d3x3 = sx3[ 3 ] - ( S2*sx3[2] );                                       \
		d4x3 = sx3[ 4 ] - ( S3*sx3[3] );                                       \
		d5x3 = sx3[ 5 ] - ( S4*sx3[4] );                                       \
		d6x3 = sx3[ 6 ] - ( S5*sx3[5] );                                       \
		d7x3 = sx3[ 7 ] - ( S6*sx3[6] );                                       \
	}                                                                          \
	/* Set the pointers to the first indexed elements... */                    \
	px1 += stdlib_ndarray_offset( x1 );                                        \
	px2 += stdlib_ndarray_offset( x2 );                                        \
	px3 += stdlib_ndarray_offset( x3 );                                        \
	/* Iterate over the ndarray dimensions... */                               \
	for ( i7 = 0; i7 < S7; i7++, px1 += d7x1, px2 += d7x2, px3 += d7x3 ) {     \
		for ( i6 = 0; i6 < S6; i6++, px1 += d6x1, px2 += d6x2, px3 += d6x3 ) { \
			for ( i5 = 0; i5 < S5; i5++, px1 += d5x1, px2 += d5x2, px3 += d5x3 ) { \
				for ( i4 = 0; i4 < S4; i4++, px1 += d4x1, px2 += d4x2, px3 += d4x3 ) { \
					for ( i3 = 0; i3 < S3; i3++, px1 += d3x1, px2 += d3x2, px3 += d3x3 ) { \
						for ( i2 = 0; i2 < S2; i2++, px1 += d2x1, px2 += d2x2, px3 += d2x3 ) { \
							for ( i1 = 0; i1 < S1; i1++, px1 += d1x1, px2 += d1x2, px3 += d1x3 ) { \
								for ( i0 = 0; i0 < S0; i0++, px1 += d0x1, px2 += d0x2, px3 += d0x3 )

/**
* Macro containing the epilogue for nested loops which operate on elements of an eight-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_UNARY_8D_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE                                  \
							}                                                  \
						}                                                      \
					}                                                          \
				}                                                              \
			}                                                                  \
		}                                                                      \
	}

/**
* Macro for a unary eight-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Creates a pointer `tout *out` to the output ndarray element.
* -   Expects a provided expression to operate on `tin in1` and to store the result in `tout *out`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_UNARY_8D_LOOP_INLINE( double, double, *out = in1 * in1 )
*/
#define STDLIB_NDARRAY_UNARY_8D_LOOP_INLINE( tin, tout, expr )                 \
	STDLIB_NDARRAY_UNARY_8D_LOOP_PREAMBLE {                                    \
		const tin in1 = *(tin *)px1;                                           \
		tout *out = (tout *)px2;                                               \
		expr;                                                                  \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE

/**
* Macro for a unary eight-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* STDLIB_NDARRAY_UNARY_8D_LOOP_CLBK( double, double )
*/
#define STDLIB_NDARRAY_UNARY_8D_LOOP_CLBK( tin, tout )                         \
	STDLIB_NDARRAY_UNARY_8D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)f( x );                                           \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE

/**
* Macro for a unary eight-dimensional ndarray loop which invokes a callback requiring arguments be explicitly cast to a different type.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function argument to `fin`.
* -   Explicitly casts each function `f` invocation result to `tout`.
* -   Stores the result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param fin   callback argument type
*
* @example
* STDLIB_NDARRAY_UNARY_8D_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_NDARRAY_UNARY_8D_LOOP_CLBK_ARG_CAST( tin, tout, fin )           \
	STDLIB_NDARRAY_UNARY_8D_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)f( (fin)x );                                      \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_8D_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_UNARY_MACROS_8D_H
