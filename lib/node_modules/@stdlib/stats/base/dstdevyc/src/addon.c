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

#include "stdlib/stats/base/dstdevyc.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_double.h"
#include "stdlib/napi/argv_strided_float64array.h"
#include "stdlib/napi/create_double.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 4 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_DOUBLE( env, correction, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, N, strideX, argv, 2 )
	STDLIB_NAPI_CREATE_DOUBLE( env, API_SUFFIX(stdlib_strided_dstdevyc)( N, correction, X, strideX ), v );
	return v;
}

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon_method( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 5 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_DOUBLE( env, correction, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, N, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 4 );
	STDLIB_NAPI_CREATE_DOUBLE( env, API_SUFFIX(stdlib_strided_dstdevyc_ndarray)( N, correction, X, strideX, offsetX ), v );
	return v;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
