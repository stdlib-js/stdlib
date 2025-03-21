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

#include "stdlib/random/base/minstd_shuffle.h"
#include "stdlib/random/base/minstd.h"
#include "stdlib/random/base/shared.h"
#include <stdlib.h>
#include <stdint.h>
#include <string.h>

// Forward declarations:
static inline int8_t next( struct BasePRNGObject *obj, uint64_t *out );
static inline int8_t normalized( struct BasePRNGObject *obj, double *out );
static inline void minstd_shuffle_free( struct BasePRNGObject *obj );

// Define the LCG multiplier:
static const uint32_t A = 16807;

// Define the maximum signed 32-bit integer: 2147483647 => 0x7fffffff => 01111111111111111111111111111111
static const uint32_t MAX_INT32 = 0x7fffffff;

// Define the normalization constant:
static const double NORMALIZATION_CONSTANT = 2147483646.0; // MAX_INT32 - 1

// Define the shuffle table size:
static const int32_t SHUFFLE_TABLE_SIZE = 32; // WARNING: this should match the type definition!!

// Define the number of "warm-ups":
static const int32_t NUM_WARMUPS = 8;

/**
* MINSTD PRNG whose output is shuffled.
*
*/
static const struct BasePRNG minstd_shuffle_prng = {
	"minstd-shuffle",                                     // name
	(uint64_t)1,                                          // min
	(uint64_t)MAX_INT32-1,                                // max: (2^{31}-1) - 1
	0.0,                                                  // min (normalized)
	(MAX_INT32-2) / NORMALIZATION_CONSTANT,               // max (normalized): (MAX-1)/MAX
	sizeof( stdlib_base_random_minstd_shuffle_state_t ),  // state_size
	&next,                                                // next()
	&normalized,                                          // normalized()
	&minstd_shuffle_free                                  // free()
};

/**
* Returns a pseudorandom integer.
*
* ## Notes
*
* -   The function returns `-1` if unable to generate a pseudorandom integer and `0` otherwise.
*
* @param obj  PRNG object
* @param out  output address
* @return     status code
*/
static inline int8_t next( struct BasePRNGObject *obj, uint64_t *out ) {
	uint32_t *state;
	int32_t i;
	if ( obj == NULL || obj->prng != &minstd_shuffle_prng ) {
		return -1;
	}
	// Retrieve the state object:
	stdlib_base_random_minstd_shuffle_state_t *so = (stdlib_base_random_minstd_shuffle_state_t *)( obj->state );

	// Retrieve the current state:
	state = so->state;

	// Determine the index of the next pseudorandom value:
	i = (int32_t)( (double)SHUFFLE_TABLE_SIZE * ( (double)state[0]/(double)MAX_INT32 ) );

	// Get the output value:
	state[ 0 ] = so->table[ i ];

	// Generate a new state to replace the one we just pulled out of the shuffle table (explicitly casting to 64-bit to handle integer overflow):
	state[ 1 ] = (A*(uint64_t)state[1]) % MAX_INT32;

	// Add the new state to the shuffle table:
	so->table[ i ] = state[ 1 ];

	// Set the output value:
	*out = (uint64_t)( state[ 0 ] );

	return 0;
}

/**
* Returns a pseudorandom double-precision floating-point number on the interval `[0,1)`.
*
* ## Notes
*
* -   The function returns `-1` if unable to generate a pseudorandom number and `0` otherwise.
*
* @param obj  PRNG object
* @param out  output address
* @return     status code
*/
static inline int8_t normalized( struct BasePRNGObject *obj, double *out ) {
	uint64_t state;
	int8_t status = next( obj, &state );
	if ( status != 0 ) {
		return -1;
	}
	// Note: casting `state` to a double here is fine, as `state` will never exceed the maximum "safe" double-precision floating-point number:
	*out = ((double)state-1.0) / NORMALIZATION_CONSTANT;

	return 0;
}

/**
* Frees a PRNG's allocated memory.
*
* @param obj  PRNG object
*/
static inline void minstd_shuffle_free( struct BasePRNGObject *obj ) {
	if ( obj == NULL || obj->prng != &minstd_shuffle_prng ) {
		return;
	}
	free( obj->state );
	free( obj );
}

/**
* Creates a shuffle table.
*
* ## Notes
*
* -   The function returns `-1` if unable to resolve a PRNG seed and `0` otherwise.
*
* @param obj    MINSTD PRNG object
* @param table  pointer to output shuffle table
* @return       status code
*/
static inline int8_t create_table( struct BasePRNGObject *obj, uint32_t *table ) {
	int8_t status;
	uint64_t v;
	int32_t i;

	// "Warm-up" the PRNG...
	for ( i = 0; i < NUM_WARMUPS; i++ ) {
		status = obj->prng->next( obj, &v );
		if ( status != 0 ) {
			return status;
		}
	}
	// Initialize the shuffle table...
	for ( i = SHUFFLE_TABLE_SIZE-1; i >= 0; i-- ) {
		status = obj->prng->next( obj, &v );
		if ( status != 0 ) {
			return status;
		}
		table[ i ] = (uint32_t)v;
	}
	return 0;
}

/**
* Returns a pointer to a dynamically allocated PRNG.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
* -   A provided `seed` is mapped to the interval `[1,2147483646]`.
*
* @param seed  PRNG seed
* @return      pointer to a dynamically allocated PRNG or, if unable to allocate memory, a null pointer
*
* @example
* #include "stdlib/random/base/minstd_shuffle.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* uint64_t r;
* int8_t status = obj->prng->next( obj, &r );
* if ( status != 0 ) {
*     fprintf( stderr, "Unexpected result.\n" );
*     exit( 1 );
* }
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_minstd_shuffle_free( obj );
*/
struct BasePRNGObject * stdlib_base_random_minstd_shuffle_allocate( const int32_t seed ) {
	uint32_t iseed;
	int8_t status;

	struct BasePRNGObject *obj = malloc( sizeof( struct BasePRNGObject ) );
	if ( obj == NULL ) {
		return NULL;
	}
	stdlib_base_random_minstd_shuffle_state_t *state = malloc( sizeof( stdlib_base_random_minstd_shuffle_state_t ) );
	if ( state == NULL ) {
		free( obj ); // prevent memory leaks
		return NULL;
	}
	// Ensure that the provided seed is within allowed bounds...
	if ( seed == 0 ) {
		iseed = 1;
	} else if ( seed == MAX_INT32 ) {
		iseed = MAX_INT32 - 1;
	} else if ( seed < 0 ) {
		iseed = -seed;
	} else {
		iseed = seed;
	}
	state->seed = (uint32_t)iseed;

	obj->prng = &minstd_shuffle_prng;
	obj->state = state;

	// Allocate a MINSTD PRNG for initializing the shuffle table:
	struct BasePRNGObject *minstd = stdlib_base_random_minstd_allocate( iseed );
	if ( minstd == NULL ) {
		minstd_shuffle_free( obj ); // prevent memory leaks
		return NULL;
	}
	// Create the shuffle table:
	status = create_table( minstd, state->table );

	// Free the MINSTD PRNG:
	stdlib_base_random_minstd_free( minstd ); // prevent memory leaks

	// Check if creating the shuffle table failed:
	if ( status != 0 ) {
		minstd_shuffle_free( obj ); // prevent memory leaks
		return NULL;
	}
	// Set the PRNG state:
	state->state[ 0 ] = state->table[ 0 ]; // shuffled
	state->state[ 1 ] = state->table[ 0 ]; // non-shuffled

	return obj;
}

/**
* Frees a PRNG's allocated memory.
*
* @param obj  PRNG object
*
* @example
* #include "stdlib/random/base/minstd_shuffle.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* uint64_t r;
* int8_t status = obj->prng->next( obj, &r );
* if ( status != 0 ) {
*     fprintf( stderr, "Unexpected result.\n" );
*     exit( 1 );
* }
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_minstd_shuffle_free( obj );
*/
void stdlib_base_random_minstd_shuffle_free( struct BasePRNGObject *obj ) {
	if ( obj == NULL || obj->prng != &minstd_shuffle_prng ) {
		return;
	}
	obj->prng->free( obj );
}

/**
* Returns a PRNG seed.
*
* ## Notes
*
* -   The function returns `-1` if unable to resolve a PRNG seed and `0` otherwise.
*
* @param obj  PRNG object
* @param out  output address
* @return     status code
*
* @example
* #include "stdlib/random/base/minstd_shuffle.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* int32_t seed;
* int8_t status = stdlib_base_random_minstd_shuffle_seed( obj, &seed );
* if ( status != 0 ) {
*     fprintf( stderr, "Error encountered when attempting to retrieve the PRNG seed.\n" );
*     exit( 1 );
* }
*
* // Use the seed to, e.g., create another PRNG which will generate the same sequence...
*
* // Free allocated memory:
* stdlib_base_random_minstd_shuffle_free( obj );
*/
int8_t stdlib_base_random_minstd_shuffle_seed( const struct BasePRNGObject *obj, int32_t *out ) {
	if ( obj == NULL || obj->prng != &minstd_shuffle_prng ) {
		return -1;
	}
	// Retrieve the state object:
	const stdlib_base_random_minstd_shuffle_state_t *state = (stdlib_base_random_minstd_shuffle_state_t *)( obj->state );

	// Set the output value:
	*out = (int32_t)( state->seed );

	return 0;
}

/**
* Returns a **copy** of the current PRNG state.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
*
* @param obj  PRNG object
* @return     pointer to a copy of the PRNG's internal state or, if unable to allocate memory, a null pointer
*
* @example
* #include "stdlib/random/base/minstd_shuffle.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* void *state = stdlib_base_random_minstd_shuffle_state( obj );
* if ( state == NULL ) {
*     fprintf( stderr, "Unable to retrieve PRNG state.\n" );
*     exit( 1 );
* }
*
* // Use the captured state to, e.g., sync another PRNG or to reset a PRNG to a particular state in order to "replay" generated values at a later point in time...
*
* // Free allocated memory:
* stdlib_base_random_minstd_shuffle_free( obj );
* free( state );
*/
void * stdlib_base_random_minstd_shuffle_state( const struct BasePRNGObject *obj ) {
	if ( obj == NULL || obj->prng != &minstd_shuffle_prng ) {
		return NULL;
	}
	void *state = malloc( obj->prng->state_size );
	if ( state == NULL ) {
		return NULL;
	}
	memcpy( state, obj->state, obj->prng->state_size );
	return state;
}

/**
* Sets the PRNG state.
*
* ## Notes
*
* -   The function returns `-1` if unable to set a PRNG state and `0` otherwise.
*
* @param obj    PRNG object
* @param state  state
* @return       status code
*
* @example
* #include "stdlib/random/base/minstd_shuffle.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* uint64_t r;
* int8_t status = obj->prng->next( obj, &r );
* if ( status != 0 ) {
*     fprintf( stderr, "Unexpected result.\n" );
*     exit( 1 );
* }
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* // Retrieve the current PRNG state...
* void *state = stdlib_base_random_minstd_shuffle_state( obj );
* if ( state == NULL ) {
*     fprintf( stderr, "Error encountered when attempting to retrieve PRNG state.\n" );
*     exit( 1 );
* }
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* // Reset the PRNG to a previous state...
* status = stdlib_base_random_minstd_shuffle_set( obj, state );
* if ( status != 0 ) {
*     fprintf( stderr, "Error encountered when attempting to set PRNG state.\n" );
*     exit( 1 );
* }
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* status = obj->prng->next( obj, &r );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_minstd_shuffle_free( obj );
* free( state );
*/
int8_t stdlib_base_random_minstd_shuffle_set( struct BasePRNGObject *obj, const void *state ) {
	if ( obj == NULL || state == NULL || obj->prng != &minstd_shuffle_prng ) {
		return -1;
	}
	memcpy( obj->state, state, obj->prng->state_size );
	return 0;
}
