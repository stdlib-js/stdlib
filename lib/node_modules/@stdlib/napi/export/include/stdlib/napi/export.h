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

#ifndef STDLIB_NAPI_EXPORT_H
#define STDLIB_NAPI_EXPORT_H

#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module which exports a function.
*
* @param name     exported function name
*
* @example
* #include <node_api.h>
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // ...
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_NAPI_MODULE_EXPORT_FCN( addon )
*/
#define STDLIB_NAPI_MODULE_EXPORT_FCN( name )                                  \
	static napi_value stdlib_napi_module_export_fcn_init(                      \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			name,                                                              \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_napi_module_export_fcn_init )

/**
* Macro for registering a Node-API module which exports a function having a method.
*
* @param fcn_name         exported function name
* @param prop_name        property name
* @param fcn_method_name  exported function name for the method
*
* @example
* #include <node_api.h>
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // ...
* }
*
* static napi_value addon_method( napi_env env, napi_callback_info info ) {
*     // ...
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "foo", addon_method )
*/
#define STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( fcn_name, prop_name, fcn_method_name ) \
	static napi_value stdlib_napi_module_export_fcn_with_method_init(          \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			fcn_name,                                                          \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		napi_value fcn_method;                                                 \
		status = napi_create_function(                                         \
			env,                                                               \
			prop_name,                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			fcn_method_name,                                                   \
			NULL,                                                              \
			&fcn_method                                                        \
		);                                                                     \
		assert( status == napi_ok );                                           \
		status = napi_set_named_property( env, fcn, prop_name, fcn_method );   \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_napi_module_export_fcn_with_method_init )

#endif // !STDLIB_NAPI_EXPORT_H
