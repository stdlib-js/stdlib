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

#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/cgemv.h"
#include "stdlib/blas/ext/base/cfill.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "cgemv"
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
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param N            array dimension size
* @return elapsed time in seconds
*/
static double benchmark1( int iterations, int N ) {
	stdlib_complex64_t alpha;
	stdlib_complex64_t beta;
	stdlib_complex64_t one;
	double elapsed;
	float *A;
	float *x;
	float *y;
	double t;
	int i;

	A = (float *)malloc( N * N * 2 * sizeof( float ) );
	x = (float *)malloc( N * 2 * sizeof( float ) );
	y = (float *)malloc( N * 2 * sizeof( float ) );
	alpha = stdlib_complex64( 0.5f, 0.5f );
	beta = stdlib_complex64( 0.5f, -0.5f );
	one = stdlib_complex64( 1.0f, 1.0f );
	stdlib_strided_cfill( N * N, one, (stdlib_complex64_t *)A, 1 );
	stdlib_strided_cfill( N, one, (stdlib_complex64_t *)x, 1 );
	stdlib_strided_cfill( N, one, (stdlib_complex64_t *)y, 1 );
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		c_cgemv( CblasRowMajor, CblasNoTrans, N, N, alpha, (void *)A, N, (void *)x, 1, beta, (void *)y, 1 );
		if ( y[ i%N ] != y[ i%N ] ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( y[ i%N ] != y[ i%N ] ) {
		printf( "should not return NaN\n" );
	}
	free( A );
	free( x );
	free( y );
	return elapsed;
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param N            array dimension size
* @return elapsed time in seconds
*/
static double benchmark2( int iterations, int N ) {
	stdlib_complex64_t alpha;
	stdlib_complex64_t beta;
	stdlib_complex64_t one;
	double elapsed;
	float *A;
	float *x;
	float *y;
	double t;
	int i;

	A = (float *)malloc( N * N * 2 * sizeof( float ) );
	x = (float *)malloc( N * 2 * sizeof( float ) );
	y = (float *)malloc( N * 2 * sizeof( float ) );
	alpha = stdlib_complex64( 0.5f, 0.5f );
	beta = stdlib_complex64( 0.5f, -0.5f );
	one = stdlib_complex64( 1.0f, 1.0f );
	stdlib_strided_cfill( N * N, one, (stdlib_complex64_t *)A, 1 );
	stdlib_strided_cfill( N, one, (stdlib_complex64_t *)x, 1 );
	stdlib_strided_cfill( N, one, (stdlib_complex64_t *)y, 1 );
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		c_cgemv_ndarray( CblasNoTrans, N, N, alpha, (void *)A, N, 1, 0, (void *)x, 1, 0, beta, (void *)y, 1, 0 );
		if ( y[ i%N ] != y[ i%N ] ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( y[ i%N ] != y[ i%N ] ){
		printf( "should not return NaN\n" );
	}
	free( A );
	free( x );
	free( y );
	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int iter;
	int N;
	int i;
	int j;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	count = 0;
	for ( i = MIN; i <= MAX; i++ ) {
		N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
		iter = ITERATIONS / pow( 10, i-1 );
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::%s:size=%d\n", NAME, N*N );
			elapsed = benchmark1( iter, N );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::%s:ndarray:size=%d\n", NAME, N*N );
			elapsed = benchmark2( iter, N );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	print_summary( count, count );
}
