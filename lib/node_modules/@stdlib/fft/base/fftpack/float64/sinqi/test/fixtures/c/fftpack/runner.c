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
* Generate FFTPACK test fixtures.
*
* ## Notes
*
* -   Run this script from the directory in which fixtures should be written.
*
*/

#include <stdlib.h>
#include <stdio.h>
#include <time.h>

/**
* Define prototypes for external functions.
*/
extern void sinqi( int n, double *wsave );

/**
* Generates a random number on the interval [0,1].
*
* @return random number
*/
double rand_double( void ) {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
}

/**
* Generates an array of pseudorandom integers drawn from a uniform distribution.
*
* ## Notes
*
* -   WARNING: the method used here is not particularly robust, as some integer values may be sampled more frequently than others.
*
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_i32( int *out, const unsigned int len, const int a, const int b ) {
	unsigned int i;
	unsigned int r;
	double delta;

	delta = (double)b - (double)a;

	for ( i = 0; i < len; i++ ) {
		r = (unsigned int)( delta * rand_double() ); // truncation
		out[ i ] = (int)( a + r );
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
* @param f          file to write to
* @param lengths    sequence lengths
* @param offsets    cosine and twiddle offsets
* @param cosines    cosine values
* @param twiddles   twiddle factors
* @param num        number of sequence lengths
* @param total      total number of cosine and twiddle values
*/
void write_data_as_json( FILE *f, const int *lengths, const int *offsets, const double *cosines, const double *twiddles, const unsigned int num, const unsigned int total ) {
	fprintf( f, "{" );
	write_named_array_i32( f, "lengths", lengths, num );
	fprintf( f, "," );
	write_named_array_i32( f, "offsets", offsets, num );
	fprintf( f, "," );
	write_named_array_f64( f, "cosines", cosines, total );
	fprintf( f, "," );
	write_named_array_f64( f, "twiddles", twiddles, total );
	fprintf( f, "}\n" );
}

/**
* Generates test fixtures.
*
* @param lengths  sequence lengths
* @param offsets  cosine and twiddle offsets into flat output array
* @param num      number of sequence lengths
* @param total    total number of cosine and twiddle values
* @param name     output filename
*/
void generate( const int *lengths, const int *offsets, const unsigned int num, const unsigned int total, const char *name ) {
	unsigned int i;
	unsigned int j;
	double *cosines;
	double *twiddles;
	double *wsave;
	FILE *f;
	int off;
	int n;

	// Allocate an output array for cosine values:
	cosines = (double*) malloc( total * sizeof(double) );
	if ( cosines == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Allocate an output array for twiddle factors:
	twiddles = (double*) malloc( total * sizeof(double) );
	if ( twiddles == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	for ( i = 0; i < num; i++ ) {
		n = lengths[ i ];
		wsave = (double*) calloc( 3*n + 15, sizeof(double) );
		if ( wsave == NULL ) {
			printf( "Error allocating memory.\n" );
			exit( 1 );
		}
		sinqi( n, wsave );

		// Copy cosine region into flat array (N values starting at wsave[0]):
		off = offsets[ i ];
		for ( j = 0; j < (unsigned int)n; j++ ) {
			cosines[ off + j ] = wsave[ j ];
		}

		// Copy twiddle region into flat array (N values starting at wsave[2*n]):
		off = offsets[ i ];
		for ( j = 0; j < (unsigned int)n; j++ ) {
			twiddles[ off + j ] = wsave[ ( 2*n ) + j ];
		}
		free( wsave );
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}

	// Write data as JSON:
	write_data_as_json( f, lengths, offsets, cosines, twiddles, num, total );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( cosines );
	free( twiddles );
}

/**
* Computes offsets into flat cosine and twiddle arrays for each sequence length.
*
* @param offsets  output array of offsets
* @param lengths  sequence lengths
* @param num      number of sequence lengths
* @return total number of cosine and twiddle values
*/
unsigned int compute_offsets( int *offsets, const int *lengths, const unsigned int num ) {
	unsigned int total;
	unsigned int i;

	total = 0;
	for ( i = 0; i < num; i++ ) {
		offsets[ i ] = total;
		total += lengths[ i ];
	}
	return total;
}

/**
* Main execution sequence.
*/
int main( void ) {
	unsigned int total;
	unsigned int num;
	int *lengths;
	int *offsets;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	// Define the number of sequence lengths per range:
	num = 10;

	// Allocate arrays:
	lengths = (int*) malloc( num * sizeof(int) );
	if ( lengths == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	offsets = (int*) malloc( num * sizeof(int) );
	if ( offsets == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	rand_array_i32( lengths, num, 2, 16 );
	total = compute_offsets( offsets, lengths, num );
	generate( lengths, offsets, num, total, "small.json" );

	rand_array_i32( lengths, num, 16, 128 );
	total = compute_offsets( offsets, lengths, num );
	generate( lengths, offsets, num, total, "medium.json" );

	rand_array_i32( lengths, num, 128, 1024 );
	total = compute_offsets( offsets, lengths, num );
	generate( lengths, offsets, num, total, "large.json" );

	// Free allocated memory:
	free( lengths );
	free( offsets );

	return 0;
}
