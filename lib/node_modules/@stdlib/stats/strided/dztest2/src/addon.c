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

#include "stdlib/stats/strided/dztest2.h"
#include "stdlib/stats/base/ztest/two-sample/results/float64.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_int32.h"
#include "stdlib/napi/argv_strided_float64array.h"
#include "stdlib/napi/argv_dataview_cast.h"
#include "stdlib/napi/argv_double.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 12 );
	STDLIB_NAPI_ARGV_INT64( env, NX, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, NY, argv, 1 );
	STDLIB_NAPI_ARGV_INT32( env, alternative, argv, 2 );
	STDLIB_NAPI_ARGV_DOUBLE( env, alpha, argv, 3 );
	STDLIB_NAPI_ARGV_DOUBLE( env, diff, argv, 4 );
	STDLIB_NAPI_ARGV_DOUBLE( env, sigmax, argv, 5 );
	STDLIB_NAPI_ARGV_DOUBLE( env, sigmay, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 7 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 10 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, NX, strideX, argv, 6 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, NY, strideY, argv, 9 );
	STDLIB_NAPI_ARGV_DATAVIEW_CAST( env, results, struct stdlib_stats_ztest_two_sample_float64_results, argv, 11 );
	API_SUFFIX(stdlib_strided_dztest2)( NX, NY, alternative, alpha, diff, sigmax, X, strideX, sigmay, Y, strideY, results );
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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 14 );
	STDLIB_NAPI_ARGV_INT64( env, NX, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, NY, argv, 1 );
	STDLIB_NAPI_ARGV_INT32( env, alternative, argv, 2 );
	STDLIB_NAPI_ARGV_DOUBLE( env, alpha, argv, 3 );
	STDLIB_NAPI_ARGV_DOUBLE( env, diff, argv, 4 );
	STDLIB_NAPI_ARGV_DOUBLE( env, sigmax, argv, 5 );
	STDLIB_NAPI_ARGV_DOUBLE( env, sigmay, argv, 9 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 7 );
	STDLIB_NAPI_ARGV_INT64( env, strideY, argv, 11 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, X, NX, strideX, argv, 6 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Y, NY, strideY, argv, 10 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 8 );
	STDLIB_NAPI_ARGV_INT64( env, offsetY, argv, 12 );
	STDLIB_NAPI_ARGV_DATAVIEW_CAST( env, results, struct stdlib_stats_ztest_two_sample_float64_results, argv, 13 );
	API_SUFFIX(stdlib_strided_dztest2_ndarray)( NX, NY, alternative, alpha, diff, sigmax, X, strideX, offsetX, sigmay, Y, strideY, offsetY, results );
	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )
