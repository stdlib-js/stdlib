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

#include "stdlib/blas/ext/base/cindex_of_row.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int32.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_complex64array.h"
#include "stdlib/napi/argv_strided_complex64array2d.h"
#include "stdlib/napi/argv_strided_uint8array.h"
#include "stdlib/napi/create_int32.h"
#include <node_api.h>
#include <stdint.h>

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
	CBLAS_INT MW;

	STDLIB_NAPI_ARGV( env, info, argv, argc, 9 );
	STDLIB_NAPI_ARGV_INT32( env, order, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, M, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, LDA, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 6 );
	STDLIB_NAPI_ARGV_INT64( env, strideW, argv, 8 );

	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
		MW = M;
	} else { // order == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
		MW = 0;
	}
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY2D( env, A, M, N, sa1, sa2, argv, 3 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY( env, X, N, strideX, argv, 5 );
	STDLIB_NAPI_ARGV_STRIDED_UINT8ARRAY( env, W, MW, strideW, argv, 7 );
	STDLIB_NAPI_CREATE_INT32( env, API_SUFFIX(stdlib_strided_cindex_of_row)( order, M, N, (stdlib_complex64_t *)A, LDA, (stdlib_complex64_t *)X, strideX, W, strideW ), idx );
	return idx;
}

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon_method( napi_env env, napi_callback_info info ) {
	CBLAS_INT MW;

	STDLIB_NAPI_ARGV( env, info, argv, argc, 12 );
	STDLIB_NAPI_ARGV_INT64( env, M, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 1 );
	STDLIB_NAPI_ARGV_INT64( env, strideA1, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, strideA2, argv, 4 );
	STDLIB_NAPI_ARGV_INT64( env, offsetA, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 7 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, strideW, argv, 10 );
	STDLIB_NAPI_ARGV_INT64( env, offsetW, argv, 11 );

	// Only validate workspace elements for column-major matrices:
	if ( strideA1 < strideA2 ) {
		MW = M;
	} else {
		MW = 0;
	}
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY2D( env, A, M, N, strideA1, strideA2, argv, 2 );
	STDLIB_NAPI_ARGV_STRIDED_COMPLEX64ARRAY( env, X, N, strideX, argv, 6 );
	STDLIB_NAPI_ARGV_STRIDED_UINT8ARRAY( env, W, MW, strideW, argv, 9 );
	STDLIB_NAPI_CREATE_INT32( env, API_SUFFIX(stdlib_strided_cindex_of_row_ndarray)( M, N, (stdlib_complex64_t *)A, strideA1, strideA2, offsetA, (stdlib_complex64_t *)X, strideX, offsetX, W, strideW, offsetW ), idx );
	return idx;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
