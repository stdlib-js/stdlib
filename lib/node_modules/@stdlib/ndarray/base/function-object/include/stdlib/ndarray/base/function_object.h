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

#ifndef STDLIB_NDARRAY_BASE_FUNCTION_OBJECT_H
#define STDLIB_NDARRAY_BASE_FUNCTION_OBJECT_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Function pointer type for an ndarray function.
*
* @param arrays   array containing pointers to input and output ndarrays
* @param data     function "data" (e.g., a callback)
* @return         status code
*/
typedef int8_t (*ndarrayFcn)( struct ndarray *arrays[], void *data );

/**
* Structure for grouping ndarray function information.
*
* @example
* #include "stdlib/ndarray/base/function_object.h"
* #include "stdlib/ndarray/base/binary.h"
* #include "stdlib/ndarray/dtypes.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* // Define the function(s) we want to apply to ndarrays:
* double scale( double x ) {
*     return x * 10.0;
* }
*
* struct ndarrayFunctionObject *obj = malloc( sizeof( struct ndarrayFunctionObject ) );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // As the function to be applied is a unary function, define a unary ndarray interface:
* const char name[] = "unary_ndarray_function";
* obj->name = name;
*
* obj->nin = 1;
* obj->nout = 1;
* obj->narrays = 2; // (obj->nin) + (obj->nout)
*
* // Define a list of ndarray functions (in this case, as the function to be applied accepts doubles, we only use ndarray functions which handle doubles as function arguments and, for the purposes of this example, we assume that the output ndarray is (almost) always a double-precision floating-point number array):
* obj->nfunctions = 8;
*
* ndarrayFcn functions[] = {
*     stdlib_ndarray_d_d,
*     stdlib_ndarray_f_f_as_d_d,
*     stdlib_ndarray_I_d_as_d_d,
*     stdlib_ndarray_i_d_as_d_d,
*     stdlib_ndarray_H_d_as_d_d,
*     stdlib_ndarray_h_d_as_d_d,
*     stdlib_ndarray_B_d_as_d_d,
*     stdlib_ndarray_b_d_as_d_d
* };
* obj->functions = functions;
*
* // Define the **ndarray** argument types for each ndarray function:
* int32_t types[] = {
*     STDLIB_NDARRAY_FLOAT64, STDLIB_NDARRAY_FLOAT64,
*     STDLIB_NDARRAY_FLOAT32, STDLIB_NDARRAY_FLOAT32,
*     STDLIB_NDARRAY_UINT32, STDLIB_NDARRAY_FLOAT64,
*     STDLIB_NDARRAY_INT32, STDLIB_NDARRAY_FLOAT64,
*     STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_FLOAT64,
*     STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_FLOAT64,
*     STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_FLOAT64,
*     STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_FLOAT64
* };
* obj->types = types;
*
* // Define a list of ndarray function "data" (in this case, callbacks):
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
* obj->data = data;
*
* // Free allocated memory:
* free( obj );
*/
struct ndarrayFunctionObject {
	// ndarray function name:
	const char *name;

	// Number of input ndarrays:
	int32_t nin;

	// Number of output ndarrays:
	int32_t nout;

	// Total number of ndarray arguments (nin + nout):
	int32_t narrays;

	// Array containing ndarray functions:
	ndarrayFcn *functions;

	// Number of ndarray functions:
	int32_t nfunctions;

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of ndarray argument types for a corresponding ndarray function:
	int32_t *types;

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective ndarray function (note: the number of pointers should match the number of ndarray functions):
	void **data;
};

/**
* Returns a pointer to a dynamically allocated ndarray function object.
*/
struct ndarrayFunctionObject * stdlib_ndarray_function_allocate( const char *name, int32_t nin, int32_t nout, ndarrayFcn *functions, int32_t nfunctions, int32_t *types, void *data[] );

/**
* Frees an ndarray function object's allocated memory.
*/
void stdlib_ndarray_function_free( struct ndarrayFunctionObject *obj );

/**
* Returns the first index of a function whose signature satisfies a provided list of array types.
*/
int64_t stdlib_ndarray_function_dispatch_index_of( const struct ndarrayFunctionObject *obj, const int32_t *types );


#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_FUNCTION_OBJECT_H
