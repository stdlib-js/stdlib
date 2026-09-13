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

#include "stdlib/stats/base/dists/studentized-range/cdf.h"
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v * ( max - min ) );
}

int main( void ) {
	double q[ 10 ];
	double r[ 10 ];
	double v[ 10 ];
	int32_t i;
	double y;

	for ( i = 0; i < 10; i++ ) {
		q[ i ] = random_uniform( 0.0, 12.0 );
		r[ i ] = random_uniform( 2.0, 20.0 );
		v[ i ] = random_uniform( 2.0, 10.0 );
		y = stdlib_base_dists_studentized_range_cdf( q[ i ], r[ i ], v[ i ], 1.0 );
		printf( "q: %0.4f, r: %0.4f, v: %0.4f, F(q;r,v): %0.4f\n", q[i], r[i], v[i], y );
	}
}
