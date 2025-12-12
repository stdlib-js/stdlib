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

#ifndef STDLIB_RANDOM_BASE_RANDI_H
#define STDLIB_RANDOM_BASE_RANDI_H

#include "stdlib/random/base/shared.h"
#include <stdarg.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of pseudorandom number generators for generating integer values.
*/
enum STDLIB_BASE_RANDOM_RANDI_PRNG {
	// Linear congruential pseudorandom number generator (LCG):
	STDLIB_BASE_RANDOM_RANDI_MINSTD = 0,

	// Linear congruential pseudorandom number generator (LCG) with shuffled output:
	STDLIB_BASE_RANDOM_RANDI_MINSTD_SHUFFLE = 1,

	// 32-bit Mersenne Twister pseudorandom number generator:
	STDLIB_BASE_RANDOM_RANDI_MT19937 = 2
};

/**
* Returns a pointer to a dynamically allocated PRNG.
*/
struct BasePRNGObject * stdlib_base_random_randi_allocate( const int nargs, ... );

/**
* Returns a pseudorandom integer.
*/
uint64_t stdlib_base_random_randi( struct BasePRNGObject *obj );

/**
* Frees a PRNG's allocated memory.
*/
void stdlib_base_random_randi_free( struct BasePRNGObject *obj );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_RANDOM_BASE_RANDI_H
