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

#include "stdlib/blas/base/sscal.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_float.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_float32array.h"
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
	STDLIB_NAPI_ARGV_FLOAT( env, alpha, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, stride, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, stride, argv, 2 );
	API_SUFFIX(c_sscal)( N, alpha, X, stride );
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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 5 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_FLOAT( env, alpha, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, stride, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, offset, argv, 4 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, stride, argv, 2 );
	API_SUFFIX(c_sscal_ndarray)( N, alpha, X, stride, offset );
	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
