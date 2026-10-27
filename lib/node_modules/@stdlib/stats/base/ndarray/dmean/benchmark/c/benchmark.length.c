/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/stats/base/ndarray/dmean.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "dmean"
#define ITERATIONS 1000000
#define REPEATS 3
#define MIN 1
#define MAX 6

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
* @param iterations  number of iterations
* @param elapsed     elapsed time in seconds
*/
static void print_results( int iterations, double elapsed ) {
	double rate = (double)iterations / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", iterations );
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
* @param iterations   number of iterations
* @param len          array length
* @return             elapsed time in seconds
*/
static double benchmark( int iterations, int len ) {
	enum STDLIB_NDARRAY_INDEX_MODE imode;
	const struct ndarray *arrays[ 1 ];
	enum STDLIB_NDARRAY_ORDER order;
	int8_t submodes[ 1 ];
	int64_t strides[ 1 ];
	int64_t shape[ 1 ];
	int64_t nsubmodes;
	struct ndarray *x;
	int64_t offset;
	double elapsed;
	int64_t ndims;
	double *data;
	double v;
	double t;
	int i;

	ndims = 1;
	shape[ 0 ] = len;
	strides[ 0 ] = STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT;
	offset = 0;
	order = STDLIB_NDARRAY_ROW_MAJOR;
	imode = STDLIB_NDARRAY_INDEX_ERROR;
	submodes[ 0 ] = imode;
	nsubmodes = 1;

	data = (double *) malloc( len * sizeof( double ) );
	for ( i = 0; i < len; i++ ) {
		data[ i ] = ( rand_double() * 20000.0 ) - 10000.0;
	}
	// cppcheck-suppress invalidPointerCast
	x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT64, (uint8_t *)data, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
	arrays[ 0 ] = x;

	v = 0.0;
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		v = stdlib_stats_dmean( arrays );
		if ( v != v ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( v != v ) {
		printf( "should not return NaN\n" );
	}
	stdlib_ndarray_free( x );
	free( data );
	arrays[ 0 ] = NULL;

	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int iter;
	int len;
	int i;
	int j;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	count = 0;
	for ( i = MIN; i <= MAX; i++ ) {
		len = pow( 10, i );
		iter = ITERATIONS / pow( 10, i-1 );
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::%s:len=%d\n", NAME, len );
			elapsed = benchmark( iter, len );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	print_summary( count, count );
}
