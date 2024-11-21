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

#include "stdlib/strided/napi/unary.h"
#include "stdlib/strided/dtypes.h"
#include "stdlib/strided/base/function_object.h"
#include "stdlib/strided/base/unary.h"
#include <stdint.h>

/**
* Evaluates the identity function for a double-precision floating-point number.
*
* @param x   input value
* @return    input value
*/
static double identity( const double x ) {
	return x;
}

// Define an interface name:
static const char name[] = "stdlib_strided_unary_test_function";

// Define a list of strided array functions:
static StridedArrayFcn functions[] = {
	stdlib_strided_d_d
};

// Define the **strided array** argument types for each strided array function:
static int32_t types[] = {
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
static void *data[] = {
	(void *)identity
};

// Create a strided array function object:
static const struct StridedFunctionObject obj = {
	// Strided array function name:
	name,

	// Number of input strided arrays:
	1,

	// Number of output strided arrays:
	1,

	// Total number of strided array arguments (nin + nout):
	2,

	// Array containing strided array functions:
	functions,

	// Number of strided array functions:
	1,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	data
};

STDLIB_STRIDED_NAPI_MODULE_UNARY( obj )
