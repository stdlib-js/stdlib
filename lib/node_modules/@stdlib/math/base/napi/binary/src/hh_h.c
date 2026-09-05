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

#include "stdlib/math/base/napi/binary/hh_h.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/number/float64/base/to_float16.h"
#include "stdlib/number/float16/base/to_float64.h"
#include <node_api.h>
#include <assert.h>

/**
* Invokes a binary function accepting and returning half-precision floating-point numbers.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `x`: input value.
*     -   `y`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    binary function
* @return       function return value as a Node-API double-precision floating-point number
*/
napi_value stdlib_math_base_napi_hh_h( napi_env env, napi_callback_info info, stdlib_float16_t (*fcn)( stdlib_float16_t, stdlib_float16_t ) ) {
	napi_status status;

	size_t argc = 2;
	napi_value argv[ 2 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide two numbers." );
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

	double x;
	status = napi_get_value_double( env, argv[ 0 ], &x );
	assert( status == napi_ok );

	double y;
	status = napi_get_value_double( env, argv[ 1 ], &y );
	assert( status == napi_ok );

	stdlib_float16_t out = fcn( stdlib_base_float64_to_float16( x ), stdlib_base_float64_to_float16( y ) );

	napi_value v;
	status = napi_create_double( env, stdlib_base_float16_to_float64( out ), &v );
	assert( status == napi_ok );

	return v;
}
