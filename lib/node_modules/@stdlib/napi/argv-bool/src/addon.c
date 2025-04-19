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

#include "stdlib/napi/argv_bool.h"
#include "stdlib/napi/argv.h"
#include <node_api.h>
#include <assert.h>
#include <stdbool.h>

/**
* Identity function.
*
* @param v      input value
* @return       input value
*/
static bool identity( const bool v ) {
	return v;
}

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 1 );
	STDLIB_NAPI_ARGV_BOOL( env, value, argv, 0 );
	bool out = identity( value );
	if( out != true && out != false ){
		napi_throw_error(env, NULL, "Unexpected boolean result");
		return NULL;
	}
	napi_value v;
	assert( napi_get_boolean( env, out, &v ) == napi_ok );
	return v;
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
