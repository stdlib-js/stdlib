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

#ifndef STDLIB_STRIDED_BASE_FUNCTION_OBJECT_H
#define STDLIB_STRIDED_BASE_FUNCTION_OBJECT_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Function pointer type for a strided array function.
*
* @param arrays   array containing pointers to both input and output strided arrays
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param data     function "data" (e.g., a callback)
*/
typedef void (*StridedArrayFcn)( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *data );

/**
* Structure for grouping strided array function information.
*
* @example
* #include "stdlib/strided/base/function_object.h"
* #include "stdlib/strided/base/binary.h"
* #include "stdlib/strided/dtypes.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the function(s) we want to apply to strided arrays:
* double add( double x, double y ) {
*     return x + y;
* }
*
* struct StridedFunctionObject *obj = malloc( sizeof( struct StridedFunctionObject ) );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // As the function to be applied is a binary function, define a binary strided array interface:
* const char name[] = "binary_strided_array_function";
* obj->name = name;
*
* obj->nin = 2;
* obj->nout = 1;
* obj->narrays = 3; // (obj->nin) + (obj->nout)
*
* // Define a list of strided array functions (in this case, as the function to be applied accepts doubles, we only use strided array functions which handle doubles as function arguments and, for the purposes of this example, we assume that the output strided array is (almost) always a double-precision floating-point number array):
* obj->nfunctions = 8;
*
* StridedArrayFcn functions[] = {
*     stdlib_strided_dd_d,
*     stdlib_strided_ff_f_as_dd_d,
*     stdlib_strided_II_d_as_dd_d,
*     stdlib_strided_ii_d_as_dd_d,
*     stdlib_strided_HH_d_as_dd_d,
*     stdlib_strided_hh_d_as_dd_d,
*     stdlib_strided_BB_d_as_dd_d,
*     stdlib_strided_bb_d_as_dd_d
* };
* obj->functions = functions;
*
* // Define the **strided array** argument types for each strided array function:
* int32_t types[] = {
*     STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
*     STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
*     STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64
* };
* obj->types = types;
*
* // Define a list of strided array function "data" (in this case, callbacks):
* void *data[] = {
*     (void *)add,
*     (void *)add,
*     (void *)add,
*     (void *)add,
*     (void *)add,
*     (void *)add,
*     (void *)add,
*     (void *)add
* };
* obj->data = data;
*
* // Free allocated memory:
* free( obj );
*/
struct StridedFunctionObject {
	// Strided array function name:
	const char *name;

	// Number of input strided arrays:
	int32_t nin;

	// Number of output strided arrays:
	int32_t nout;

	// Total number of strided array arguments (nin + nout):
	int32_t narrays;

	// Array containing strided array functions:
	StridedArrayFcn *functions;

	// Number of strided array functions:
	int32_t nfunctions;

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	int32_t *types;

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	void **data;
};

/**
* Returns a pointer to a dynamically allocated strided array function object.
*/
struct StridedFunctionObject * stdlib_strided_function_allocate( const char *name, int32_t nin, int32_t nout, StridedArrayFcn *functions, int32_t nfunctions, int32_t *types, void *data[] );

/**
* Frees a strided array function object's allocated memory.
*/
void stdlib_strided_function_free( struct StridedFunctionObject *obj );

/**
* Returns the first index of a function whose signature satisfies a provided list of array types.
*/
int64_t stdlib_strided_function_dispatch_index_of( const struct StridedFunctionObject *obj, const int32_t *types );


#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_FUNCTION_OBJECT_H
