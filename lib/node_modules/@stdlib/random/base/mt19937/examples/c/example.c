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

#include "stdlib/random/base/mt19937.h"
#include "stdlib/random/base/shared.h"
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	int8_t status;
	uint64_t v;
	int32_t i;
	double d;

	// Define a seed:
	uint32_t seed[] = { 12345 };

	// Create a PRNG...
	struct BasePRNGObject *obj = stdlib_base_random_mt19937_allocate( seed, 1 );
	if ( obj == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}

	status = stdlib_base_random_mt19937_seed( obj, seed );
	if ( status != 0 ) {
		printf( "Unable to retrieve the PRNG seed.\n" );
		exit( 1 );
	}
	printf( "seed = %d\n", seed[ 0 ] );

	printf( "name = %s\n", obj->prng->name );
	printf( "min = %"PRIu64"\n", obj->prng->min );
	printf( "max = %"PRIu64"\n", obj->prng->max );

	printf( "\nPseudorandom integers...\n" );
	for ( i = 0; i < 10; i++ ) {
		status = obj->prng->next( obj, &v );
		if ( status != 0 ) {
			printf( "Unexpected result.\n" );
			exit( 1 );
		}
		printf( "%"PRIu64"\n", v );
	}

	printf( "\n" );
	printf( "min (normalized) = %0.16f\n", obj->prng->normalized_min );
	printf( "max (normalized) = %0.16f\n", obj->prng->normalized_max );

	printf( "\nPseudorandom doubles...\n" );
	for ( i = 0; i < 10; i++ ) {
		status = obj->prng->normalized( obj, &d );
		if ( status != 0 ) {
			printf( "Unexpected result.\n" );
			exit( 1 );
		}
		printf( "%0.16f\n", d );
	}

	stdlib_base_random_mt19937_free( obj );
}
