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

#ifndef STDLIB_MATH_BASE_NAPI_BINARY_ZZ_Z_H
#define STDLIB_MATH_BASE_NAPI_BINARY_ZZ_Z_H

#include "stdlib/complex/float64/ctor.h"
#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning double-precision complex floating-point numbers.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/reim.h"
*
* static stdlib_complex128_t add( const stdlib_complex128_t x, const stdlib_complex128_t y ) {
*     double xre;
*     double xim;
*     double yre;
*     double yim;
*     double re;
*     double im;
*
*     stdlib_complex128_reim( x, &xre, &xim );
*     stdlib_complex128_reim( y, &yre, &yim );
*
*     re = xre + yre;
*     im = xim + yim;
*
*     return stdlib_complex128( re, im );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_ZZ_Z( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_ZZ_Z( fcn )                               \
	static napi_value stdlib_math_base_napi_zz_z_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_zz_z( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_zz_z_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_zz_z_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_zz_z_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a binary function accepting and returning double-precision complex floating-point numbers.
*/
napi_value stdlib_math_base_napi_zz_z( napi_env env, napi_callback_info info, stdlib_complex128_t (*fcn)( stdlib_complex128_t, stdlib_complex128_t ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_BINARY_ZZ_Z_H
