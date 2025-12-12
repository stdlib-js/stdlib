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

#include "stdlib/random/base/shared.h"
#include "stdlib/random/base/randu.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	int32_t i;
	double d;

	// Define the PRNG type:
	enum STDLIB_BASE_RANDOM_RANDU_PRNG prng = STDLIB_BASE_RANDOM_RANDU_MT19937;

	// Define a seed:
	uint32_t seed[] = { 12345 };

	// Create a PRNG...
	struct BasePRNGObject *obj = stdlib_base_random_randu_allocate( 3, prng, seed, 1 );
	if ( obj == NULL ) {
		fprintf( stderr, "Error allocating PRNG.\n" );
		exit( 1 );
	}

	printf( "name = %s\n", stdlib_base_prng_name( obj ) );

	printf( "\nPseudorandom doubles...\n" );
	for ( i = 0; i < 10; i++ ) {
		d = stdlib_base_random_randu( obj );
		if ( d != d ) {
			printf( "Unexpected result.\n" );
			exit( 1 );
		}
		printf( "%0.16f\n", d );
	}

	stdlib_base_random_randu_free( obj );
}
