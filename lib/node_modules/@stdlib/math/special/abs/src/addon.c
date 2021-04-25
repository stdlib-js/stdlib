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

#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/labs.h"
#include "stdlib/ndarray/base/function_object.h"
#include "stdlib/ndarray/base/napi/unary.h"
#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Evaluates the identity function for an unsigned 32-bit integer.
*
* @param x   input value
* @return    input value
*/
static uint32_t identity_u( const uint32_t x ) {
	return x;
}

/**
* Evaluates the identity function for an unsigned 16-bit integer.
*
* @param x   input value
* @return    input value
*/
static uint16_t identity_t( const uint16_t x ) {
	return x;
}

/**
* Evaluates the identity function for an unsigned 8-bit integer.
*
* @param x   input value
* @return    input value
*/
static uint8_t identity_b( const uint8_t x ) {
	return x;
}

/**
* Computes the absolute value of a signed 16-bit integer.
*
* @param x   input value
* @return    absolute value
*/
static int16_t abs_k( const int16_t x ) {
	if ( x < 0 ) {
		return -x;
	}
	return x;
}

/**
* Computes the absolute value of a signed 8-bit integer.
*
* @param x   input value
* @return    absolute value
*/
static int8_t abs_s( const int8_t x ) {
	if ( x < 0 ) {
		return -x;
	}
	return x;
}

// Define an interface name:
static const char name[] = "stdlib_ndarray_abs";

// Define a list of ndarray functions:
static ndarrayFcn functions[] = {
	// NOTE: these are ordered according to likelihood of use (e.g., more likely that `float64` arrays are provided than `uint8`)

	// float64 (1)
	stdlib_ndarray_d_d,

	// float32 (2)
	stdlib_ndarray_f_f,
	stdlib_ndarray_f_d,

	// int32 (3)
	stdlib_ndarray_i_i,
	stdlib_ndarray_i_u,
	stdlib_ndarray_i_d,

	// int16 (6)
	stdlib_ndarray_k_k,
	stdlib_ndarray_k_i,
	stdlib_ndarray_k_t,
	stdlib_ndarray_k_u,
	stdlib_ndarray_k_f,
	stdlib_ndarray_k_d,

	// int8 (8)
	stdlib_ndarray_s_s,
	stdlib_ndarray_s_k,
	stdlib_ndarray_s_i,
	stdlib_ndarray_s_b,
	stdlib_ndarray_s_t,
	stdlib_ndarray_s_u,
	stdlib_ndarray_s_f,
	stdlib_ndarray_s_d,

	// uint32 (2)
	stdlib_ndarray_u_u,
	stdlib_ndarray_u_d,

	// uint16 (5)
	stdlib_ndarray_t_i,
	stdlib_ndarray_t_t,
	stdlib_ndarray_t_u,
	stdlib_ndarray_t_f,
	stdlib_ndarray_t_d,

	// uint8 (7)
	stdlib_ndarray_b_k,
	stdlib_ndarray_b_i,
	stdlib_ndarray_b_b,
	stdlib_ndarray_b_t,
	stdlib_ndarray_b_u,
	stdlib_ndarray_b_f,
	stdlib_ndarray_b_d
};

// Define the **ndarray** argument types for each ndarray function:
static int32_t types[] = {
	// float64 (1)
	STDLIB_NDARRAY_FLOAT64, STDLIB_NDARRAY_FLOAT64,

	// float32 (2)
	STDLIB_NDARRAY_FLOAT32, STDLIB_NDARRAY_FLOAT32,
	STDLIB_NDARRAY_FLOAT32, STDLIB_NDARRAY_FLOAT64,

	// int32 (3)
	STDLIB_NDARRAY_INT32, STDLIB_NDARRAY_INT32,
	STDLIB_NDARRAY_INT32, STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_INT32, STDLIB_NDARRAY_FLOAT64,

	// int16 (6)
	STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_INT16,
	STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_INT32,
	STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_UINT16,
	STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_FLOAT32,
	STDLIB_NDARRAY_INT16, STDLIB_NDARRAY_FLOAT64,

	// int8 (8)
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_INT8,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_INT16,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_INT32,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_UINT8,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_UINT16,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_FLOAT32,
	STDLIB_NDARRAY_INT8, STDLIB_NDARRAY_FLOAT64,

	// uint32 (2)
	STDLIB_NDARRAY_UINT32, STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_UINT32, STDLIB_NDARRAY_FLOAT64,

	// uint16 (5)
	STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_INT32,
	STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_UINT16,
	STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_FLOAT32,
	STDLIB_NDARRAY_UINT16, STDLIB_NDARRAY_FLOAT64,

	// uint8 (7)
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_INT16,
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_INT32,
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_UINT8,
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_UINT16,
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_FLOAT32,
	STDLIB_NDARRAY_UINT8, STDLIB_NDARRAY_FLOAT64
};

// Define a list of ndarray function "data" (in this case, callbacks):
static void *data[] = {
	// float64 (1)
	(void *)stdlib_base_abs,

	// float32 (2)
	(void *)stdlib_base_absf,
	(void *)stdlib_base_absf,

	// int32 (3)
	(void *)stdlib_base_labs,
	(void *)stdlib_base_labs,
	(void *)stdlib_base_labs,

	// int16 (6)
	(void *)abs_k,
	(void *)abs_k,
	(void *)abs_k,
	(void *)abs_k,
	(void *)abs_k,
	(void *)abs_k,

	// int8 (8)
	(void *)abs_s,
	(void *)abs_s,
	(void *)abs_s,
	(void *)abs_s,
	(void *)abs_s,
	(void *)abs_s,
	(void *)abs_s,
	(void *)abs_s,

	// uint32 (2)
	(void *)identity_u,
	(void *)identity_u,

	// uint16 (5)
	(void *)identity_t,
	(void *)identity_t,
	(void *)identity_t,
	(void *)identity_t,
	(void *)identity_t,

	// uint8 (7)
	(void *)identity_b,
	(void *)identity_b,
	(void *)identity_b,
	(void *)identity_b,
	(void *)identity_b,
	(void *)identity_b,
	(void *)identity_b
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
	34,

	// Array of type "numbers" (as enumerated elsewhere), where the total number of types equals `narrays * nfunctions` and where each set of `narrays` consecutive types (non-overlapping) corresponds to the set of ndarray argument types for a corresponding ndarray function:
	types,

	// Array of void pointers corresponding to the "data" (e.g., callbacks) which should be passed to a respective ndarray function (note: the number of pointers should match the number of ndarray functions):
	data
};

STDLIB_NDARRAY_NAPI_MODULE_UNARY( obj )
