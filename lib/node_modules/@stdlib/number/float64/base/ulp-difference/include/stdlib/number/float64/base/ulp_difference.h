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

#ifndef STDLIB_NUMBER_FLOAT64_BASE_ULP_DIFFERENCE_H
#define STDLIB_NUMBER_FLOAT64_BASE_ULP_DIFFERENCE_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* An opaque type definition for a union for converting between a double-precision floating-point number and an unsigned 64-bit integer.
*
* @example
* #include <stdint.h>
*
* stdlib_base_float64_ulp_difference_word_t w;
*
* // Assign a double-precision floating-point number:
* w.value = 3.14;
*
* // Extract the unsigned 64-bit integer:
* uint64_t word = w.word;
*/
typedef union {
	double value;
	uint64_t word;
} stdlib_base_float64_ulp_difference_word_t;

/**
* Computes the number of representable double-precision floating-point values that separate two double-precision floating-point numbers along the real number line.
*/
double stdlib_base_float64_ulp_difference( const double x, const double y );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NUMBER_FLOAT64_BASE_ULP_DIFFERENCE_H
