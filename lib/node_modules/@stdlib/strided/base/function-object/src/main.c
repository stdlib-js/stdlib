/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/strided/base/function_object.h"
#include <stdlib.h>
#include <stdint.h>

/**
* Returns the first row index at which a given one-dimensional array of types can be found in a two-dimensional reference array of types (or `-1` if not found).
*
* ## Notes
*
* -   The intended use case for this function is for type dispatch (i.e., given a set of array data types, find a matching interface according the interface's accepted array data types).
* -   The function assumes that `X` is stored in row-major order.
* -   The function assumes that the number of indexed elements in `Y` equals the number of columns in `X`.
* -   The function returns a row index. To convert to a linear index, multiply `strideX1` by the return value.
*
* @private
* @param N           number of rows in `X` (size of first dimension)
* @param M           number of columns in `X` (size of second dimension)
* @param X           input two-dimensional reference array
* @param strideX1    `X` stride length along first dimension
* @param strideX2    `X` stride length along second dimension
* @param Y           search array
* @param strideY     `Y` stride length
* @return            row index (if found) and `-1` otherwise
*
* @example
* #include "stdlib/strided/base/function_object.h"
* #include "stdlib/strided/dtypes.h"
* #include <stdint.h>
*
* // Define a reference array to search:
* int32_t X[] = {
*     STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
*     STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64
* };
*
* // Define reference array dimensions:
* int64_t N = 8; // rows
* int64_t M = 3; // columns
*
* // Define a search array:
* int32_t Y1[] = {
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
* };
*
* // Find the list of types:
* int64_t r1 = stdlib_strided_function_dispatch_types_index_of( N, M, X, M, 1, Y1, 1 );
* // returns 1
*
* // Define a search array:
* int32_t Y2[] = {
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
* };
*
* // Find the list of types:
* int64_t r2 = stdlib_strided_function_dispatch_types_index_of( N, M, X, M, 1, Y2, 1 );
* // returns -1
*/
static int64_t stdlib_strided_function_dispatch_types_index_of( const int64_t N, const int64_t M, const int32_t *X, const int64_t strideX1, const int64_t strideX2, const int32_t *Y, const int64_t strideY ) {
	int64_t ox;
	int64_t oy;
	int64_t ix;
	int64_t iy;
	int64_t i;
	int64_t j;

	// Determine initial starting indices (offsets)...
	if ( strideX1 < 0 ) {
		ox = (1-N) * strideX1;
	} else {
		ox = 0;
	}
	if ( strideX2 < 0 ) {
		ox += (1-M) * strideX2;
	}
	if ( strideY < 0 ) {
		oy = (1-M) * strideY;
	} else {
		oy = 0;
	}
	// Search for the first row which matches `Y`...
	ix = ox;
	for ( i = 0; i < N; i++ ) {
		iy = oy;
		for ( j = 0; j < M; j++ ) {
			if ( X[ ix+(j*strideX2) ] != Y[ iy ] ) {
				break;
			}
			iy += strideY;
		}
		// If we successfully iterated over all columns, then that means we've found a match...
		if ( j == M ) {
			return i;
		}
		ix += strideX1;
	}
	return -1;
}

/**
* Returns a pointer to a dynamically allocated strided array function object.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
*
* @param name        strided array function name
* @param nin         number of input strided arrays
* @param nout        number of output strided arrays
* @param functions   array containing strided array functions
* @param nfunctions  number of strided array functions
* @param types       array of type "numbers", where the total number of types equals `(nin+nout)*nfunctions` and where each set of `nin+nout` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function
* @param data        array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function
* @return            pointer to a dynamically allocated strided array function object or, if unable to allocate memory, a null pointer
*
* @example
* #include "stdlib/strided/base/function_object.h"
* #include "stdlib/strided/base/unary.h"
* #include "stdlib/strided/dtypes.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the function(s) we want to apply to strided arrays:
* double scale( const double x ) {
*     return x * 10.0;
* }
*
* // Define a function name:
* const char name[] = "unary_strided_array_function";
*
* // Define a list of strided array functions (in this case, as the function to be applied accepts doubles, we only use strided array functions which handle doubles as function arguments and, for the purposes of this example, we assume that the output strided array is always a double-precision floating-point number array):
* StridedArrayFcn functions[] = {
*     stdlib_strided_d_d,
*     stdlib_strided_f_f_as_d_d,
*     stdlib_strided_u_d_as_d_d,
*     stdlib_strided_i_d_as_d_d,
*     stdlib_strided_t_d_as_d_d,
*     stdlib_strided_k_d_as_d_d,
*     stdlib_strided_b_d_as_d_d,
*     stdlib_strided_s_d_as_d_d
* };
*
* // Define the **strided array** argument types for each strided array function:
* int32_t types[] = {
*     STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64
* };
*
* // Define a list of strided array function "data" (in this case, callbacks):
* void *data[] = {
*     (void *)scale,
*     (void *)scale,
*     (void *)scale,
*     (void *)scale,
*     (void *)scale,
*     (void *)scale,
*     (void *)scale,
*     (void *)scale
* };
*
* // Create a new strided function object:
* struct StridedFunctionObject *obj = stdlib_strided_function_allocate( name, 1, 1, functions, 8, types, data );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // Free allocated memory:
* stdlib_strided_function_free( obj );
*/
struct StridedFunctionObject * stdlib_strided_function_allocate( const char *name, int32_t nin, int32_t nout, StridedArrayFcn *functions, int32_t nfunctions, int32_t *types, void *data[] ) {
	struct StridedFunctionObject *obj = malloc( sizeof( struct StridedFunctionObject ) );
	if ( obj == NULL ) {
		return NULL;
	}
	obj->name = name;
	obj->nin = nin;
	obj->nout = nout;
	obj->narrays = nin + nout;
	obj->functions = functions;
	obj->nfunctions = nfunctions;
	obj->types = types;
	obj->data = data;
	return obj;
}

/**
* Frees a strided array function object's allocated memory.
*
* @param obj  strided array function object
*
* @example
* #include "stdlib/strided/base/function_object.h"
* #include "stdlib/strided/base/unary.h"
* #include "stdlib/strided/dtypes.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the function(s) we want to apply to strided arrays:
* double scale( const double x ) {
*     return x * 10.0;
* }
*
* // Define a function name:
* const char name[] = "unary_strided_array_function";
*
* // Define a list of strided array functions:
* StridedArrayFcn functions[] = {
*     stdlib_strided_d_d
* };
*
* // Define the **strided array** argument types for each strided array function:
* int32_t types[] = {
*     STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64
* };
*
* // Define a list of strided array function "data" (in this case, callbacks):
* void *data[] = {
*     (void *)scale
* };
*
* // Create a new strided function object:
* struct StridedFunctionObject *obj = stdlib_strided_function_allocate( name, 1, 1, functions, 1, types, data );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_strided_function_free( obj );
*/
void stdlib_strided_function_free( struct StridedFunctionObject *obj ) {
	if ( obj == NULL ) {
		return;
	}
	free( obj );
}

/**
* Returns the first index of a function whose signature satisfies a provided list of array types.
*
* ## Notes
*
* -   The function returns `-1` if unable to find a function.
*
* @param obj    strided array function object
* @param types  list of array types on which to dispatch
* @return       function index (if found) and `-1` otherwise
*
* @example
* #include "stdlib/strided/base/function_object.h"
* #include "stdlib/strided/base/unary.h"
* #include "stdlib/strided/dtypes.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the function(s) we want to apply to strided arrays:
* double scale( const double x ) {
*     return x * 10.0;
* }
*
* // ...
*
* // Define a function name:
* const char name[] = "unary_strided_array_function";
*
* // Define a list of strided array functions:
* StridedArrayFcn functions[] = {
*     stdlib_strided_d_d,
*     stdlib_strided_f_f_as_d_d
* };
*
* // Define the **strided array** argument types for each strided array function:
* int32_t types[] = {
*     STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64
* };
*
* // Define a list of strided array function "data" (in this case, callbacks):
* void *data[] = {
*     (void *)scale,
*     (void *)scale
* };
*
* // Create a new strided function object:
* struct StridedFunctionObject *obj = stdlib_strided_function_allocate( name, 1, 1, functions, 2, types, data );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // ...
*
* // Define a list of types on which to dispatch:
* int32_t itypes[] = {
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64
* };
*
* // Find a function satisfying the list of types:
* int64_t idx = stdlib_strided_function_dispatch_index_of( obj, itypes );
* if ( idx < 0 ) {
*     fprintf( stderr, "Unable to find function.\n" );
*     exit( 1 );
* }
*
* // ...
*
* // Free allocated memory:
* stdlib_strided_function_free( obj );
*/
int64_t stdlib_strided_function_dispatch_index_of( const struct StridedFunctionObject *obj, const int32_t *types ) {
	if ( obj == NULL ) {
		return -1;
	}
	// Retrieve the number of functions (and thus the number of type signatures):
	int32_t N = obj->nfunctions;

	// Retrieve the number of array arguments:
	int32_t M = obj->narrays;

	// Find the index of the function satisfying the provided types:
	return stdlib_strided_function_dispatch_types_index_of( (int64_t)N, M, obj->types, M, 1, types, 1 );
}
