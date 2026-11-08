/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/napi/argv_uint64.h"
#include "stdlib/assert/napi/status_ok.h"
#include "stdlib/assert/napi/is_type.h"
#include <node_api.h>
#include <stdint.h>
#include <stdbool.h>

/**
* Converts a Node-API value to an unsigned 64-bit integer.
*
* @param env       environment under which the function is invoked
* @param value     Node-API value
* @param out       destination for storing output value
* @param message   error message
* @param err       pointer for storing a JavaScript error
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/napi/argv_uint64.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_value value;
*
*     // ...
*
*     uint64_t out;
*     napi_value err;
*     napi_status status = stdlib_napi_argv_uint64( env, value, &out, "Must be a number.", &err );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_napi_argv_uint64( const napi_env env, const napi_value value, uint64_t *out, const char *message, napi_value *err ) {
	bool lossless = true;
	int64_t tmp = 0;

	stdlib_assert_napi_value_is_type( env, value, napi_number, message, err );
	if ( *err == NULL ) {
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_get_value_int64( env, value, &tmp ), "", napi_ok )
		*out = (uint64_t)tmp;
		return napi_ok;
	}
	*err = NULL;
	stdlib_assert_napi_value_is_type( env, value, napi_bigint, message, err );
	if ( *err == NULL ) {
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_get_value_bigint_uint64( env, value, out, &lossless ), "", napi_ok )
		return napi_ok;
	}
	return napi_ok;
}
