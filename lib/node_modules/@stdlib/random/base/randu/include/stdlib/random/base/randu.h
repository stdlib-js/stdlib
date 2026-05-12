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

#ifndef STDLIB_RANDOM_BASE_RANDU_H
#define STDLIB_RANDOM_BASE_RANDU_H

#include "stdlib/random/base/shared.h"
#include <stdarg.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of pseudorandom number generators for generating double-precision floating-point numbers.
*/
enum STDLIB_BASE_RANDOM_RANDU_PRNG {
	// Linear congruential pseudorandom number generator (LCG):
	STDLIB_BASE_RANDOM_RANDU_MINSTD = 0,

	// Linear congruential pseudorandom number generator (LCG) with shuffled output:
	STDLIB_BASE_RANDOM_RANDU_MINSTD_SHUFFLE = 1,

	// 32-bit Mersenne Twister pseudorandom number generator:
	STDLIB_BASE_RANDOM_RANDU_MT19937 = 2
};

/**
* Returns a pointer to a dynamically allocated PRNG.
*/
struct BasePRNGObject * stdlib_base_random_randu_allocate( const int nargs, ... );

/**
* Returns a uniformly distributed pseudorandom number on the interval `[0,1)`.
*/
double stdlib_base_random_randu( struct BasePRNGObject *obj );

/**
* Frees a PRNG's allocated memory.
*/
void stdlib_base_random_randu_free( struct BasePRNGObject *obj );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_RANDOM_BASE_RANDU_H
