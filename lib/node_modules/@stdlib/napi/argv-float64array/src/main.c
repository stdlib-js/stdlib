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

#include "stdlib/napi/argv_float64array.h"
#include "stdlib/assert/napi/status_ok.h"
#include "stdlib/assert/napi/is_typedarray.h"
#include "stdlib/assert/napi/equal_typedarray_types.h"
#include <node_api.h>
#include <stdint.h>

/**
* Converts a Node-API value to a double-precision floating-point array.
*
* @param env       environment under which the function is invoked
* @param value     Node-API value
* @param data      pointer for returning a reference to the output array
* @param length    pointer for returning the number of array elements
* @param message   error message
* @param err       pointer for storing a JavaScript error
* @return          status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/napi/argv_float64array.h"
* #include <node_api.h>
* #include <stdint.h>
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_value value;
*
*     // ...
*
*     double *X;
*     int64_t len;
*     napi_value err;
*     napi_status status = stdlib_napi_argv_float64array( env, value, &X, &len, "Must be a typed array.", &err );
*     assert( status == napi_ok );
*     if ( err != NULL ) {
*         assert( napi_throw( env, err ) == napi_ok );
*         return NULL;
*     }
*
*     // ...
* }
*/
napi_status stdlib_napi_argv_float64array( const napi_env env, const napi_value value, double **data, int64_t *length, const char *message, napi_value *err ) {
	napi_typedarray_type type;
	size_t len;
	void *X;

	stdlib_assert_napi_value_is_typedarray( env, value, message, err );
	if ( *err != NULL ) {
		return napi_ok;
	}
	STDLIB_ASSERT_NAPI_STATUS_OK_RET_VALUE( env, napi_get_typedarray_info( env, value, &type, &len, &X, NULL, NULL ), "", napi_ok )
	stdlib_assert_napi_equal_typedarray_types( env, type, napi_float64_array, message, err );
	if ( *err != NULL ) {
		return napi_ok;
	}
	*data = (double *)X;
	*length = (int64_t)len;
	return napi_ok;
}
