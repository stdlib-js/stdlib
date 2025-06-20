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

#ifndef STDLIB_NDARRAY_BASE_COUNT_FALSY_MACROS_ND_H
#define STDLIB_NDARRAY_BASE_COUNT_FALSY_MACROS_ND_H

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/vind2bind.h"
#include <stdint.h>

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
* #include <stdint.h>
*
* STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_EPILOGUE( int32_t )
*/
#define STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_PREAMBLE                            \
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
	uint8_t *px2 = stdlib_ndarray_data( x2 );                                  \
	uint8_t *px1;                                                              \
	int64_t count;                                                             \
	int64_t i;                                                                 \
	/* Initialize a counter... */                                              \
	count = 0;                                                                 \
	/* Iterate over each ndarray element based on the linear **view** index, regardless as to how the data is stored in memory... */ \
	for ( i = 0; i < len; i++ ) {                                              \
		px1 = pbx1 + stdlib_ndarray_vind2bind( ndims, shape, sx1, ox1, ordx1, i, mx1 ); \
		do

/**
* Macro containing the epilogue for nested loops which operate on elements of an n-dimensional ndarray.
*
* @example
* #include <stdint.h>
*
* STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_EPILOGUE( int32_t )
*/
#define STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_EPILOGUE( tout )                    \
		while( 0 );                                                            \
	}                                                                          \
	*px2 = (tout)count;

/**
* Macro for an n-dimensional ndarray loop which inlines an expression.
*
* ## Notes
*
* -   Retrieves each input ndarray element according to type `tin` via the pointer `px1` as `in1`.
* -   Expects a provided expression to operate on `tin in1`.
* -   Stores the final result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param expr  expression to inline
*
* @example
* #include <stdint.h>
*
* STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_INLINE( double, int32_t, in1 )
*/
#define STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_INLINE( tin, tout, expr )           \
	STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_PREAMBLE {                              \
		const tin in1 = *(tin *)px1;                                           \
		if ( expr ) {                                                          \
			count += 1;                                                        \
		}                                                                      \
	}                                                                          \
	STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_EPILOGUE( tout )

#endif // !STDLIB_NDARRAY_BASE_COUNT_FALSY_MACROS_ND_H
