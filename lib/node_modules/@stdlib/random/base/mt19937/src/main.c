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
*
*
* ## Notice
*
* The original C code and copyright notice are from the [source implementation][mt19937]. The implementation has been modified according to the styles and conventions of this project.
*
* ```text
* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
*
*   1. Redistributions of source code must retain the above copyright
*      notice, this list of conditions and the following disclaimer.
*
*   2. Redistributions in binary form must reproduce the above copyright
*      notice, this list of conditions and the following disclaimer in the
*      documentation and/or other materials provided with the distribution.
*
*   3. The names of its contributors may not be used to endorse or promote
*      products derived from this software without specific prior written
*      permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* [mt19937]: http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
*/

#include "stdlib/random/base/mt19937.h"
#include "stdlib/random/base/shared.h"
#include <stdlib.h>
#include <stdint.h>
#include <string.h>

// Forward declarations:
static inline int8_t next( struct BasePRNGObject *obj, uint64_t *out );
static inline int8_t normalized( struct BasePRNGObject *obj, double *out );
static inline void mt19937_free( struct BasePRNGObject *obj );

static inline void create_state( uint32_t *state, const int32_t N, const uint32_t s );
static inline void init_state( uint32_t *state, const int32_t N, const uint32_t *seed, const int64_t M );
static inline void twist( uint32_t *state, const int32_t N );

// Define the size of the state array (see refs):
static const int32_t N = 624;

// Define a (magic) constant used for indexing into the state array:
static const int32_t M = 397;

// Define an initial state (magic) constant: 19650218 => 00000001001010111101011010101010
static const uint32_t SEED_ARRAY_INIT_STATE = 19650218;

// Define a mask for the most significant `w-r` bits, where `w` is the word size (32 bits) and `r` is the separation point of one word (see refs): 2147483648 => 0x80000000 => 10000000000000000000000000000000
static const uint32_t UPPER_MASK = 0x80000000;

// Define a mask for the least significant `r` bits (see refs): 2147483647 => 0x7fffffff => 01111111111111111111111111111111
static const uint32_t LOWER_MASK = 0x7fffffff;

// Define a multiplier (see Knuth TAOCP Vol2. 3rd Ed. P.106): 1812433253 => 01101100000001111000100101100101
static const uint32_t KNUTH_MULTIPLIER = 1812433253;

// Define a (magic) multiplier: 1664525 => 00000000000110010110011000001101
static const uint32_t MAGIC_MULTIPLIER_1 = 1664525;

// Define a (magic) multiplier: 1566083941 => 01011101010110001000101101100101
static const uint32_t MAGIC_MULTIPLIER_2 = 1566083941;

// Define a tempering coefficient: 2636928640 => 0x9d2c5680 => 10011101001011000101011010000000
static const uint32_t TEMPERING_COEFFICIENT_1 = 0x9d2c5680;

// Define a tempering coefficient: 4022730752 => 0xefc60000 => 11101111110001100000000000000000
static const uint32_t TEMPERING_COEFFICIENT_2 = 0xefc60000;

// Define a constant vector `a` (see refs): 2567483615 => 0x9908b0df => 10011001000010001011000011011111
static const uint32_t MATRIX_A = 0x9908b0df;

// MAG01[x] = x * MATRIX_A; for x = {0,1}
static const uint32_t MAG01[2] = { 0x0, MATRIX_A };

// Define the maximum unsigned 32-bit integer: 4294967295 => 11111111111111111111111111111111
static const uint32_t MAX_UINT32 = 4294967295;

// Define the maximum "safe" double-precision floating-point integer:
static const double FLOAT64_MAX_SAFE_INTEGER = 9007199254740991.0;

// Define a normalization constant when generating double-precision floating-point numbers: 2^53 => 9007199254740992
static const double FLOAT64_NORMALIZATION_CONSTANT = 1.0 / ( FLOAT64_MAX_SAFE_INTEGER+1.0 );

// 2^26: 67108864
static const double TWO_26 = 67108864.0;

// 2^32: 2147483648 => 0x80000000 => 10000000000000000000000000000000
static const uint32_t TWO_32 = 0x80000000;

// 1 (as a 32-bit unsigned integer): 1 => 0x1 => 00000000000000000000000000000001
static const uint32_t ONE = 0x1;

// Define the maximum normalized pseudorandom double-precision floating-point number: ( (((2^32-1)>>>5)*2^26)+( (2^32-1)>>>6) ) / 2^53
static const double MAX_NORMALIZED = FLOAT64_MAX_SAFE_INTEGER * FLOAT64_NORMALIZATION_CONSTANT;

/**
* MT19937 PRNG.
*
*/
static const struct BasePRNG mt19937_prng = {
	"mt19937",                                            // name
	(uint64_t)0,                                          // min
	(uint64_t)MAX_UINT32,                                 // max: (2^{32}-1)
	0.0,                                                  // min (normalized)
	MAX_NORMALIZED,                                       // max (normalized): (2^{53}-1)/2^{53}
	sizeof( stdlib_base_random_mt19937_state_t ),         // state_size
	&next,                                                // next()
	&normalized,                                          // normalized()
	&mt19937_free                                         // free()
};

/**
* Returns a pseudorandom integer.
*
* ## Notes
*
* -   The function returns `-1` if unable to generate a pseudorandom integer and `0` otherwise.
*
* ## References
*
* -   Matsumoto, Makoto, and Takuji Nishimura. 1998. "Mersenne Twister: A 623-dimensionally Equidistributed Uniform Pseudo-random Number Generator." _ACM Transactions on Modeling and Computer Simulation_ 8 (1). New York, NY, USA: ACM: 3–30. doi:[10.1145/272991.272995][@matsumoto:1998a].
*
* @param obj  PRNG object
* @param out  output address
* @return     status code
*/
static inline int8_t next( struct BasePRNGObject *obj, uint64_t *out ) {
	stdlib_base_random_mt19937_state_t *so;
	uint32_t *state;
	uint32_t r;
	int32_t i;
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return -1;
	}
	// Retrieve the state object:
	so = (stdlib_base_random_mt19937_state_t *)( obj->state );

	// Retrieve the current state and current state index:
	state = so->state;
	i = so->i;

	// Determine if we need to update our internal state array:
	if ( i >= N ) {
		twist( state, N );
		i = 0;
	}
	// Get the next state value:
	r = state[ i ];

	// Update the state index:
	so->i = i + 1;

	// Tempering transform to compensate for the reduced dimensionality of equidistribution:
	r ^= r >> 11;
	r ^= ( r << 7 ) & TEMPERING_COEFFICIENT_1;
	r ^= ( r << 15 ) & TEMPERING_COEFFICIENT_2;
	r ^= r >> 18;

	// Set the output value:
	*out = (uint64_t)( r );

	return 0;
}

/**
* Returns a pseudorandom double-precision floating-point number on the interval `[0, 1)`.
*
* ## Method
*
* -   When generating normalized double-precision floating-point numbers, we first generate two pseudorandom integers \\( x \\) and \\( y \\) on the interval \\( [0, 2^{32}-1] \\) for a combined \\( 64 \\) random bits.
*
* -   We would like \\( 53 \\) random bits to generate a 53-bit precision integer and, thus, want to discard \\( 11 \\) of the generated bits.
*
* -   We do so by discarding \\( 5 \\) bits from \\( x \\) and \\( 6 \\) bits from \\( y \\).
*
* -   Accordingly, \\( x \\) contains \\( 27 \\) random bits, which are subsequently shifted left \\( 26 \\) bits (multiplied by \\( 2^{26} \\), and \\( y \\) contains \\( 26 \\) random bits to fill in the lower \\( 26 \\) bits. When summed, they combine to comprise \\( 53 \\) random bits of a double-precision floating-point integer.
*
* -   As an example, suppose, for the sake of argument, the 32-bit PRNG generates the maximum unsigned 32-bit integer \\( 2^{32}-1 \\) twice in a row. Then,
*
*     ```c
*     uint32_t x = 4294967295 >> 5; // 00000111111111111111111111111111
*     uint32_t y = 4294967295 >> 6; // 00000011111111111111111111111111
*     ```
*
*     Multiplying \\( x \\) by \\( 2^{26} \\) returns \\( 9007199187632128 \\), which, in binary, is
*
*     ```binarystring
*     0 10000110011 11111111111111111111 11111100000000000000000000000000
*     ```
*
*     Adding \\( y \\) yields \\( 9007199254740991 \\) (the maximum "safe" double-precision floating-point integer value), which, in binary, is
*
*     ```binarystring
*     0 10000110011 11111111111111111111 11111111111111111111111111111111
*     ```
*
* -   Similarly, suppose the 32-bit PRNG generates the following values
*
*     ```c
*     uint32_t x = 1 >> 5;  // 0 => 00000000000000000000000000000000
*     uint32_t y = 64 >> 6; // 1 => 00000000000000000000000000000001
*     ```
*
*     Multiplying \\( x \\) by \\( 2^{26} \\) returns \\( 0 \\), which, in binary, is
*
*     ```binarystring
*     0 00000000000 00000000000000000000 00000000000000000000000000000000
*     ```
*
*     Adding \\( y \\) yields \\( 1 \\), which, in binary, is
*
*     ```binarystring
*     0 01111111111 00000000000000000000 00000000000000000000000000000000
*     ```
*
* -   As different combinations of \\( x \\) and \\( y \\) are generated, different combinations of double-precision floating-point exponent and significand bits will be toggled, thus generating pseudorandom double-precision floating-point numbers.
*
* ## Notes
*
* -   The function returns `-1` if unable to generate a pseudorandom number and `0` otherwise.
*
* ## References
*
* -   Harase, Shin. 2017. "Conversion of Mersenne Twister to double-precision floating-point numbers." _ArXiv_ abs/1708.06018 (September). <https://arxiv.org/abs/1708.06018>.
*
* @param obj  PRNG object
* @param out  output address
* @return     status code
*/
static inline int8_t normalized( struct BasePRNGObject *obj, double *out ) {
	uint64_t x;
	uint64_t y;
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return -1;
	}
	next( obj, &x);
	x >>= 5;

	next( obj, &y );
	y >>= 6;

	// Note: casting `x` and `y` to doubles here is fine, as neither will ever exceed the maximum "safe" double-precision floating-point number:
	*out = ( ((double)x*TWO_26)+(double)y ) * FLOAT64_NORMALIZATION_CONSTANT;

	return 0;
}

/**
* Frees a PRNG's allocated memory.
*
* @param obj  PRNG object
*/
static inline void mt19937_free( struct BasePRNGObject *obj ) {
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return;
	}
	stdlib_base_random_mt19937_state_t *state = (stdlib_base_random_mt19937_state_t *)( obj->state );
	free( state->seed );
	free( obj->state );
	free( obj );
}

/**
* Returns an initial PRNG state.
*
* @param state  pointer to state array
* @param N      state array length
* @param s      seed
*/
static inline void create_state( uint32_t *state, const int32_t N, const uint32_t s ) {
	int32_t i;

	// Set the first element of the state array to the provided seed:
	state[ 0 ] = s;

	// Initialize the remaining state array elements:
	for ( i = 1; i < N; i++ ) {
		state[ i ] = (KNUTH_MULTIPLIER * (state[i-1] ^ (state[i-1]>>30)) + i);
	}
}

/**
* Initializes a PRNG state array according to a seed array.
*
* @param state  pointer to state array
* @param N      state array length
* @param seed   pointer to seed array
* @param M      seed array length
*/
static inline void init_state( uint32_t *state, const int32_t N, const uint32_t *seed, const int64_t M ) {
	int32_t i;
	int64_t j;
	int64_t k;

	i = 1;
	j = 0;
	k = ( N > M ) ? N : M;
	for ( ; k > 0; k-- ) {
		state[ i ] = (state[i]^((state[i-1]^(state[i-1]>>30))*MAGIC_MULTIPLIER_1)) + seed[j] + j;
		i += 1;
		j += 1;
		if ( i >= N ) {
			state[ 0 ] = state[ N-1 ];
			i = 1;
		}
		if ( j >= M ) {
			j = 0;
		}
	}
	for ( k = N-1; k > 0; k-- ) {
		state[ i ] = (state[i]^((state[i-1]^(state[i-1]>>30))*MAGIC_MULTIPLIER_2)) - i;
		i += 1;
		if ( i >= N ) {
			state[ 0 ] = state[ N-1 ];
			i = 1;
		}
	}
	// Ensure a non-zero initial state array:
	state[ 0 ] = TWO_32; // MSB (most significant bit) is 1
}

/**
* Updates a PRNG's internal state by generating the next `N` words.
*
* @param state  pointer to a PRNG's internal state array
* @param N      state array length
*/
static inline void twist( uint32_t *state, const int32_t N ) {
	uint32_t w;
	int32_t i;
	int32_t j;
	int32_t k;

	k = N - M;
	for ( i = 0; i < k; i++ ) {
		w = ( state[i]&UPPER_MASK ) | ( state[i+1]&LOWER_MASK );
		state[ i ] = state[ i+M ] ^ ( w>>1 ) ^ MAG01[ w&ONE ];
	}
	j = N - 1;
	for ( ; i < j; i++ ) {
		w = ( state[i]&UPPER_MASK ) | ( state[i+1]&LOWER_MASK );
		state[ i ] = state[ i-k ] ^ ( w>>1 ) ^ MAG01[ w&ONE ];
	}
	w = ( state[j]&UPPER_MASK ) | ( state[0]&LOWER_MASK );
	state[ j ] = state[ M-1 ] ^ ( w>>1 ) ^ MAG01[ w&ONE ];
}

/**
* Returns a pointer to a dynamically allocated PRNG.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
*
* @param seed  pointer to a seed array
* @param len   seed array length
* @return      pointer to a dynamically allocated PRNG or, if unable to allocate memory, a null pointer
*
* @example
* #include "stdlib/random/base/mt19937.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Define a PRNG seed:
* uint32_t seed[] = { 12345 };
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed, 1 );
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
* stdlib_base_random_mt19937_free( obj );
*/
struct BasePRNGObject * stdlib_base_random_mt19937_allocate( const uint32_t *seed, const int64_t len ) {
	stdlib_base_random_mt19937_state_t *state;
	struct BasePRNGObject *obj;
	uint32_t *iseed;

	obj = malloc( sizeof( struct BasePRNGObject ) );
	if ( obj == NULL ) {
		return NULL;
	}
	state = malloc( sizeof( stdlib_base_random_mt19937_state_t ) );
	if ( state == NULL ) {
		free( obj ); // prevent memory leaks
		return NULL;
	}
	obj->prng = &mt19937_prng;
	obj->state = state;

	// Create an internal copy of the provided seed array to prevent the inability to reproduce PRNG values based on the PRNG's stated seed due to external state mutation:
	iseed = (uint32_t *)malloc( sizeof( uint32_t )*len );
	if ( iseed == NULL ) {
		free( obj ); // prevent memory leaks
		free( state );
		return NULL;
	}
	memcpy( iseed, seed, sizeof( uint32_t )*len );
	state->seed = iseed;
	state->seed_length = len;

	// Initialize the PRNG state:
	create_state( state->state, N, SEED_ARRAY_INIT_STATE );
	init_state( state->state, N, iseed, len );

	// Set the state index which determines when we need to update the PRNG's internal state:
	state->i = N;

	return obj;
}

/**
* Frees a PRNG's allocated memory.
*
* @param obj  PRNG object
*
* @example
* #include "stdlib/random/base/mt19937.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Define a PRNG seed:
* uint32_t seed[] = { 12345 };
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed, 1 );
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
* stdlib_base_random_mt19937_free( obj );
*/
void stdlib_base_random_mt19937_free( struct BasePRNGObject *obj ) {
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return;
	}
	obj->prng->free( obj );
}

/**
* Returns the PRNG seed length.
*
* ## Notes
*
* -   The function returns `-1` if unable to resolve a PRNG seed length and `0` otherwise.
*
* @param obj   PRNG object
* @param len   output address
* @return      status code
*
* @example
* #include "stdlib/random/base/mt19937.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Define a PRNG seed:
* uint32_t seed1[] = { 12345 };
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed1, 1 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // ...
*
* // Get the seed length:
* int64_t seed_length;
* int8_t status = stdlib_base_random_mt19937_seed_length( obj, &seed_length );
* if ( status != 0 ) {
*     fprintf( stderr, "Error encountered when attempting to retrieve the PRNG seed length.\n" );
*     exit( 1 );
* }
*
* // Get the PRNG seed:
* uint32_t *seed2 = (uint32_t *)malloc( sizeof( uint32_t )*seed_length );
* if ( seed2 == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
* status = stdlib_base_random_mt19937_seed( obj, seed2 );
* if ( status != 0 ) {
*     fprintf( stderr, "Error encountered when attempting to retrieve the PRNG seed.\n" );
*     exit( 1 );
* }
*
* // Use the seed to, e.g., create another PRNG which will generate the same sequence...
*
* // Free allocated memory:
* stdlib_base_random_mt19937_free( obj );
* free( seed2 );
*/
int8_t stdlib_base_random_mt19937_seed_length( const struct BasePRNGObject *obj, int64_t *len ) {
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return -1;
	}
	// Retrieve the state object:
	const stdlib_base_random_mt19937_state_t *state = (stdlib_base_random_mt19937_state_t *)( obj->state );

	// Set the seed length:
	*len = (int64_t)( state->seed_length );

	return 0;
}

/**
* Returns a PRNG seed.
*
* ## Notes
*
* -   The function returns `-1` if unable to resolve a PRNG seed and `0` otherwise.
*
* @param obj   PRNG object
* @param seed  output address
* @return      status code
*
* @example
* #include "stdlib/random/base/mt19937.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Define a PRNG seed:
* uint32_t seed1[] = { 12345 };
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed1, 1 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // ...
*
* // Get the seed length:
* int64_t seed_length;
* int8_t status = stdlib_base_random_mt19937_seed_length( obj, &seed_length );
* if ( status != 0 ) {
*     fprintf( stderr, "Error encountered when attempting to retrieve the PRNG seed length.\n" );
*     exit( 1 );
* }
*
* // Get the PRNG seed:
* uint32_t *seed2 = (uint32_t *)malloc( sizeof( uint32_t )*seed_length );
* if ( seed2 == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
* status = stdlib_base_random_mt19937_seed( obj, seed2 );
* if ( status != 0 ) {
*     fprintf( stderr, "Error encountered when attempting to retrieve the PRNG seed.\n" );
*     exit( 1 );
* }
*
* // Use the seed to, e.g., create another PRNG which will generate the same sequence...
*
* // Free allocated memory:
* stdlib_base_random_mt19937_free( obj );
* free( seed2 );
*/
int8_t stdlib_base_random_mt19937_seed( const struct BasePRNGObject *obj, uint32_t *seed ) {
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return -1;
	}
	// Retrieve the state object:
	const stdlib_base_random_mt19937_state_t *state = (stdlib_base_random_mt19937_state_t *)( obj->state );

	// Copy the seed array:
	memcpy( seed, state->seed, sizeof( uint32_t )*(state->seed_length) );

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
* #include "stdlib/random/base/mt19937.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Define a PRNG seed:
* uint32_t seed[] = { 12345 };
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed, 1 );
* if ( obj == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* stdlib_base_random_mt19937_state_t *state = (stdlib_base_random_mt19937_state_t *)stdlib_base_random_mt19937_state( obj );
* if ( state == NULL ) {
*     fprintf( stderr, "Unable to retrieve PRNG state.\n" );
*     exit( 1 );
* }
*
* // Use the captured state to, e.g., sync another PRNG or to reset a PRNG to a particular state in order to "replay" generated values at a later point in time...
*
* // Free allocated memory:
* stdlib_base_random_mt19937_free( obj );
*
* free( state->seed );
* free( state );
*/
void * stdlib_base_random_mt19937_state( const struct BasePRNGObject *obj ) {
	const stdlib_base_random_mt19937_state_t *so;
	stdlib_base_random_mt19937_state_t *state;
	uint64_t nbytes;
	uint32_t *seed;
	if ( obj == NULL || obj->prng != &mt19937_prng ) {
		return NULL;
	}
	state = (stdlib_base_random_mt19937_state_t *)malloc( obj->prng->state_size );
	if ( state == NULL ) {
		return NULL;
	}
	nbytes = sizeof( uint32_t ) * (state->seed_length);
	seed = (uint32_t *)malloc( nbytes );
	if ( seed == NULL ) {
		free( state ); // prevent memory leaks
		return NULL;
	}
	// Copy the state:
	memcpy( state, obj->state, obj->prng->state_size );

	// Explicitly copy the seed array to prevent external mutation:
	so = (stdlib_base_random_mt19937_state_t *)( obj->state );
	memcpy( seed, so->seed, nbytes );
	state->seed = seed;

	return (void *)state;
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
* #include "stdlib/random/base/mt19937.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* // Define a PRNG seed:
* uint32_t seed[] = { 12345 };
*
* // Create a PRNG:
* struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed, 1 );
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
* stdlib_base_random_mt19937_state_t *state = (stdlib_base_random_mt19937_state_t *)stdlib_base_random_mt19937_state( obj );
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
* status = stdlib_base_random_mt19937_set( obj, (void *)state );
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
* stdlib_base_random_mt19937_free( obj );
*
* free( state->seed );
* free( state );
*/
int8_t stdlib_base_random_mt19937_set( struct BasePRNGObject *obj, const void *state ) {
	stdlib_base_random_mt19937_state_t *vstate;
	uint64_t nbytes;
	uint32_t *seed;
	if ( obj == NULL || state == NULL || obj->prng != &mt19937_prng ) {
		return -1;
	}
	// Copy the provided seed array:
	vstate = ( stdlib_base_random_mt19937_state_t *)state;
	nbytes = sizeof( uint32_t ) * ( vstate->seed_length );
	seed = (uint32_t *)malloc( nbytes );
	if ( seed == NULL ) {
		return -1;
	}
	memcpy( seed, vstate->seed, nbytes );

	// Retrieve the current PRNG state:
	vstate = ( stdlib_base_random_mt19937_state_t *)( obj->state );

	// Free the memory held by the current seed array:
	free( vstate->seed );

	// Overwrite the current state with the provided state:
	memcpy( vstate, state, obj->prng->state_size );

	// Update the seed array pointer:
	vstate->seed = seed;

	return 0;
}
