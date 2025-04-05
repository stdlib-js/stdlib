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

#include "stdlib/random/base/uniform.h"
#include "stdlib/random/base/randu.h"
#include "stdlib/random/base/shared.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	int32_t i;
	double d;

	struct BasePRNGObject *randu = stdlib_base_random_randu_allocate( 0 );
	if ( randu == NULL ) {
		fprintf( stderr, "Error allocating PRNG.\n" );
		exit( 1 );
	}
	for ( i = 0; i < 10; i++ ) {
		d = stdlib_base_random_uniform( randu, -10.0, 10.0 );
		printf( "%0.16f\n", d );
	}
	stdlib_base_random_randu_free( randu );
}
