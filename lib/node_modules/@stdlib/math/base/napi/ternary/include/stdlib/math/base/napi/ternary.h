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

#ifndef STDLIB_MATH_BASE_NAPI_TERNARY_H
#define STDLIB_MATH_BASE_NAPI_TERNARY_H

#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a ternary function accepting and returning double-precision floating-point numbers.
*
* @param fcn   ternary function
*
* @example
* static double add( const double x, const double y, const double z ) {
*     return x + y + z;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_DDD_D( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_DDD_D( fcn )                              \
	static napi_value stdlib_math_base_napi_ddd_d_wrapper(                     \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ddd_d( env, info, fcn );                  \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ddd_d_init(                        \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ddd_d_wrapper,                               \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ddd_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a ternary function accepting and returning single-precision floating-point numbers.
*
* @param fcn   ternary function
*
* @example
* static float addf( const float x, const float y, const float z ) {
*     return x + y + z;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_FFF_F( addf );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_FFF_F( fcn )                              \
	static napi_value stdlib_math_base_napi_fff_f_wrapper(                     \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_fff_f( env, info, fcn );                  \
	};                                                                         \
	static napi_value stdlib_math_base_napi_fff_f_init(                        \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_fff_f_wrapper,                               \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_fff_f_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a ternary function accepting a double-precision floating-point number and two signed 32-bit integers and returning a double-precision floating-point number.
*
* @param fcn   ternary function
*
* @example
* #include <stdint.h>
*
* static double fcn( const double x, const int_32 y, const int_32 z ) {
*     // ...
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_DII_D( fcn );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_DII_D( fcn )                              \
	static napi_value stdlib_math_base_napi_dii_d_wrapper(                     \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_dii_d( env, info, fcn );                  \
	};                                                                         \
	static napi_value stdlib_math_base_napi_dii_d_init(                        \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_dii_d_wrapper,                               \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_dii_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a ternary function accepting two signed 32-bit integers and a double-precision floating-point number and returning a double-precision floating-point number.
*
* @param fcn   ternary function
*
* @example
* #include <stdint.h>
*
* static double fcn( const int_32 x, const int_32 y, const double z ) {
*     // ...
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_IID_D( fcn );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_IID_D( fcn )                              \
	static napi_value stdlib_math_base_napi_iid_d_wrapper(                     \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_iid_d( env, info, fcn );                  \
	};                                                                         \
	static napi_value stdlib_math_base_napi_iid_d_init(                        \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_iid_d_wrapper,                               \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_iid_d_init )

/*
* If C++, prevent name mangling so that the compiler emits a ternary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a ternary function accepting and returning double-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_ddd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double, double ) );

/**
* Invokes a ternary function accepting and returning single-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_fff_f( napi_env env, napi_callback_info info, float (*fcn)( float, float, float ) );

/**
* Invokes a ternary function accepting a double-precision floating-point number and two signed 32-bit integers and returning a double-precision floating-point number.
*/
napi_value stdlib_math_base_napi_dii_d( napi_env env, napi_callback_info info, double (*fcn)( double, int32_t, int32_t ) );

/**
* Invokes a ternary function accepting two signed 32-bit integers and a double-precision floating-point number and returning a double-precision floating-point number.
*/
napi_value stdlib_math_base_napi_iid_d( napi_env env, napi_callback_info info, double (*fcn)( int32_t, int32_t, double ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_TERNARY_H
