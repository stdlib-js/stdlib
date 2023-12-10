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

#include "stdlib/ndarray/base/function_object.h"
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to ndarrays:
static uint8_t scale( const uint8_t x ) {
	return x * 10;
}

int main( void ) {
	// Manually create an ndarray function object...
	struct ndarrayFunctionObject *obj = malloc( sizeof( struct ndarrayFunctionObject ) );
	if ( obj == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}

	// As the function to be applied is a unary function, define a unary ndarray interface:
	const char name[] = "unary_ndarray_function";
	obj->name = name;

	obj->nin = 1;
	obj->nout = 1;
	obj->narrays = 2; // (obj->nin) + (obj->nout)

	// Define a list of ndarray functions (in this case, as the function to be applied accepts unsigned 8-bit integers, we only use ndarray functions which handle unsigned 8-bit integers as function arguments and, for the purposes of this example, we assume that the output ndarray is always an unsigned 8-bit integer array):
	obj->nfunctions = 1;

	ndarrayFcn functions[] = {
		stdlib_ndarray_b_b
	};
	obj->functions = functions;

	// Define the **ndarray** argument types for each ndarray function:
	int32_t types[] = {
		STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_UINT8
	};
	obj->types = types;

	// Define a list of ndarray function "data" (in this case, callbacks):
	void *data[] = {
		(void *)scale
	};
	obj->data = data;

	printf( "name = %s\n", obj->name );
	printf( "nin = %i\n", obj->nin );
	printf( "nout = %i\n", obj->nout );
	printf( "narrays = %i\n", obj->narrays );
	printf( "nfunctions = %i\n", obj->nfunctions );

	// Free allocated memory:
	stdlib_ndarray_function_free( obj );

	// Use the function interface to create an ndarray function object...
	struct ndarrayFunctionObject *obj2 = stdlib_ndarray_function_allocate( "unary_ndarray_function_2", 1, 1, functions, 1, types, data );
	if ( obj2 == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}

	printf( "name = %s\n", obj2->name );
	printf( "nin = %i\n", obj2->nin );
	printf( "nout = %i\n", obj2->nout );
	printf( "narrays = %i\n", obj2->narrays );
	printf( "nfunctions = %i\n", obj2->nfunctions );

	// Free allocated memory:
	stdlib_ndarray_function_free( obj );
}
