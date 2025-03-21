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
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	// Create a PRNG:
	const struct BasePRNG prng = {
		"minstd",
		1,
		2147483646,
		0.0,
		0.9999999995343387,
		2,
		NULL,
		NULL,
		NULL
	};

	// Create a PRNG object:
	struct BasePRNGObject *obj = malloc( sizeof( struct BasePRNGObject ) );
	if ( obj == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}
	obj->prng = &prng;
	obj->state = NULL;

	printf( "name = %s\n", stdlib_base_prng_name( obj ) );
	printf( "min = %"PRIu64"\n", stdlib_base_prng_min( obj ) );
	printf( "max = %"PRIu64"\n", stdlib_base_prng_max( obj ) );
	printf( "min (normalized) = %0.16f\n", stdlib_base_prng_normalized_min( obj ) );
	printf( "max (normalized) = %0.16f\n", stdlib_base_prng_normalized_max( obj ) );
	printf( "size: %zu\n", stdlib_base_prng_state_size( obj ) );

	// Free allocated memory:
	free( obj );
}
