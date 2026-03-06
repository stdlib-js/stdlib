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

#include "stdlib/ndarray/base/napi/typedarray_type_to_dtype.h"
#include "stdlib/ndarray/dtypes.h"
#include <node_api.h>

/**
* Returns the ndarray data type corresponding to a Node-API typed array type.
*
* @param vtype  Node-API typed array type
* @return       data type
*
* @example
* #include "stdlib/ndarray/base/napi/typedarray_type_to_dtype.h"
* #include "stdlib/ndarray/dtypes.h"
* #include <node_api.h>
* #include <assert.h>
*
* // Add-on function export...
* napi_value addon( napi_env env, napi_callback_info info ) {
*
*     // ...
*
*     // Get function arguments...
*     size_t argc = 1;
*     napi_value argv[ 1 ];
*     napi_status status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
*     assert( status == napi_ok );
*
*     // ...
*
*     // Get a typed array argument...
*     napi_typedarray_type vtype;
*     size_t xlen;
*     void *X;
*     status = napi_get_typedarray_info( env, argv[ 0 ], &vtype, &xlen, &X, NULL, NULL );
*     assert( status == napi_ok );
*
*     // ...
*
*     // Return the corresponding ndarray data type for the input typed array:
*     enum STDLIB_NDARRAY_DTYPE dtype = stdlib_ndarray_napi_typedarray_type_to_dtype( vtype );
*
*     // ...
* }
*/
enum STDLIB_NDARRAY_DTYPE stdlib_ndarray_napi_typedarray_type_to_dtype( napi_typedarray_type vtype ) {
	if ( vtype == napi_float64_array ) {
		return STDLIB_NDARRAY_FLOAT64;
	}
	if ( vtype == napi_float32_array ) {
		return STDLIB_NDARRAY_FLOAT32;
	}
	if ( vtype == napi_int32_array ) {
		return STDLIB_NDARRAY_INT32;
	}
	if ( vtype == napi_uint32_array ) {
		return STDLIB_NDARRAY_UINT32;
	}
	if ( vtype == napi_int16_array ) {
		return STDLIB_NDARRAY_INT16;
	}
	if ( vtype == napi_uint16_array ) {
		return STDLIB_NDARRAY_UINT16;
	}
	if ( vtype == napi_int8_array ) {
		return STDLIB_NDARRAY_INT8;
	}
	if ( vtype == napi_uint8_array ) {
		return STDLIB_NDARRAY_UINT8;
	}
	if ( vtype == napi_uint8_clamped_array ) {
		return STDLIB_NDARRAY_UINT8C;
	}
	if ( vtype == napi_bigint64_array ) {
		return STDLIB_NDARRAY_INT64;
	}
	if ( vtype == napi_biguint64_array ) {
		return STDLIB_NDARRAY_UINT64;
	}
	return STDLIB_NDARRAY_NOTYPE;
}
