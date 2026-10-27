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

#include "stdlib/napi/argv_strided_booleanarray2d.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv.h"
#include <node_api.h>
#include <assert.h>
#include <stdint.h>
#include <stdbool.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	int64_t i;
	int64_t j;

	STDLIB_NAPI_ARGV( env, info, argv, argc, 5 )
	STDLIB_NAPI_ARGV_INT64( env, M, argv, 0 )
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 1 )
	STDLIB_NAPI_ARGV_INT64( env, strideX1, argv, 3 )
	STDLIB_NAPI_ARGV_INT64( env, strideX2, argv, 4 )
	STDLIB_NAPI_ARGV_STRIDED_BOOLEANARRAY2D( env, X, M, N, strideX1, strideX2, argv, 2 )

	for ( i = 0; i < M; i++ ) {
		for ( j = 0; j < N; j++ ) {
			X[ (i*strideX1)+(j*strideX2) ] = true;
		}
	}
	return NULL;
}

/**
* Initializes a Node-API module.
*
* @param env      environment under which the function is invoked
* @param exports  exports object
* @return         main export
*/
static napi_value init( napi_env env, napi_value exports ) {
	napi_value fcn;
	napi_status status = napi_create_function( env, "exports", NAPI_AUTO_LENGTH, addon, NULL, &fcn );
	assert( status == napi_ok );
	return fcn;
}

NAPI_MODULE( NODE_GYP_MODULE_NAME, init )
