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

#include "stdlib/strided/napi/addon_arguments.h"
#include "stdlib/ndarray/base/napi/typedarray_type_to_dtype.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/math/base/assert/is_finite.h"
#include "stdlib/math/base/special/floor.h"
#include <node_api.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

/**
* Validates, extracts, and transforms (to native C types) function arguments provided to a strided array N-API add-on interface.
*
* ## Notes
*
* -   The function assumes the following argument order:
*
*     ```text
*     [ N, ia1, is1, ia2, is2, ..., oa1, os1, oa2, os2, ... ]
*     ```
*
*     where
*
*     -   `N` is the number of elements over which to iterate
*     -   `ia#` is an input strided array
*     -   `is#` is a corresponding input strided array stride (in units of elements)
*     -   `oa#` is an output strided array
*     -   `os#` is a corresponding output strided array stride (in units of elements)
*
* -   The function may return one of the following JavaScript errors:
*
*     -   `TypeError`: first argument must be an integer
*     -   `TypeError`: input array stride argument must be an integer
*     -   `TypeError`: output array stride argument must be an integer
*     -   `TypeError`: input array argument must be a typed array
*     -   `TypeError`: output array argument must be a typed array
*     -   `RangeError`: input array argument must have sufficient elements based on the associated stride and the number of indexed elements
*     -   `RangeError`: output array argument must have sufficient elements based on the associated stride and the number of indexed elements
*
* @param env      environment under which the function is invoked
* @param argv     strided function arguments
* @param nargs    total number of expected arguments
* @param nin      number of input strided array arguments
* @param arrays   destination array for storing pointers to both input and output strided byte arrays
* @param shape    destination array for storing the array shape (dimensions)
* @param strides  destination array for storing array strides (in bytes) for each strided array
* @param types    destination array for storing strided array argument data types
* @param err      pointer for storing a JavaScript error
* @return         status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/strided/napi/addon_arguments.h"
* #include <node_api.h>
* #include <stdint.h>
* #include <assert.h>
*
* // Add-on function...
* napi_value addon( napi_env env, napi_callback_info info ) {
*     napi_status status;
*
*     // ...
*
*     int64_t nargs = 7;
*     int64_t nin = 2;
*
*     // Get callback arguments:
*     size_t argc = 7;
*     napi_value argv[ 7 ];
*     status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
*     assert( status == napi_ok );
*
*     // ...
*
*     // Process the provided arguments:
*     uint8_t *arrays[ 3 ];
*     int64_t strides[ 3 ];
*     int64_t shape[ 1 ];
*     int32_t types[ 3 ];
*
*     napi_value err;
*     status = stdlib_strided_napi_addon_arguments( env, argv, nargs, nin, arrays, shape, strides, types, &err );
*     assert( status == napi_ok );
*
*     // ...
*
* }
*/
napi_status stdlib_strided_napi_addon_arguments( const napi_env env, const napi_value *argv, const int64_t nargs, const int64_t nin, uint8_t *arrays[], int64_t *shape, int64_t *strides, int32_t *types, napi_value *err ) {
	napi_status status;
	int64_t i;
	int64_t j;

	// Reset the output error:
	*err = NULL;

	// Compute the index of the first output strided array argument:
	int64_t iout = ( nin*2 ) + 1;

	// The first argument is always the number of elements over which to iterate...
	napi_valuetype vtype0;
	status = napi_typeof( env, argv[ 0 ], &vtype0 );
	assert( status == napi_ok );
	if ( vtype0 != napi_number ) {
		napi_value msg;
		status = napi_create_string_utf8( env, "invalid argument. First argument must be an integer.", NAPI_AUTO_LENGTH, &msg );
		assert( status == napi_ok );

		napi_value code;
		status = napi_create_string_utf8( env, "ERR_STRIDED_INVALID_ARGUMENT", NAPI_AUTO_LENGTH, &code );
		assert( status == napi_ok );

		napi_value error;
		status = napi_create_type_error( env, code, msg, &error );
		assert( status == napi_ok );

		*err = error;
		return napi_ok;
	}
	// Retrieve the number of indexed elements...
	double N;
	status = napi_get_value_double( env, argv[ 0 ], &N );
	assert( status == napi_ok );
	if ( !stdlib_base_is_finite( N ) || stdlib_base_floor( N ) != N ) {
		napi_value msg;
		status = napi_create_string_utf8( env, "invalid argument. First argument must be an integer.", NAPI_AUTO_LENGTH, &msg );
		assert( status == napi_ok );

		napi_value code;
		status = napi_create_string_utf8( env, "ERR_STRIDED_INVALID_ARGUMENT", NAPI_AUTO_LENGTH, &code );
		assert( status == napi_ok );

		napi_value error;
		status = napi_create_type_error( env, code, msg, &error );
		assert( status == napi_ok );

		*err = error;
		return napi_ok;
	}
	shape[ 0 ] = (int64_t)N;

	// Strides for both input and output strided arrays are every other argument beginning from the third argument...
	for ( i = 2; i < nargs; i += 2 ) {
		// Check that we were provided a number...
		napi_valuetype vtype;
		status = napi_typeof( env, argv[ i ], &vtype );
		assert( status == napi_ok );
		if ( vtype != napi_number ) {
			napi_value msg;
			if ( i < iout ) {
				status = napi_create_string_utf8( env, "invalid argument. Input array stride argument must be an integer.", NAPI_AUTO_LENGTH, &msg );
			} else {
				status = napi_create_string_utf8( env, "invalid argument. Output array stride argument must be an integer.", NAPI_AUTO_LENGTH, &msg );
			}
			assert( status == napi_ok );

			napi_value code;
			status = napi_create_string_utf8( env, "ERR_STRIDED_INVALID_ARGUMENT", NAPI_AUTO_LENGTH, &code );
			assert( status == napi_ok );

			napi_value error;
			status = napi_create_type_error( env, code, msg, &error );
			assert( status == napi_ok );

			*err = error;
			return napi_ok;
		}
		// Get the stride...
		double stride;
		status = napi_get_value_double( env, argv[ i ], &stride );
		assert( status == napi_ok );
		if ( !stdlib_base_is_finite( stride ) || stdlib_base_floor( stride ) != stride ) {
			napi_value msg;
			if ( i < iout ) {
				status = napi_create_string_utf8( env, "invalid argument. Input array stride argument must be an integer.", NAPI_AUTO_LENGTH, &msg );
			} else {
				status = napi_create_string_utf8( env, "invalid argument. Output array stride argument must be an integer.", NAPI_AUTO_LENGTH, &msg );
			}
			assert( status == napi_ok );

			napi_value code;
			status = napi_create_string_utf8( env, "ERR_STRIDED_INVALID_ARGUMENT", NAPI_AUTO_LENGTH, &code );
			assert( status == napi_ok );

			napi_value error;
			status = napi_create_type_error( env, code, msg, &error );
			assert( status == napi_ok );

			*err = error;
			return napi_ok;
		}
		// Set output data...
		j = ( i-2 ) / 2;
		strides[ j ] = (int64_t)stride;
	}
	// Input and output strided arrays are every other argument beginning from the second argument...
	for ( i = 1; i < nargs; i += 2 ) {
		// Check that we were provided a typed array...
		bool res;
		status = napi_is_typedarray( env, argv[ i ], &res );
		assert( status == napi_ok );
		if ( res == false ) {
			napi_value msg;
			if ( i < iout ) {
				status = napi_create_string_utf8( env, "invalid argument. Input array argument must be a typed array.", NAPI_AUTO_LENGTH, &msg );
			} else {
				status = napi_create_string_utf8( env, "invalid argument. Output array argument must be a typed array.", NAPI_AUTO_LENGTH, &msg );
			}
			assert( status == napi_ok );

			napi_value code;
			status = napi_create_string_utf8( env, "ERR_STRIDED_INVALID_ARGUMENT", NAPI_AUTO_LENGTH, &code );
			assert( status == napi_ok );

			napi_value error;
			status = napi_create_type_error( env, code, msg, &error );
			assert( status == napi_ok );

			*err = error;
			return napi_ok;
		}
		// Get the typed array data...
		napi_typedarray_type vtype;
		size_t len;
		void *TypedArray;
		status = napi_get_typedarray_info( env, argv[ i ], &vtype, &len, &TypedArray, NULL, NULL );
		assert( status == napi_ok );

		// Check that the provided array has sufficient elements...
		j = ( i-1 ) / 2;
		if ( (shape[0]-1)*llabs(strides[j]) >= (int64_t)len ) {
			napi_value msg;
			if ( i < iout ) {
				status = napi_create_string_utf8( env, "invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements.", NAPI_AUTO_LENGTH, &msg );
			} else {
				status = napi_create_string_utf8( env, "invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.", NAPI_AUTO_LENGTH, &msg );
			}
			assert( status == napi_ok );

			napi_value code;
			status = napi_create_string_utf8( env, "ERR_STRIDED_INVALID_ARGUMENT", NAPI_AUTO_LENGTH, &code );
			assert( status == napi_ok );

			napi_value error;
			status = napi_create_range_error( env, code, msg, &error );
			assert( status == napi_ok );

			*err = error;
			return napi_ok;
		}
		// Set output data...
		arrays[ j ] = (uint8_t *)TypedArray;
		types[ j ] = stdlib_ndarray_napi_typedarray_type_to_dtype( vtype );
		strides[ j ] *= stdlib_ndarray_bytes_per_element( types[ j ] );
	}
	return napi_ok;
}
