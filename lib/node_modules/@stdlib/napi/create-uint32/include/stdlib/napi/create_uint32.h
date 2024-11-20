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

#ifndef STDLIB_NAPI_CREATE_UINT32_H
#define STDLIB_NAPI_CREATE_UINT32_H

#include <node_api.h>
#include <stdint.h>

/**
* Macro for converting an unsigned 32-bit integer to a Node-API value.
*
* @param env         environment under which the function is invoked
* @param expression  expression returning an unsigned 32-bit integer
* @param name        output variable name
*
* @example
# #include "stdlib/napi/create_uint32.h"
* #include "stdlib/napi/argv_uint32.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static uint32_t fcn( const uint32_t v ) {
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
*     STDLIB_NAPI_ARGV_UINT32( env, value, argv, 0 );
*
*     // ...
*
*     // Convert a value having a C type to a Node-API value:
*     STDLIB_NAPI_CREATE_UINT32( env, fcn( value ), out );
*     return out;
* }
*/
#define STDLIB_NAPI_CREATE_UINT32( env, expression, name )                     \
	napi_value name;                                                           \
	stdlib_napi_create_uint32( env, expression, &name );

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Converts an unsigned 32-bit integer to a Node-API value.
*/
napi_status stdlib_napi_create_uint32( const napi_env env, const uint32_t value, napi_value *out );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_CREATE_UINT32_H
