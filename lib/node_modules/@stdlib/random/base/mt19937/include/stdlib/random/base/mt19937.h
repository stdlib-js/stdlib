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

#ifndef STDLIB_RANDOM_BASE_MT19937_H
#define STDLIB_RANDOM_BASE_MT19937_H

#include "stdlib/random/base/shared.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Declare an opaque type definition for the PRNG state.
*/
typedef struct {
	uint32_t *seed;
	int64_t seed_length;
	uint32_t state[624];
	int32_t i;
} stdlib_base_random_mt19937_state_t;

/**
* Returns a pointer to a dynamically allocated PRNG.
*/
struct BasePRNGObject * stdlib_base_random_mt19937_allocate( const uint32_t *seed, const int64_t len );

/**
* Frees a PRNG's allocated memory.
*/
void stdlib_base_random_mt19937_free( struct BasePRNGObject *obj );

/**
* Returns the PRNG seed length.
*/
int8_t stdlib_base_random_mt19937_seed_length( const struct BasePRNGObject *obj, int64_t *len );

/**
* Returns a PRNG seed.
*/
int8_t stdlib_base_random_mt19937_seed( const struct BasePRNGObject *obj, uint32_t *seed );

/**
* Returns a copy of the current PRNG state.
*/
void * stdlib_base_random_mt19937_state( const struct BasePRNGObject *obj );

/**
* Sets the PRNG state.
*/
int8_t stdlib_base_random_mt19937_set( struct BasePRNGObject *obj, const void *state );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_RANDOM_BASE_MT19937_H
