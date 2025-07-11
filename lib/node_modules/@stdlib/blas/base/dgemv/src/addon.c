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

#include "stdlib/blas/base/dgemv.h"
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
	CBLAS_INT xlen;
	CBLAS_INT ylen;
	CBLAS_INT sa1;
	CBLAS_INT sa2;

	STDLIB_NAPI_ARGV( env, info, argv, argc, 12 );

	STDLIB_NAPI_ARGV_INT32( env, layout, argv, 0 );
	STDLIB_NAPI_ARGV_INT32( env, trans, argv, 1 );

	STDLIB_NAPI_ARGV_INT64( env, M, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 11 );
	STDLIB_NAPI_ARGV_INT64( env, LDA, argv, 6 );

	STDLIB_NAPI_ARGV_DOUBLE( env, alpha, argv, 4 );
	STDLIB_NAPI_ARGV_DOUBLE( env, beta, argv, 9 );

	if ( trans == CblasNoTrans ) {
		xlen = N;
		ylen = M;
	} else {
		xlen = M;
		ylen = N;
	}
	if ( layout == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // layout == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
	}
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, xlen, strideX, argv, 7 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, ylen, strideY, argv, 10 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, A, M, N, sa1, sa2, argv, 5 );

	API_SUFFIX(c_dgemv)( layout, trans, M, N, alpha, A, LDA, X, strideX, beta, Y, strideY );

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
	CBLAS_INT xlen;
	CBLAS_INT ylen;

	STDLIB_NAPI_ARGV( env, info, argv, argc, 15 );

	STDLIB_NAPI_ARGV_INT32( env, trans, argv, 0 );

	STDLIB_NAPI_ARGV_INT64( env, M, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 9 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 10 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 13 );
	STDLIB_NAPI_ARGV_INT64( env, offsetY, argv, 14 );
	STDLIB_NAPI_ARGV_INT64( env, strideA1, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, strideA2, argv, 6 );
	STDLIB_NAPI_ARGV_INT64( env, offsetA, argv, 7 );

	STDLIB_NAPI_ARGV_DOUBLE( env, alpha, argv, 3 );
	STDLIB_NAPI_ARGV_DOUBLE( env, beta, argv, 11 );

	if ( trans == CblasNoTrans ) {
		xlen = N;
		ylen = M;
	} else {
		xlen = M;
		ylen = N;
	}
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, xlen, strideX, argv, 8 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, ylen, strideY, argv, 12 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY2D( env, A, M, N, strideA1, strideA2, argv, 4 );

	API_SUFFIX(c_dgemv_ndarray)( trans, M, N, alpha, A, strideA1, strideA2, offsetA, X, strideX, offsetX, beta, Y, strideY, offsetY );

	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
