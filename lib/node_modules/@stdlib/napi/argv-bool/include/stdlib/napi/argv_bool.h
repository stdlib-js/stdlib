/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#ifndef STDLIB_NAPI_ARGV_BOOL_H
#define STDLIB_NAPI_ARGV_BOOL_H

#include "stdlib/napi/argv.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stdbool.h>

/**
* Macro for converting an add-on callback argument to a boolean.
*
* @param env      environment under which the function is invoked
* @param name     output variable name
* @param argv     name of the variable containing add-on callback arguments
* @param index    argument index
*
* @example
* #include "stdlib/napi/argv_bool.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
* #include <stdbool.h>
*
* static bool fcn( const bool v ) {
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
*     STDLIB_NAPI_ARGV_BOOL( env, value, argv, 0 );
*
*     // ...
*
*     bool out = fcn( value );
* }
*/
#define STDLIB_NAPI_ARGV_BOOL( env, name, argv, index )                        \
	napi_value __STDLIB_NAPI_ARGV_BOOL_ERR_ ## name;                           \
	bool name;                                                                 \
	stdlib_napi_argv_bool( env, argv[ index ], &name, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument must be a boolean.", &__STDLIB_NAPI_ARGV_BOOL_ERR_ ## name ); \
	if ( __STDLIB_NAPI_ARGV_BOOL_ERR_ ## name != NULL ) {                      \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_BOOL_ERR_ ## name ), "" ) \
		return NULL;                                                           \
	}

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Converts a Node-API value to a boolean.
*/
napi_status stdlib_napi_argv_bool( const napi_env env, const napi_value value, bool *out, const char *message, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_ARGV_BOOL_H
