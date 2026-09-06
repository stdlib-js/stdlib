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

#include "stdlib/stats/base/dists/pareto-type1/median.h"
#include <stdio.h>
#include <stdlib.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v * ( max - min ) );
}

int main( void ) {
	double alpha[ 25 ];
	double beta[ 25 ];
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		alpha[ i ] = random_uniform( 1.5, 5.0 );
		beta[ i ] = random_uniform( 1.0, 10.0 );
	}
	for ( i = 0; i < 25; i++ ) {
		y = stdlib_base_dists_pareto_type1_median( alpha[ i ], beta[ i ] );
		printf( "α: %lf, β: %lf, Median(X;α,β): %lf\n", alpha[ i ], beta[ i ], y );
	}
}
