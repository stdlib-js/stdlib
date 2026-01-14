/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
#include <math.h>
#include <boost/random/mersenne_twister.hpp>
#include <boost/random/uniform_int_distribution.hpp>
#include <boost/random/uniform_real_distribution.hpp>
#include <boost/math/special_functions/ellint_2.hpp>

using boost::random::uniform_real_distribution;
using boost::random::uniform_int_distribution;
using boost::random::mt19937;
using boost::math::ellint_2;

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
* Casts an array of integers to an array of doubles.
*
* @param out  output array
* @param x    input array
* @param len  array length
*/
void i32_to_f64( double *out, int *x, unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = (double) x[ i ];
	}
}

/**
* Casts an array of doubles to an array of integers.
*
* @param out  output array
* @param x    input array
* @param len  array length
*/
void f64_to_i32( int *out, double *x, unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = (int) x[ i ];
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
* @param f                    file to write to
* @param x                    first parameter
* @param y                    complete elliptic integral of the first kind
* @param len                  array length
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
* @param x     first parameter
* @param len   number of values in the domain
* @param name  output filename
*/
void generate( double *x, const unsigned int len, const char *name ) {
	double *y;
	double k;
	double m;
	double K;
	unsigned int i;
	FILE *f;

	// Allocate an output array:
	y = (double*) malloc( len * sizeof(double) );
	if ( y == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		m = x[ i ];

		if ( m >= 0.0 ) {
			// Boost uses a different convention for the argument so that we must use a square root:
			k = sqrt( m );
			y[ i ] = ellint_2( k );
		} else {
			/*
			* Boost uses k as the argument, which is the square root of m. That means negative values of m require computation in terms of imaginary values of k. Instead, Equation 17.4.17 from Abramowitz and Stegun give the transformation
			*
			*   F(phi|-m) = (1+m)^(-1/2) K(m/(1+m)) - (1+m)^(-1/2) F(pi/2-phi|m/(1+m))
			*
			* Since K(m) is equivalent to F(phi|m), the above reduces to
			*
			*   F(phi|-m) = (1+m)^(-1/2) K(m/(1+m))
			*
			* with which we can then compute values with a negative argument in terms of values with a positive argument.
			*/
			m = abs( m );
			k = sqrt( m/(1.0+m) );
			K = ellint_1( k );
			y[ i ] = ellint_2( k ) / sqrt( 1.0+m );
		}
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
	len = 4000;

	// Allocate arrays:
	x = (double *) malloc( len * sizeof(double) );
	if ( x == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	rand_array_f64( x, len, 0.0, 0.99 );
	generate( x, len, "medium_positive.json" );

	rand_array_f64( x, len, 0.99, 0.999999 );
	generate( x, len, "close_to_unity.json" );

	// Free allocated memory:
	free( x );

	return 0;
}
