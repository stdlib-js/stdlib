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

#include "stdlib/math/base/special/abs2.h"
#include "stdlib/math/base/special/abs2f.h"
#include "stdlib/strided/dtypes.h"
#include "stdlib/strided/base/function_object.h"
#include "stdlib/strided/base/unary.h"
#include "stdlib/strided/napi/unary.h"
#include <stdint.h>

/**
* Computes the squared absolute value for an unsigned 32-bit integer.
*
* @param x   input value
* @return    input value
*/
static uint32_t abs2_u( const uint32_t x ) {
	return x * x;
}

/**
* Computes the squared absolute value for an unsigned 16-bit integer.
*
* @param x   input value
* @return    input value
*/
static uint16_t abs2_t( const uint16_t x ) {
	return x * x;
}

/**
* Computes the squared absolute value for an unsigned 8-bit integer.
*
* @param x   input value
* @return    input value
*/
static uint8_t abs2_b( const uint8_t x ) {
	return x * x;
}

/**
* Computes the squared absolute value of a signed 16-bit integer.
*
* @param x   input value
* @return    squared absolute value
*/
static int16_t abs2_k( const int16_t x ) {
	return x * x;
}

/**
* Computes the squared absolute value of a signed 8-bit integer.
*
* @param x   input value
* @return    squared absolute value
*/
static int8_t abs2_s( const int8_t x ) {
	return x * x;
}

// Define an interface name:
static const char name[] = "stdlib_strided_abs2";

// Define a list of strided array functions:
static StridedArrayFcn functions[] = {
	// NOTE: these are ordered according to likelihood of use (e.g., more likely that `float64` arrays are provided than `uint8`)

	// float64 (1)
	stdlib_strided_d_d,

	// float32 (2)
	stdlib_strided_f_f,
	stdlib_strided_f_d,

	// int32 (3)
	stdlib_strided_i_i,
	stdlib_strided_i_u,
	stdlib_strided_i_d,

	// int16 (6)
	stdlib_strided_k_k,
	stdlib_strided_k_i,
	stdlib_strided_k_t,
	stdlib_strided_k_u,
	stdlib_strided_k_f,
	stdlib_strided_k_d,

	// int8 (8)
	stdlib_strided_s_s,
	stdlib_strided_s_k,
	stdlib_strided_s_i,
	stdlib_strided_s_b,
	stdlib_strided_s_t,
	stdlib_strided_s_u,
	stdlib_strided_s_f,
	stdlib_strided_s_d,

	// uint32 (2)
	stdlib_strided_u_u,
	stdlib_strided_u_d,

	// uint16 (5)
	stdlib_strided_t_i,
	stdlib_strided_t_t,
	stdlib_strided_t_u,
	stdlib_strided_t_f,
	stdlib_strided_t_d,

	// uint8 (7)
	stdlib_strided_b_k,
	stdlib_strided_b_i,
	stdlib_strided_b_b,
	stdlib_strided_b_t,
	stdlib_strided_b_u,
	stdlib_strided_b_f,
	stdlib_strided_b_d
};

// Define the **strided array** argument types for each strided array function:
static int32_t types[] = {
	// float64 (1)
	STDLIB_STRIDED_FLOAT64, STDLIB_STRIDED_FLOAT64,

	// float32 (2)
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_FLOAT32, STDLIB_STRIDED_FLOAT64,

	// int32 (3)
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_INT32, STDLIB_STRIDED_FLOAT64,

	// int16 (6)
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,

	// int8 (8)
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT8,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT8,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,

	// uint32 (2)
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,

	// uint16 (5)
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,

	// uint8 (7)
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT8,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
static void *data[] = {
	// float64 (1)
	(void *)stdlib_base_abs2,

	// float32 (2)
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2f,

	// int32 (3)
	(void *)abs2_u,
	(void *)abs2_u,
	(void *)abs2_u,

	// int16 (6)
	(void *)abs2_k,
	(void *)abs2_k,
	(void *)abs2_k,
	(void *)abs2_k,
	(void *)abs2_k,
	(void *)abs2_k,

	// int8 (8)
	(void *)abs2_s,
	(void *)abs2_s,
	(void *)abs2_s,
	(void *)abs2_s,
	(void *)abs2_s,
	(void *)abs2_s,
	(void *)abs2_s,
	(void *)abs2_s,

	// uint32 (2)
	(void *)abs2_u,
	(void *)abs2_u,

	// uint16 (5)
	(void *)abs2_t,
	(void *)abs2_t,
	(void *)abs2_t,
	(void *)abs2_t,
	(void *)abs2_t,

	// uint8 (7)
	(void *)abs2_b,
	(void *)abs2_b,
	(void *)abs2_b,
	(void *)abs2_b,
	(void *)abs2_b,
	(void *)abs2_b,
	(void *)abs2_b
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
	34,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	data
};

STDLIB_STRIDED_NAPI_MODULE_UNARY( obj )
