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
* Computes the squared absolute value for a signed 32-bit integer.
*
* @param x   input value
* @return    input value
*/
static int32_t abs2_i( const int32_t x ) {
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
* Computes the squared absolute value for a signed 16-bit integer.
*
* @param x   input value
* @return    input value
*/
static int16_t abs2_k( const int16_t x ) {
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
	stdlib_strided_f_d_as_d_d,

	// int32 (3)
	stdlib_strided_i_i,
	stdlib_strided_i_u,
	stdlib_strided_i_d_as_d_d,

	// int16 (4)
	stdlib_strided_k_i_as_i_i,
	stdlib_strided_k_u_as_i_i,
	stdlib_strided_k_f_as_f_f,
	stdlib_strided_k_d_as_d_d,

	// int8 (6)
	stdlib_strided_s_k_as_k_k,
	stdlib_strided_s_i_as_i_i,
	stdlib_strided_s_t_as_i_i,
	stdlib_strided_s_u_as_i_i,
	stdlib_strided_s_f_as_f_f,
	stdlib_strided_s_d_as_d_d,

	// uint32 (2)
	stdlib_strided_u_u,
	stdlib_strided_u_d_as_d_d,

	// uint16 (3)
	stdlib_strided_t_u_as_u_u,
	stdlib_strided_t_f_as_f_f,
	stdlib_strided_t_d_as_d_d,

	// uint8 (5)
	stdlib_strided_b_i_as_i_i,
	stdlib_strided_b_t_as_t_t,
	stdlib_strided_b_u_as_u_u,
	stdlib_strided_b_f_as_f_f,
	stdlib_strided_b_d_as_d_d,

	// uint8c (5)
	stdlib_strided_b_i_as_i_i,
	stdlib_strided_b_t_as_t_t,
	stdlib_strided_b_u_as_u_u,
	stdlib_strided_b_f_as_f_f,
	stdlib_strided_b_d_as_d_d
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

	// int16 (4)
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT16, STDLIB_STRIDED_FLOAT64,

	// int8 (6)
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_INT8, STDLIB_STRIDED_FLOAT64,

	// uint32 (2)
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT32, STDLIB_STRIDED_FLOAT64,

	// uint16 (3)
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT16, STDLIB_STRIDED_FLOAT64,

	// uint8 (5)
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8, STDLIB_STRIDED_FLOAT64,

	// uint8c (5)
	STDLIB_STRIDED_UINT8C, STDLIB_STRIDED_INT32,
	STDLIB_STRIDED_UINT8C, STDLIB_STRIDED_UINT16,
	STDLIB_STRIDED_UINT8C, STDLIB_STRIDED_UINT32,
	STDLIB_STRIDED_UINT8C, STDLIB_STRIDED_FLOAT32,
	STDLIB_STRIDED_UINT8C, STDLIB_STRIDED_FLOAT64
};

// Define a list of strided array function "data" (in this case, callbacks):
static void *data[] = {
	// float64 (1)
	(void *)stdlib_base_abs2,

	// float32 (2)
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2,

	// int32 (3)
	(void *)abs2_i,
	(void *)abs2_i,
	(void *)stdlib_base_abs2,

	// int16 (4)
	(void *)abs2_i,
	(void *)abs2_i,
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2,

	// int8 (6)
	(void *)abs2_k,
	(void *)abs2_i,
	(void *)abs2_i,
	(void *)abs2_i,
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2,

	// uint32 (2)
	(void *)abs2_u,
	(void *)stdlib_base_abs2,

	// uint16 (3)
	(void *)abs2_u,
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2,

	// uint8 (5)
	(void *)abs2_i,
	(void *)abs2_t,
	(void *)abs2_u,
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2,

	// uint8c (5)
	(void *)abs2_i,
	(void *)abs2_t,
	(void *)abs2_u,
	(void *)stdlib_base_abs2f,
	(void *)stdlib_base_abs2
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
	31,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of strided array argument types for a corresponding strided array function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective strided array function (note: the number of pointers should match the number of strided array functions):
	data
};

STDLIB_STRIDED_NAPI_MODULE_UNARY( obj )
