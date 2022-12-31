/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#ifndef STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_H
#define STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_H

#include "stdlib/napi/argv.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stdint.h>

/**
* Macro for converting an add-on callback argument to a strided double-precision floating-point array.
*
* @param env      environment under which the function is invoked
* @param X        output variable name for the array
* @param N        number of indexed elements
* @param stride   stride length
* @param argv     name of the variable containing add-on callback arguments
* @param index    argument index
*
* @example
* #include "stdlib/napi/argv_strided_float64array.h"
* #include "stdlib/napi_argv_int64.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static void fcn( const int64_t N, const double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
*     int64_t i;
*     for ( i = 0; i < N; i++ ) {
*         Y[ i*strideY ] = X[ i*strideX ];
*     }
* }
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // Retrieve add-on callback arguments:
*     STDLIB_NAPI_ARGV( env, info, argv, argc, 5 );
*
*     // Convert the number of indexed elements to a C type:
*     STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
*
*     // Convert the stride arguments to C types:
*     STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 2 );
*     STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 4 );
*
*     // Convert the arrays a C types:
*     STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, N, strideX, argv, 1 );
*     STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, N, strideY, argv, 3 );
*
*     // ...
*
*     fcn( N, X, strideX, Y, strideY );
* }
*/
#define STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, N, stride, argv, index ) \
	napi_value __STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_ERR_ ## X;              \
	double *X;                                                                 \
	stdlib_napi_argv_strided_float64array( env, N, stride, argv[ index ], &X, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument must be a Float64Array.", "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument has insufficient elements based on the associated stride and the number of indexed elements.", &__STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_ERR_ ## X ); \
	if ( __STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_ERR_ ## X != NULL ) {         \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_ERR_ ## X ), "" ) \
		return NULL;                                                           \
	}

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Converts a Node-API value representing a strided array to a double-precision floating-point array.
*/
napi_status stdlib_napi_argv_strided_float64array( const napi_env env, const int64_t N, const int64_t stride, const napi_value value, double **data, const char *message1, const char *message2, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY_H
