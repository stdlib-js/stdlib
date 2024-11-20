/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#ifndef STDLIB_MATH_BASE_NAPI_QUATERNARY_H
#define STDLIB_MATH_BASE_NAPI_QUATERNARY_H

#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a quaternary function accepting and returning double-precision floating-point numbers.
*
* @param fcn   quaternary function
*
* @example
* static double add( const double x, const double y, const double z, const double w ) {
*     return x + y + z + w;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_DDDD_D( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_DDDD_D( fcn )                             \
	static napi_value stdlib_math_base_napi_dddd_d_wrapper(                    \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_dddd_d( env, info, fcn );                 \
	};                                                                         \
	static napi_value stdlib_math_base_napi_dddd_d_init(                       \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_dddd_d_wrapper,                              \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_dddd_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a quaternary function accepting and returning single-precision floating-point numbers.
*
* @param fcn   quaternary function
*
* @example
* static float addf( const float x, const float y, const float z, const float w ) {
*     return x + y + z + w;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_FFFF_F( addf );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_FFFF_F( fcn )                             \
	static napi_value stdlib_math_base_napi_ffff_f_wrapper(                    \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ffff_f( env, info, fcn );                 \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ffff_f_init(                       \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ffff_f_wrapper,                              \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ffff_f_init )

/*
* If C++, prevent name mangling so that the compiler emits a quaternary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a quaternary function accepting and returning double-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_dddd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double, double, double ) );

/**
* Invokes a quaternary function accepting and returning single-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_ffff_f( napi_env env, napi_callback_info info, float (*fcn)( float, float, float, float ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_QUATERNARY_H
