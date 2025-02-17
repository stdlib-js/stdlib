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

#ifndef STDLIB_MATH_BASE_NAPI_BINARY_CC_C_H
#define STDLIB_MATH_BASE_NAPI_BINARY_CC_C_H

#include "stdlib/complex/float32/ctor.h"
#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning single-precision complex floating-point numbers.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/reim.h"
*
* static stdlib_complex64_t add( const stdlib_complex64_t x, const stdlib_complex64_t y ) {
*     float xre;
*     float xim;
*     float yre;
*     float yim;
*     float re;
*     float im;
*
*     stdlib_complex64_reim( x, &xre, &xim );
*     stdlib_complex64_reim( y, &yre, &yim );
*
*     re = xre + yre;
*     im = xim + yim;
*
*     return stdlib_complex64( re, im );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_CC_C( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_CC_C( fcn )                               \
	static napi_value stdlib_math_base_napi_cc_c_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_cc_c( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_cc_c_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_cc_c_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_cc_c_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a binary function accepting and returning single-precision complex floating-point numbers.
*/
napi_value stdlib_math_base_napi_cc_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t, stdlib_complex64_t ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_BINARY_CC_C_H
