/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/lapack/base/dlacpy.h"
#include "stdlib/lapack/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_int32.h"
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
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT sb1;
	CBLAS_INT sb2;

	STDLIB_NAPI_ARGV( env, info, argv, argc, 8 );

	STDLIB_NAPI_ARGV_INT32( env, layout, argv, 0 );
	STDLIB_NAPI_ARGV_INT32( env, uplo, argv, 1 );

	STDLIB_NAPI_ARGV_INT64( env, M, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, LDA, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, LDB, argv, 7 );

	if ( layout == LAPACK_COL_MAJOR ) {
		sa1 = 1;
		sa2 = LDA;
		sb1 = 1;
		sb2 = LDB;
	} else { // layout == LAPACK_ROW_MAJOR
		sa1 = LDA;
		sa2 = 1;
		sb1 = LDB;
		sb2 = 1;
	}
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, A, M, N, sa1, sa2, argv, 4 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, B, M, N, sb1, sb2, argv, 6 );

	API_SUFFIX(c_dlacpy)( layout, uplo, M, N, A, LDA, B, LDB );

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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 11 );

	STDLIB_NAPI_ARGV_INT32( env, uplo, argv, 0 );

	STDLIB_NAPI_ARGV_INT64( env, M, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 2 );

	STDLIB_NAPI_ARGV_INT64( env, strideA1, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, strideA2, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, offsetA, argv, 6 );

	STDLIB_NAPI_ARGV_INT64( env, strideB1, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, strideB2, argv, 9 );
	STDLIB_NAPI_ARGV_INT64( env, offsetB, argv, 10 );

	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, A, M, N, strideA1, strideA2, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, B, M, N, strideB1, strideB2, argv, 7 );

	API_SUFFIX(c_dlacpy_ndarray)( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );

	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
