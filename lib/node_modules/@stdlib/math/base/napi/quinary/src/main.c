/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/napi/quinary.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Invokes a quinary function accepting and returning double-precision floating-point numbers.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `x`: input value.
*     -   `y`: input value.
*     -   `z`: input value.
*     -   `w`: input value.
*     -   `u`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    quinary function
* @return       function return value as a Node-API double-precision floating-point number
*/
napi_value stdlib_math_base_napi_ddddd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double, double, double, double ) ) {
	napi_status status;

	size_t argc = 5;
	napi_value argv[ 5 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 5 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide five numbers." );
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

	napi_valuetype vtype3;
	status = napi_typeof( env, argv[ 3 ], &vtype3 );
	assert( status == napi_ok );
	if ( vtype3 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype4;
	status = napi_typeof( env, argv[ 4 ], &vtype4 );
	assert( status == napi_ok );
	if ( vtype4 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fifth argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	double x;
	status = napi_get_value_double( env, argv[ 0 ], &x );
	assert( status == napi_ok );

	double y;
	status = napi_get_value_double( env, argv[ 1 ], &y );
	assert( status == napi_ok );

	double z;
	status = napi_get_value_double( env, argv[ 2 ], &z );
	assert( status == napi_ok );

	double w;
	status = napi_get_value_double( env, argv[ 3 ], &w );
	assert( status == napi_ok );

	double u;
	status = napi_get_value_double( env, argv[ 4 ], &u );
	assert( status == napi_ok );

	napi_value v;
	status = napi_create_double( env, fcn( x, y, z, w, u ), &v );
	assert( status == napi_ok );

	return v;
}

/**
* Invokes a quinary function accepting and returning single-precision floating-point numbers.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `x`: input value.
*     -   `y`: input value.
*     -   `z`: input value.
*     -   `w`: input value.
*     -   `u`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    quinary function
* @return       function return value as a Node-API double-precision floating-point number
*/
napi_value stdlib_math_base_napi_fffff_f( napi_env env, napi_callback_info info, float (*fcn)( float, float, float, float, float ) ) {
	napi_status status;

	size_t argc = 5;
	napi_value argv[ 5 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 5 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide five numbers." );
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

	napi_valuetype vtype3;
	status = napi_typeof( env, argv[ 3 ], &vtype3 );
	assert( status == napi_ok );
	if ( vtype3 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype4;
	status = napi_typeof( env, argv[ 4 ], &vtype4 );
	assert( status == napi_ok );
	if ( vtype4 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fifth argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	double x;
	status = napi_get_value_double( env, argv[ 0 ], &x );
	assert( status == napi_ok );

	double y;
	status = napi_get_value_double( env, argv[ 1 ], &y );
	assert( status == napi_ok );

	double z;
	status = napi_get_value_double( env, argv[ 2 ], &z );
	assert( status == napi_ok );

	double w;
	status = napi_get_value_double( env, argv[ 3 ], &w );
	assert( status == napi_ok );

	double u;
	status = napi_get_value_double( env, argv[ 4 ], &u );
	assert( status == napi_ok );

	napi_value v;
	status = napi_create_double( env, (double)fcn( (float)x, (float)y, (float)z, (float)w, (float)u ), &v );
	assert( status == napi_ok );

	return v;
}
