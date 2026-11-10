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
#include <boost/math/special_functions/beta.hpp>

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
* @param a                    second parameter
* @param b                    third parameter
* @param lower_regularized    lower regularized incomplete beta function
* @param upper_regularized    upper regularized incomplete beta function
* @param lower_unregularized  lower unregularized incomplete beta function
* @param upper_unregularized  upper unregularized incomplete beta function
* @param len                  array length
*/
void write_data_as_json( FILE *f, const double *x, const double *a, const double *b, const double *lower_regularized, const double *upper_regularized, const double *lower_unregularized, const double *upper_unregularized, const unsigned int len ) {
	fprintf( f, "{" );
	write_named_array_f64( f, "x", x, len );
	fprintf( f, "," );
	write_named_array_f64( f, "a", a, len );
	fprintf( f, "," );
	write_named_array_f64( f, "b", b, len );
	fprintf( f, "," );
	write_named_array_f64( f, "lower_regularized", lower_regularized, len );
	fprintf( f, "," );
	write_named_array_f64( f, "upper_regularized", upper_regularized, len );
	fprintf( f, "," );
	write_named_array_f64( f, "lower_unregularized", lower_unregularized, len );
	fprintf( f, "," );
	write_named_array_f64( f, "upper_unregularized", upper_unregularized, len );
	fprintf( f, "}" );
}

/**
* Generates test fixtures.
*
* @param x     first parameter
* @param a     second parameter
* @param b     third parameter
* @param len   number of values in the domain
* @param name  output filename
*/
void generate( double *x, double *a, double *b, const unsigned int len, const char *name ) {
	double *upper_unregularized;
	double *lower_unregularized;
	double *upper_regularized;
	double *lower_regularized;
	unsigned int i;
	FILE *f;

	// Allocate an output array:
	lower_regularized = (double*) malloc( len * sizeof(double) );
	if ( lower_regularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	upper_regularized = (double*) malloc( len * sizeof(double) );
	if ( upper_regularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	lower_unregularized = (double*) malloc( len * sizeof(double) );
	if ( lower_unregularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	upper_unregularized = (double*) malloc( len * sizeof(double) );
	if ( upper_unregularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		double arg1 = a[ i ];
		double arg2 = b[ i ];
		double arg3 = x[ i ];
		lower_regularized[ i ] = boost::math::ibeta( arg1, arg2, arg3 );
		upper_regularized[ i ] = boost::math::ibetac( arg1, arg2, arg3 );
		lower_unregularized[ i ] = boost::math::beta( arg1, arg2, arg3 );
		upper_unregularized[ i ] = boost::math::betac( arg1, arg2, arg3 );
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json( f, x, a, b, lower_regularized, upper_regularized, lower_unregularized, upper_unregularized, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( lower_regularized );
	free( upper_regularized );
	free( lower_unregularized );
	free( upper_unregularized );
}

/**
* Main execution sequence.
*/
int main( void ) {
	unsigned int len;
	unsigned int idx;
	unsigned int i;
	unsigned int j;
	unsigned int k;
	double exponents[ 11 ];
	double asym_exp[ 4 ];
	double asym_muls[ 20 ];
	double asym_vals[ 40 ];
	double muls[ 11 ];
	int ab_ints[ 10 ];
	double *x;
	double *a;
	double *b;
	double a_val;
	double b_val;
	double x0;
	double xv;
	double lr;
	double ur;

	// Define the array length:
	len = 17600;

	// Allocate arrays:
	x = (double*) malloc( len * sizeof(double) );
	if ( x == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	a = (double*) malloc( len * sizeof(double) );
	if ( a == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	b = (double*) malloc( len * sizeof(double) );
	if ( b == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data for small a,b in [0,10]:
	rand_array_f64( a, 500, 0.001, 10.0 );
	rand_array_f64( b, 500, 0.001, 10.0 );
	rand_array_f64( x, 500, 0.0001, 1.0 );
	generate( x, a, b, 500, "small_range.json" );

	// Generate fixture data for medium a,b in [0,100]:
	rand_array_f64( a, 500, 0.001, 100.0 );
	rand_array_f64( b, 500, 0.001, 100.0 );
	rand_array_f64( x, 500, 0.0001, 1.0 );
	generate( x, a, b, 500, "medium_range.json" );

	// Generate fixture data for large range a,b ~ 10^-5 to 10^6:
	linspace_f64( exponents, 11, -5.0, 6.0 );
	idx = 0;
	for ( i = 0; i < 11; i++ ) {
		for ( j = 0; j < 11; j++ ) {
			for ( k = 0; k < 10; k++ ) {
				uniform_real_distribution<> gen( 1.0, 5.0 );
				uniform_real_distribution<> genx( 0.0001, 1.0 );
				a[ idx ] = gen( rng ) * pow( 10.0, exponents[ i ] );
				b[ idx ] = gen( rng ) * pow( 10.0, exponents[ j ] );
				x[ idx ] = genx( rng );
				idx++;
			}
		}
	}
	generate( x, a, b, idx, "large_range.json" );

	// Generate fixture data for integer a,b in {1,5,9,...,37}:
	linspace_i32( ab_ints, 10, 1, 37 );
	idx = 0;
	for ( i = 0; i < 10; i++ ) {
		for ( j = 0; j < 10; j++ ) {
			for ( k = 0; k < 10; k++ ) {
				uniform_real_distribution<> genx( 0.0001, 1.0 );
				a[ idx ] = (double) ab_ints[ i ];
				b[ idx ] = (double) ab_ints[ j ];
				x[ idx ] = genx( rng );
				idx++;
			}
		}
	}
	generate( x, a, b, idx, "int_values.json" );

	// Generate fixture data for large asymmetric a,b values:
	muls[ 0 ] = 0.9;
	muls[ 1 ] = 0.99;
	muls[ 2 ] = 0.9999;
	muls[ 3 ] = 0.99999;
	muls[ 4 ] = 0.999999;
	muls[ 5 ] = 0.99999999;
	muls[ 6 ] = 1.001;
	muls[ 7 ] = 1.1;
	muls[ 8 ] = 1.00001;
	muls[ 9 ] = 1.0000001;
	muls[ 10 ] = 1.000000001;
	for ( i = 0; i < 40; i++ ) {
		asym_vals[ i ] = pow( 2.0, 20.0 * i / 39.0 );
	}
	idx = 0;
	for ( i = 0; i < 40; i++ ) {
		for ( j = 0; j < 40; j++ ) {
			a_val = asym_vals[ i ];
			b_val = asym_vals[ j ];
			x0 = a_val / ( a_val + b_val );
			for ( k = 0; k < 11; k++ ) {
				xv = x0 * muls[ k ];
				if ( xv >= 1.0 || xv <= 0.0 ) {
					continue;
				}
				lr = boost::math::ibeta( a_val, b_val, xv );
				ur = boost::math::ibetac( a_val, b_val, xv );
				if ( !isfinite( lr ) || !isfinite( ur ) ) {
					continue;
				}
				if ( lr < 0.0 || lr > 1.0 || ur < 0.0 || ur > 1.0 ) {
					continue;
				}
				a[ idx ] = a_val;
				b[ idx ] = b_val;
				x[ idx ] = xv;
				idx++;
			}
		}
	}
	generate( x, a, b, idx, "large_asym.json" );

	// Generate fixture data for asymptotically large a,b values:
	linspace_f64( asym_exp, 4, 10.0, 18.0 );
	linspace_f64( asym_muls, 20, 1.0 - 10.0/2048.0, 1.0 + 10.0/2048.0 );
	idx = 0;
	for ( i = 0; i < 4; i++ ) {
		a_val = pow( 10.0, asym_exp[ i ] );
		for ( j = 0; j < 20; j++ ) {
			b_val = a_val * asym_muls[ j ];
			x0 = a_val / ( a_val + b_val );
			for ( k = 0; k < 20; k++ ) {
				xv = x0 * asym_muls[ k ];
				if ( xv >= 1.0 || xv <= 0.0 ) {
					continue;
				}
				lr = boost::math::ibeta( a_val, b_val, xv );
				ur = boost::math::ibetac( a_val, b_val, xv );
				if ( !isfinite( lr ) || !isfinite( ur ) ) {
					continue;
				}
				if ( lr < 0.0 || lr > 1.0 || ur < 0.0 || ur > 1.0 ) {
					continue;
				}
				a[ idx ] = a_val;
				b[ idx ] = b_val;
				x[ idx ] = xv;
				idx++;
			}
		}
	}
	generate( x, a, b, idx, "very_large_asym.json" );

	// Free allocated memory:
	free( x );
	free( a );
	free( b );

	return 0;
}
