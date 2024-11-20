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

#ifndef STDLIB_NDARRAY_BASE_NAPI_UNARY_H
#define STDLIB_NDARRAY_BASE_NAPI_UNARY_H

#include "stdlib/ndarray/base/function_object.h"
#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an ndarray interface for applying a unary callback to an input ndarray.
*
* @param obj   ndarray function object
*
* @example
* #include "stdlib/ndarray/base/napi/unary.h"
* #include "stdlib/ndarray/base/function_object.h"
*
* // ...
*
* // Create an ndarray function object:
* static const struct ndarrayFunctionObject obj = {...};
*
* // ...
*
* // Register a Node-API module:
* STDLIB_NDARRAY_NAPI_MODULE_UNARY( obj );
*/
#define STDLIB_NDARRAY_NAPI_MODULE_UNARY( obj )                                \
	static napi_value stdlib_ndarray_napi_unary_wrapper(                       \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		stdlib_ndarray_napi_unary( env, info, &obj );                          \
		return NULL;                                                           \
	};                                                                         \
	static napi_value stdlib_ndarray_napi_unary_init(                          \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_ndarray_napi_unary_wrapper,                                 \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_ndarray_napi_unary_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes an ndarray interface which applies a unary callback to an input ndarray based on provided JavaScript arguments.
*/
void stdlib_ndarray_napi_unary( napi_env env, napi_callback_info info, const struct ndarrayFunctionObject *obj );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_NAPI_UNARY_H
