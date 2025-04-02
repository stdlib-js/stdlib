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

#ifndef STDLIB_RANDOM_BASE_MINSTD_SHUFFLE_H
#define STDLIB_RANDOM_BASE_MINSTD_SHUFFLE_H

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
	uint32_t seed;
	uint32_t state[2];
	uint32_t table[32]; // WARNING: this should match `SHUFFLE_TABLE_SIZE`
} stdlib_base_random_minstd_shuffle_state_t;

/**
* Returns a pointer to a dynamically allocated PRNG.
*/
struct BasePRNGObject * stdlib_base_random_minstd_shuffle_allocate( const int32_t seed );

/**
* Frees a PRNG's allocated memory.
*/
void stdlib_base_random_minstd_shuffle_free( struct BasePRNGObject *obj );

/**
* Returns a PRNG seed.
*/
int8_t stdlib_base_random_minstd_shuffle_seed( const struct BasePRNGObject *obj, int32_t *out );

/**
* Returns a copy of the current PRNG state.
*/
void * stdlib_base_random_minstd_shuffle_state( const struct BasePRNGObject *obj );

/**
* Sets the PRNG state.
*/
int8_t stdlib_base_random_minstd_shuffle_set( struct BasePRNGObject *obj, const void *state );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_RANDOM_BASE_MINSTD_SHUFFLE_H
