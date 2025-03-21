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

#include "stdlib/ndarray/base/napi/dtype_string_to_dtype.h"
#include "stdlib/ndarray/dtypes.h"
#include <node_api.h>
#include <string.h>

/**
* Returns the ndarray data type corresponding to a data type string.
*
* @param str    data type string
* @return       data type
*
* @example
* #include "stdlib/ndarray/base/napi/dtype_string_to_dtype.h"
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
*     // Get a string argument...
*     char str[ 1024 ];
*     size_t len;
*     status = napi_get_value_string_utf8( env, argv[ 0 ], (char *)str, 1024, &len );
*     assert( status == napi_ok );
*
*     // ...
*
*     // Return the corresponding ndarray data type for the input typed array:
*     enum STDLIB_NDARRAY_DTYPE dtype = stdlib_ndarray_napi_dtype_string_to_dtype( str );
*
*     // ...
* }
*/
enum STDLIB_NDARRAY_DTYPE stdlib_ndarray_napi_dtype_string_to_dtype( const char *str ) {
	if ( strcmp( str, "float64" ) == 0 ) {
		return STDLIB_NDARRAY_FLOAT64;
	}
	if ( strcmp( str, "float32" ) == 0 ) {
		return STDLIB_NDARRAY_FLOAT32;
	}
	if ( strcmp( str, "int32" ) == 0 ) {
		return STDLIB_NDARRAY_INT32;
	}
	if ( strcmp( str, "uint32" ) == 0 ) {
		return STDLIB_NDARRAY_UINT32;
	}
	if ( strcmp( str, "int16" ) == 0 ) {
		return STDLIB_NDARRAY_INT16;
	}
	if ( strcmp( str, "uint16" ) == 0 ) {
		return STDLIB_NDARRAY_UINT16;
	}
	if ( strcmp( str, "int8" ) == 0 ) {
		return STDLIB_NDARRAY_INT8;
	}
	if ( strcmp( str, "uint8" ) == 0 ) {
		return STDLIB_NDARRAY_UINT8;
	}
	if ( strcmp( str, "uint8c" ) == 0 ) {
		return STDLIB_NDARRAY_UINT8C;
	}
	if ( strcmp( str, "int64" ) == 0 ) {
		return STDLIB_NDARRAY_INT64;
	}
	if ( strcmp( str, "uint64" ) == 0 ) {
		return STDLIB_NDARRAY_UINT64;
	}
	if ( strcmp( str, "complex64" ) == 0 ) {
		return STDLIB_NDARRAY_COMPLEX64;
	}
	if ( strcmp( str, "complex128" ) == 0 ) {
		return STDLIB_NDARRAY_COMPLEX128;
	}
	if ( strcmp( str, "bool" ) == 0 ) {
		return STDLIB_NDARRAY_BOOL;
	}
	if ( strcmp( str, "binary" ) == 0 ) {
		return STDLIB_NDARRAY_BINARY;
	}
	if ( strcmp( str, "generic" ) == 0 ) {
		return STDLIB_NDARRAY_GENERIC;
	}
	return STDLIB_NDARRAY_NOTYPE;
}
