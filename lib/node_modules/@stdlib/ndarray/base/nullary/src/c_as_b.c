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

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

#include "stdlib/ndarray/base/nullary/c_as_b.h"
#include "stdlib/ndarray/base/nullary/typedefs.h"
#include "stdlib/ndarray/base/nullary/macros.h"
#include "stdlib/ndarray/base/nullary/dispatch_object.h"
#include "stdlib/ndarray/base/nullary/dispatch.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32.h"
#include <stdint.h>

/**
* Applies a nullary callback and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 0;
*
* // Define the array shape:
* int64_t shape[] = {};
*
* // Define the strides:
* int64_t sx[] = { 0 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_0d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_0d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	int8_t status = stdlib_ndarray_iset_complex64( arrays[ 0 ], 0, stdlib_complex64_from_uint8( f() ) );
	if ( status != 0 ) {
		return -1;
	}
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a one-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 1;
*
* // Define the array shape:
* int64_t shape[] = { 3 };
*
* // Define the strides:
* int64_t sx[] = { 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_1d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_1d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_1D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a two-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shape:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_2d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_2d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_2D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a two-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shape:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_2d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_2d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_2D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a three-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shape:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_3d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_3d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_3D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a three-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shape:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_3d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_3d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_3D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a four-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shape:
* int64_t shape[] = { 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_4d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_4d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_4D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a four-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shape:
* int64_t shape[] = { 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_4d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_4d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_4D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a five-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_5d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_5d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_5D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a five-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_5d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_5d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_5D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a six-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_6d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_6d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_6D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a six-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_6d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_6d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_6D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a seven-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_7d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_7d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_7D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a seven-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_7d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_7d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_7D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in an eight-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_8d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_8d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_8D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in an eight-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_8d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_8d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_8D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a nine-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_9d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_9d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_9D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a nine-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_9d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_9d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_9D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a ten-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_10d( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_10d( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_10D_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in a ten-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shape:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 64, 64, 64, 64, 64, 64, 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_10d_blocked( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_10d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_10D_BLOCKED_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

/**
* Applies a nullary callback and assigns results to elements in an n-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shape:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b_nd( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b_nd( struct ndarray *arrays[], void *fcn ) {
	typedef uint8_t func_type( void );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_NULLARY_ND_LOOP_CLBK_RET_CAST_FCN( stdlib_complex64_t, stdlib_complex64_from_uint8 )
	return 0;
}

// Define a list of nullary ndarray functions:
static ndarrayNullaryFcn functions[] = {
	stdlib_ndarray_c_as_b_0d,
	stdlib_ndarray_c_as_b_1d,
	stdlib_ndarray_c_as_b_2d,
	stdlib_ndarray_c_as_b_3d,
	stdlib_ndarray_c_as_b_4d,
	stdlib_ndarray_c_as_b_5d,
	stdlib_ndarray_c_as_b_6d,
	stdlib_ndarray_c_as_b_7d,
	stdlib_ndarray_c_as_b_8d,
	stdlib_ndarray_c_as_b_9d,
	stdlib_ndarray_c_as_b_10d,
	stdlib_ndarray_c_as_b_nd
};

// Define a list of nullary ndarray functions implementing loop blocking...
static ndarrayNullaryFcn blocked_functions[] = {
	stdlib_ndarray_c_as_b_2d_blocked,
	stdlib_ndarray_c_as_b_3d_blocked,
	stdlib_ndarray_c_as_b_4d_blocked,
	stdlib_ndarray_c_as_b_5d_blocked,
	stdlib_ndarray_c_as_b_6d_blocked,
	stdlib_ndarray_c_as_b_7d_blocked,
	stdlib_ndarray_c_as_b_8d_blocked,
	stdlib_ndarray_c_as_b_9d_blocked,
	stdlib_ndarray_c_as_b_10d_blocked
};

// Create a nullary function dispatch object:
static const struct ndarrayNullaryDispatchObject obj = {
	// Array containing nullary ndarray functions:
	functions,

	// Number of nullary ndarray functions:
	12,

	// Array containing nullary ndarray functions using loop blocking:
	blocked_functions,

	// Number of nullary ndarray functions using loop blocking:
	9
};

/**
* Applies a nullary callback and assigns results to elements in an output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose only element is a pointer to an output array
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/c_as_b.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data type:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create an underlying byte array:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shape:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 16, 8 };
*
* // Define the index offset:
* int64_t ox = 0;
*
* // Define the array order:
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { imode };
* int64_t nsubmodes = 1;
*
* // Create an output ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing a pointer to the ndarray:
* struct ndarray *arrays[] = { x };
*
* // Define a callback:
* static uint8_t fcn( void ) {
*     return 10;
* }
*
* // Apply the callback:
* int8_t status = stdlib_ndarray_c_as_b( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
int8_t stdlib_ndarray_c_as_b( struct ndarray *arrays[], void *fcn ) {
	return stdlib_ndarray_nullary_dispatch( &obj, arrays, fcn );
}
