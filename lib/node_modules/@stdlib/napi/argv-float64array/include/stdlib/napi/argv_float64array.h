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

#ifndef STDLIB_NAPI_ARGV_FLOAT64ARRAY_H
#define STDLIB_NAPI_ARGV_FLOAT64ARRAY_H

#include "stdlib/napi/argv.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stdint.h>

/**
* Macro for converting an add-on callback argument to a double-precision floating-point array.
*
* @param env      environment under which the function is invoked
* @param X        output variable name for the array
* @param len      output variable name for the array length
* @param argv     name of the variable containing add-on callback arguments
* @param index    argument index
*
* @example
* #include "stdlib/napi/argv_float64array.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static void fcn( const double *X, const int64_t xlen, double *Y, const int64_t ylen ) {
*     int64_t len;
*     int64_t i;
*
*     if ( xlen > ylen ) {
*         len = ylen;
*     } else {
*         len = xlen;
*     }
*     for ( i = 0; i < len; i++ ) {
*         Y[ i ] = X[ i ];
*     }
* }
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // Retrieve add-on callback arguments:
*     STDLIB_NAPI_ARGV( env, info, argv, argc, 2 );
*
*     // Convert the first argument to a C type:
*     STDLIB_NAPI_ARGV_FLOAT64ARRAY( env, X, xlen, argv, 0 );
*
*     // Convert the second argument to a C type:
*     STDLIB_NAPI_ARGV_FLOAT64ARRAY( env, Y, ylen, argv, 1 );
*
*     // ...
*
*     fcn( X, xlen, Y, ylen );
* }
*/
#define STDLIB_NAPI_ARGV_FLOAT64ARRAY( env, X, len, argv, index )              \
	napi_value __STDLIB_NAPI_ARGV_FLOAT64ARRAY_ERR_ ## X;                      \
	int64_t len;                                                               \
	double *X;                                                                 \
	stdlib_napi_argv_float64array( env, argv[ index ], &X, &len, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument must be a Float64Array.", &__STDLIB_NAPI_ARGV_FLOAT64ARRAY_ERR_ ## X ); \
	if ( __STDLIB_NAPI_ARGV_FLOAT64ARRAY_ERR_ ## X != NULL ) {                 \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_FLOAT64ARRAY_ERR_ ## X ), "" ) \
		return NULL;                                                           \
	}

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Converts a Node-API value to a double-precision floating-point array.
*/
napi_status stdlib_napi_argv_float64array( const napi_env env, const napi_value value, double **data, int64_t *length, const char *message, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_ARGV_FLOAT64ARRAY_H
