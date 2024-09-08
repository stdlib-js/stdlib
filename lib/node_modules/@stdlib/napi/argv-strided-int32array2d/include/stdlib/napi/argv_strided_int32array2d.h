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

#ifndef STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_H
#define STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_H

#include "stdlib/napi/argv.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stdint.h>

/**
* Macro for converting an add-on callback argument to a strided signed 32-bit integer array.
*
* @param env        environment under which the function is invoked
* @param X          output variable name for the array
* @param M          number of rows
* @param N          number of columns
* @param strideX1   stride length for the first dimension
* @param strideX2   stride length for the second dimension
* @param argv       name of the variable containing add-on callback arguments
* @param index      argument index
*
* @example
* #include "stdlib/napi/argv_strided_int32array2d.h"
* #include "stdlib/napi_argv_int64.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static void fcn( const int64_t M, const int64_t N, const int32_t *X, const int64_t strideX1, const int64_t strideX2, int32_t *Y, const int64_t strideY1, const int64_t strideY2 ) {
*     int64_t i;
*     int64_t j;
*     for ( i = 0; i < M; i++ ) {
*         for ( j = 0; j < N; j++ ) {
*             Y[ (i*strideY1)+(j*strideY2) ] = X[ (i*strideX1)+(j*strideX2) ];
*         }
*     }
* }
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // Retrieve add-on callback arguments:
*     STDLIB_NAPI_ARGV( env, info, argv, argc, 8 );
*
*     // Convert the number of rows and columns to C types:
*     STDLIB_NAPI_ARGV_INT64( env, M, argv, 0 );
*     STDLIB_NAPI_ARGV_INT64( env, N, argv, 1 );
*
*     // Convert the stride arguments to C types:
*     STDLIB_NAPI_ARGV_INT64( env, strideX1, argv, 3 );
*     STDLIB_NAPI_ARGV_INT64( env, strideX2, argv, 4 );
*     STDLIB_NAPI_ARGV_INT64( env, strideY1, argv, 6 );
*     STDLIB_NAPI_ARGV_INT64( env, strideY2, argv, 7 );
*
*     // Convert the arrays to C types:
*     STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D( env, X, M, N, strideX1, strideX2, argv, 2 );
*     STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D( env, Y, M, N, strideY1, strideY2, argv, 5 );
*
*     // ...
*
*     fcn( M, N, X, strideX1, strideX2, Y, strideY1, strideY2 );
* }
*/
#define STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D( env, X, M, N, strideX1, strideX2, argv, index ) \
	napi_value __STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_ERR_ ## X;              \
	int32_t *X;                                                                \
	stdlib_napi_argv_strided_int32array2d( env, M, N, strideX1, strideX2, argv[ index ], &X, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument must be a Int32Array.", "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument has insufficient elements based on the associated strides and the number of rows and columns.", &__STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_ERR_ ## X ); \
	if ( __STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_ERR_ ## X != NULL ) {         \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_ERR_ ## X ), "" ) \
		return NULL;                                                           \
	}

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Converts a Node-API value representing a two-dimensional strided array to a signed 32-bit integer array.
*/
napi_status stdlib_napi_argv_strided_int32array2d( const napi_env env, const int64_t M, const int64_t N, const int64_t strideX1, const int64_t strideX2, const napi_value value, int32_t **data, const char *message1, const char *message2, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_ARGV_STRIDED_INT32ARRAY2D_H
