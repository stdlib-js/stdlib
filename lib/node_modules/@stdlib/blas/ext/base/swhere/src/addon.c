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

#include "stdlib/blas/ext/base/swhere.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_booleanarray.h"
#include "stdlib/napi/argv_strided_float32array.h"
#include <node_api.h>
#include <stdbool.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 9 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, strideC, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 6 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 8 );
	STDLIB_NAPI_ARGV_STRIDED_BOOLEANARRAY( env, Condition, N, strideC, argv, 1 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, Y, N, strideY, argv, 5 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, Out, N, strideOut, argv, 7 );
	API_SUFFIX(stdlib_strided_swhere)( N, Condition, strideC, X, strideX, Y, strideY, Out, strideOut );
	return NULL;
}

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon_method( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 13 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, strideC, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, offsetC, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 6 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, offsetY, argv, 9 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 11 );
	STDLIB_NAPI_ARGV_INT64( env, offsetOut, argv, 12 );
	STDLIB_NAPI_ARGV_STRIDED_BOOLEANARRAY( env, Condition, N, strideC, argv, 1 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, strideX, argv, 4 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, Y, N, strideY, argv, 7 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, Out, N, strideOut, argv, 10 );
	API_SUFFIX(stdlib_strided_swhere_ndarray)( N, Condition, strideC, offsetC, X, strideX, offsetX, Y, strideY, offsetY, Out, strideOut, offsetOut );
	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
