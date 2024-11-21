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

#ifndef STDLIB_NAPI_ARGV_FLOAT_H
#define STDLIB_NAPI_ARGV_FLOAT_H

#include "stdlib/napi/argv.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>

/**
* Macro for converting an add-on callback argument to a single-precision floating-point number.
*
* @param env      environment under which the function is invoked
* @param name     output variable name
* @param argv     name of the variable containing add-on callback arguments
* @param index    argument index
*
* @example
* #include "stdlib/napi/argv_float.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
*
* static float fcn( const float v ) {
*     return v;
* }
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // Retrieve add-on callback arguments:
*     STDLIB_NAPI_ARGV( env, info, argv, argc, 1 );
*
*     // Convert the first argument to a C type:
*     STDLIB_NAPI_ARGV_FLOAT( env, value, argv, 0 );
*
*     // ...
*
*     float out = fcn( value );
* }
*/
#define STDLIB_NAPI_ARGV_FLOAT( env, name, argv, index )                       \
	napi_value __STDLIB_NAPI_ARGV_FLOAT_ERR_ ## name;                          \
	float name;                                                                \
	stdlib_napi_argv_float( env, argv[ index ], &name, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument must be a number.", &__STDLIB_NAPI_ARGV_FLOAT_ERR_ ## name ); \
	if ( __STDLIB_NAPI_ARGV_FLOAT_ERR_ ## name != NULL ) {                     \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_FLOAT_ERR_ ## name ), "" ) \
		return NULL;                                                           \
	}

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Converts a Node-API value to a single-precision floating-point number.
*/
napi_status stdlib_napi_argv_float( const napi_env env, const napi_value value, float *out, const char *message, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_ARGV_FLOAT_H
