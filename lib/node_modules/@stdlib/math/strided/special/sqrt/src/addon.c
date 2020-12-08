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

#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/strided/dtypes.h"
#include "stdlib/strided/base/function_object.h"
#include "stdlib/strided/base/unary.h"
#include "stdlib/strided/napi/unary.h"
#include <stdint.h>

// Define an interface name:
static const char name[] = "stdlib_strided_sqrt";

// Define a list of strided array functions:
static StridedArrayFcn functions[] = {
	// NOTE: these are ordered according to likelihood of use (e.g., more likely that `float64` arrays are provided than `uint8`)

	// float64
	stdlib_strided_d_d,

	// float32
	stdlib_strided_f_f,
	stdlib_strided_f_d_as_d_d,

	// int32
	stdlib_strided_i_d_as_d_d,

	// int16
	stdlib_strided_k_f_as_f_f,
	stdlib_strided_k_d_as_d_d,

	// int8
	stdlib_strided_s_f_as_f_f,
	stdlib_strided_s_d_as_d_d,

	// uint32
	stdlib_strided_u_d_as_d_d,

	// uint16
	stdlib_strided_t_f_as_f_f,
	stdlib_strided_t_d_as_d_d,

	// uint8
	stdlib_strided_b_f_as_f_f,
	stdlib_strided_b_d_as_d_d
};

// Define the **strided array** argument types for each strided array function:
static int32_t types[] = {
	// float64
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,

	// float32
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,

	// int32
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,

	// int16
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,

	// int8
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,

	// uint32
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,

	// uint16
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,

	// uint8
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
static void *data[] = {
	// float64
	(void *)stdlib_base_sqrt,

	// float32
	(void *)stdlib_base_sqrtf,
	(void *)stdlib_base_sqrt,

	// int32
	(void *)stdlib_base_sqrt,

	// int16
	(void *)stdlib_base_sqrtf,
	(void *)stdlib_base_sqrt,

	// int8
	(void *)stdlib_base_sqrtf,
	(void *)stdlib_base_sqrt,

	// uint32
	(void *)stdlib_base_sqrt,

	// uint16
	(void *)stdlib_base_sqrtf,
	(void *)stdlib_base_sqrt,

	// uint8
	(void *)stdlib_base_sqrtf,
	(void *)stdlib_base_sqrt
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
	13,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	data
};

STDLIB_STRIDED_NAPI_MODULE_UNARY( obj )
