/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/strided/base/binary.h"
#include "stdlib/strided/base/function_object.h"
#include "stdlib/strided/napi/addon_arguments.h"
#include "stdlib/strided/dtypes.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Adds two doubles.
*
* @private
* @param x  first double
* @param y  second double
* @return   sum
*/
static double add( double x, double y ) {
	return x + y;
}

/**
* Adds two floats.
*
* @private
* @param x  first float
* @param y  second float
* @return   sum
*/
static float addf( float x, float y ) {
	return x + y;
}

// Define a binary strided array interface name:
static const char name[] = "binary_strided_array_function_add";

// Define a list of strided array functions:
static StridedArrayFcn functions[] = {
	stdlib_strided_dd_d,
	stdlib_strided_ff_f
};

// Define the **strided array** argument types for each strided array function:
static int32_t types[] = {
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32
};

// Define a list of strided array function "data" (in this case, callbacks):
static void *data[] = {
	(void *)add,
	(void *)addf
};

// Create a strided array function object:
static const struct StridedFunctionObject obj = {
	// Strided array function name:
	name,

	// Number of input strided arrays:
	2,

	// Number of output strided arrays:
	1,

	// Total number of strided array arguments (nin + nout):
	3,

	// Array containing strided array functions:
	functions,

	// Number of strided array functions:
	2,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	data
};

// Define a pointer to the strided function object:
static const struct StridedFunctionObject *optr = &obj;

/**
* Add-on namespace.
*/
namespace addon_strided_add {

	/**
	* Adds each element in `X` to a corresponding element in `Y` and assigns the result to an element in `Z`.
	*
	* ## Notes
	*
	* -   When called from JavaScript, the function expects the following arguments:
	*
	*     -   `N`: number of indexed elements
	*     -   `X`: input array
	*     -   `strideX`: `X` stride length
	*     -   `Y`: input array
	*     -   `strideY`: `Y` stride length
	*     -   `Z`: destination array
	*     -   `strideZ`: `Z` stride length
	*/
	napi_value node_add( napi_env env, napi_callback_info info ) {
		napi_status status;

		// Total number of input arguments:
		int64_t nargs = 7;

		// Number of input strided array arguments:
		int64_t nin = 2;

		// Get callback arguments:
		size_t argc = 7;
		napi_value argv[ 7 ];
		status = napi_get_cb_info( env, info, &argc, argv, nullptr, nullptr );
		assert( status == napi_ok );

		// Check whether we were provided the correct number of arguments:
		int64_t argc64 = (int64_t)argc;
		if ( argc64 < nargs ) {
			napi_throw_error( env, nullptr, "invalid invocation. Insufficient arguments." );
			return nullptr;
		}
		if ( argc64 > nargs ) {
			napi_throw_error( env, nullptr, "invalid invocation. Too many arguments." );
			return nullptr;
		}
		// Process the provided arguments:
		uint8_t *arrays[ 3 ];
		int64_t strides[ 3 ];
		int64_t shape[ 1 ];
		int32_t types[ 3 ];

		napi_value err;
		status = stdlib_strided_napi_addon_arguments( env, argv, nargs, nin, arrays, shape, strides, types, &err );
		assert( status == napi_ok );

		// Check whether processing was successful:
		if ( err != NULL ) {
			status = napi_throw( env, err );
			assert( status == napi_ok );
			return nullptr;
		}
		// Resolve the strided array function satisfying the input array types:
		int64_t idx = stdlib_strided_function_dispatch_index_of( optr, types );

		// Check whether we were able to successfully resolve a strided array function:
		if ( idx < 0 ) {
			napi_throw_error( env, nullptr, "invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types." );
			return nullptr;
		}
		// Retrieve the strided array function:
		StridedArrayFcn fcn = optr->functions[ idx ];

		// Retrieve the associated function data:
		void *clbk = optr->data[ idx ];

		// Evaluate the strided array function:
		fcn( arrays, shape, strides, clbk );

		return nullptr;
	}

	napi_value Init( napi_env env, napi_value exports ) {
		napi_status status;
		napi_value fcn;
		status = napi_create_function( env, "exports", NAPI_AUTO_LENGTH, node_add, NULL, &fcn );
		assert( status == napi_ok );
		return fcn;
	}

	NAPI_MODULE( NODE_GYP_MODULE_NAME, Init )
} // end namespace addon_strided_add
