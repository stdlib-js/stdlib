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
	STDLIB_NDARRAY_OUTPUT_POLICY_SAME = 0,
	STDLIB_NDARRAY_OUTPUT_POLICY_PROMOTED,
	STDLIB_NDARRAY_OUTPUT_POLICY_BOOL,
	STDLIB_NDARRAY_OUTPUT_POLICY_SIGNED_INTEGER,
	STDLIB_NDARRAY_OUTPUT_POLICY_UNSIGNED_INTEGER,
	STDLIB_NDARRAY_OUTPUT_POLICY_INTEGRAL,
	STDLIB_NDARRAY_OUTPUT_POLICY_FLOATING_POINT,
	STDLIB_NDARRAY_OUTPUT_POLICY_REAL_FLOATING_POINT,
	STDLIB_NDARRAY_OUTPUT_POLICY_COMPLEX_FLOATING_POINT,
	STDLIB_NDARRAY_OUTPUT_POLICY_NUMERIC,

	// "Compute" the number of data type policies (this works because of how `enum` works: the value is automatically set to the last enumerated type plus 1):
	STDLIB_NDARRAY_NPOLICIES,
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_OUTPUT_DTYPE_POLICIES_H
