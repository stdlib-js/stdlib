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

#ifndef STDLIB_NAPI_CREATE_COMPLEX_LIKE_H
#define STDLIB_NAPI_CREATE_COMPLEX_LIKE_H

#include <node_api.h>

/**
* Macro for creating a Node-API value representing a complex number-like object.
*
* @param env         environment under which the function is invoked
* @param re          expression returning a double-precision floating-point number representing the real component
* @param im          expression returning a double-precision floating-point number representing the imaginary component
* @param name        output variable name
*
* @example
# #include "stdlib/napi/create_complex_like.h"
* #include "stdlib/napi/argv_complex128.h"
* #include "stdlib/napi/argv.h"
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/real.h"
* #include "stdlib/complex/float64/imag.h"
* #include <node_api.h>
*
* static stdlib_complex128_t fcn( const stdlib_complex128_t v ) {
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
*     STDLIB_NAPI_ARGV_COMPLEX128( env, value, argv, 0 );
*
*     // ...
*
*     stdlib_complex128_t z = fcn( value );
*
*     // Convert a value having a C type to a Node-API value:
*     STDLIB_NAPI_CREATE_COMPLEX_LIKE( env, real( z ), imag( z ), out );
*     return out;
* }
*/
#define STDLIB_NAPI_CREATE_COMPLEX_LIKE( env, re, im, name )                   \
	napi_value name;                                                           \
	stdlib_napi_create_complex_like( env, re, im, &name );

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Returns a Node-API value representing a complex number-like object.
*/
napi_status stdlib_napi_create_complex_like( const napi_env env, const double re, const double im, napi_value *out );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NAPI_CREATE_COMPLEX_LIKE_H
