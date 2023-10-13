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

#ifndef STDLIB_NDARRAY_BASE_ASSIGN_MACROS_ND_H
#define STDLIB_NDARRAY_BASE_ASSIGN_MACROS_ND_H

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
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_ND_LOOP_PREAMBLE                                 \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	enum STDLIB_NDARRAY_INDEX_MODE mx1 = stdlib_ndarray_index_mode( x1 );      \
	enum STDLIB_NDARRAY_INDEX_MODE mx2 = stdlib_ndarray_index_mode( x2 );      \
	enum STDLIB_NDARRAY_ORDER ordx1 = stdlib_ndarray_order( x1 );              \
	enum STDLIB_NDARRAY_ORDER ordx2 = stdlib_ndarray_order( x2 );              \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	uint8_t *pbx1 = stdlib_ndarray_data( x1 );                                 \
	uint8_t *pbx2 = stdlib_ndarray_data( x2 );                                 \
	int64_t ndims = stdlib_ndarray_ndims( x1 );                                \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t *sx2 = stdlib_ndarray_strides( x2 );                               \
	int64_t ox1 = stdlib_ndarray_offset( x1 );                                 \
	int64_t ox2 = stdlib_ndarray_offset( x2 );                                 \
	int64_t len = stdlib_ndarray_length( x1 );                                 \
	uint8_t *px1;                                                              \
	uint8_t *px2;                                                              \
	int64_t i;                                                                 \
	/* Iterate over each ndarray element based on the linear **view** index, regardless as to how the data is stored in memory... */ \
	for ( i = 0; i < len; i++ ) {                                              \
		px1 = pbx1 + stdlib_ndarray_vind2bind( ndims, shape, sx1, ox1, ordx1, i, mx1 ); \
		px2 = pbx2 + stdlib_ndarray_vind2bind( ndims, shape, sx2, ox2, ordx2, i, mx2 ); \
		do

/**
* Macro containing the preamble for nested loops which operate on elements of an n-dimensional input ndarray and updates two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `px#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_ND_LOOP_TWO_OUT_PREAMBLE                         \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	struct ndarray *x3 = arrays[ 2 ];                                          \
	enum STDLIB_NDARRAY_INDEX_MODE mx1 = stdlib_ndarray_index_mode( x1 );      \
	enum STDLIB_NDARRAY_INDEX_MODE mx2 = stdlib_ndarray_index_mode( x2 );      \
	enum STDLIB_NDARRAY_INDEX_MODE mx3 = stdlib_ndarray_index_mode( x3 );      \
	enum STDLIB_NDARRAY_ORDER ordx1 = stdlib_ndarray_order( x1 );              \
	enum STDLIB_NDARRAY_ORDER ordx2 = stdlib_ndarray_order( x2 );              \
	enum STDLIB_NDARRAY_ORDER ordx3 = stdlib_ndarray_order( x3 );              \
	int64_t *shape = stdlib_ndarray_shape( x1 );                               \
	uint8_t *pbx1 = stdlib_ndarray_data( x1 );                                 \
	uint8_t *pbx2 = stdlib_ndarray_data( x2 );                                 \
	uint8_t *pbx3 = stdlib_ndarray_data( x3 );                                 \
	int64_t ndims = stdlib_ndarray_ndims( x1 );                                \
	int64_t *sx1 = stdlib_ndarray_strides( x1 );                               \
	int64_t *sx2 = stdlib_ndarray_strides( x2 );                               \
	int64_t *sx3 = stdlib_ndarray_strides( x3 );                               \
	int64_t ox1 = stdlib_ndarray_offset( x1 );                                 \
	int64_t ox2 = stdlib_ndarray_offset( x2 );                                 \
	int64_t ox3 = stdlib_ndarray_offset( x3 );                                 \
	int64_t len = stdlib_ndarray_length( x1 );                                 \
	uint8_t *px1;                                                              \
	uint8_t *px2;                                                              \
	uint8_t *px3;                                                              \
	int64_t i;                                                                 \
	/* Iterate over each ndarray element based on the linear **view** index, regardless as to how the data is stored in memory... */ \
	for ( i = 0; i < len; i++ ) {                                              \
		px1 = pbx1 + stdlib_ndarray_vind2bind( ndims, shape, sx1, ox1, ordx1, i, mx1 ); \
		px2 = pbx2 + stdlib_ndarray_vind2bind( ndims, shape, sx2, ox2, ordx2, i, mx2 ); \
		px3 = pbx3 + stdlib_ndarray_vind2bind( ndims, shape, sx3, ox3, ordx3, i, mx3 ); \
		do

/**
* Macro containing the epilogue for nested loops which operate on elements of an n-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE                                 \
		while( 0 );                                                            \
	}

/**
* Macro for a unary n-dimensional ndarray loop which which casts input ndarray elements and performs assignment.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via the pointer `px1`.
* -   Explicitly casts each retrieved ndarray element to `tout`.
* -   Stores the result in an output ndarray via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_CAST( double, double )
*/
#define STDLIB_NDARRAY_ASSIGN_ND_LOOP_CAST( tin, tout )                        \
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)x;                                                \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE

/**
* Macro for a unary n-dimensional loop which does not cast input ndarray elements (e.g., a `struct`).
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Stores a retrieved element in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
*
* @example
* #include "stdlib/complex/float64.h"
*
* // e.g., z_z
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_NOCAST( stdlib_complex128_t, stdlib_complex128_t )
*/
#define STDLIB_NDARRAY_ASSIGN_ND_LOOP_NOCAST( tin, tout )                      \
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = x;                                                      \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE

/**
* Macro for a unary n-dimensional ndarray loop which casts input ndarray elements to a different type via a casting function.
*
* ## Notes
*
* -   Retrieves each ndarray element according to type `tin` via a pointer `px1`.
* -   Explicitly casts each retrieved element via `cout`.
* -   Stores the result in an output ndarray of type `tout` via the pointer `px2`.
*
* @param tin   input type
* @param tout  output type
* @param cout  output casting function
*
* @example
* #include "stdlib/complex/float64.h"
*
* // e.g., d_z
* STDLIB_NDARRAY_ASSIGN_ND_LOOP_CAST_FCN( double, stdlib_complex128_t, stdlib_complex128_from_float64 )
*/
#define STDLIB_NDARRAY_ASSIGN_ND_LOOP_CAST_FCN( tin, tout, cout )              \
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_PREAMBLE {                                   \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = cout( x );                                              \
	}                                                                          \
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_ASSIGN_MACROS_ND_H
