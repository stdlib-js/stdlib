/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/snansumkbn.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_float32array.h"
#include <node_api.h>
#include <assert.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 3 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, stride, argv, 2 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, stride, argv, 1 );

	napi_value v;
	napi_status status = napi_create_double( env, stdlib_strided_snansumkbn( N, X, stride ), &v );
	assert( status == napi_ok );

	return v;
}

STDLIB_NAPI_MODULE_EXPORT_FCN( addon )
