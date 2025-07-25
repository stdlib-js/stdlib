/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/binomial/pmf.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v*(max-min) );
}

static int32_t random_int( const int32_t min, const int32_t max ) {
	return min + (int32_t)( random_uniform( 0.0, 1.0 ) * ( max - min + 1 ) );
}

int main( void ) {
	int32_t n;
	double p;
	double x;
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		n = random_int( 1, 20 );
		x = random_uniform( 0.0, (double)n );
		p = random_uniform( 0.0, 1.0 );
		y = stdlib_base_dists_binomial_pmf( x, n, p );
		printf( "x: %.4f, n: %d, p: %.4f, P(X = x;n,p): %.4f\n", x, n, p, y );
	}
}
