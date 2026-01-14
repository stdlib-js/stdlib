/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
#include "stdlib/strided/base/unary.h"
#include "stdlib/strided/dtypes.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the function(s) we want to apply to strided arrays:
static double scale( const double x ) {
	return x * 10.0;
}

int main( void ) {
	// Manually create a strided array function object...
	struct StridedFunctionObject *obj = malloc( sizeof( struct StridedFunctionObject ) );
	if ( obj == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}

	// As the function to be applied is a unary function, define a unary strided array interface:
	const char name[] = "unary_strided_array_function";
	obj->name = name;

	obj->nin = 1;
	obj->nout = 1;
	obj->narrays = 2; // (obj->nin) + (obj->nout)

	// Define a list of strided array functions (in this case, as the function to be applied accepts doubles, we only use strided array functions which handle doubles as function arguments and, for the purposes of this example, we assume that the output strided array is always a double-precision floating-point number array):
	obj->nfunctions = 8;

	StridedArrayFcn functions[] = {
		stdlib_strided_d_d,
		stdlib_strided_f_d_as_d_d,
		stdlib_strided_u_d_as_d_d,
		stdlib_strided_i_d_as_d_d,
		stdlib_strided_t_d_as_d_d,
		stdlib_strided_k_d_as_d_d,
		stdlib_strided_b_d_as_d_d,
		stdlib_strided_s_d_as_d_d
	};
	obj->functions = functions;

	// Define the **strided array** argument types for each strided array function:
	int32_t types[] = {
		STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,
		STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64
	};
	obj->types = types;

	// Define a list of strided array function "data" (in this case, callbacks):
	void *data[] = {
		(void *)scale,
		(void *)scale,
		(void *)scale,
		(void *)scale,
		(void *)scale,
		(void *)scale,
		(void *)scale,
		(void *)scale
	};
	obj->data = data;

	printf( "name = %s\n", obj->name );
	printf( "nin = %i\n", obj->nin );
	printf( "nout = %i\n", obj->nout );
	printf( "narrays = %i\n", obj->narrays );
	printf( "nfunctions = %i\n", obj->nfunctions );

	// Free allocated memory:
	stdlib_strided_function_free( obj );

	// Use the function interface to create a strided array function object...
	struct StridedFunctionObject *obj2 = stdlib_strided_function_allocate( "unary_strided_array_function_2", 1, 1, functions, 8, types, data );
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
	stdlib_strided_function_free( obj );
}
