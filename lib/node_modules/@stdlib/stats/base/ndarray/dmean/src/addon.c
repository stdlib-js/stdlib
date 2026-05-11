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

#include "stdlib/stats/base/ndarray/dmean.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/base/napi/addon_arguments.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/create_double.h"
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
	STDLIB_NAPI_ARGV( env, info, argv, argc, 2 );

	// Process provided arguments:
	struct ndarray *arrays[ 1 ];
	napi_value err;
	napi_status status = stdlib_ndarray_napi_addon_arguments( env, argv, 2, 1, arrays, &err );
	assert( status == napi_ok );
	if ( err != NULL ) {
		status = napi_throw( env, err );
		assert( status == napi_ok );
		return NULL;
	}
	// Perform computation:
	STDLIB_NAPI_CREATE_DOUBLE( env, stdlib_stats_dmean( arrays ), v );

	// Free allocated memory:
	stdlib_ndarray_free( arrays[ 0 ] );
	arrays[ 0 ] = NULL;

	return v;
}

STDLIB_NAPI_MODULE_EXPORT_FCN( addon )
