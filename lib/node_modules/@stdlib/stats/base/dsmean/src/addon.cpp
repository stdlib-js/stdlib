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

#include "stdlib/stats/base/dsmean.h"
#include <node_api.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdbool.h>
#include <assert.h>

/**
* Add-on namespace.
*/
namespace stdlib_stats_base_dsmean {

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.
	*
	* ## Notes
	*
	* -   When called from JavaScript, the function expects three arguments:
	*
	*     -   `N`: number of indexed elements
	*     -   `X`: input array
	*     -   `stride`: stride length
	*/
	napi_value node_dsmean( napi_env env, napi_callback_info info ) {
		napi_status status;

		size_t argc = 3;
		napi_value argv[ 3 ];
		status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
		assert( status == napi_ok );

		if ( argc < 3 ) {
			napi_throw_error( env, nullptr, "invalid invocation. Must provide 3 arguments." );
			return nullptr;
		}

		napi_valuetype vtype0;
		status = napi_typeof( env, argv[ 0 ], &vtype0 );
		assert( status == napi_ok );
		if ( vtype0 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. First argument must be a number." );
			return nullptr;
		}

		bool res;
		status = napi_is_typedarray( env, argv[ 1 ], &res );
		assert( status == napi_ok );
		if ( res == false ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Second argument must be a Float32Array." );
			return nullptr;
		}

		napi_valuetype vtype2;
		status = napi_typeof( env, argv[ 2 ], &vtype2 );
		assert( status == napi_ok );
		if ( vtype2 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Third argument must be a number." );
			return nullptr;
		}

		int64_t N;
		status = napi_get_value_int64( env, argv[ 0 ], &N );
		assert( status == napi_ok );

		int64_t stride;
		status = napi_get_value_int64( env, argv[ 2 ], &stride );
		assert( status == napi_ok );

		napi_typedarray_type vtype1;
		size_t xlen;
		void *X;
		status = napi_get_typedarray_info( env, argv[ 1 ], &vtype1, &xlen, &X, nullptr, nullptr );
		assert( status == napi_ok );
		if ( vtype1 != napi_float32_array ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Second argument must be a Float32Array." );
			return nullptr;
		}
		if ( (N-1)*llabs(stride) >= (int64_t)xlen ) {
			napi_throw_range_error( env, nullptr, "invalid argument. Second argument has insufficient elements based on the associated stride and the number of indexed elements." );
			return nullptr;
		}

		napi_value v;
		status = napi_create_double( env, stdlib_strided_dsmean( N, (float *)X, stride ), &v );
		assert( status == napi_ok );

		return v;
	}

	napi_value Init( napi_env env, napi_value exports ) {
		napi_status status;
		napi_value fcn;
		status = napi_create_function( env, "exports", NAPI_AUTO_LENGTH, node_dsmean, NULL, &fcn );
		assert( status == napi_ok );
		return fcn;
	}

	NAPI_MODULE( NODE_GYP_MODULE_NAME, Init )
} // end namespace stdlib_stats_base_dsmean
