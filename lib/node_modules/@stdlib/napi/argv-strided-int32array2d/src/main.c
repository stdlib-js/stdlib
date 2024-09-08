/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/napi/argv_strided_int32array2d.h"
#include "stdlib/napi/argv_int32array.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stdint.h>
#include <stdlib.h>

/**
* Converts a Node-API value representing a two-dimensional strided array to a signed 32-bit integer array.
*
* @param env       environment under which the function is invoked
* @param M         number of rows
* @param N         number of columns
* @param strideX1  stride length along the first dimension
* @param strideX2  stride length along the second dimension
* @param value     Node-API value
* @param data      pointer for returning a reference to the output array
* @param message1  error message if a value is not a Int32Array
* @param message2  error message if a value has insufficient elements
* @param err       pointer for storing a JavaScript error
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/napi/argv_strided_int32array2d.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_value value;
*
*     // ...
*
*     int64_t M = 100;
*     int64_t N = 100;
*     int64_t strideX1 = 100;
*     int64_t strideX2 = 1;
*
*     // ...
*
*     int32_t *X;
*     napi_value err;
*     napi_status status = stdlib_napi_argv_strided_int32array2d( env, M, N, strideX1, strideX2, value, &X, "Must be a typed array.", "Must have sufficient elements.", &err );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_napi_argv_strided_int32array2d( const napi_env env, const int64_t M, const int64_t N, const int64_t strideX1, const int64_t strideX2, const napi_value value, int32_t **data, const char *message1, const char *message2, napi_value *err ) {
	int64_t len;
	stdlib_napi_argv_int32array( env, value, data, &len, message1, err );
	if ( *err != NULL ) {
		return napi_ok;
	}
	if ( ( (M-1)*llabs(strideX1)+(N-1)*llabs(strideX2) ) >= len ) {
		napi_value msg;
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_create_string_utf8( env, message2, NAPI_AUTO_LENGTH, &msg ), "", napi_ok )

		napi_value error;
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_create_range_error( env, NULL, msg, &error ), "", napi_ok )

		*err = error;
		return napi_ok;
	}
	*err = NULL;
	return napi_ok;
}
