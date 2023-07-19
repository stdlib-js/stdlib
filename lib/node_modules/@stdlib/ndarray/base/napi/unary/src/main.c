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

#include "stdlib/ndarray/base/napi/unary.h"
#include "stdlib/ndarray/base/function_object.h"
#include "stdlib/ndarray/base/napi/addon_arguments.h"
#include "stdlib/ndarray/ctor.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Invokes an ndarray interface which applies a unary callback to an input ndarray based on provided JavaScript arguments.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `X`: input ndarray data buffer (i.e., typed array)
*     -   `metaX`: `X` serialized meta data
*     -   `Y`: destination ndarray data buffer (i.e., typed array)
*     -   `metaY`: `Y` serialized meta data
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param obj    ndarray function object
*/
void stdlib_ndarray_napi_unary( napi_env env, napi_callback_info info, const struct ndarrayFunctionObject *obj ) {
	napi_status status;

	// Total number of input arguments:
	int64_t nargs = 4;

	// Number of input ndarray arguments:
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
		return;
	}
	if ( argc64 > nargs ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Too many arguments." );
		assert( status == napi_ok );
		return;
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
		return;
	}
	// Extract the ndarray data types:
	int32_t types[] = {
		stdlib_ndarray_dtype( arrays[ 0 ] ),
		stdlib_ndarray_dtype( arrays[ 1 ] )
	};
	// Resolve the ndarray function satisfying the input array types:
	int64_t idx = stdlib_ndarray_function_dispatch_index_of( obj, types );

	// Check whether we were able to successfully resolve an ndarray function:
	if ( idx < 0 ) {
		status = napi_throw_type_error( env, NULL, "invalid arguments. Unable to resolve an ndarray function supporting the provided array argument data types." );
		assert( status == napi_ok );
		return;
	}
	// Retrieve the ndarray function:
	ndarrayFcn fcn = obj->functions[ idx ];

	// Retrieve the associated function data:
	void *clbk = obj->data[ idx ];

	// Evaluate the ndarray function:
	fcn( arrays, clbk );

	// Free allocated memory:
	for ( int64_t i = 0; i < 2; i++ ) {
		stdlib_ndarray_free( arrays[ i ] );
		arrays[ i ] = NULL;
	}
	return;
}
