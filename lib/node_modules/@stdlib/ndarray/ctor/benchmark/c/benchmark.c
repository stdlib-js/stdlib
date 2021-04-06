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
* Benchmark `ndarray`.
*/
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "ndarray"
#define ITERATIONS 1000000
#define REPEATS 3

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
* @param elapsed   elapsed time in seconds
*/
void print_results( double elapsed ) {
	double rate = (double)ITERATIONS / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", ITERATIONS );
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
* @return elapsed time in seconds
*/
double benchmark1() {
	double elapsed;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
		if ( arr == NULL || arr->ndims != 2 ) {
			printf( "unexpected result\n" );
			break;
		}
		if ( i < ITERATIONS-1 ) {
			stdlib_ndarray_free( arr );
		}
	}
	elapsed = tic() - t;

	if ( arr == NULL || arr->ndims != 2 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark2() {
	double elapsed;
	int64_t v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_bytelength( arr );
		if ( v != 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark3() {
	double elapsed;
	uint8_t *v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		buffer[ 0 ] = i % 255;
		v = stdlib_ndarray_data( arr );
		if ( v[ 0 ] != (i%255) ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v[ 0 ] != ((i-1)%255) ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark4() {
	enum STDLIB_NDARRAY_DTYPE v;
	double elapsed;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_dtype( arr );
		if ( v != STDLIB_NDARRAY_UINT8 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != STDLIB_NDARRAY_UINT8 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark5() {
	double elapsed;
	int64_t v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		v = stdlib_ndarray_flags( arr );
		if ( v < 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v < 0 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark6() {
	double elapsed;
	int64_t v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_length( arr );
		if ( v != (arr->length) ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != (arr->length) ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark7() {
	double elapsed;
	int64_t v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_ndims( arr );
		if ( v != ndims ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != ndims ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark8() {
	double elapsed;
	int64_t v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_offset( arr );
		if ( v != offset ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != offset ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark9() {
	enum STDLIB_NDARRAY_ORDER v;
	double elapsed;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_order( arr );
		if ( v != STDLIB_NDARRAY_ROW_MAJOR ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != STDLIB_NDARRAY_ROW_MAJOR ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark10() {
	double elapsed;
	int64_t *v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_shape( arr );
		if ( v[ 0 ] != shape[ 0 ] || v[ 1 ] != shape[ 1 ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v[ 0 ] != shape[ 0 ] || v[ 1 ] != shape[ 1 ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark11() {
	double elapsed;
	int64_t *v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_strides( arr );
		if ( v[ 0 ] != strides[ 0 ] || v[ 1 ] != strides[ 1 ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v[ 0 ] != strides[ 0 ] || v[ 1 ] != strides[ 1 ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark12() {
	double elapsed;
	int64_t sub[1];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( rand_double()*shape[0] );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v != buffer[ sub[0] ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v != buffer[ sub[0] ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark13() {
	double elapsed;
	int64_t sub[1];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*20.0)-10.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark14() {
	double elapsed;
	int64_t sub[1];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*20.0)-10.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 ) {
		printf( "unexpected result\n" );
	} else if ( sub[0] < 0 && v != buffer[ 0 ] ) {
		printf( "unexpected result when negative subscript: %u != %u\n", buffer[ 0 ], v );
	} else if ( sub[0] >= shape[0] && v != buffer[ shape[0]-1 ] ) {
		printf( "unexpected result when subscript exceeds dimensions: %u != %u\n", buffer[ shape[0]-1 ], v );
	} else if ( sub[0] >= 0 && sub[0] < shape[0] && v != buffer[ sub[0] ] ) {
		printf( "unexpected result for normal subscript: %u != %u\n", buffer[ sub[0] ], v );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark15() {
	double elapsed;
	int64_t sub[2];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 1 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( rand_double()*shape[0] );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark16() {
	double elapsed;
	int64_t sub[2];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 1 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark17() {
	double elapsed;
	int64_t sub[2];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 1 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark18() {
	double elapsed;
	int64_t sub[3];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 3;
	int64_t shape[] = { 1, 3, 2 };
	int64_t strides[] = { 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 2 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 1 ] = (int64_t)( (rand_double()*shape[1])-0.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark19() {
	double elapsed;
	int64_t sub[3];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 3;
	int64_t shape[] = { 1, 3, 2 };
	int64_t strides[] = { 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 2 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 1 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark20() {
	double elapsed;
	int64_t sub[3];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 3;
	int64_t shape[] = { 1, 3, 2 };
	int64_t strides[] = { 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 2 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 1 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark21() {
	double elapsed;
	int64_t sub[4];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 4;
	int64_t shape[] = { 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 3 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 2 ] = (int64_t)( (rand_double()*shape[2])-0.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark22() {
	double elapsed;
	int64_t sub[4];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 4;
	int64_t shape[] = { 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 3 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 2 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark23() {
	double elapsed;
	int64_t sub[4];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 4;
	int64_t shape[] = { 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 3 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 2 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark24() {
	double elapsed;
	int64_t sub[5];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 5;
	int64_t shape[] = { 1, 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 2 ] = 0;
	sub[ 4 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 3 ] = (int64_t)( (rand_double()*shape[3])-0.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark25() {
	double elapsed;
	int64_t sub[5];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 5;
	int64_t shape[] = { 1, 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 2 ] = 0;
	sub[ 4 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 3 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark26() {
	double elapsed;
	int64_t sub[5];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 5;
	int64_t shape[] = { 1, 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 2 ] = 0;
	sub[ 4 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 3 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_get( arr, sub, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark27() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*shape[0])-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark28() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result: idx=%lld, v=%u\n", idx, v );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark29() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*30.0)-15.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark30() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark31() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 1, 3 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark32() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark33() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -1, -3 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark34() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, 1 };
	int64_t offset = 4;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark35() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 1, -3 };
	int64_t offset = 3;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		s = stdlib_ndarray_iget( arr, idx, (void *)&v );
		if ( s != 0 || v > 6 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || v > 6 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark36() {
	double elapsed;
	int64_t sub[1];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( rand_double()*shape[0] );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 || buffer[ sub[0] ] != v ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || buffer[ sub[0] ] != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark37() {
	double elapsed;
	int64_t sub[1];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark38() {
	double elapsed;
	int64_t sub[1];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 ) {
		printf( "unexpected result\n" );
	} else if ( sub[0] < 0 && buffer[ 0 ] != v ) {
		printf( "unexpected result when negative subscript: %u != %u\n", buffer[ 0 ], v );
	} else if ( sub[0] >= shape[0] && buffer[ shape[0]-1 ] != v ) {
		printf( "unexpected result when subscript exceeds dimensions: %u != %u\n", buffer[ shape[0]-1 ], v );
	} else if ( sub[0] >= 0 && sub[0] < shape[0] && buffer[ sub[0] ] != v ) {
		printf( "unexpected result for normal subscript: %u != %u\n", buffer[ sub[0] ], v );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark39() {
	double elapsed;
	int64_t sub[2];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 1 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( rand_double()*shape[0] );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark40() {
	double elapsed;
	int64_t sub[2];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 1 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark41() {
	double elapsed;
	int64_t sub[2];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 1 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 0 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark42() {
	double elapsed;
	int64_t sub[3];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 3;
	int64_t shape[] = { 1, 3, 2 };
	int64_t strides[] = { 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 2 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 1 ] = (int64_t)( rand_double()*shape[1] );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark43() {
	double elapsed;
	int64_t sub[3];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 3;
	int64_t shape[] = { 1, 3, 2 };
	int64_t strides[] = { 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 2 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 1 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark44() {
	double elapsed;
	int64_t sub[3];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 3;
	int64_t shape[] = { 1, 3, 2 };
	int64_t strides[] = { 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 2 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 1 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark45() {
	double elapsed;
	int64_t sub[4];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 4;
	int64_t shape[] = { 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 3 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 2 ] = (int64_t)( rand_double()*shape[2] );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark46() {
	double elapsed;
	int64_t sub[4];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 4;
	int64_t shape[] = { 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 3 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 2 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark47() {
	double elapsed;
	int64_t sub[4];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 4;
	int64_t shape[] = { 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 3 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 2 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark48() {
	double elapsed;
	int64_t sub[5];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 5;
	int64_t shape[] = { 1, 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 2 ] = 0;
	sub[ 4 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 3 ] = (int64_t)( rand_double()*shape[3] );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark49() {
	double elapsed;
	int64_t sub[5];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 5;
	int64_t shape[] = { 1, 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 2 ] = 0;
	sub[ 4 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 3 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark50() {
	double elapsed;
	int64_t sub[5];
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 5;
	int64_t shape[] = { 1, 1, 1, 3, 2 };
	int64_t strides[] = { 6, 6, 6, 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	sub[ 0 ] = 0;
	sub[ 1 ] = 0;
	sub[ 2 ] = 0;
	sub[ 4 ] = 1;

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		sub[ 3 ] = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_set( arr, sub, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_get_ptr( arr, sub )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark51() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*shape[0])-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 || buffer[ idx ] != v ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || buffer[ idx ] != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark52() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_WRAP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx)) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark53() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 1;
	int64_t shape[] = { 6 };
	int64_t strides[] = { 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_CLAMP;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*30.0)-15.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 ) {
		printf( "unexpected result\n" );
	} else if ( idx < 0 && buffer[ 0 ] != v ) {
		printf( "unexpected result when negative linear index: %u != %u\n", buffer[ 0 ], v );
	} else if ( idx >= shape[0] && buffer[ shape[0]-1 ] != v ) {
		printf( "unexpected result when linear index exceeds dimensions: %u != %u\n", buffer[ shape[0]-1 ], v );
	} else if ( idx >= 0 && idx < shape[0] && buffer[ idx ] != v ) {
		printf( "unexpected result for normal linear index: %u != %u\n", buffer[ idx ], v );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark54() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark55() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 1, 3 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark56() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx)) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark57() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -1, -3 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark58() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, 1 };
	int64_t offset = 4;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark59() {
	double elapsed;
	int64_t idx;
	uint8_t v;
	double t;
	int8_t s;
	int i;

	uint8_t buffer[] = { 1, 2, 3, 4, 5, 6 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 1, -3 };
	int64_t offset = 3;
	int64_t nsubmodes = 1;
	enum STDLIB_NDARRAY_INDEX_MODE mode = STDLIB_NDARRAY_INDEX_ERROR;
	int8_t submodes[] = { mode };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_COLUMN_MAJOR, mode, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		idx = (int64_t)( (rand_double()*6.0)-0.0 );
		v = (uint8_t)( rand_double()*255.0 );
		s = stdlib_ndarray_iset( arr, idx, (void *)&v );
		if ( s != 0 ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( s != 0 || *(stdlib_ndarray_iget_ptr( arr, idx )) != v ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark60() {
	double elapsed;
	int64_t v;
	int64_t j;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		j = (int64_t)( rand_double()*ndims );
		v = stdlib_ndarray_dimension( arr, j );
		if ( v != shape[ j ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != shape[ j ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark61() {
	double elapsed;
	int64_t v;
	int64_t j;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		j = (int64_t)( rand_double()*ndims );
		v = stdlib_ndarray_stride( arr, j );
		if ( v != strides[ j ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != strides[ j ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark62() {
	enum STDLIB_NDARRAY_INDEX_MODE v;
	double elapsed;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_index_mode( arr );
		if ( v != STDLIB_NDARRAY_INDEX_ERROR ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != STDLIB_NDARRAY_INDEX_ERROR ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark63() {
	double elapsed;
	int8_t *v;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { 2, 1 };
	int64_t offset = 0;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		// NOTE: this is likely to be optimized away by a modern compiler, making this benchmark meaningless.
		v = stdlib_ndarray_submodes( arr );
		if ( v[ 0 ] != submodes[ 0 ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v[ 0 ] != submodes[ 0 ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
double benchmark64() {
	enum STDLIB_NDARRAY_INDEX_MODE v;
	double elapsed;
	int64_t j;
	double t;
	int i;

	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0 };
	int64_t ndims = 2;
	int64_t shape[] = { 3, 2 };
	int64_t strides[] = { -2, -1 };
	int64_t offset = 5;
	int64_t nsubmodes = 1;
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

	struct ndarray *arr = stdlib_ndarray_allocate( STDLIB_NDARRAY_UINT8, buffer, ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, nsubmodes, submodes );
	if ( arr == NULL ) {
		printf( "unable to allocate memory\n" );
		exit( 1 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		j = (int64_t)( rand_double()*ndims );
		v = stdlib_ndarray_submode( arr, j );
		if ( v != submodes[ 0 ] ) {
			printf( "unexpected result\n" );
			break;
		}
	}
	elapsed = tic() - t;

	if ( v != submodes[ 0 ] ) {
		printf( "unexpected result\n" );
	}
	stdlib_ndarray_free( arr );

	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int i;

	count = 0;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::instantiation\n", NAME );
		elapsed = benchmark1();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:byteLength\n", NAME );
		elapsed = benchmark2();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:data\n", NAME );
		elapsed = benchmark3();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:dtype\n", NAME );
		elapsed = benchmark4();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:flags\n", NAME );
		elapsed = benchmark5();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:length\n", NAME );
		elapsed = benchmark6();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:ndims\n", NAME );
		elapsed = benchmark7();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:offset\n", NAME );
		elapsed = benchmark8();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:order\n", NAME );
		elapsed = benchmark9();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:shape\n", NAME );
		elapsed = benchmark10();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:strides\n", NAME );
		elapsed = benchmark11();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:get:mode=error\n", NAME );
		elapsed = benchmark12();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:get:mode=wrap\n", NAME );
		elapsed = benchmark13();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:get:mode=clamp\n", NAME );
		elapsed = benchmark14();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d:get:mode=error\n", NAME );
		elapsed = benchmark15();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d:get:mode=wrap\n", NAME );
		elapsed = benchmark16();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d:get:mode=clamp\n", NAME );
		elapsed = benchmark17();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::3d:get:mode=error\n", NAME );
		elapsed = benchmark18();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::3d:get:mode=wrap\n", NAME );
		elapsed = benchmark19();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::3d:get:mode=clamp\n", NAME );
		elapsed = benchmark20();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::4d:get:mode=error\n", NAME );
		elapsed = benchmark21();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::4d:get:mode=wrap\n", NAME );
		elapsed = benchmark22();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::4d:get:mode=clamp\n", NAME );
		elapsed = benchmark23();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::5d:get:mode=error\n", NAME );
		elapsed = benchmark24();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::5d:get:mode=wrap\n", NAME );
		elapsed = benchmark25();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::5d:get:mode=clamp\n", NAME );
		elapsed = benchmark26();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:iget:mode=error\n", NAME );
		elapsed = benchmark27();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:iget:mode=wrap\n", NAME );
		elapsed = benchmark28();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:iget:mode=clamp\n", NAME );
		elapsed = benchmark29();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_positive_strides:iget:mode=error,order=row-major\n", NAME );
		elapsed = benchmark30();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_positive_strides:iget:mode=error,order=column-major\n", NAME );
		elapsed = benchmark31();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_negative_strides:iget:mode=error,order=row-major\n", NAME );
		elapsed = benchmark32();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_negative_strides:iget:mode=error,order=column-major\n", NAME );
		elapsed = benchmark33();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,mixed_sign_strides:iget:mode=error,order=row-major\n", NAME );
		elapsed = benchmark34();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,mixed_sign_strides:iget:mode=error,order=column-major\n", NAME );
		elapsed = benchmark35();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:set:mode=error\n", NAME );
		elapsed = benchmark36();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:set:mode=wrap\n", NAME );
		elapsed = benchmark37();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:set:mode=clamp\n", NAME );
		elapsed = benchmark38();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d:set:mode=error\n", NAME );
		elapsed = benchmark39();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d:set:mode=wrap\n", NAME );
		elapsed = benchmark40();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d:set:mode=clamp\n", NAME );
		elapsed = benchmark41();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::3d:set:mode=error\n", NAME );
		elapsed = benchmark42();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::3d:set:mode=wrap\n", NAME );
		elapsed = benchmark43();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::3d:set:mode=clamp\n", NAME );
		elapsed = benchmark44();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::4d:set:mode=error\n", NAME );
		elapsed = benchmark45();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::4d:set:mode=wrap\n", NAME );
		elapsed = benchmark46();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::4d:set:mode=clamp\n", NAME );
		elapsed = benchmark47();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::5d:set:mode=error\n", NAME );
		elapsed = benchmark48();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::5d:set:mode=wrap\n", NAME );
		elapsed = benchmark49();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::5d:set:mode=clamp\n", NAME );
		elapsed = benchmark50();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:iset:mode=error\n", NAME );
		elapsed = benchmark51();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:iset:mode=wrap\n", NAME );
		elapsed = benchmark52();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::1d:iset:mode=clamp\n", NAME );
		elapsed = benchmark53();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_positive_strides:iset:mode=error,order=row-major\n", NAME );
		elapsed = benchmark54();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_positive_strides:iset:mode=error,order=column-major\n", NAME );
		elapsed = benchmark55();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_negative_strides:iset:mode=error,order=row-major\n", NAME );
		elapsed = benchmark56();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,all_negative_strides:iset:mode=error,order=column-major\n", NAME );
		elapsed = benchmark57();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,mixed_sign_strides:iset:mode=error,order=row-major\n", NAME );
		elapsed = benchmark58();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::2d,mixed_sign_strides:iset:mode=error,order=column-major\n", NAME );
		elapsed = benchmark59();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:dimension\n", NAME );
		elapsed = benchmark60();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:stride\n", NAME );
		elapsed = benchmark61();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:index_mode\n", NAME );
		elapsed = benchmark62();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:submodes\n", NAME );
		elapsed = benchmark63();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	for ( i = 0; i < REPEATS; i++ ) {
		count += 1;
		printf( "# c::native::%s::get:submode\n", NAME );
		elapsed = benchmark64();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", count );
	}
	print_summary( count, count );
}
