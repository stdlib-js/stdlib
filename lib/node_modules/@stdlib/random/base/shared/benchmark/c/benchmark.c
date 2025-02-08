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

#include "stdlib/random/base/shared.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "random/base/shared"
#define ITERATIONS 1000000
#define REPEATS 3

// Forward declarations:
static inline int8_t next( struct BasePRNGObject *obj, uint64_t *out );
static inline int8_t normalized( struct BasePRNGObject *obj, double *out );
static inline void prng_free( struct BasePRNGObject *obj );

/**
* Mock PRNG state.
*
*/
struct MockStateObject {
	uint32_t seed;
	uint32_t state;
};

/**
* Mock PRNG.
*
*/
static const struct BasePRNG mock_prng = {
	"mock",                                     // name
	1,                                          // min
	2147483647,                                 // max
	0.0,                                        // min (normalized)
	0.9999999995343387,                         // max (normalized)
	sizeof( struct MockStateObject ),           // state_size
	&next,                                      // next()
	&normalized,                                // normalized()
	&prng_free                                  // free()
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
	if ( obj == NULL || obj->prng != &mock_prng ) {
		return -1;
	}
	// Retrieve the PRNG state object:
	struct MockStateObject *so = (struct MockStateObject *)( obj->state );

	// Retrieve the current state:
	uint32_t state = so->state;

	// Generate the next "random" number:
	state += 1;

	// Update the PRNG state:
	so->state = state;

	// Set the output value:
	*out = (uint64_t)state;

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
	*out = ((double)state-1.0) / (obj->prng->max);

	return 0;
}

/**
* Frees a PRNG's allocated memory.
*
* @param obj  PRNG object
*/
static inline void prng_free( struct BasePRNGObject *obj ) {
	if ( obj == NULL || obj->prng != &mock_prng ) {
		return;
	}
	free( obj->state );
	free( obj );
}

/**
* Returns a pointer to a dynamically allocated mock PRNG.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
*
* @param seed  PRNG seed
* @return      pointer to a dynamically allocated PRNG or, if unable to allocate memory, a null pointer
*/
static struct BasePRNGObject * mock_prng_allocate( const int32_t seed ) {
	struct BasePRNGObject *obj = malloc( sizeof( struct BasePRNGObject ) );
	if ( obj == NULL ) {
		return NULL;
	}
	struct MockStateObject *state = malloc( sizeof( struct MockStateObject ) );
	if ( state == NULL ) {
		free( obj ); // prevent memory leaks
		return NULL;
	}
	state->seed = (uint32_t)seed;
	state->state = (uint32_t)seed;

	obj->prng = &mock_prng;
	obj->state = state;

	return obj;
}

/**
* Prints the TAP version.
*/
static void print_version( void ) {
	printf( "TAP version 13\n" );
}

/**
* Prints the TAP summary.
*
* @param total     total number of tests
* @param passing   total number of passing tests
*/
static void print_summary( int total, int passing ) {
	printf( "#\n" );
	printf( "1..%d\n", total ); // TAP plan
	printf( "# total %d\n", total );
	printf( "# pass  %d\n", passing );
	printf( "#\n" );
	printf( "# ok\n" );
}

/**
* Prints benchmarks results.
*
* @param elapsed   elapsed time in seconds
*/
static void print_results( double elapsed ) {
	double rate = (double)ITERATIONS / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", ITERATIONS );
	printf( "  elapsed: %0.9f\n", elapsed );
	printf( "  rate: %0.9f\n", rate );
	printf( "  ...\n" );
}

/**
* Returns a clock time.
*
* @return clock time
*/
static double tic( void ) {
	struct timeval now;
	gettimeofday( &now, NULL );
	return (double)now.tv_sec + (double)now.tv_usec/1.0e6;
}

/**
* Generates a random number on the interval [0,1).
*
* @return random number
*/
static double rand_double( void ) {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark1( void ) {
	double elapsed;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		v = stdlib_base_prng_next( obj );
		if ( v > (obj->prng->max) ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v > (obj->prng->max) ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark2( void ) {
	double elapsed;
	double t;
	double v;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		v = stdlib_base_prng_normalized( obj );
		if ( v != v ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark3( void ) {
	double elapsed;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_base_prng_min( obj );
		if ( v < (obj->prng->min) ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v < (obj->prng->min) ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark4( void ) {
	double elapsed;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_base_prng_max( obj );
		if ( v > (obj->prng->max) ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v > (obj->prng->max) ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark5( void ) {
	double elapsed;
	double v;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_base_prng_normalized_min( obj );
		if ( v != v ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark6( void ) {
	double elapsed;
	double v;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_base_prng_normalized_max( obj );
		if ( v != v ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark7( void ) {
	double elapsed;
	size_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_base_prng_state_size( obj );
		if ( v == 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v == 0 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark8( void ) {
	struct BasePRNGObject *out;
	double elapsed;
	double t;
	int i;

	struct BasePRNGObject *obj = mock_prng_allocate( 1 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		out = stdlib_base_prng_copy( obj );
		if ( out->prng != &mock_prng ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_prng_free( out );
		}
	}
	elapsed = tic() - t;

	if ( out->prng != &mock_prng ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_prng_free( obj );
	stdlib_base_prng_free( out );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark9( void ) {
	double elapsed;
	int8_t status;
	double t;
	int i;

	struct BasePRNGObject *src[] = {
		mock_prng_allocate( 1 ),
		mock_prng_allocate( 2 ),
		mock_prng_allocate( 3 )
	};
	struct BasePRNGObject *dest = mock_prng_allocate( 2 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		status = stdlib_base_prng_copy_state( dest, src[i%3] );
		if ( status != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( status != 0 ) {
		printf( "unexpected result\n" );
	}
	for ( i = 0; i < 3; i++ ) {
		stdlib_base_prng_free( src[i] );
	}
	stdlib_base_prng_free( dest );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark10( void ) {
	double elapsed;
	int8_t status;
	double t;
	int i;

	struct BasePRNGObject *src[] = {
		mock_prng_allocate( 1 ),
		mock_prng_allocate( 2 ),
		mock_prng_allocate( 3 )
	};
	struct BasePRNGObject *dest = mock_prng_allocate( 2 );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		status = stdlib_base_prng_set( dest, src[i%3]->state );
		if ( status != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( status != 0 ) {
		printf( "unexpected result\n" );
	}
	for ( i = 0; i < 3; i++ ) {
		stdlib_base_prng_free( src[i] );
	}
	stdlib_base_prng_free( dest );

	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int i;

	count = 0;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::next\n", NAME );
		elapsed = benchmark1();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::normalized\n", NAME );
		elapsed = benchmark2();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::min\n", NAME );
		elapsed = benchmark3();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::max\n", NAME );
		elapsed = benchmark4();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::normalized_min\n", NAME );
		elapsed = benchmark5();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::normalized_max\n", NAME );
		elapsed = benchmark6();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::state_size\n", NAME );
		elapsed = benchmark7();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::copy\n", NAME );
		elapsed = benchmark8();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::copy_state\n", NAME );
		elapsed = benchmark9();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::set\n", NAME );
		elapsed = benchmark10();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	print_summary( count, count );
}
