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

#include "stdlib/ndarray/base/napi/addon_arguments.h"
#include "stdlib/ndarray/ctor.h"
#include <node_api.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

/**
* Validates, extracts, and transforms (to native C types) function arguments provided to an ndarray Node-API add-on interface.
*
* ## Notes
*
* -   The function assumes the following argument order:
*
*     ```text
*     [ ib1, im1, ib2, im2, ..., ob1, om1, ob2, om2, ... ]
*     ```
*
*     where
*
*     -   `ib#` is a data buffer for an input ndarray
*     -   `im#` is meta data for an input ndarray
*     -   `ob#` is a data buffer for an output ndarray
*     -   `om#` is meta data for an output ndarray
*
* -   The function may return one of the following JavaScript errors:
*
*     -   `Error`: unable to allocate memory when processing input ndarray
*     -   `Error`: unable to allocate memory when processing output ndarray
*
* @param env      environment under which the function is invoked
* @param argv     ndarray function arguments
* @param nargs    total number of expected arguments
* @param nin      number of input ndarrays
* @param arrays   destination array for storing pointers to both input and output ndarrays
* @param err      pointer for storing a JavaScript error
* @return         status code indicating success or failure (returns `napi_ok` if success)
*
* @example
* #include "stdlib/ndarray/base/napi/addon_arguments.h"
* #include "stdlib/ndarray/ctor.h"
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
*     int64_t nargs = 6;
*     int64_t nin = 2;
*
*     // Get callback arguments:
*     size_t argc = 6;
*     napi_value argv[ 6 ];
*     status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
*     assert( status == napi_ok );
*
*     // ...
*
*     // Process the provided arguments:
*     struct ndarray *arrays[ 3 ];
*
*     napi_value err;
*     status = stdlib_ndarray_napi_addon_arguments( env, argv, nargs, nin, arrays, &err );
*     assert( status == napi_ok );
*
*     // ...
*
* }
*/
napi_status stdlib_ndarray_napi_addon_arguments( const napi_env env, const napi_value *argv, const int64_t nargs, const int64_t nin, struct ndarray *arrays[], napi_value *err ) {
	napi_status status;

	// Reset the output error:
	*err = NULL;

	// Compute the index of the first output array argument:
	int64_t iout = nin * 2;

	// For each ndarray, we expect 2 arguments: the data buffer and the array meta data...
	for ( int64_t i = 0; i < nargs; i += 2 ) {
		// Retrieve the ndarray data buffer:
		uint8_t *data;
		status = napi_get_typedarray_info( env, argv[ i ], NULL, NULL, (void *)&data, NULL, NULL );
		assert( status == napi_ok );

		// Retrieve the ndarray meta data:
		uint8_t *meta;
		size_t byteoffset;
		status = napi_get_dataview_info( env, argv[ i+1 ], NULL, (void *)&meta, NULL, &byteoffset );
		assert( status == napi_ok );

		// Retrieve ndarray properties...
		uint8_t *ptr = meta + byteoffset + 1; // +1 as the first byte is the endianness, which we ignore based on the assumption that the endianness is the same for both C and JavaScript
		int16_t dtype = *(int16_t *)ptr;

		ptr += 2;
		int64_t ndims = *(int64_t *)ptr;

		ptr += 8;
		int64_t *shape = (int64_t *)ptr;

		ptr += ndims * 8;
		int64_t *strides = (int64_t *)ptr;

		ptr += ndims * 8;
		int64_t offset = *(int64_t *)ptr;

		ptr += 8;
		int8_t order = *(int8_t *)ptr;

		ptr += 1;
		int8_t imode = *(int8_t *)ptr;

		ptr += 1;
		int64_t nsubmodes = *(int64_t *)ptr;

		ptr += 8;
		int8_t *submodes = (int8_t *)ptr;

		// Allocate a new ndarray:
		struct ndarray *arr = stdlib_ndarray_allocate( dtype, data, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
		if ( arr == NULL ) {
			napi_value msg;
			if ( i < iout ) {
				status = napi_create_string_utf8( env, "runtime exception. Unable to allocate memory when processing an input ndarray.", NAPI_AUTO_LENGTH, &msg );
			} else {
				status = napi_create_string_utf8( env, "runtime exception. Unable to allocate memory when processing an output ndarray.", NAPI_AUTO_LENGTH, &msg );
			}
			assert( status == napi_ok );

			napi_value code;
			status = napi_create_string_utf8( env, "ERR_MEMORY_ALLOCATION_FAILED", NAPI_AUTO_LENGTH, &code );
			assert( status == napi_ok );

			napi_value error;
			status = napi_create_error( env, code, msg, &error );
			assert( status == napi_ok );

			*err = error;
			return napi_ok;
		}
		// Set the output data:
		arrays[ i/2 ] = arr;
	}
	return napi_ok;
}
