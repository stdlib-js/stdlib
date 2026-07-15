/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_INPUT_CASTING_POLICIES_H
#define STDLIB_NDARRAY_INPUT_CASTING_POLICIES_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of input ndarray casting policies.
*/
enum STDLIB_NDARRAY_INPUT_CASTING_POLICY {
	// No guidance on specific casting behavior, as an input ndarray may or may not be cast depending on the needs of an implementation:
	STDLIB_NDARRAY_INPUT_CASTING_POLICY_NONE = 0,

	// Cast an input ndarray to a promoted data type:
	STDLIB_NDARRAY_INPUT_CASTING_POLICY_PROMOTED,

	// Cast an input ndarray to a data type amenable to accumulation:
	STDLIB_NDARRAY_INPUT_CASTING_POLICY_ACCUMULATION,

	// Cast an input ndarray to the data type of the output ndarray:
	STDLIB_NDARRAY_INPUT_CASTING_POLICY_OUTPUT,

	// "Compute" the number of policies (this works because of how `enum` works: the value is automatically set to the last enumerated type plus 1):
	STDLIB_NDARRAY_INPUT_CASTING_NPOLICIES,

	// Reserve a signaling value which is guaranteed not to be a valid data type policy enumeration number:
	STDLIB_NDARRAY_NO_INPUT_CASTING_POLICY,

	// Indicate the start of user defined policy numbers (leaving room for policy growth above):
	STDLIB_NDARRAY_USERDEFINED_INPUT_CASTING_POLICY = 256,
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_INPUT_CASTING_POLICIES_H
