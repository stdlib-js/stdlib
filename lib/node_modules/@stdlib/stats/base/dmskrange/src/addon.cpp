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

#include "stdlib/stats/base/dmskrange.h"
#include <node_api.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdbool.h>
#include <assert.h>

/**
* Add-on namespace.
*/
namespace stdlib_stats_base_dmskrange {

	/**
	* Computes the range of a double-precision floating-point strided array according to a mask.
	*
	* ## Notes
	*
	* -   When called from JavaScript, the function expects five arguments:
	*
	*     -   `N`: number of indexed elements
	*     -   `X`: input array
	*     -   `strideX`: `X` stride length
	*     -   `Mask`: mask array
	*     -   `strideMask`: `Mask` stride length
	*/
	napi_value node_dmskrange( napi_env env, napi_callback_info info ) {
		napi_status status;

		size_t argc = 5;
		napi_value argv[ 5 ];
		status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
		assert( status == napi_ok );

		if ( argc < 5 ) {
			napi_throw_error( env, nullptr, "invalid invocation. Must provide 5 arguments." );
			return nullptr;
		}

		napi_valuetype vtype0;
		status = napi_typeof( env, argv[ 0 ], &vtype0 );
		assert( status == napi_ok );
		if ( vtype0 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. First argument must be a number." );
			return nullptr;
		}

		bool res1;
		status = napi_is_typedarray( env, argv[ 1 ], &res1 );
		assert( status == napi_ok );
		if ( res1 == false ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Second argument must be a Float64Array." );
			return nullptr;
		}

		napi_valuetype vtype2;
		status = napi_typeof( env, argv[ 2 ], &vtype2 );
		assert( status == napi_ok );
		if ( vtype2 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Third argument must be a number." );
			return nullptr;
		}

		bool res3;
		status = napi_is_typedarray( env, argv[ 3 ], &res3 );
		assert( status == napi_ok );
		if ( res3 == false ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Fourth argument must be a Uint8Array." );
			return nullptr;
		}

		napi_valuetype vtype4;
		status = napi_typeof( env, argv[ 4 ], &vtype4 );
		assert( status == napi_ok );
		if ( vtype4 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Fifth argument must be a number." );
			return nullptr;
		}

		int64_t N;
		status = napi_get_value_int64( env, argv[ 0 ], &N );
		assert( status == napi_ok );

		int64_t strideX;
		status = napi_get_value_int64( env, argv[ 2 ], &strideX );
		assert( status == napi_ok );

		int64_t strideMask;
		status = napi_get_value_int64( env, argv[ 4 ], &strideMask );
		assert( status == napi_ok );

		napi_typedarray_type vtype1;
		size_t xlen;
		void *X;
		status = napi_get_typedarray_info( env, argv[ 1 ], &vtype1, &xlen, &X, nullptr, nullptr );
		assert( status == napi_ok );
		if ( vtype1 != napi_float64_array ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Second argument must be a Float64Array." );
			return nullptr;
		}
		if ( (N-1)*llabs(strideX) >= (int64_t)xlen ) {
			napi_throw_range_error( env, nullptr, "invalid argument. Second argument has insufficient elements based on the associated stride and the number of indexed elements." );
			return nullptr;
		}

		napi_typedarray_type vtype3;
		size_t mlen;
		void *Mask;
		status = napi_get_typedarray_info( env, argv[ 3 ], &vtype3, &mlen, &Mask, nullptr, nullptr );
		assert( status == napi_ok );
		if ( vtype3 != napi_uint8_array ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Fourth argument must be a Uint8Array." );
			return nullptr;
		}
		if ( (N-1)*llabs(strideMask) >= (int64_t)mlen ) {
			napi_throw_range_error( env, nullptr, "invalid argument. Fourth argument has insufficient elements based on the associated stride and the number of indexed elements." );
			return nullptr;
		}

		napi_value v;
		status = napi_create_double( env, stdlib_strided_dmskrange( N, (double *)X, strideX, (uint8_t *)Mask, strideMask ), &v );
		assert( status == napi_ok );

		return v;
	}

	napi_value Init( napi_env env, napi_value exports ) {
		napi_status status;
		napi_value fcn;
		status = napi_create_function( env, "exports", NAPI_AUTO_LENGTH, node_dmskrange, NULL, &fcn );
		assert( status == napi_ok );
		return fcn;
	}

	NAPI_MODULE( NODE_GYP_MODULE_NAME, Init )
} // end namespace stdlib_stats_base_dmskrange
