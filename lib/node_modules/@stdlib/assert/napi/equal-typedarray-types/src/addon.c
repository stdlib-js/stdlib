/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/assert/napi/equal_typedarray_types.h"
#include <node_api.h>
#include <stdlib.h>
#include <assert.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	napi_status status;

	size_t argc = 2;
	napi_value argv[ 2 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc != 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide 2 arguments." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_typedarray_type vtype0;
	size_t xlen;
	void *X;
	status = napi_get_typedarray_info( env, argv[ 0 ], &vtype0, &xlen, &X, NULL, NULL );
	assert( status == napi_ok );

	napi_typedarray_type vtype1;
	size_t ylen;
	void *Y;
	status = napi_get_typedarray_info( env, argv[ 1 ], &vtype1, &ylen, &Y, NULL, NULL );
	assert( status == napi_ok );

	napi_value err;
	status = stdlib_assert_napi_equal_typedarray_types( env, vtype0, vtype1, "invalid arguments. Must have equal types.", &err );
	assert( status == napi_ok );

	if ( err != NULL ) {
		status = napi_throw( env, err );
		assert( status == napi_ok );
		return NULL;
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
