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

#ifndef STDLIB_MATH_BASE_SPECIAL_HEAVISIDEF_H
#define STDLIB_MATH_BASE_SPECIAL_HEAVISIDEF_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

// Enumeration of function continuity:
typedef enum STDLIB_BASE_HEAVISIDEF_CONTINUITY {
	// Half-maximum:
	STDLIB_BASE_HEAVISIDEF_CONTINUITY_HALF_MAXIMUM = 0,

	// Left-continuous:
	STDLIB_BASE_HEAVISIDEF_CONTINUITY_LEFT_CONTINUOUS = 1,

	// Right-continuous:
	STDLIB_BASE_HEAVISIDEF_CONTINUITY_RIGHT_CONTINUOUS = 2,

	// Discontinuous:
	STDLIB_BASE_HEAVISIDEF_CONTINUITY_DISCONTINUOUS = 3
} STDLIB_BASE_HEAVISIDEF_CONTINUITY;

/**
* Evaluates the Heaviside function for a single-precision floating-point number.
*/
float stdlib_base_heavisidef( const float x, const STDLIB_BASE_HEAVISIDEF_CONTINUITY continuity );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_SPECIAL_HEAVISIDEF_H
