/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#ifndef STDLIB_MATH_BASE_NAPI_QUATERNARY_CCCC_C_H
#define STDLIB_MATH_BASE_NAPI_QUATERNARY_CCCC_C_H

#include "stdlib/complex/float32/ctor.h"
#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a quaternary function accepting and returning single-precision complex floating-point numbers.
*
* @param fcn   quaternary function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/reim.h"
*
* static stdlib_complex64_t add( const stdlib_complex64_t w, const stdlib_complex64_t x, const stdlib_complex64_t y, const stdlib_complex64_t z ) {
*     float wre;
*     float wim;
*     float xre;
*     float xim;
*     float yre;
*     float yim;
*     float zre;
*     float zim;
*     float re;
*     float im;
*
*     stdlib_complex64_reim( w, &wre, &wim );
*     stdlib_complex64_reim( x, &xre, &xim );
*     stdlib_complex64_reim( y, &yre, &yim );
*     stdlib_complex64_reim( z, &zre, &zim );
*
*     re = wre + xre + yre + zre;
*     im = wim + xim + yim + zim;
*
*     return stdlib_complex64( re, im );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_CCCC_C( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_CCCC_C( fcn )                             \
	static napi_value stdlib_math_base_napi_cccc_c_wrapper(                    \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_cccc_c( env, info, fcn );                 \
	};                                                                         \
	static napi_value stdlib_math_base_napi_cccc_c_init(                       \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value f;                                                          \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_cccc_c_wrapper,                              \
			NULL,                                                              \
			&f                                                                 \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return f;                                                              \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_cccc_c_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a quaternary function accepting and returning single-precision complex floating-point numbers.
*/
napi_value stdlib_math_base_napi_cccc_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t, stdlib_complex64_t, stdlib_complex64_t, stdlib_complex64_t ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_QUATERNARY_CCCC_C_H
