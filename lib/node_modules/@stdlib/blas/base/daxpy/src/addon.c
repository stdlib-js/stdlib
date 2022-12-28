/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/blas/base/daxpy.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @private
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_STRIDED_NAPI_ARGV( argv, argc, 6 );
	STDLIB_STRIDED_NAPI_ARGV_INT64( N, argv, 0 );
	STDLIB_STRIDED_NAPI_ARGV_DOUBLE( alpha, argv, 1 );
	STDLIB_STRIDED_NAPI_ARGV_INT64( strideX, argv, 3 );
	STDLIB_STRIDED_NAPI_ARGV_INT64( strideY, argv, 5 );
	STDLIB_STRIDED_NAPI_ARGV_STRIDED_FLOAT64ARRAY( X, N, strideX, argv, 2 );
	STDLIB_STRIDED_NAPI_ARGV_STRIDED_FLOAT64ARRAY( Y, N, strideY, argv, 4 );
	c_daxpy( N, alpha, X, strideX, Y, strideY );
	return NULL;
}

STDLIB_STRIDED_NAPI_MODULE_EXPORT_FCN( addon )
