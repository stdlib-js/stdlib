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

#include "stdlib/blas/ext/base/dcartesian_square.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int32.h"
#include "stdlib/napi/argv_int64.h"
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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 6 );
	STDLIB_NAPI_ARGV_INT32( env, order, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, LDO, argv, 5 );

	CBLAS_INT sa1;
	CBLAS_INT sa2;
	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDO;
	} else { // order == CblasRowMajor
		sa1 = LDO;
		sa2 = 1;
	}
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, N, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, Out, N*N, 2, sa1, sa2, argv, 4 );
	API_SUFFIX(stdlib_strided_dcartesian_square)( order, N, X, strideX, Out, LDO );
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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 8 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut1, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut2, argv, 6 );
	STDLIB_NAPI_ARGV_INT64( env, offsetOut, argv, 7 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, N, strideX, argv, 1 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, Out, N*N, 2, strideOut1, strideOut2, argv, 4 );
	API_SUFFIX(stdlib_strided_dcartesian_square_ndarray)( N, X, strideX, offsetX, Out, strideOut1, strideOut2, offsetOut );
	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
