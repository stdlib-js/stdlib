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

#include "stdlib/blas/ext/base/zdiff.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_complex128array.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 14 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, k, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, N1, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, strideP, argv, 6 );
	STDLIB_NAPI_ARGV_INT64( env, N2, argv, 7 );
	STDLIB_NAPI_ARGV_INT64( env, strideA, argv, 9 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 11 );
	STDLIB_NAPI_ARGV_INT64( env, strideW, argv, 13 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, X, N, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Prepend, N1, strideP, argv, 5 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Append, N2, strideA, argv, 8 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Out, N+N1+N2-k, strideOut, argv, 10 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Workspace, N+N1+N2-1, strideW, argv, 12 );
	API_SUFFIX(stdlib_strided_zdiff)( N, k, (stdlib_complex128_t *)X, strideX, N1, (stdlib_complex128_t *)Prepend, strideP, N2, (stdlib_complex128_t *)Append, strideA, (stdlib_complex128_t *)Out, strideOut, (stdlib_complex128_t *)Workspace, strideW );
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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 19 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, k, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, N1, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, strideP, argv, 7 );
	STDLIB_NAPI_ARGV_INT64( env, offsetP, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, N2, argv, 9 );
	STDLIB_NAPI_ARGV_INT64( env, strideA, argv, 11 );
	STDLIB_NAPI_ARGV_INT64( env, offsetA, argv, 12 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 14 );
	STDLIB_NAPI_ARGV_INT64( env, offsetOut, argv, 15 );
	STDLIB_NAPI_ARGV_INT64( env, strideW, argv, 17 );
	STDLIB_NAPI_ARGV_INT64( env, offsetW, argv, 18 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, X, N, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Prepend, N1, strideP, argv, 6 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Append, N2, strideA, argv, 10 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Out, N+N1+N2-k, strideOut, argv, 13 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX128ARRAY( env, Workspace, N+N1+N2-1, strideW, argv, 16 );
	API_SUFFIX(stdlib_strided_zdiff_ndarray)( N, k, (stdlib_complex128_t *)X, strideX, offsetX, N1, (stdlib_complex128_t *)Prepend, strideP, offsetP, N2, (stdlib_complex128_t *)Append, strideA, offsetA, (stdlib_complex128_t *)Out, strideOut, offsetOut, (stdlib_complex128_t *)Workspace, strideW, offsetW );
	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
