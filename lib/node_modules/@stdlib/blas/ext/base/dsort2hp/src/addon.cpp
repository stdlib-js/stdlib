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

#include "stdlib/blas/ext/base/dsort2hp.h"
#include <node_api.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdbool.h>
#include <assert.h>

/**
* Add-on namespace.
*/
namespace stdlib_blas_ext_base_dsort2hp {

	/**
	* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using heapsort.
	*
	* ## Notes
	*
	* -   When called from JavaScript, the function expects six arguments:
	*
	*     -   `N`: number of indexed elements
	*     -   `order`: sort order
	*     -   `X`: first input array
	*     -   `strideX`: `X` stride length
	*     -   `Y`: second input array
	*     -   `strideY`: `Y` stride length
	*/
	napi_value node_dsort2hp( napi_env env, napi_callback_info info ) {
		napi_status status;

		size_t argc = 6;
		napi_value argv[ 6 ];
		status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
		assert( status == napi_ok );

		if ( argc < 6 ) {
			napi_throw_error( env, nullptr, "invalid invocation. Must provide 6 arguments." );
			return nullptr;
		}

		napi_valuetype vtype0;
		status = napi_typeof( env, argv[ 0 ], &vtype0 );
		assert( status == napi_ok );
		if ( vtype0 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. First argument must be a number." );
			return nullptr;
		}

		napi_valuetype vtype1;
		status = napi_typeof( env, argv[ 1 ], &vtype1 );
		assert( status == napi_ok );
		if ( vtype1 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Second argument must be a number." );
			return nullptr;
		}

		bool res2;
		status = napi_is_typedarray( env, argv[ 2 ], &res2 );
		assert( status == napi_ok );
		if ( res2 == false ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Third argument must be a Float64Array." );
			return nullptr;
		}

		napi_valuetype vtype3;
		status = napi_typeof( env, argv[ 3 ], &vtype3 );
		assert( status == napi_ok );
		if ( vtype3 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Fourth argument must be a number." );
			return nullptr;
		}

		bool res4;
		status = napi_is_typedarray( env, argv[ 4 ], &res4 );
		assert( status == napi_ok );
		if ( res4 == false ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Fifth argument must be a Float64Array." );
			return nullptr;
		}

		napi_valuetype vtype5;
		status = napi_typeof( env, argv[ 5 ], &vtype5 );
		assert( status == napi_ok );
		if ( vtype5 != napi_number ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Sixth argument must be a number." );
			return nullptr;
		}

		int64_t N;
		status = napi_get_value_int64( env, argv[ 0 ], &N );
		assert( status == napi_ok );

		double order;
		status = napi_get_value_double( env, argv[ 1 ], &order );
		assert( status == napi_ok );

		int64_t strideX;
		status = napi_get_value_int64( env, argv[ 3 ], &strideX );
		assert( status == napi_ok );

		int64_t strideY;
		status = napi_get_value_int64( env, argv[ 5 ], &strideY );
		assert( status == napi_ok );

		napi_typedarray_type vtype2;
		size_t xlen;
		void *X;
		status = napi_get_typedarray_info( env, argv[ 2 ], &vtype2, &xlen, &X, nullptr, nullptr );
		assert( status == napi_ok );
		if ( vtype2 != napi_float64_array ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Third argument must be a Float64Array." );
			return nullptr;
		}
		if ( (N-1)*llabs(strideX) >= (int64_t)xlen ) {
			napi_throw_range_error( env, nullptr, "invalid argument. Third argument has insufficient elements based on the associated stride and the number of indexed elements." );
			return nullptr;
		}

		napi_typedarray_type vtype4;
		size_t ylen;
		void *Y;
		status = napi_get_typedarray_info( env, argv[ 4 ], &vtype4, &ylen, &Y, nullptr, nullptr );
		assert( status == napi_ok );
		if ( vtype4 != napi_float64_array ) {
			napi_throw_type_error( env, nullptr, "invalid argument. Fifth argument must be a Float64Array." );
			return nullptr;
		}
		if ( (N-1)*llabs(strideY) >= (int64_t)ylen ) {
			napi_throw_range_error( env, nullptr, "invalid argument. Fifth argument has insufficient elements based on the associated stride and the number of indexed elements." );
			return nullptr;
		}

		c_dsort2hp( N, order, (double *)X, strideX, (double *)Y, strideY );

		return nullptr;
	}

	napi_value Init( napi_env env, napi_value exports ) {
		napi_status status;
		napi_value fcn;
		status = napi_create_function( env, "exports", NAPI_AUTO_LENGTH, node_dsort2hp, NULL, &fcn );
		assert( status == napi_ok );
		return fcn;
	}

	NAPI_MODULE( NODE_GYP_MODULE_NAME, Init )
} // end namespace stdlib_blas_ext_base_dsort2hp
