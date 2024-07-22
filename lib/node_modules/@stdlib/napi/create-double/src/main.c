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

#include "stdlib/napi/create_double.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>

/**
* Converts a double-precision floating-point number to a Node-API value.
*
* @param env       environment under which the function is invoked
* @param value     double-precision floating-point number
* @param out       destination for storing output value
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/napi/create_double.h"
* #include <node_api.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*
*     // ...
*
*     napi_value value;
*     napi_status status = stdlib_napi_create_double( env, 1.0, &value );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_napi_create_double( const napi_env env, const double value, napi_value *out ) {
	STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_create_double( env, value, out ), "", napi_ok )
	return napi_ok;
}
