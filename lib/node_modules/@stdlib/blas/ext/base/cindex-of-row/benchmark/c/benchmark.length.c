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

#include "stdlib/blas/ext/base/cindex_of_row.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/blas/base/shared.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>
#include <stdint.h>

#define NAME "cindex_of_row"
#define ITERATIONS 10000000
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
* @param iterations   number of iterations
* @param elapsed      elapsed time in seconds
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
static float rand_float( void ) {
	int r = rand();
	return (float)r / ( (float)RAND_MAX + 1.0f );
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param N            number of elements along each dimension
* @return             elapsed time in seconds
*/
static double benchmark1( int iterations, int N ) {
	uint8_t *workspace;
	double elapsed;
	double t;
	float *A;
	float *x;
	int idx;
	int i;
	int j;

	A = (float *)malloc( (size_t)( N*N*2 ) * sizeof( float ) );
	x = (float *)malloc( (size_t)( N*2 ) * sizeof( float ) );
	workspace = (uint8_t *)malloc( (size_t)N * sizeof( uint8_t ) );
	for ( i = 0; i < N*N*2; i++ ) {
		A[ i ] = ( rand_float() * 20000.0f ) - 10000.0f;
	}
	for ( j = 0; j < N*2; j++ ) {
		x[ j ] = 20000.0f;
	}
	idx = -1;
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		idx = stdlib_strided_cindex_of_row( CblasRowMajor, N, N, (stdlib_complex64_t *)A, N, (stdlib_complex64_t *)x, 1, workspace, 1 );
		if ( idx < -2 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( idx < -2 ) {
		printf( "unexpected result\n" );
	}
	free( A );
	free( x );
	free( workspace );
	return elapsed;
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param N            number of elements along each dimension
* @return             elapsed time in seconds
*/
static double benchmark2( int iterations, int N ) {
	uint8_t *workspace;
	double elapsed;
	double t;
	float *A;
	float *x;
	int idx;
	int i;
	int j;

	A = (float *)malloc( (size_t)( N*N*2 ) * sizeof( float ) );
	x = (float *)malloc( (size_t)( N*2 ) * sizeof( float ) );
	workspace = (uint8_t *)malloc( (size_t)N * sizeof( uint8_t ) );
	for ( i = 0; i < N*N*2; i++ ) {
		A[ i ] = ( rand_float() * 20000.0f ) - 10000.0f;
	}
	for ( j = 0; j < N*2; j++ ) {
		x[ j ] = 20000.0f;
	}
	idx = -1;
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		idx = stdlib_strided_cindex_of_row_ndarray( N, N, (stdlib_complex64_t *)A, N, 1, 0, (stdlib_complex64_t *)x, 1, 0, workspace, 1, 0 );
		if ( idx < -2 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( idx < -2 ) {
		printf( "unexpected result\n" );
	}
	free( A );
	free( x );
	free( workspace );
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
	int N;
	int i;
	int j;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	count = 0;
	for ( i = MIN; i <= MAX; i++ ) {
		len = pow( 10, i );
		N = (int)sqrt( (double)len );
		iter = ITERATIONS / pow( 10, i-1 );
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::native::%s:square_matrix:order=row-major,size=%d\n", NAME, N*N );
			elapsed = benchmark1( iter, N );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::native::%s:ndarray:square_matrix:order=row-major,size=%d\n", NAME, N*N );
			elapsed = benchmark2( iter, N );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	print_summary( count, count );
}
