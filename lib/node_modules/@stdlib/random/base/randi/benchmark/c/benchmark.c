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
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "base/randi"
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
		obj = stdlib_base_random_randi_allocate( 0 );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

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
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		obj = stdlib_base_random_randi_allocate( 1, STDLIB_BASE_RANDOM_RANDI_MT19937 );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark3( void ) {
	uint32_t seed[1];
	double elapsed;
	double t;
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		seed[ 0 ] = i + 1;
		obj = stdlib_base_random_randi_allocate( 3, STDLIB_BASE_RANDOM_RANDI_MT19937, seed, 1 );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark4( void ) {
	double elapsed;
	double t;
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		obj = stdlib_base_random_randi_allocate( 1, STDLIB_BASE_RANDOM_RANDI_MINSTD );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark5( void ) {
	uint32_t seed;
	double elapsed;
	double t;
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		seed = i + 1;
		obj = stdlib_base_random_randi_allocate( 2, STDLIB_BASE_RANDOM_RANDI_MINSTD, seed );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark6( void ) {
	double elapsed;
	double t;
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		obj = stdlib_base_random_randi_allocate( 1, STDLIB_BASE_RANDOM_RANDI_MINSTD_SHUFFLE );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark7( void ) {
	uint32_t seed;
	double elapsed;
	double t;
	int i;

	struct BasePRNGObject *obj;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		seed = i + 1;
		obj = stdlib_base_random_randi_allocate( 2, STDLIB_BASE_RANDOM_RANDI_MINSTD_SHUFFLE, seed );
		if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_base_random_randi_free( obj );
		}
	}
	elapsed = tic() - t;

	if ( obj == NULL || stdlib_base_prng_min( obj ) != 1 ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark8( void ) {
	double elapsed;
	uint64_t max;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_randi_allocate( 1, STDLIB_BASE_RANDOM_RANDI_MT19937 );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}
	max = stdlib_base_prng_max( obj );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		v = stdlib_base_random_randi( obj );
		if ( v > max ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v > max ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark9( void ) {
	double elapsed;
	uint64_t max;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_randi_allocate( 1, STDLIB_BASE_RANDOM_RANDI_MINSTD );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}
	max = stdlib_base_prng_max( obj );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		v = stdlib_base_random_randi( obj );
		if ( v > max ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v > max ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark10( void ) {
	double elapsed;
	uint64_t max;
	uint64_t v;
	double t;
	int i;

	struct BasePRNGObject *obj = stdlib_base_random_randi_allocate( 1, STDLIB_BASE_RANDOM_RANDI_MINSTD_SHUFFLE );
	if ( obj == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}
	max = stdlib_base_prng_max( obj );

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		v = stdlib_base_random_randi( obj );
		if ( v > max ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v > max ) {
		printf( "unexpected result\n" );
	}
	stdlib_base_random_randi_free( obj );

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
		printf( "# c::%s::instantiation,default\n", NAME );
		elapsed = benchmark1();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::instantiation,mt19937\n", NAME );
		elapsed = benchmark2();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::instantiation,mt19937,seed\n", NAME );
		elapsed = benchmark3();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::instantiation,minstd\n", NAME );
		elapsed = benchmark4();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::instantiation,minstd,seed\n", NAME );
		elapsed = benchmark5();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::instantiation,minstd-shuffle\n", NAME );
		elapsed = benchmark6();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::instantiation,minstd-shuffle,seed\n", NAME );
		elapsed = benchmark7();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::mt19937:next\n", NAME );
		elapsed = benchmark8();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::minstd:next\n", NAME );
		elapsed = benchmark9();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::%s::minstd-shuffle:next\n", NAME );
		elapsed = benchmark10();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	print_summary( count, count );
}
