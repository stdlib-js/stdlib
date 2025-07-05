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

/*
* The following is auto-generated. Do not manually edit. See scripts/inline_loops.js.
*/

#include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
#include "stdlib/ndarray/base/count-falsy/typedefs.h"
#include "stdlib/ndarray/base/count-falsy/macros.h"
#include "stdlib/ndarray/base/count-falsy/dispatch_object.h"
#include "stdlib/ndarray/base/count-falsy/dispatch.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/**
* Counts the number of falsy elements in a zero-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 0;
*
* // Define the array shapes:
* int64_t *shx = NULL;
* int64_t *shy = NULL;
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_0d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_0d( struct ndarray *arrays[], void *data ) {
	int8_t v;
	int8_t status = stdlib_ndarray_iget_int8( arrays[ 0 ], 0, &v );
	if ( status != 0 ) {
		return -1;
	}
	status = stdlib_ndarray_iset_int64( arrays[ 1 ], 0, ( v == 0 ) );
	if ( status != 0 ) {
		return -1;
	}
	return 0;
}

/**
* Counts the number of falsy elements in a one-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 1;
*
* // Define the array shapes:
* int64_t shx[] = { 3 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_1d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_1d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_1D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a two-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shx[] = { 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_2d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_2d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_2D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a two-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shx[] = { 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_2d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_2d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_2D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a three-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shx[] = { 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_3d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_3d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_3D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a three-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shx[] = { 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_3d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_3d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_3D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a four-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_4d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_4d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_4D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a four-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 4;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_4d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_4d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_4D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a five-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_5d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_5d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_5D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a five-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 5;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_5d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_5d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_5D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a six-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_6d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_6d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_6D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a six-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 6;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_6d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_6d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_6D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a seven-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_7d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_7d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_7D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a seven-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 7;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_7d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_7d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_7D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in an eight-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_8d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_8d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_8D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in an eight-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 8;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_8d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_8d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_8D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a nine-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_9d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_9d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_9D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a nine-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 9;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_9d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_9d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_9D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a ten-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_10d( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_10d( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_10D_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in a ten-dimensional input ndarray and assigns results to elements in a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 10;
*
* // Define the array shapes:
* int64_t shx[] = { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 8, 8, 8, 8, 8, 8, 8, 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_10d_blocked( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_10d_blocked( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_10D_BLOCKED_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

/**
* Counts the number of falsy elements in an n-dimensional input ndarray and assigns results to elements a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 3;
*
* // Define the array shapes:
* int64_t shx[] = { 2, 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 4, 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l_nd( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l_nd( struct ndarray *arrays[], void *data ) {
	STDLIB_NDARRAY_COUNT_FALSY_ND_LOOP_INLINE( int8_t, int64_t, ( in1 == 0 ) )
	return 0;
}

// Define a list of ndarray functions:
static ndarrayCountFalsyFcn functions[] = {
	stdlib_ndarray_count_falsy_s_l_0d,
	stdlib_ndarray_count_falsy_s_l_1d,
	stdlib_ndarray_count_falsy_s_l_2d,
	stdlib_ndarray_count_falsy_s_l_3d,
	stdlib_ndarray_count_falsy_s_l_4d,
	stdlib_ndarray_count_falsy_s_l_5d,
	stdlib_ndarray_count_falsy_s_l_6d,
	stdlib_ndarray_count_falsy_s_l_7d,
	stdlib_ndarray_count_falsy_s_l_8d,
	stdlib_ndarray_count_falsy_s_l_9d,
	stdlib_ndarray_count_falsy_s_l_10d,
	stdlib_ndarray_count_falsy_s_l_nd
};

// Define a list of ndarray functions implementing loop blocking...
static ndarrayCountFalsyFcn blocked_functions[] = {
	stdlib_ndarray_count_falsy_s_l_2d_blocked,
	stdlib_ndarray_count_falsy_s_l_3d_blocked,
	stdlib_ndarray_count_falsy_s_l_4d_blocked,
	stdlib_ndarray_count_falsy_s_l_5d_blocked,
	stdlib_ndarray_count_falsy_s_l_6d_blocked,
	stdlib_ndarray_count_falsy_s_l_7d_blocked,
	stdlib_ndarray_count_falsy_s_l_8d_blocked,
	stdlib_ndarray_count_falsy_s_l_9d_blocked,
	stdlib_ndarray_count_falsy_s_l_10d_blocked
};

// Create a function dispatch object:
static const struct ndarrayCountFalsyDispatchObject obj = {
	// Array containing ndarray functions:
	functions,

	// Number of ndarray functions:
	12,

	// Array containing ndarray functions using loop blocking:
	blocked_functions,

	// Number of ndarray functions using loop blocking:
	9
};

/**
* Counts the number of falsy elements in an input ndarray and assigns results to elements a zero-dimensional output ndarray.
*
* ## Notes
*
* -   If successful, the functions returns `0`; otherwise, the function returns an error code.
*
* @param arrays   array whose first element is a pointer to an input ndarray and whose last element is a pointer to an output ndarray
* @param data     function data
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/count-falsy/loops/s_l.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the ndarray data types:
* enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
* enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT64;
*
* // Create underlying byte arrays:
* uint8_t xbuf[] = { 0, 0, 0, 0 };
* uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define the number of dimensions:
* int64_t ndims = 2;
*
* // Define the array shapes:
* int64_t shx[] = { 2, 2 };
* int64_t *shy = NULL;
*
* // Define the strides:
* int64_t sx[] = { 2, 1 };
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
* struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an output ndarray:
* struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
* if ( y == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // Create an array containing the ndarrays:
* struct ndarray *arrays[] = { x, y };
*
* // Perform operation:
* int8_t status = stdlib_ndarray_count_falsy_s_l( arrays, NULL );
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
int8_t stdlib_ndarray_count_falsy_s_l( struct ndarray *arrays[], void *data ) {
	return stdlib_ndarray_count_falsy_dispatch( &obj, arrays, data );
}
