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
#include "stdlib/random/base/shared.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "base/minstd-shuffle"
#define ITERATIONS 1000000
#define REPEATS 3

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
	double t;
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		obj = stdlib_base_random_minstd_shuffle_allocate( i+1 );
		if ( obj == NULL || obj->prng->min != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_minstd_shuffle_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || obj->prng->min != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_minstd_shuffle_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark2( void ) {
	double elapsed;
	int8_t status;
	uint64_t max;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}
	max = obj->prng->max;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		status = obj->prng->next( obj, &v );
		if ( status != 0 || v > max ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( status != 0 || v > max ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_minstd_shuffle_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark3( void ) {
	double elapsed;
	int8_t status;
	double v;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		status = obj->prng->normalized( obj, &v );
		if ( status != 0 || v != v ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( status != 0 || v != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_minstd_shuffle_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark4( void ) {
	double elapsed;
	int8_t status;
	int32_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		status = stdlib_base_random_minstd_shuffle_seed( obj, &v );
		if ( status != 0 || v != 12345 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( status != 0 || v != 12345 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_minstd_shuffle_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark5( void ) {
	double elapsed;
	void *state;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		state = stdlib_base_random_minstd_shuffle_state( obj );
		if ( state == NULL ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			free( state );
		}
	}
	elapsed = tic() - t;

	if ( state == NULL ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_minstd_shuffle_free( obj );
	free( state );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark6( void ) {
	stdlib_base_random_minstd_shuffle_state_t *states[2];
	double elapsed;
	int8_t status;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_minstd_shuffle_allocate( 12345 );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}
	for ( i = 0; i < 2; i++ ) {
		states[i] = (stdlib_base_random_minstd_shuffle_state_t *)malloc( sizeof( stdlib_base_random_minstd_shuffle_state_t ) );
		states[i]->seed = 12345;
		states[i]->state[ 0 ] = 12345;
		states[i]->state[ 1 ] = 12345;
		states[i]->table[ 0 ] = 1;
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		status = stdlib_base_random_minstd_shuffle_set( obj, (void *)states[i%2] );
		if ( status != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( status != 0 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_minstd_shuffle_free( obj );
	for ( i = 0; i < 2; i++ ) {
		free( states[i] );
	}

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
		printf( "# c::%s::instantiation\n", NAME );
		elapsed = benchmark1();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s:next\n", NAME );
		elapsed = benchmark2();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s:normalized\n", NAME );
		elapsed = benchmark3();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::get:seed\n", NAME );
		elapsed = benchmark4();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::get:state\n", NAME );
		elapsed = benchmark5();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::set:state\n", NAME );
		elapsed = benchmark6();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	print_summary( count, count );
}
