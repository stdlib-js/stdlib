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

#include "stdlib/strided/napi/dmap.h"
#include "stdlib/strided/base/dmap.h"
#include <node_api.h>
#include <stdint.h>
#include <stdlib.h>
#include <assert.h>

/**
* Invokes a strided array interface which applies a unary callback accepting and returning double-precision floating-point numbers to each element in a double-precision floating-point strided input array and assigns results to elements in a double-precision floating-point strided output array.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `N`: number of indexed elements
*     -   `X`: input array
*     -   `strideX`: `X` stride length
*     -   `Y`: destination array
*     -   `strideY`: `Y` stride length
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    unary callback
*/
void stdlib_strided_napi_dmap( napi_env env, napi_callback_info info, double (*fcn)( double ) ) {
	napi_status status;

	size_t argc = 5;
	napi_value argv[ 5 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc != 5 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide 5 arguments." );
		assert( status == napi_ok );
		return;
	}

	napi_valuetype vtype0;
	status = napi_typeof( env, argv[ 0 ], &vtype0 );
	assert( status == napi_ok );
	if ( vtype0 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a number." );
		assert( status == napi_ok );
		return;
	}

	bool res1;
	status = napi_is_typedarray( env, argv[ 1 ], &res1 );
	assert( status == napi_ok );
	if ( res1 == false ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must be a Float64Array." );
		assert( status == napi_ok );
		return;
	}

	napi_valuetype vtype2;
	status = napi_typeof( env, argv[ 2 ], &vtype2 );
	assert( status == napi_ok );
	if ( vtype2 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Third argument must be a number." );
		assert( status == napi_ok );
		return;
	}

	bool res3;
	status = napi_is_typedarray( env, argv[ 3 ], &res3 );
	assert( status == napi_ok );
	if ( res3 == false ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must be a Float64Array." );
		assert( status == napi_ok );
		return;
	}

	napi_valuetype vtype4;
	status = napi_typeof( env, argv[ 4 ], &vtype4 );
	assert( status == napi_ok );
	if ( vtype4 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fifth argument must be a number." );
		assert( status == napi_ok );
		return;
	}

	int64_t N;
	status = napi_get_value_int64( env, argv[ 0 ], &N );
	assert( status == napi_ok );

	int64_t strideX;
	status = napi_get_value_int64( env, argv[ 2 ], &strideX );
	assert( status == napi_ok );

	int64_t strideY;
	status = napi_get_value_int64( env, argv[ 4 ], &strideY );
	assert( status == napi_ok );

	napi_typedarray_type vtype1;
	size_t xlen;
	void *X;
	status = napi_get_typedarray_info( env, argv[ 1 ], &vtype1, &xlen, &X, NULL, NULL );
	assert( status == napi_ok );
	if ( vtype1 != napi_float64_array ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must be a Float64Array." );
		assert( status == napi_ok );
		return;
	}
	if ( (N-1)*llabs(strideX) >= (int64_t)xlen ) {
		status = napi_throw_range_error( env, NULL, "invalid argument. Second argument has insufficient elements based on the associated stride and the number of indexed elements." );
		assert( status == napi_ok );
		return;
	}

	napi_typedarray_type vtype3;
	size_t ylen;
	void *Y;
	status = napi_get_typedarray_info( env, argv[ 3 ], &vtype3, &ylen, &Y, NULL, NULL );
	assert( status == napi_ok );
	if ( vtype3 != napi_float64_array ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must be a Float64Array." );
		assert( status == napi_ok );
		return;
	}
	if ( (N-1)*llabs(strideY) >= (int64_t)ylen ) {
		status = napi_throw_range_error( env, NULL, "invalid argument. Fourth argument has insufficient elements based on the associated stride and the number of indexed elements." );
		assert( status == napi_ok );
		return;
	}

	stdlib_strided_dmap( N, (double *)X, strideX, (double *)Y, strideY, fcn );

	return;
}
