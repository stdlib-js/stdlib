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

#include "stdlib/ndarray/base/napi/unary.h"
#include "stdlib/ndarray/base/function_object.h"
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
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
static const char name[] = "stdlib_ndarray_unary_test_function";

// Define a list of ndarray functions:
static ndarrayFcn functions[] = {
	stdlib_ndarray_d_d
};

// Define the **ndarray** argument types for each ndarray function:
static int32_t types[] = {
	STDLIB_NDARRAY_FLOAT64, STDLIB_NDARRAY_FLOAT64
};

// Define a list of ndarray function "data" (in this case, callbacks):
static void *data[] = {
	(void *)identity
};

// Create an ndarray function object:
static const struct ndarrayFunctionObject obj = {
	// ndarray function name:
	name,

	// Number of input ndarrays:
	1,

	// Number of output ndarrays:
	1,

	// Total number of ndarray arguments (nin + nout):
	2,

	// Array containing ndarray functions:
	functions,

	// Number of ndarray functions:
	1,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of ndarray argument types for a corresponding ndarray function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective ndarray function (note: the number of pointers should match the number of ndarray functions):
	data
};

STDLIB_NDARRAY_NAPI_MODULE_UNARY( obj )
