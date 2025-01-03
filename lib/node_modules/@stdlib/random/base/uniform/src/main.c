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
#include "stdlib/random/base/shared.h"
#include <stdlib.h>

/**
* Returns a pseudorandom number drawn from a continuous uniform distribution with parameters `a` (minimum support; inclusive) and `b` (maximum support; exclusive).
*
* ## Notes
*
* -   The function returns `NaN` if provided a `NULL` pointer.
*
* @param randu  PRNG object which generates uniformly distributed pseudorandom numbers on the interval `[0,1)`
* @param a      minimum support (inclusive)
* @param b      maximum support (exclusive)
* @return       pseudorandom number
*
* @example
* #include "stdlib/random/base/uniform.h"
* #include "stdlib/random/base/randu.h"
* #include "stdlib/random/base/shared.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* // Create a PRNG:
* struct BasePRNGObject *randu = stdlib_base_random_randu_allocate( 0 );
* if ( randu == NULL ) {
*     fprintf( stderr, "Error allocating PRNG.\n" );
*     exit( 1 );
* }
*
* double r = stdlib_base_random_uniform( randu, -10.0, 10.0 );
*
* // ...
*
* r = stdlib_base_random_uniform( randu, -10.0, 10.0 );
*
* // ...
*
* r = stdlib_base_random_uniform( randu, -10.0, 10.0 );
*
* // ...
*
* // Free allocated memory:
* stdlib_base_random_randu_free( randu, -10.0, 10.0 );
*/
double stdlib_base_random_uniform( struct BasePRNGObject *randu, const double a, const double b ) {
	double r;
	if ( randu == NULL ) {
		return 0.0 / 0.0; // NaN
	}
	randu->prng->normalized( randu, &r );
	return ( b*r ) + ( (1.0-r)*a );
}
