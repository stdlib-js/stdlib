/**
* Benchmark `TODO`.
*/
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <sys/time.h>
#include "TODO.h"

#define NAME "TODO"
#define ITERATIONS 10000000
#define REPEATS 3
#define MIN 1
#define MAX 6

/**
* Prints the TAP version.
*/
void print_version() {
	printf( "TAP version 13\n" );
}

/**
* Prints the TAP summary.
*
* @param total     total number of tests
* @param passing   total number of passing tests
*/
void print_summary( int total, int passing ) {
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
void print_results( int iterations, double elapsed ) {
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
double tic() {
	struct timeval now;
	gettimeofday( &now, NULL );
	return (double)now.tv_sec + (double)now.tv_usec/1.0e6;
}

/**
* Generates a random double on the interval [0,1].
*
* @return random double
*/
double rand_double() {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param len          array length
* @return elapsed time in seconds
*/
double benchmark( int iterations, int len ) {
	double elapsed;
	double x[ len ];
	double y;
	double t;
	int i;

	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( rand_double()*20000.0 ) - 10000.0;
	}
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		y = TODO( x );
		if ( TODO ) {
			printf( "unexpected return value\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( TODO ) {
		printf( "unexpected return value\n" );
	}
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
			printf( "# c::native::%s:len=%d\n", NAME, len );
			elapsed = benchmark( iter, len );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	print_summary( count, count );
}
