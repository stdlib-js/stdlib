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
* Generate Cephes test fixtures.
*
* ## Notes
*
* -   Run this script from the directory in which fixtures should be written.
*
*/

#include <stdlib.h>
#include <stdio.h>

/**
* Define prototypes for external functions.
*/
extern double fresnl( double x, double *s, double *C );

/**
* Generates a random number on the interval [0,1].
*
* @return random number
*/
double rand_double() {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
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
	double delta;

	delta = b - a;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = a + ( rand_double()*delta );
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
* Writes data to a file as JSON.
*
* @param f    file to write to
* @param x    domain
* @param S    S(x)
* @param C    C(x)
* @param len  array length
*/
void write_data_as_json( FILE *f, const double *x, const double *S, const double *C, const unsigned int len ) {
	fprintf( f, "{" );
	write_named_array_f64( f, "x", x, len );
	fprintf( f, "," );
	write_named_array_f64( f, "S", S, len );
	fprintf( f, "," );
	write_named_array_f64( f, "C", C, len );
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
	double *S;
	double *C;
	FILE *f;

	// Allocate an output array:
	S = (double*) malloc( len * sizeof(double) );
	if ( S == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	C = (double*) malloc( len * sizeof(double) );
	if ( C == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		fresnl( x[i], S + i, C + i );
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json( f, x, S, C, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( S );
	free( C );
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
	rand_array_f64( x, len, 0.0, 10.0 );
	generate( x, len, "small.json" );

	rand_array_f64( x, len, 10.0, 100.0 );
	generate( x, len, "medium.json" );

	rand_array_f64( x, len, 100.0, 36973.0 );
	generate( x, len, "medium.json" );

	rand_array_f64( x, len, 40000.0, 60000.0 );
	generate( x, len, "huge.json" );

	// Free allocated memory:
	free( x );

	return 0;
}
