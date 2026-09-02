/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_OUTPUT_DTYPE_POLICIES_H
#define STDLIB_NDARRAY_OUTPUT_DTYPE_POLICIES_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of underlying ndarray data type policies.
*/
enum STDLIB_NDARRAY_OUTPUT_DTYPE_POLICY {
	// Return the same data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_SAME = 0,

	// Return a promoted data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_PROMOTED,

	// Return a data type amenable to accumulation:
	STDLIB_NDARRAY_OUTPUT_POLICY_ACCUMULATION,

	// Return a boolean data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_BOOLEAN,

	// Return a boolean or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_BOOLEAN_AND_GENERIC,

	// Return a signed integer data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_SIGNED_INTEGER,

	// Return a signed integer or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_SIGNED_INTEGER_AND_GENERIC,

	// Return an unsigned integer data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_UNSIGNED_INTEGER,

	// Return an unsigned integer data type or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_UNSIGNED_INTEGER_AND_GENERIC,

	// Return an integer data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_INTEGER,

	// Return an integer or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_INTEGER_AND_GENERIC,

	// Return a floating-point data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_FLOATING_POINT,

	// Return a floating-point data type or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_FLOATING_POINT_AND_GENERIC,

	// Return a real-valued floating-point data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_REAL_FLOATING_POINT,

	// Return a real-valued floating-point or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_REAL_FLOATING_POINT_AND_GENERIC,

	// Return a complex-valued floating-point data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_COMPLEX_FLOATING_POINT,

	// Return a complex-valued floating-point or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_COMPLEX_FLOATING_POINT_AND_GENERIC,

	// Return a real-valued data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_REAL,

	// Return a real-valued or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_REAL_AND_GENERIC,

	// Return a numeric data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_NUMERIC,

	// Return a numeric or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_NUMERIC_AND_GENERIC,

	// Return an integer index data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_INTEGER_INDEX,

	// Return an integer index or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_INTEGER_INDEX_AND_GENERIC,

	// Return a boolean index data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_BOOLEAN_INDEX,

	// Return a boolean index or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_BOOLEAN_INDEX_AND_GENERIC,

	// Return a mask index data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_MASK_INDEX,

	// Return a mask index or "generic" (JavaScript object) data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_MASK_INDEX_AND_GENERIC,

	// Return the default data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_DEFAULT,

	// Return the default index data type:
	STDLIB_NDARRAY_OUTPUT_POLICY_DEFAULT_INDEX,

	// "Compute" the number of data type policies (this works because of how `enum` works: the value is automatically set to the last enumerated type plus 1):
	STDLIB_NDARRAY_NPOLICIES,

	// Reserve a signaling value which is guaranteed not to be a valid data type policy enumeration number:
	STDLIB_NDARRAY_NO_OUTPUT_POLICY,

	// Indicate the start of user defined data type policy numbers (leaving room for policy growth above):
	STDLIB_NDARRAY_USERDEFINED_OUTPUT_POLICY = 256,
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_OUTPUT_DTYPE_POLICIES_H
