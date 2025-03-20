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

#ifndef STDLIB_NDARRAY_BASE_EVERY_MACROS_ND_H
#define STDLIB_NDARRAY_BASE_EVERY_MACROS_ND_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/vind2bind.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Macro containing the preamble for nested loops which operate on elements of an n-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_EVERY_ND_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_EVERY_ND_LOOP_PREAMBLE                                  \
	const struct ndarray *x1 = arrays[ 0 ];                                    \
	const struct ndarray *x2 = arrays[ 1 ];                                    \
	enum STDLIB_NDARRAY_INDEX_MODE mx1 = stdlib_ndarray_index_mode( x1 );      \
	enum STDLIB_NDARRAY_ORDER ordx1 = stdlib_ndarray_order( x1 );              \
	const int64_t *shape = stdlib_ndarray_shape( x1 );                         \
	uint8_t *pbx1 = stdlib_ndarray_data( x1 );                                 \
	int64_t ndims = stdlib_ndarray_ndims( x1 );                                \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t ox1 = stdlib_ndarray_offset( x1 );                                 \
	int64_t len = stdlib_ndarray_length( x1 );                                 \
	bool *px2 = stdlib_ndarray_data( x2 );                                     \
	uint8_t *px1;                                                              \
	int64_t i;                                                                 \
	/* Iterate over each ndarray element based on the linear **view** index, regardless as to how the data is stored in memory... */ \
	for ( i = 0; i < len; i++ ) {                                              \
		px1 = pbx1 + stdlib_ndarray_vind2bind( ndims, shape, sx1, ox1, ordx1, i, mx1 ); \
		do

/**
* Macro containing the epilogue for nested loops which operate on elements of an n-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_EVERY_ND_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE                                  \
		while( 0 );                                                            \
	}                                                                          \
	*px2 = true;

/**
* Macro for an n-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Expects a provided expression to operate on `tin in1`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param expr  expression to inline
*
* @example
* STDLIB_NDARRAY_EVERY_ND_LOOP_INLINE( double, in1 )
*/
#define STDLIB_NDARRAY_EVERY_ND_LOOP_INLINE( tin, expr )                       \
	STDLIB_NDARRAY_EVERY_ND_LOOP_PREAMBLE {                                    \
		const tin in1 = *(tin *)px1;                                           \
		if ( !( expr ) ) {                                                     \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE

/**
* Macro for an n-dimensional ndarray loop which invokes a callback.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
*
* @example
* // e.g., d_x
* STDLIB_NDARRAY_EVERY_ND_LOOP_CLBK( double )
*/
#define STDLIB_NDARRAY_EVERY_ND_LOOP_CLBK( tin )                               \
	STDLIB_NDARRAY_EVERY_ND_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		if ( !( f( x ) ) ) {                                                   \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE

/**
* Macro for an n-dimensional ndarray loop which invokes a callback requiring arguments be explicitly cast to a different type.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each function argument to `fin`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param fin   callback argument type
*
* @example
* // e.g., f_x_as_d_x
* STDLIB_NDARRAY_EVERY_ND_LOOP_CLBK_ARG_CAST( float, double )
*/
#define STDLIB_NDARRAY_EVERY_ND_LOOP_CLBK_ARG_CAST( tin, fin )                 \
	STDLIB_NDARRAY_EVERY_ND_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		if ( !( f( (fin)x ) ) ) {                                              \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE

/**
* Macro for an n-dimensional ndarray loop which invokes a callback requiring arguments be cast to a different type via casting functions.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each function argument via `cin`.
* -   Stores the final result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param cin   input casting function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
*
* // e.g., f_x_as_z_x
* STDLIB_NDARRAY_EVERY_ND_LOOP_CLBK_ARG_CAST_FCN( float, stdlib_complex128_from_float32 )
*/
#define STDLIB_NDARRAY_EVERY_ND_LOOP_CLBK_ARG_CAST_FCN( tin, cin )             \
	STDLIB_NDARRAY_EVERY_ND_LOOP_PREAMBLE {                                    \
		const tin x = *(tin *)px1;                                             \
		if ( !( f( cin( x ) ) ) ) {                                            \
			*px2 = false;                                                      \
			return;                                                            \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_EVERY_ND_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_EVERY_MACROS_ND_H
