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

#ifndef STDLIB_NDARRAY_BASE_UNARY_MACROS_5D_BLOCKED_H
#define STDLIB_NDARRAY_BASE_UNARY_MACROS_5D_BLOCKED_H

#include "stdlib/ndarray/base/unary/macros/constants.h"
#include "stdlib/ndarray/base/unary/internal/permute.h"
#include "stdlib/ndarray/base/unary/internal/range.h"
#include "stdlib/ndarray/base/unary/internal/sort2ins.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <string.h>

/**
* Macro containing the preamble for blocked nested loops which operate on elements of a five-dimensional ndarray.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `pbx#`, `px#`, `ox#`, `nbx#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, `j@`, `o@x#`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_PREAMBLE                          \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	int64_t shape[5];                                                          \
	int64_t sx1[5];                                                            \
	int64_t sx2[5];                                                            \
	int64_t idx[5];                                                            \
	int64_t tmp[5];                                                            \
	int64_t bsize;                                                             \
	uint8_t *pbx1;                                                             \
	uint8_t *pbx2;                                                             \
	uint8_t *px1;                                                              \
	uint8_t *px2;                                                              \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t o1x1;                                                              \
	int64_t o2x1;                                                              \
	int64_t o3x1;                                                              \
	int64_t o4x1;                                                              \
	int64_t o1x2;                                                              \
	int64_t o2x2;                                                              \
	int64_t o3x2;                                                              \
	int64_t o4x2;                                                              \
	int64_t nbx1;                                                              \
	int64_t nbx2;                                                              \
	int64_t ox1;                                                               \
	int64_t ox2;                                                               \
	int64_t s0;                                                                \
	int64_t s1;                                                                \
	int64_t s2;                                                                \
	int64_t s3;                                                                \
	int64_t s4;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t j0;                                                                \
	int64_t j1;                                                                \
	int64_t j2;                                                                \
	int64_t j3;                                                                \
	int64_t j4;                                                                \
	/* Copy strides to prevent mutation to the original ndarray: */            \
	memcpy( sx1, stdlib_ndarray_strides( x1 ), sizeof sx1 );                   \
	/* Create a loop interchange index array for loop order permutation: */    \
	stdlib_ndarray_base_unary_internal_range( 5, idx );                        \
	/* Sort the input array strides in increasing order (of magnitude): */     \
	stdlib_ndarray_base_unary_internal_sort2ins( 5, sx1, idx );                \
	/* Permute the shape and array strides (avoiding mutation) according to loop order: */ \
	stdlib_ndarray_base_unary_internal_permute( 5, stdlib_ndarray_shape( x1 ), idx, tmp );   \
	memcpy( shape, tmp, sizeof shape );                                        \
	stdlib_ndarray_base_unary_internal_permute( 5, stdlib_ndarray_strides( x2 ), idx, tmp ); \
	memcpy( sx2, tmp, sizeof sx2 );                                            \
	/* Determine the block size... */                                          \
	nbx1 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x1 ) );     \
	nbx2 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x2 ) );     \
	if ( nbx1 == 0 && nbx2 == 0 ) {                                            \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_ELEMENTS;                   \
	} else if ( nbx1 > nbx2 ) {                                                \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_BYTES / nbx1;               \
	} else {                                                                   \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_BYTES / nbx2;               \
	}                                                                          \
	/* Cache pointers to the ndarray buffers... */                             \
	pbx1 = stdlib_ndarray_data( x1 );                                          \
	pbx2 = stdlib_ndarray_data( x2 );                                          \
	/* Cache byte offsets to the first indexed elements... */                  \
	ox1 = stdlib_ndarray_offset( x1 );                                         \
	ox2 = stdlib_ndarray_offset( x2 );                                         \
	/* Cache offset increments for the innermost loop ... */                   \
	d0x1 = sx1[0];                                                             \
	d0x2 = sx2[0];                                                             \
	/* Iterate over blocks... */                                               \
	for ( j4 = shape[4]; j4 > 0; ) {                                           \
		if ( j4 < bsize ) {                                                    \
			s4 = j4;                                                           \
			j4 = 0;                                                            \
		} else {                                                               \
			s4 = bsize;                                                        \
			j4 -= bsize;                                                       \
		}                                                                      \
		o4x1 = ox1 + ( j4*sx1[4] );                                            \
		o4x2 = ox2 + ( j4*sx2[4] );                                            \
		for ( j3 = shape[3]; j3 > 0; ) {                                       \
			if ( j3 < bsize ) {                                                \
				s3 = j3;                                                       \
				j3 = 0;                                                        \
			} else {                                                           \
				s3 = bsize;                                                    \
				j3 -= bsize;                                                   \
			}                                                                  \
			d4x1 = sx1[4] - ( s3*sx1[3] );                                     \
			d4x2 = sx2[4] - ( s3*sx2[3] );                                     \
			o3x1 = o4x1 + ( j3*sx1[3] );                                       \
			o3x2 = o4x2 + ( j3*sx2[3] );                                       \
			for ( j2 = shape[2]; j2 > 0; ) {                                   \
				if ( j2 < bsize ) {                                            \
					s2 = j2;                                                   \
					j2 = 0;                                                    \
				} else {                                                       \
					s2 = bsize;                                                \
					j2 -= bsize;                                               \
				}                                                              \
				d3x1 = sx1[3] - ( s2*sx1[2] );                                 \
				d3x2 = sx2[3] - ( s2*sx2[2] );                                 \
				o2x1 = o3x1 + ( j2*sx1[2] );                                   \
				o2x2 = o3x2 + ( j2*sx2[2] );                                   \
				for ( j1 = shape[1]; j1 > 0; ) {                               \
					if ( j1 < bsize ) {                                        \
						s1 = j1;                                               \
						j1 = 0;                                                \
					} else {                                                   \
						s1 = bsize;                                            \
						j1 -= bsize;                                           \
					}                                                          \
					d2x1 = sx1[2] - ( s1*sx1[1] );                             \
					d2x2 = sx2[2] - ( s1*sx2[1] );                             \
					o1x1 = o2x1 + ( j1*sx1[1] );                               \
					o1x2 = o2x2 + ( j1*sx2[1] );                               \
					for ( j0 = shape[0]; j0 > 0; ) {                           \
						if ( j0 < bsize ) {                                    \
							s0 = j0;                                           \
							j0 = 0;                                            \
						} else {                                               \
							s0 = bsize;                                        \
							j0 -= bsize;                                       \
						}                                                      \
						/* Compute pointers to the first ndarray elements in the current block... */ \
						px1 = pbx1 + o1x1 + ( j0*sx1[0] );                     \
						px2 = pbx2 + o1x2 + ( j0*sx2[0] );                     \
						/* Compute loop offset increments... */                \
						d1x1 = sx1[1] - ( s0*sx1[0] );                         \
						d1x2 = sx2[1] - ( s0*sx2[0] );                         \
						/* Iterate over the ndarray dimensions... */           \
						for ( i4 = 0; i4 < s4; i4++, px1 += d4x1, px2 += d4x2 ) { \
							for ( i3 = 0; i3 < s3; i3++, px1 += d3x1, px2 += d3x2 ) { \
								for ( i2 = 0; i2 < s2; i2++, px1 += d2x1, px2 += d2x2 ) { \
									for ( i1 = 0; i1 < s1; i1++, px1 += d1x1, px2 += d1x2 ) { \
										for ( i0 = 0; i0 < s0; i0++, px1 += d0x1, px2 += d0x2 )

/**
* Macro containing the preamble for blocked nested loops which operate on elements of a five-dimensional input ndarray and updates two output ndarrays.
*
* ## Notes
*
* -   Variable naming conventions:
*
*     -   `sx#`, `pbx#`, `px#`, `ox#`, `nbx#`, and `d@x#` where `#` corresponds to the ndarray argument number, starting at `1`.
*     -   `S@`, `i@`, `j@`, `o@x#`, and `d@x#` where `@` corresponds to the loop number, with `0` being the innermost loop.
*
* @example
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_TWO_OUT_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_TWO_OUT_PREAMBLE                  \
	struct ndarray *x1 = arrays[ 0 ];                                          \
	struct ndarray *x2 = arrays[ 1 ];                                          \
	struct ndarray *x3 = arrays[ 2 ];                                          \
	int64_t shape[5];                                                          \
	int64_t sx1[5];                                                            \
	int64_t sx2[5];                                                            \
	int64_t sx3[5];                                                            \
	int64_t idx[5];                                                            \
	int64_t tmp[5];                                                            \
	int64_t bsize;                                                             \
	uint8_t *pbx1;                                                             \
	uint8_t *pbx2;                                                             \
	uint8_t *pbx3;                                                             \
	uint8_t *px1;                                                              \
	uint8_t *px2;                                                              \
	uint8_t *px3;                                                              \
	int64_t d0x1;                                                              \
	int64_t d1x1;                                                              \
	int64_t d2x1;                                                              \
	int64_t d3x1;                                                              \
	int64_t d4x1;                                                              \
	int64_t d0x2;                                                              \
	int64_t d1x2;                                                              \
	int64_t d2x2;                                                              \
	int64_t d3x2;                                                              \
	int64_t d4x2;                                                              \
	int64_t d0x3;                                                              \
	int64_t d1x3;                                                              \
	int64_t d2x3;                                                              \
	int64_t d3x3;                                                              \
	int64_t d4x3;                                                              \
	int64_t o1x1;                                                              \
	int64_t o2x1;                                                              \
	int64_t o3x1;                                                              \
	int64_t o4x1;                                                              \
	int64_t o1x2;                                                              \
	int64_t o2x2;                                                              \
	int64_t o3x2;                                                              \
	int64_t o4x2;                                                              \
	int64_t o1x3;                                                              \
	int64_t o2x3;                                                              \
	int64_t o3x3;                                                              \
	int64_t o4x3;                                                              \
	int64_t nbx1;                                                              \
	int64_t nbx2;                                                              \
	int64_t nbx3;                                                              \
	int64_t ox1;                                                               \
	int64_t ox2;                                                               \
	int64_t ox3;                                                               \
	int64_t s0;                                                                \
	int64_t s1;                                                                \
	int64_t s2;                                                                \
	int64_t s3;                                                                \
	int64_t s4;                                                                \
	int64_t i0;                                                                \
	int64_t i1;                                                                \
	int64_t i2;                                                                \
	int64_t i3;                                                                \
	int64_t i4;                                                                \
	int64_t j0;                                                                \
	int64_t j1;                                                                \
	int64_t j2;                                                                \
	int64_t j3;                                                                \
	int64_t j4;                                                                \
	/* Copy strides to prevent mutation to the original ndarray: */            \
	memcpy( sx1, stdlib_ndarray_strides( x1 ), sizeof sx1 );                   \
	/* Create a loop interchange index array for loop order permutation: */    \
	stdlib_ndarray_base_unary_internal_range( 5, idx );                        \
	/* Sort the input array strides in increasing order (of magnitude): */     \
	stdlib_ndarray_base_unary_internal_sort2ins( 5, sx1, idx );                \
	/* Permute the shape and array strides (avoiding mutation) according to loop order: */ \
	stdlib_ndarray_base_unary_internal_permute( 5, stdlib_ndarray_shape( x1 ), idx, tmp );   \
	memcpy( shape, tmp, sizeof shape );                                        \
	stdlib_ndarray_base_unary_internal_permute( 5, stdlib_ndarray_strides( x2 ), idx, tmp ); \
	memcpy( sx2, tmp, sizeof sx2 );                                            \
	stdlib_ndarray_base_unary_internal_permute( 5, stdlib_ndarray_strides( x3 ), idx, tmp ); \
	memcpy( sx3, tmp, sizeof sx3 );                                            \
	/* Determine the block size... */                                          \
	nbx1 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x1 ) );     \
	nbx2 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x2 ) );     \
	nbx3 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x3 ) );     \
	if ( nbx1 == 0 && nbx2 == 0 && nbx3 == 0 ) {                               \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_ELEMENTS;                   \
	} else if ( nbx1 > nbx2 && nbx1 > nbx3 ) {                                 \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_BYTES / nbx1;               \
	} else if ( nbx2 > nbx3 ) {                                                \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_BYTES / nbx2;               \
	} else {                                                                   \
		bsize = STDLIB_NDARRAY_UNARY_BLOCK_SIZE_IN_BYTES / nbx3;               \
	}                                                                          \
	/* Cache pointers to the ndarray buffers... */                             \
	pbx1 = stdlib_ndarray_data( x1 );                                          \
	pbx2 = stdlib_ndarray_data( x2 );                                          \
	pbx3 = stdlib_ndarray_data( x3 );                                          \
	/* Cache byte offsets to the first indexed elements... */                  \
	ox1 = stdlib_ndarray_offset( x1 );                                         \
	ox2 = stdlib_ndarray_offset( x2 );                                         \
	ox3 = stdlib_ndarray_offset( x3 );                                         \
	/* Cache offset increments for the innermost loop ... */                   \
	d0x1 = sx1[0];                                                             \
	d0x2 = sx2[0];                                                             \
	d0x3 = sx3[0];                                                             \
	/* Iterate over blocks... */                                               \
	for ( j4 = shape[4]; j4 > 0; ) {                                           \
		if ( j4 < bsize ) {                                                    \
			s4 = j4;                                                           \
			j4 = 0;                                                            \
		} else {                                                               \
			s4 = bsize;                                                        \
			j4 -= bsize;                                                       \
		}                                                                      \
		o4x1 = ox1 + ( j4*sx1[4] );                                            \
		o4x2 = ox2 + ( j4*sx2[4] );                                            \
		o4x3 = ox3 + ( j4*sx3[4] );                                            \
		for ( j3 = shape[3]; j3 > 0; ) {                                       \
			if ( j3 < bsize ) {                                                \
				s3 = j3;                                                       \
				j3 = 0;                                                        \
			} else {                                                           \
				s3 = bsize;                                                    \
				j3 -= bsize;                                                   \
			}                                                                  \
			d4x1 = sx1[4] - ( s3*sx1[3] );                                     \
			d4x2 = sx2[4] - ( s3*sx2[3] );                                     \
			d4x3 = sx3[4] - ( s3*sx3[3] );                                     \
			o3x1 = o4x1 + ( j3*sx1[3] );                                       \
			o3x2 = o4x2 + ( j3*sx2[3] );                                       \
			o3x3 = o4x3 + ( j3*sx3[3] );                                       \
			for ( j2 = shape[2]; j2 > 0; ) {                                   \
				if ( j2 < bsize ) {                                            \
					s2 = j2;                                                   \
					j2 = 0;                                                    \
				} else {                                                       \
					s2 = bsize;                                                \
					j2 -= bsize;                                               \
				}                                                              \
				d3x1 = sx1[3] - ( s2*sx1[2] );                                 \
				d3x2 = sx2[3] - ( s2*sx2[2] );                                 \
				d3x3 = sx3[3] - ( s2*sx3[2] );                                 \
				o2x1 = o3x1 + ( j2*sx1[2] );                                   \
				o2x2 = o3x2 + ( j2*sx2[2] );                                   \
				o2x3 = o3x3 + ( j2*sx3[2] );                                   \
				for ( j1 = shape[1]; j1 > 0; ) {                               \
					if ( j1 < bsize ) {                                        \
						s1 = j1;                                               \
						j1 = 0;                                                \
					} else {                                                   \
						s1 = bsize;                                            \
						j1 -= bsize;                                           \
					}                                                          \
					d2x1 = sx1[2] - ( s1*sx1[1] );                             \
					d2x2 = sx2[2] - ( s1*sx2[1] );                             \
					d2x3 = sx3[2] - ( s1*sx3[1] );                             \
					o1x1 = o2x1 + ( j1*sx1[1] );                               \
					o1x2 = o2x2 + ( j1*sx2[1] );                               \
					o1x3 = o2x3 + ( j1*sx3[1] );                               \
					for ( j0 = shape[0]; j0 > 0; ) {                           \
						if ( j0 < bsize ) {                                    \
							s0 = j0;                                           \
							j0 = 0;                                            \
						} else {                                               \
							s0 = bsize;                                        \
							j0 -= bsize;                                       \
						}                                                      \
						/* Compute pointers to the first ndarray elements in the current block... */ \
						px1 = pbx1 + o1x1 + ( j0*sx1[0] );                     \
						px2 = pbx2 + o1x2 + ( j0*sx2[0] );                     \
						px3 = pbx3 + o1x3 + ( j0*sx3[0] );                     \
						/* Compute loop offset increments... */                \
						d1x1 = sx1[1] - ( s0*sx1[0] );                         \
						d1x2 = sx2[1] - ( s0*sx2[0] );                         \
						d1x3 = sx3[1] - ( s0*sx3[0] );                         \
						/* Iterate over the ndarray dimensions... */           \
						for ( i4 = 0; i4 < s4; i4++, px1 += d4x1, px2 += d4x2, px3 += d4x3 ) { \
							for ( i3 = 0; i3 < s3; i3++, px1 += d3x1, px2 += d3x2, px3 += d3x3 ) { \
								for ( i2 = 0; i2 < s2; i2++, px1 += d2x1, px2 += d2x2, px3 += d2x3 ) { \
									for ( i1 = 0; i1 < s1; i1++, px1 += d1x1, px2 += d1x2, px3 += d1x3 ) { \
										for ( i0 = 0; i0 < s0; i0++, px1 += d0x1, px2 += d0x2, px3 += d0x3 )

/**
* Macro containing the epilogue for blocked nested loops which operate on elements of a five-dimensional ndarray.
*
* @example
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_PREMABLE {
*     // Innermost loop body...
* }
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE
*/
#define STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE                          \
									}                                          \
								}                                              \
							}                                                  \
						}                                                      \
					}                                                          \
				}                                                              \
			}                                                                  \
		}                                                                      \
	}

/**
* Macro for a blocked unary five-dimensional ndarray loop which inlines an expression.
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
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_INLINE( double, double, *out = in1 * in1 )
*/
#define STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_INLINE( tin, tout, expr )         \
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin in1 = *(tin *)px1;                                           \
		tout *out = (tout *)px2;                                               \
		expr;                                                                  \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE

/**
* Macro for a blocked unary five-dimensional ndarray loop which invokes a callback.
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
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_CLBK( double, double )
*/
#define STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_CLBK( tin, tout )                 \
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)f( x );                                           \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE

/**
* Macro for a blocked unary five-dimensional ndarray loop which invokes a callback requiring arguments be explicitly cast to a different type.
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
* STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_CLBK_ARG_CAST( float, float, double )
*/
#define STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_CLBK_ARG_CAST( tin, tout, fin )   \
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_PREAMBLE {                            \
		const tin x = *(tin *)px1;                                             \
		*(tout *)px2 = (tout)f( (fin)x );                                      \
	}                                                                          \
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_EPILOGUE

#endif // !STDLIB_NDARRAY_BASE_UNARY_MACROS_5D_BLOCKED_H
