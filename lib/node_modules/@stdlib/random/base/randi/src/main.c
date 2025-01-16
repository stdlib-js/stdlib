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

#include "stdlib/random/base/randi.h"
#include "stdlib/random/base/shared.h"
#include "stdlib/random/base/minstd.h"
#include "stdlib/random/base/minstd_shuffle.h"
#include "stdlib/random/base/mt19937.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdarg.h>

// Define the default PRNG:
static const enum STDLIB_BASE_RANDOM_RANDI_PRNG STDLIB_BASE_RANDOM_RANDI_DEFAULT = STDLIB_BASE_RANDOM_RANDI_MT19937;

/**
* Returns a pointer to a dynamically allocated PRNG.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
*
* @param nargs   number of provided optional arguments
* @param [prng]  PRNG to allocate
* @param [seed]  PRNG seed
* @param [len]   seed array length
* @return        pointer to a dynamically allocated PRNG or, if unable to allocate memory, a null pointer
*
* @example
* #include "stdlib/random/base/randi.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_randi_allocate( 0 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating PRNG.\n" );
*     exit( 1 );
* }
*
* uint64_t r = stdlib_base_random_randi( obj );
*
* // ...
*
* r = stdlib_base_random_randi( obj );
*
* // ...
*
* r = stdlib_base_random_randi( obj );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_randi_free( obj );
*/
struct BasePRNGObject * stdlib_base_random_randi_allocate( const int nargs, ... ) {
	enum STDLIB_BASE_RANDOM_RANDI_PRNG prng;
	va_list args;

	va_start( args, nargs );
	if ( nargs < 1 ) {
		prng = STDLIB_BASE_RANDOM_RANDI_DEFAULT;
	} else {
		prng = va_arg( args, enum STDLIB_BASE_RANDOM_RANDI_PRNG );
	}
	if ( prng == STDLIB_BASE_RANDOM_RANDI_MINSTD ) {
		int32_t seed;
		if ( nargs > 1 ) {
			seed = va_arg( args, int32_t );
		} else {
			seed = rand();
		}
		va_end( args );
		return stdlib_base_random_minstd_allocate( seed );
	}
	if ( prng == STDLIB_BASE_RANDOM_RANDI_MINSTD_SHUFFLE ) {
		int32_t seed;
		if ( nargs > 1 ) {
			seed = va_arg( args, int32_t );
		} else {
			seed = rand();
		}
		va_end( args );
		return stdlib_base_random_minstd_shuffle_allocate( seed );
	}
	if ( prng == STDLIB_BASE_RANDOM_RANDI_MT19937 ) {
		const uint32_t *seed;
		int64_t seed_length;
		uint32_t tseed[ 1 ];
		if ( nargs < 2 ) {
			tseed[ 0 ] = (uint32_t)rand();
			seed = tseed;
			seed_length = 1;
		} else if ( nargs == 3 ) {
			seed = va_arg( args, uint32_t * );
			seed_length = va_arg( args, int64_t );
		} else {
			// Incompatible number of arguments...
			va_end( args );
			return NULL;
		}
		va_end( args );
		return stdlib_base_random_mt19937_allocate( seed, seed_length );
	}
	// How did we get here? A non-implemented PRNG?
	va_end( args );
	return NULL;
}

/**
* Returns a pseudorandom integer.
*
* ## Notes
*
* -   The function returns `0` if provided a `NULL` pointer.
*
* @param obj  PRNG object
* @return     pseudorandom integer
*
* @example
* #include "stdlib/random/base/randi.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_randi_allocate( 0 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating PRNG.\n" );
*     exit( 1 );
* }
*
* uint64_t r = stdlib_base_random_randi( obj );
*
* // ...
*
* r = stdlib_base_random_randi( obj );
*
* // ...
*
* r = stdlib_base_random_randi( obj );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_randi_free( obj );
*/
uint64_t stdlib_base_random_randi( struct BasePRNGObject *obj ) {
	return stdlib_base_prng_next( obj );
}

/**
* Frees a PRNG's allocated memory.
*
* @param obj  PRNG object
*
* @example
* #include "stdlib/random/base/randi.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_randi_allocate( 0 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating PRNG.\n" );
*     exit( 1 );
* }
*
* uint64_t r = stdlib_base_random_randi( obj );
*
* // ...
*
* r = stdlib_base_random_randi( obj );
*
* // ...
*
* r = stdlib_base_random_randi( obj );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_randi_free( obj );
*/
void stdlib_base_random_randi_free( struct BasePRNGObject *obj ) {
	stdlib_base_prng_free( obj );
}
