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

#ifndef STDLIB_ASSERT_NAPI_STATUS_OK_H
#define STDLIB_ASSERT_NAPI_STATUS_OK_H

#include <node_api.h>
#include <assert.h>

/**
* Macro for asserting that a Node-API API call returns an "ok" status.
*
* ## Notes
*
* -   If a status is not "ok", an exception is raised and `void` returned.
*
* @param env        environment under which the function is invoked
* @param call       expression which returns a Node-API status
* @param message    error message
*
* @example
* #include <node_api.h>
*
* static void foo( const napi_env env, const napi_value value, double *out ) {
*     // ...
*
*     STDLIB_ASSERT_NAPI_STATUS_OK_RET_VOID( env, napi_get_value_double( env, value, out ), "" )
*
*     // ...
*
*     return;
* }
*/
#define STDLIB_ASSERT_NAPI_STATUS_OK_RET_VOID( env, call, message )            \
	if ( (call) != napi_ok ) {                                                 \
		assert( napi_throw_error( env, NULL, message ) == napi_ok );           \
		return;                                                                \
	}

/**
* Macro for asserting that a Node-API API call returns an "ok" status.
*
* ## Notes
*
* -   If a status is not "ok", an exception is raised and `NULL` returned.
*
* @param env        environment under which the function is invoked
* @param call       expression which returns a Node-API status
* @param message    error message
*
* @example
* #include <node_api.h>
*
* static napi_value foo( const napi_env env, const napi_value value, double *out ) {
*     // ...
*
*     STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_get_value_double( env, value, out ), "" )
*
*     // ...
*
*     return NULL;
* }
*/
#define STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, call, message )            \
	if ( (call) != napi_ok ) {                                                 \
		assert( napi_throw_error( env, NULL, message ) == napi_ok );           \
		return NULL;                                                           \
	}

/**
* Macro for asserting that a Node-API API call returns an "ok" status.
*
* ## Notes
*
* -   If a status is not "ok", an exception is raised and the value specified by `value` returned.
*
* @param env        environment under which the function is invoked
* @param call       expression which returns a Node-API status
* @param message    error message
* @param value      return value
*
* @example
* #include <node_api.h>
*
* static double foo( const napi_env env, const napi_value value ) {
*     // ...
*
*     double *out;
*     STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_get_value_double( env, value, out ), "", 0.0/0.0 )
*
*     // ...
*
*     return out;
* }
*/
#define STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, call, message, value )    \
	if ( (call) != napi_ok ) {                                                 \
		assert( napi_throw_error( env, NULL, message ) == napi_ok );           \
		return value;                                                          \
	}

#endif // !STDLIB_ASSERT_NAPI_STATUS_OK_H
