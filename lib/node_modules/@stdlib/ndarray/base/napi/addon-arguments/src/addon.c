/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/ndarray/base/napi/addon_arguments.h"
#include "stdlib/ndarray/ctor.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Receives JavaScript callback invocation data.
*
* @private
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	napi_status status;

	// Total number of arguments:
	int64_t nargs = 4;

	// Number of input ndarrays:
	int64_t nin = 1;

	// Get callback arguments:
	size_t argc = 4;
	napi_value argv[ 4 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	// Check whether we were provided the correct number of arguments:
	int64_t argc64 = (int64_t)argc;
	if ( argc64 < nargs ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Insufficient arguments." );
		assert( status == napi_ok );
		return NULL;
	}
	if ( argc64 > nargs ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Too many arguments." );
		assert( status == napi_ok );
		return NULL;
	}
	// Process the provided arguments:
	struct ndarray *arrays[ 2 ];
	napi_value err;
	status = stdlib_ndarray_napi_addon_arguments( env, argv, nargs, nin, arrays, &err );
	assert( status == napi_ok );

	// Check whether processing was successful:
	if ( err != NULL ) {
		status = napi_throw( env, err );
		assert( status == napi_ok );
		return NULL;
	}
	// Normally, one would then do something with the processed arguments; here, we just free memory and return...

	// Free allocated memory:
	for ( int64_t i = 0; i < 2; i++ ) {
		stdlib_ndarray_free( arrays[ i ] );
		arrays[ i ] = NULL;
	}
	return NULL;
}

/**
* Initializes a Node-API module.
*
* @private
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
