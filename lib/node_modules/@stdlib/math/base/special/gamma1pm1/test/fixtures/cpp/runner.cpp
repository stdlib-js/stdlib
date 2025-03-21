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
#include <boost/random/mersenne_twister.hpp>
#include <boost/random/uniform_int_distribution.hpp>
#include <boost/random/uniform_real_distribution.hpp>
#include <boost/math/special_functions/gamma.hpp>

using boost::random::uniform_real_distribution;
using boost::random::uniform_int_distribution;
using boost::random::mt19937;

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
	unsigned int i;
	double incr;

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
	unsigned int i;
	int incr;

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
	unsigned int i;

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
	unsigned int i;

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
	unsigned int i;

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
	unsigned int i;

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
	write_named_array_f64( f, "expected", y, len );
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
	unsigned int i;
	double *y;
	FILE *f;

	// Allocate an output array:
	y = (double*) malloc( len * sizeof(double) );
	if ( y == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		y[ i ] = boost::math::tgamma1pm1( x[ i ] );
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json( f, x, y, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( y );
}

/**
* Main execution sequence.
*/
int main( void ) {
	unsigned int len;
	double *x;

	// Define the array length:
	len = 1000;

	// Allocate an array:
	x = (double*) malloc( len * sizeof(double) );
	if ( x == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	linspace_f64( x, len, -0.5, 0.0 );
	generate( x, len, "small_negative.json" );

	linspace_f64( x, len, 0.0, 2.0 );
	generate( x, len, "small_positive.json" );

	// Free allocated memory:
	free( x );

	return 0;
}
