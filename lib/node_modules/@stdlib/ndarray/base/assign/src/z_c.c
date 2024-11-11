/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/ndarray/base/assign/z_c.h"
#include "stdlib/ndarray/base/assign/typedefs.h"
#include "stdlib/ndarray/base/assign/macros.h"
#include "stdlib/ndarray/base/assign/dispatch_object.h"
#include "stdlib/ndarray/base/assign/dispatch.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>

/**
* Assigns elements in a zero-dimensional input ndarray to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_0d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_0d( struct ndarray *arrays[], void *data ) {
	stdlib_complex128_t v;
	int8_t status = stdlib_ndarray_iget_complex128( arrays[ 0 ], 0, &v );
	if ( status != 0 ) {
		return -1;
	}
	status = stdlib_ndarray_iset_complex64( arrays[ 1 ], 0, stdlib_complex128_to_complex64( v ) );
	if ( status != 0 ) {
		return -1;
	}
	return 0;
}

/**
* Assigns elements in a one-dimensional input ndarray to elements in a one-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 1;
*
* // Define the array shapes:
* int64_t shape[] = { 3 };
*
* // Define the strides:
* int64_t sx[] = { 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_1d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_1d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_1D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a two-dimensional input ndarray to elements in a two-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_2d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_2d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_2D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a two-dimensional input ndarray to elements in a two-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_2d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_2d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_2D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a three-dimensional input ndarray to elements in a three-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 32, 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_3d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_3d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_3D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a three-dimensional input ndarray to elements in a three-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 32, 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_3d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_3d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_3D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a four-dimensional input ndarray to elements in a four-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 64, 32, 16 };
* int64_t sy[] = { 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_4d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_4d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_4D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a four-dimensional input ndarray to elements in a four-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 64, 32, 16 };
* int64_t sy[] = { 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_4d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_4d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_4D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a five-dimensional input ndarray to elements in a five-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_5d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_5d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_5D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a five-dimensional input ndarray to elements in a five-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_5d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_5d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_5D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a six-dimensional input ndarray to elements in a six-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_6d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_6d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_6D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a six-dimensional input ndarray to elements in a six-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_6d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_6d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_6D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a seven-dimensional input ndarray to elements in a seven-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_7d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_7d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_7D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a seven-dimensional input ndarray to elements in a seven-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_7d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_7d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_7D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in an eight-dimensional input ndarray to elements in an eight-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_8d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_8d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_8D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in an eight-dimensional input ndarray to elements in an eight-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_8d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_8d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_8D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a nine-dimensional input ndarray to elements in a nine-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_9d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_9d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_9D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a nine-dimensional input ndarray to elements in a nine-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_9d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_9d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_9D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a ten-dimensional input ndarray to elements in a ten-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_10d( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_10d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_10D_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in a ten-dimensional input ndarray to elements in a ten-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shapes:
* int64_t shape[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 128, 128, 128, 128, 128, 128, 128, 64, 32, 16 };
* int64_t sy[] = { 64, 64, 64, 64, 64, 64, 64, 32, 16, 8 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_10d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_10d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_10D_BLOCKED_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

/**
* Assigns elements in an n-dimensional input ndarray to elements in an n-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 64, 32, 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c_nd( arrays, NULL );
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
int8_t stdlib_ndarray_assign_z_c_nd( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_ASSIGN_ND_LOOP_CAST_FCN( stdlib_complex128_t, stdlib_complex64_t, stdlib_complex128_to_complex64 )
	return 0;
}

// Define a list of unary ndarray functions:
static ndarrayUnaryAssignFcn functions[] = {
	stdlib_ndarray_assign_z_c_0d,
	stdlib_ndarray_assign_z_c_1d,
	stdlib_ndarray_assign_z_c_2d,
	stdlib_ndarray_assign_z_c_3d,
	stdlib_ndarray_assign_z_c_4d,
	stdlib_ndarray_assign_z_c_5d,
	stdlib_ndarray_assign_z_c_6d,
	stdlib_ndarray_assign_z_c_7d,
	stdlib_ndarray_assign_z_c_8d,
	stdlib_ndarray_assign_z_c_9d,
	stdlib_ndarray_assign_z_c_10d,
	stdlib_ndarray_assign_z_c_nd
};

// Define a list of unary ndarray functions implementing loop blocking...
static ndarrayUnaryAssignFcn blocked_functions[] = {
	stdlib_ndarray_assign_z_c_2d_blocked,
	stdlib_ndarray_assign_z_c_3d_blocked,
	stdlib_ndarray_assign_z_c_4d_blocked,
	stdlib_ndarray_assign_z_c_5d_blocked,
	stdlib_ndarray_assign_z_c_6d_blocked,
	stdlib_ndarray_assign_z_c_7d_blocked,
	stdlib_ndarray_assign_z_c_8d_blocked,
	stdlib_ndarray_assign_z_c_9d_blocked,
	stdlib_ndarray_assign_z_c_10d_blocked
};

// Create a unary function dispatch object:
static const struct ndarrayUnaryAssignDispatchObject obj = {
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
* Assigns elements in an input ndarray to elements in an output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/assign/z_c.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shape[] = { 2, 2 };
*
* // Define the strides:
* int64_t sx[] = { 32, 16 };
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
* // Copy elements:
* int8_t status = stdlib_ndarray_assign_z_c( arrays );
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
int8_t stdlib_ndarray_assign_z_c( struct ndarray *arrays[] ) {
	return stdlib_ndarray_unary_assign_dispatch( &obj, arrays );
}
