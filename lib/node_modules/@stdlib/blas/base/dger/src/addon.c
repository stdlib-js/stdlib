
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

#include "stdlib/blas/base/dger.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_int32.h"
#include "stdlib/napi/argv_double.h"
#include "stdlib/napi/argv_strided_float64array.h"
#include "stdlib/napi/argv_strided_float64array2d.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 10 );

	STDLIB_NAPI_ARGV_INT32( env, layout, argv, 0 );

	STDLIB_NAPI_ARGV_INT64( env, M, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, LDA, argv, 9 );

	STDLIB_NAPI_ARGV_DOUBLE( env, alpha, argv, 3 );

	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 7 );

	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, M, strideX, argv, 4 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, N, strideY, argv, 6 );

	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, A, M, N, LDA, 1, argv, 8 );

	API_SUFFIX(c_dger)( layout, M, N, alpha, X, strideX, Y, strideY, A, LDA );

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

	STDLIB_NAPI_ARGV_INT64( env, M, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 1 );

	STDLIB_NAPI_ARGV_DOUBLE( env, alpha, argv, 2 );

	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 5 );

	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 7 );
	STDLIB_NAPI_ARGV_INT64( env, offsetY, argv, 8 );

	STDLIB_NAPI_ARGV_INT64( env, strideA1, argv, 10 );
	STDLIB_NAPI_ARGV_INT64( env, strideA2, argv, 11 );
	STDLIB_NAPI_ARGV_INT64( env, offsetA, argv, 12 );

	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, M, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, N, strideY, argv, 6 );

	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, A, M, N, strideA1, strideA2, argv, 9 );

	API_SUFFIX(c_dger_ndarray)( M, N, alpha, X, strideX, offsetX, Y, strideY, offsetY, A, strideA1, strideA2, offsetA );

	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
