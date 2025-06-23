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

#include "stdlib/math/base/napi/ternary/iid_d.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Invokes a ternary function accepting two signed 32-bit integers and a double-precision floating-point number and returning a double-precision floating-point number.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `x`: input value.
*     -   `y`: input value.
*     -   `z`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    ternary function
* @return       function return value as a Node-API double-precision floating-point number
*/
napi_value stdlib_math_base_napi_iid_d( napi_env env, napi_callback_info info, double (*fcn)( int32_t, int32_t, double ) ) {
	napi_status status;

	size_t argc = 3;
	napi_value argv[ 3 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 3 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide three numbers." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype0;
	status = napi_typeof( env, argv[ 0 ], &vtype0 );
	assert( status == napi_ok );
	if ( vtype0 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype1;
	status = napi_typeof( env, argv[ 1 ], &vtype1 );
	assert( status == napi_ok );
	if ( vtype1 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype2;
	status = napi_typeof( env, argv[ 2 ], &vtype2 );
	assert( status == napi_ok );
	if ( vtype2 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Third argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	int32_t x;
	status = napi_get_value_int32( env, argv[ 1 ], &x );
	assert( status == napi_ok );

	int32_t y;
	status = napi_get_value_int32( env, argv[ 2 ], &y );
	assert( status == napi_ok );

	double z;
	status = napi_get_value_double( env, argv[ 0 ], &z );
	assert( status == napi_ok );

	napi_value v;
	status = napi_create_double( env, fcn( x, y, z ), &v );
	assert( status == napi_ok );

	return v;
}
