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

#include "stdlib/stats/base/dists/hypergeometric/cdf.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v * ( max - min ) );
}

static int32_t random_int( const int32_t min, const int32_t max ) {
	int32_t v = rand() % ( max - min + 1 );
	return min + v;
}

int main( void ) {
	int32_t N;
	int32_t K;
	int32_t n;
	double x;
	double y;
	int i;

	for ( i = 0; i < 10; i++ ) {
		x = random_uniform( 0.0, 10.0 );
		N = random_int( 1, 20 );
		K = random_int( 0, N );
		n = random_int( 0, N );
		y = stdlib_base_dists_hypergeometric_cdf( x, N, K, n );
		printf( "x: %lf, N: %d, K: %d, n: %d, F(x;N,K,n): %lf\n", x, N, K, n, y );
	}
}
