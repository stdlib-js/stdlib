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

#include "stdlib/napi/argv_int64.h"
#include "stdlib/assert/napi/status_ok.h"
#include "stdlib/assert/napi/is_type.h"
#include <node_api.h>
#include <stdint.h>

/**
* Converts a Node-API value to a signed 64-bit integer.
*
* @param env       environment under which the function is invoked
* @param value     Node-API value
* @param out       destination for storing output value
* @param message   error message
* @param err       pointer for storing a JavaScript error
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/napi/argv_int64.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_value value;
*
*     // ...
*
*     int64_t out;
*     napi_value err;
*     napi_status status = stdlib_napi_argv_int64( env, value, &out, "Must be a number.", &err );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_napi_argv_int64( const napi_env env, const napi_value value, int64_t *out, const char *message, napi_value *err ) {
	stdlib_assert_napi_value_is_type( env, value, napi_number, message, err );
	if ( *err != NULL ) {
		return napi_ok;
	}
	STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_get_value_int64( env, value, out ), "", napi_ok )
	return napi_ok;
}
