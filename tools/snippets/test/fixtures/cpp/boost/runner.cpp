/**
* Generate Boost test fixtures.
*
* ## Notes
*
* -   Run this script from the directory in which fixtures should be written.
*
*/
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <math.h>
#include <sys/time.h>
#include <boost/random/mersenne_twister.hpp>
#include <boost/random/uniform_int_distribution.hpp>
#include <boost/random/uniform_real_distribution.hpp>
// #include <boost/TODO/TODO.hpp>

using boost::random::uniform_real_distribution;
using boost::random::uniform_int_distribution;
using boost::random::mt19937;

// Define a macro to determine the length of a non-empty array:
#define NUMEL(x) ( sizeof(x) / sizeof( x[0] ) )

// Define a new pseudorandom number generator:
mt19937 rng;

/**
* Generates a linearly spaced numeric array of doubles.
*
* ## Notes
*
* -   Assumes that the output array has at least 2 elements.
* -   Output array is guaranteed to include both the start and end values.
*
*
* @param out    output array
* @param len    array length
* @param start  first value
* @param end    last value
*/
void linspace_f64( double *out, const unsigned int len, const double start, const double end ) {
	double incr;
	int i;

	incr = (end-start) / (len-1);
	for ( i = 0; i < len-1; i++ ) {
		out[ i ] = start + (incr*i);
	}
	out[ i ] = end;
}

/**
* Generates a linearly spaced numeric array of integers.
*
* ## Notes
*
* -   Assumes that the output array has at least 2 elements.
* -   Output array is guaranteed to include both the start and end values.
*
*
* @param out    output array
* @param len    array length
* @param start  first value
* @param end    last value
*/
void linspace_i32( int *out, const unsigned int len, const int start, const int end ) {
	int incr;
	int i;

	incr = (end-start) / (len-1);
	for ( i = 0; i < len-1; i++ ) {
		out[ i ] = start + (incr*i);
	}
	out[ i ] = end;
}

/**
* Generates an array of pseudorandom doubles drawn from a uniform distribution.
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_f64( double *out, const unsigned int len, const double a, const double b ) {
	int i;

	// Define a uniform distribution for generating pseudorandom numbers:
	uniform_real_distribution<> randu( a, b );

	for ( i = 0; i < len; i++ ) {
		out[ i ] = randu( rng );
	}
}

/**
* Generates an array of pseudorandom integers drawn from a uniform distribution.
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_i32( int *out, const unsigned int len, const int a, const int b ) {
	int i;

	// Define a uniform distribution for generating pseudorandom numbers:
	uniform_int_distribution<> randi( a, b );

	for ( i = 0; i < len; i++ ) {
		out[ i ] = randi( rng );
	}
}

/**
* Writes an array of doubles to a file as a series of comma-separated values.
*
* @param f    file to write to
* @param x    array of doubles
* @param len  array length
*/
void write_array_f64( FILE *f, const double *x, const unsigned int len ) {
	int i;

	for ( i = 0; i < len; i++ ) {
		fprintf( f, "%.17g", x[ i ] );
		if ( i < len-1 ) {
			fprintf( f, "," );
		}
	}
}

/**
* Writes an array of integers to a file as a series of comma-separated values.
*
* @param f    file to write to
* @param x    array of integers
* @param len  array length
*/
void write_array_i32( FILE *f, const int *x, const unsigned int len ) {
	int i;

	for ( i = 0; i < len; i++ ) {
		fprintf( f, "%d", x[ i ] );
		if ( i < len-1 ) {
			fprintf( f, "," );
		}
	}
}

/**
* Writes a named array of doubles to a file as JSON.
*
* @param f     file to write to
* @param name  array name
* @param x     data
* @param len   array length
*/
void write_named_array_f64( FILE *f, const char *name, const double *x, const unsigned int len ) {
	fprintf( f, "\"%s\":[", name );
	write_array_f64( f, x, len );
	fprintf( f, "]" );
}

/**
* Writes a named array of integers to a file as JSON.
*
* @param f     file to write to
* @param name  array name
* @param x     data
* @param len   array length
*/
void write_named_array_i32( FILE *f, const char *name, const int *x, const unsigned int len ) {
	fprintf( f, "\"%s\":[", name );
	write_array_i32( f, x, len );
	fprintf( f, "]" );
}

/**
* Writes data to a file as JSON.
*
* ## Notes
*
* -   This function SHOULD be tailored to the input data (e.g., input types, output types, number of arguments, etc) and may vary from use case to use case.
*
*
* @param f    file to write to
* @param x    domain
* @param y    results
* @param len  array length
*/
void write_data_as_json( FILE *f, const double *x, const double *y, const unsigned int len ) {
	fprintf( f, "{" );
	write_named_array_f64( f, "x", x, len );
	fprintf( f, "," );
	write_named_array_f64( f, "y", y, len ); // TODO: update or erase this comment
	fprintf( f, "}" );
}

/**
* Generates test fixtures.
*
* @param x     domain
* @param len   number of values in the domain
* @param name  output filename
*/
void generate( double *x, const unsigned int len, const char *name ) {
	double *y;
	FILE *f;
	int i;

	// Allocate an output array:
	y = (double*) malloc( len * sizeof(double) ); // TODO

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		y[ i ] = 3.14; // TODO
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON...
	write_data_as_json( f, x, y, len ); // TODO: tailor to fixture data

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( y );
}

/**
* Main execution sequence.
*/
int main( void ) {
	double x[ 1000 ]; // TODO: tailor to fixture data
	int len;

	// Henceforth, we must explicitly pass the length to internal functions:
	len = NUMEL( x );

	// Generate fixture data:
	rand_array_f64( x, len, 0.0, 1.0 );// TODO
	generate( x, len, "TODO.json" );

	return 0;
}
