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

#include "stdlib/ndarray/base/unary/d_l.h"
#include "stdlib/ndarray/base/unary/typedefs.h"
#include "stdlib/ndarray/base/unary/macros.h"
#include "stdlib/ndarray/base/unary/dispatch_object.h"
#include "stdlib/ndarray/base/unary/dispatch.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a zero-dimensional double-precision floating-point input ndarray and assigns results to elements in a zero-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 0;
*
* // Define the array shapes:
* int64_t shape[] = {};
*
* // Define the strides:
* int64_t sx[] = { 0 };
* int64_t sy[] = { 0 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_0d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_0d( struct ndarray *arrays[], void *fcn ) {
	double v;
	int8_t status = stdlib_ndarray_iget_float64( arrays[ 0 ], 0, &v );
	if ( status != 0 ) {
		return -1;
	}
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	status = stdlib_ndarray_iset_int64( arrays[ 1 ], 0, f( v ) );
	if ( status != 0 ) {
		return -1;
	}
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a one-dimensional double-precision floating-point input ndarray and assigns results to elements in a one-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 1;
*
* // Define the array shapes:
* int64_t shape[] = { 2 };
*
* // Define the strides:
* int64_t sx[] = { 8 };
* int64_t sy[] = { 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_1d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_1d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_1D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a two-dimensional double-precision floating-point input ndarray and assigns results to elements in a two-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 16, 8 };
* int64_t sy[] = { 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_2d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_2d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_2D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a two-dimensional double-precision floating-point input ndarray and assigns results to elements in a two-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 16, 8 };
* int64_t sy[] = { 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_2d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_2d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_2D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a three-dimensional double-precision floating-point input ndarray and assigns results to elements in a three-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16, 8 };
* int64_t sy[] = { 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_3d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_3d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_3D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a three-dimensional double-precision floating-point input ndarray and assigns results to elements in a three-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16, 8 };
* int64_t sy[] = { 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_3d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_3d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_3D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a four-dimensional double-precision floating-point input ndarray and assigns results to elements in a four-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_4d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_4d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_4D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a four-dimensional double-precision floating-point input ndarray and assigns results to elements in a four-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_4d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_4d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_4D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a five-dimensional double-precision floating-point input ndarray and assigns results to elements in a five-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_5d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_5d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_5D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a five-dimensional double-precision floating-point input ndarray and assigns results to elements in a five-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_5d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_5d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_5D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a six-dimensional double-precision floating-point input ndarray and assigns results to elements in a six-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_6d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_6d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_6D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a six-dimensional double-precision floating-point input ndarray and assigns results to elements in a six-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_6d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_6d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_6D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a seven-dimensional double-precision floating-point input ndarray and assigns results to elements in a seven-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_7d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_7d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_7D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a seven-dimensional double-precision floating-point input ndarray and assigns results to elements in a seven-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_7d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_7d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_7D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to an eight-dimensional double-precision floating-point input ndarray and assigns results to elements in an eight-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_8d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_8d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_8D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to an eight-dimensional double-precision floating-point input ndarray and assigns results to elements in an eight-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_8d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_8d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_8D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a nine-dimensional double-precision floating-point input ndarray and assigns results to elements in a nine-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_9d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_9d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_9D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a nine-dimensional double-precision floating-point input ndarray and assigns results to elements in a nine-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_9d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_9d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_9D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a ten-dimensional double-precision floating-point input ndarray and assigns results to elements in a ten-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_10d( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_10d( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_10D_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a ten-dimensional double-precision floating-point input ndarray and assigns results to elements in a ten-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 32, 32, 32, 32, 32, 32, 32, 16, 8 };
* int64_t sy[] = { 32, 32, 32, 32, 32, 32, 32, 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_10d_blocked( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_10d_blocked( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_10D_BLOCKED_LOOP_CLBK( double, int64_t )
	return 0;
}

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to an n-dimensional double-precision floating-point input ndarray and assigns results to elements in an n-dimensional signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16, 8 };
* int64_t sy[] = { 32, 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l_nd( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l_nd( struct ndarray *arrays[], void *fcn ) {
	typedef int64_t func_type( const double x );
	func_type *f = (func_type *)fcn;
	STDLIB_NDARRAY_UNARY_ND_LOOP_CLBK( double, int64_t )
	return 0;
}

// Define a list of unary ndarray functions:
static ndarrayUnaryFcn functions[] = {
	stdlib_ndarray_d_l_0d,
	stdlib_ndarray_d_l_1d,
	stdlib_ndarray_d_l_2d,
	stdlib_ndarray_d_l_3d,
	stdlib_ndarray_d_l_4d,
	stdlib_ndarray_d_l_5d,
	stdlib_ndarray_d_l_6d,
	stdlib_ndarray_d_l_7d,
	stdlib_ndarray_d_l_8d,
	stdlib_ndarray_d_l_9d,
	stdlib_ndarray_d_l_10d,
	stdlib_ndarray_d_l_nd
};

// Define a list of unary ndarray functions implementing loop blocking...
static ndarrayUnaryFcn blocked_functions[] = {
	stdlib_ndarray_d_l_2d_blocked,
	stdlib_ndarray_d_l_3d_blocked,
	stdlib_ndarray_d_l_4d_blocked,
	stdlib_ndarray_d_l_5d_blocked,
	stdlib_ndarray_d_l_6d_blocked,
	stdlib_ndarray_d_l_7d_blocked,
	stdlib_ndarray_d_l_8d_blocked,
	stdlib_ndarray_d_l_9d_blocked,
	stdlib_ndarray_d_l_10d_blocked
};

// Create a unary function dispatch object:
static const struct ndarrayUnaryDispatchObject obj = {
	// Array containing unary ndarray functions:
	functions,

	// Number of unary ndarray functions:
	12,

	// Array containing unary ndarray functions using loop blocking:
	blocked_functions,

	// Number of unary ndarray functions using loop blocking:
	9
};

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a double-precision floating-point input ndarray and assigns results to elements in a signed 64-bit integer output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/unary/d_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
* #include <math.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 16, 8 };
* int64_t sy[] = { 16, 8 };
*
* // Define the offsets:
* int64_t ox = 0;
* int64_t oy = 0;
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
* // Create an input ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Apply a callback:
* int8_t status = stdlib_ndarray_d_l( arrays, (void *)llrint );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
* stdlib_ndarray_free( y );
*/
int8_t stdlib_ndarray_d_l( struct ndarray *arrays[], void *fcn ) {
	return stdlib_ndarray_unary_dispatch( &obj, arrays, fcn );
}
