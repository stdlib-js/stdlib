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

#include "stdlib/ndarray/base/nullary/dispatch_object.h"
#include "stdlib/ndarray/base/nullary/typedefs.h"
#include "stdlib/ndarray/base/iteration_order.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stddef.h>

/**
* Applies a nullary callback and assigns results to elements in an output ndarray.
*
* ## Notes
*
* -   If able to successfully apply a nullary callback, the function returns `0`; otherwise, the function returns an error code.
*
* @private
* @param f     nullary ndarray function
* @param x1    output ndarray
* @param i     index of the non-singleton dimension
* @param fcn   callback
* @return      status code
*/
static int8_t stdlib_ndarray_nullary_1d_squeeze( const ndarrayNullaryFcn f, struct ndarray *x1, const int64_t i, void *fcn ) {
	int64_t sh[] = { stdlib_ndarray_shape( x1 )[ i ] };

	// Shallow copy and reshape the array...
	int64_t sx1[] = { stdlib_ndarray_strides( x1 )[ i ] };
	struct ndarray *x1c = stdlib_ndarray_allocate(
		stdlib_ndarray_dtype( x1 ),
		stdlib_ndarray_data( x1 ),
		1,
		sh,
		sx1,
		stdlib_ndarray_offset( x1 ),
		stdlib_ndarray_order( x1 ),
		stdlib_ndarray_index_mode( x1 ),
		stdlib_ndarray_nsubmodes( x1 ),
		stdlib_ndarray_submodes( x1 )
	);
	if ( x1c == NULL ) {
		return -1;
	}
	// Apply the callback:
	struct ndarray *arrays[] = { x1c };
	int8_t status = f( arrays, fcn );

	// Free allocated memory:
	stdlib_ndarray_free( x1c );

	return status;
}

/**
* Applies a nullary callback and assigns results to elements in a flattened n-dimensional output ndarray.
*
* ## Notes
*
* -   If able to successfully apply a nullary callback, the function returns `0`; otherwise, the function returns an error code.
*
* @private
* @param f     nullary ndarray function
* @param N     number of elements
* @param x1    output ndarray
* @param s1    output ndarray stride length
* @param fcn   callback
* @return      status code
*/
static int8_t stdlib_ndarray_nullary_1d_flatten( const ndarrayNullaryFcn f, const int64_t N, struct ndarray *x1, const int64_t s1, void *fcn ) {
	// Define the (flattened) strided array shape:
	int64_t sh[] = { N };

	// Shallow copy and reshape the array...
	int64_t sx1[] = { s1 };
	struct ndarray *x1c = stdlib_ndarray_allocate(
		stdlib_ndarray_dtype( x1 ),
		stdlib_ndarray_data( x1 ),
		1,
		sh,
		sx1,
		stdlib_ndarray_offset( x1 ),
		stdlib_ndarray_order( x1 ),
		stdlib_ndarray_index_mode( x1 ),
		stdlib_ndarray_nsubmodes( x1 ),
		stdlib_ndarray_submodes( x1 )
	);
	if ( x1c == NULL ) {
		return -1;
	}
	// Apply the callback:
	struct ndarray *arrays[] = { x1c };
	int8_t status = f( arrays, fcn );

	// Free allocated memory:
	stdlib_ndarray_free( x1c );

	return status;
}

/**
* Dispatches to a nullary ndarray function according to the dimensionality of provided ndarray arguments.
*
* ## Notes
*
* -   If able to successfully dispatch, the function returns `0`; otherwise, the function returns an error code.
*
* @param obj      object comprised of dispatch tables containing nullary ndarray functions
* @param arrays   array whose only element is a pointer to an output ndarray
* @param fcn      callback
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/nullary/dispatch.h"
* #include "stdlib/ndarray/base/nullary/dispatch_object.h"
* #include "stdlib/ndarray/base/nullary/typedefs.h"
* #include "stdlib/ndarray/base/nullary/b.h"
* #include "stdlib/ndarray/ctor.h"
* #include <stdint.h>
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define a list of nullary ndarray functions:
* ndarrayNullaryFcn functions[] = {
*     stdlib_ndarray_b_0d,
*     stdlib_ndarray_b_1d,
*     stdlib_ndarray_b_2d,
*     stdlib_ndarray_b_3d,
*     stdlib_ndarray_b_4d,
*     stdlib_ndarray_b_5d,
*     stdlib_ndarray_b_6d,
*     stdlib_ndarray_b_7d,
*     stdlib_ndarray_b_8d,
*     stdlib_ndarray_b_9d,
*     stdlib_ndarray_b_10d
*     stdlib_ndarray_b_nd
* };
*
* // Define a list of nullary ndarray functions using loop blocking...
* ndarrayNullaryFcn blocked_functions[] = {
*     stdlib_ndarray_b_2d_blocked,
*     stdlib_ndarray_b_3d_blocked,
*     stdlib_ndarray_b_4d_blocked,
*     stdlib_ndarray_b_5d_blocked,
*     stdlib_ndarray_b_6d_blocked,
*     stdlib_ndarray_b_7d_blocked,
*     stdlib_ndarray_b_8d_blocked,
*     stdlib_ndarray_b_9d_blocked,
*     stdlib_ndarray_b_10d_blocked
* };
*
* // Create a nullary function dispatch object:
* struct ndarrayNullaryDispatchObject obj = {
*     // Array containing nullary ndarray functions:
*     nullary,
*
*     // Number of nullary ndarray functions:
*     12,
*
*     // Array containing nullary ndarray functions using loop blocking:
*     blocked_nullary,
*
*     // Number of nullary ndarray functions using loop blocking:
*     9
* }
*
* // Define a function which performs dispatch:
* int8_t stdlib_ndarray_b( struct ndarray *arrays[], void *fcn ) {
*     return stdlib_ndarray_nullary_dispatch( &obj, arrays, fcn );
* }
*
* // ...
*
* // Create an ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( ... );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( EXIT_FAILURE );
* }
*
* // ...
*
* // Define a callback:
* uint8_t fcn() {
*     return 10;
* }
*
* // Apply the callback:
* struct ndarray *arrays[] = { x };
* int8_t status = stdlib_ndarray_b( arrays, (void *)fcn );
* if ( status != 0 ) {
*     fprintf( stderr, "Error during computation.\n" );
*     exit( EXIT_FAILURE );
* }
*/
int8_t stdlib_ndarray_nullary_dispatch( const struct ndarrayNullaryDispatchObject *obj, struct ndarray *arrays[], void *fcn ) {
	struct ndarray *x1;
	int8_t status;
	int64_t ndims;
	int64_t mab1;
	int64_t mib1;
	int64_t *sh1;
	int64_t *s1;
	int64_t len;
	int64_t bp1;
	int8_t io1;
	int64_t ns;
	int64_t s;
	int64_t d;
	int64_t i;

	// Unpack the array:
	x1 = arrays[ 0 ];

	// Determine whether we can avoid iteration altogether...
	ndims = stdlib_ndarray_ndims( x1 );
	if ( ndims == 0 ) {
		obj->functions[ 0 ]( arrays, fcn );
		return 0;
	}
	sh1 = stdlib_ndarray_shape( x1 );

	// Compute the number of elements and the number of singleton dimensions...
	len = 1; // number of elements
	ns = 0;  // number of singleton dimensions
	for ( i = 0; i < ndims; i++ ) {
		d = sh1[ i ];

		// Note that, if one of the dimensions is `0`, the length will be `0`...
		len *= d;

		// Check whether the current dimension is a singleton dimension...
		if ( d == 1 ) {
			ns += 1;
		}
	}
	// Check whether we were provided an empty ndarray...
	if ( len == 0 ) {
		return 0;
	}
	// Determine whether the ndarray is one-dimensional and thus readily translate to a one-dimensional strided array...
	if ( ndims == 1 ) {
		obj->functions[ 1 ]( arrays, fcn );
		return 0;
	}
	// Determine whether the ndarray has only **one** non-singleton dimension (e.g., ndims=4, shape=[10,1,1,1]) so that we can treat the ndarray as being equivalent to a one-dimensional strided array...
	if ( ns == ndims-1 ) {
		// Get the index of the non-singleton dimension...
		for ( i = 0; i < ndims; i++ ) {
			if ( sh1[ i ] != 1 ) {
				break;
			}
		}
		// Remove the singleton dimensions and apply the nullary function...
		status = stdlib_ndarray_nullary_1d_squeeze( obj->functions[ 1 ], x1, i, fcn );
		if ( status == 0 ) {
			return 0;
		}
		// If we failed, this is probably due to failed memory allocation, so fall through and try again...
	}
	s1 = stdlib_ndarray_strides( x1 );
	io1 = stdlib_ndarray_iteration_order( ndims, s1 ); // +/-1

	// Determine whether we can avoid blocked iteration...
	if ( io1 != 0 ) {
		// Determine the minimum and maximum linear byte indices which are accessible by the array view:
		mib1 = stdlib_ndarray_offset( x1 ); // byte offset
		mab1 = mib1;
		for ( i = 0; i < ndims; i++ ) {
			s = s1[ i ]; // units: bytes
			if ( s > 0 ) {
				mab1 += s * ( sh1[i]-1 );
			} else if ( s < 0 ) {
				mib1 += s * ( sh1[i]-1 ); // decrements
			}
		}
		bp1 = stdlib_ndarray_bytes_per_element( stdlib_ndarray_dtype( x1 ) );

		// Determine whether we can ignore shape (and strides) and treat the ndarray as a linear one-dimensional strided array...
		if ( ( len*bp1 ) == ( mab1-mib1+bp1 ) ) {
			// Note: the above is equivalent to @stdlib/ndarray/base/assert/is-contiguous, but in-lined so we can retain computed values...
			status = stdlib_ndarray_nullary_1d_flatten( obj->functions[ 1 ], len, x1, io1*bp1, fcn );
			if ( status == 0 ) {
				return 0;
			}
			// If we failed, this is probably due to failed memory allocation, so fall through and try again...
		}
		// The ndarray is non-contiguous, so we cannot directly use one-dimensional array functionality...

		// Determine whether we can use simple nested loops...
		if ( ndims < (obj->nfunctions) ) {
			// So long as iteration for the array always moves in the same direction (i.e., no mixed sign strides), we can leverage cache-optimal (i.e., normal) nested loops without resorting to blocked iteration...
			obj->functions[ ndims ]( arrays, fcn );
			return 0;
		}
		// Fall-through to blocked iteration...
	}
	// At this point, we're either dealing with either a non-contiguous n-dimensional array or a high dimensional n-dimensional array, so our only hope is that we can still perform blocked iteration...

	// Determine whether we can perform blocked iteration...
	if ( ndims <= (obj->nblockedfunctions)+1 ) {
		obj->blocked_functions[ ndims-2 ]( arrays, fcn );
		return 0;
	}
	// Fall-through to linear view iteration without regard for how data is stored in memory (i.e., take the slow path)...
	obj->functions[ (obj->nfunctions)-1 ]( arrays, fcn );

	return 0;
}
