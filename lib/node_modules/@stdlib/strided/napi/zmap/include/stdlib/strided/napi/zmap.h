/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#ifndef STDLIB_STRIDED_NAPI_ZMAP_H
#define STDLIB_STRIDED_NAPI_ZMAP_H

#include <node_api.h>
#include <assert.h>
#include <complex.h>

/**
* Macro for registering a Node-API module exporting a strided array interface for applying a unary callback to a double-precision complex floating-point strided input array and assigning results to a double-precision complex floating-point strided output array.
*
* @param clbk   unary callback
*
* @example
* #include <complex.h>
*
* static double complex scale( const double complex z ) {
*     double complex re = creal( z );
*     double complex im = cimag( z );
*     return (re*10.0) + (im*10.0)*I;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_STRIDED_NAPI_MODULE_ZMAP( scale )
*/
#define STDLIB_STRIDED_NAPI_MODULE_ZMAP( clbk )                                \
	static napi_value stdlib_strided_napi_zmap_wrapper(                        \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		stdlib_strided_napi_zmap( env, info, clbk );                           \
		return NULL;                                                           \
	};                                                                         \
	static napi_value stdlib_strided_napi_zmap_init(                           \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_strided_napi_zmap_wrapper,                                  \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_strided_napi_zmap_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a strided array interface which applies a unary callback to a double-precision complex floating-point strided input array and assigns results to a double-precision complex floating-point strided output array.
*/
void stdlib_strided_napi_zmap( napi_env env, napi_callback_info info, double complex (*fcn)( double complex ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_NAPI_ZMAP_H
