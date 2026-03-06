/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/napi/argv_strided_float64array.h"
#include "stdlib/napi/argv_float64array.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stdint.h>
#include <stdlib.h>

/**
* Converts a Node-API value representing a strided array to a double-precision floating-point array.
*
* @param env       environment under which the function is invoked
* @param N         number of indexed elements
* @param stride    stride length
* @param value     Node-API value
* @param data      pointer for returning a reference to the output array
* @param message1  error message if a value is not a Float64Array
* @param message2  error message if a value has insufficient elements
* @param err       pointer for storing a JavaScript error
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/napi/argv_strided_float64array.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_value value;
*
*     // ...
*
*     int64_t N = 100;
*     int64_t stride = 1;
*
*     // ...
*
*     double *X;
*     napi_value err;
*     napi_status status = stdlib_napi_argv_strided_float64array( env, N, stride, value, &X, "Must be a typed array.", "Must have sufficient elements.", &err );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_napi_argv_strided_float64array( const napi_env env, const int64_t N, const int64_t stride, const napi_value value, double **data, const char *message1, const char *message2, napi_value *err ) {
	int64_t len;
	stdlib_napi_argv_float64array( env, value, data, &len, message1, err );
	if ( *err != NULL ) {
		return napi_ok;
	}
	if ( (N-1)*llabs(stride) >= len ) {
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
