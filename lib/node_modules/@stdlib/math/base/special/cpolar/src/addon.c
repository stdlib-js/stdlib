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

#include "stdlib/math/base/special/cpolar.h"
#include "stdlib/napi/argv.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	napi_status status;

	// Get callback arguments:
	size_t argc = 2;
	napi_value argv[ 2 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	// Check whether we were provided the correct number of arguments:
	if ( argc < 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Insufficient arguments." );
		assert( status == napi_ok );
		return NULL;
	}
	if ( argc > 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Too many arguments." );
		assert( status == napi_ok );
		return NULL;
	}

	bool res;
	status = napi_is_typedarray( env, argv[ 0 ], &res );
	assert( status == napi_ok );
	if ( res == false ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a Float64Array." );
		assert( status == napi_ok );
		return NULL;
	}

	// Get the first element out
	napi_typedarray_type vtype0;
	size_t len;
	void *Out;
	status = napi_get_typedarray_info( env, argv[ 0 ], &vtype0, &len, &Out, NULL, NULL );
	assert( status == napi_ok );
	if ( vtype0 != napi_float64_array ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a Float64Array." );
		assert( status == napi_ok );
		return NULL;
	}
	if ( len != 2 ) {
		status = napi_throw_range_error( env, NULL, "invalid argument. First argument must have 2 elements." );
		assert( status == napi_ok );
		return NULL;
	}

	// Get the real component
	napi_value xre;
	status = napi_get_named_property( env, argv[ 1 ], "re", &xre );
	assert( status == napi_ok );

	napi_valuetype xretype;
	status = napi_typeof( env, xre, &xretype );
	assert( status == napi_ok );
	if ( xretype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must have a real component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	// Get the imaginary component
	napi_value xim;
	status = napi_get_named_property( env, argv[ 1 ], "im", &xim );
	assert( status == napi_ok );

	napi_valuetype ximtype;
	status = napi_typeof( env, xim, &ximtype );
	assert( status == napi_ok );
	if ( ximtype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must have an imaginary component which a number." );
		assert( status == napi_ok );
		return NULL;
	}

	double re;
	status = napi_get_value_double( env, xre, &re );
	assert( status == napi_ok );

	double im;
	status = napi_get_value_double( env, xim, &im );
	assert( status == napi_ok );

	double cabs;
	double cphase;
	stdlib_base_cpolar( stdlib_complex128( re, im ), &cabs, &cphase );

	double *op = (double *)Out;
	op[ 0 ] = cabs;
	op[ 1 ] = cphase;

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
