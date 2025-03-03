/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#ifndef STDLIB_MATH_BASE_NAPI_BINARY_FI_F_H
#define STDLIB_MATH_BASE_NAPI_BINARY_FI_F_H

#include <node_api.h>
#include <assert.h>
#include <stdint.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a single-precision floating-point number and a signed 32-bit integer and returning a single-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static float mulf( const float x, const int32_t n ) {
*     return x * n;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_FI_F( mulf );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_FI_F( fcn )                               \
	static napi_value stdlib_math_base_napi_fi_f_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_fi_f( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_fi_f_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_fi_f_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_fi_f_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a binary function accepting a single-precision floating-point number and a signed 32-bit integer and returning a single-precision floating-point number.
*/
napi_value stdlib_math_base_napi_fi_f( napi_env env, napi_callback_info info, float (*fcn)( float, int32_t ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_BINARY_FI_F_H
