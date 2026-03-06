/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#ifndef STDLIB_MATH_BASE_SPECIAL_HEAVISIDE_H
#define STDLIB_MATH_BASE_SPECIAL_HEAVISIDE_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

// Enumeration of function continuity:
enum STDLIB_BASE_HEAVISIDE_CONTINUITY {
	// Half-maximum:
	STDLIB_BASE_HEAVISIDE_CONTINUITY_HALF_MAXIMUM = 0,

	// Left-continuous:
	STDLIB_BASE_HEAVISIDE_CONTINUITY_LEFT_CONTINUOUS = 1,

	// Right-continuous:
	STDLIB_BASE_HEAVISIDE_CONTINUITY_RIGHT_CONTINUOUS = 2,

	// Discontinuous:
	STDLIB_BASE_HEAVISIDE_CONTINUITY_DISCONTINUOUS = 3
};

/**
* Evaluates the Heaviside function for a double-precision floating-point number.
*/
double stdlib_base_heaviside( const double x, const enum STDLIB_BASE_HEAVISIDE_CONTINUITY continuity );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_SPECIAL_HEAVISIDE_H
