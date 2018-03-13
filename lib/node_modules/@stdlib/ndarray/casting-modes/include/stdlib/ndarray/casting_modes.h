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

#ifndef STDLIB_NDARRAY_CASTING_MODES_H
#define STDLIB_NDARRAY_CASTING_MODES_H

/**
* Enumeration of ndarray casting modes.
*/
enum STDLIB_NDARRAY_CASTING_MODE {
	// Only allow casting between identical types:
	STDLIB_NDARRAY_NO_CASTING = 0,

	// Allow casting between identical and byte swapped types:
	STDLIB_NDARRAY_EQUIV_CASTING = 1,

	// Only allow "safe" casts:
	STDLIB_NDARRAY_SAFE_CASTING = 2,

	// Allow "safe" casts and casts within the same kind (e.g., between signed integers or between floats):
	STDLIB_NDARRAY_SAME_KIND_CASTING = 3,

	// Allow casting between all types (including between integers and floats):
	STDLIB_NDARRAY_UNSAFE_CASTING = 4
};

#endif // !STDLIB_NDARRAY_CASTING_MODES_H
