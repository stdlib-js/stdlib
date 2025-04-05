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

#include "stdlib/stats/base/dists/hypergeometric/stdev.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v * ( max - min ) );
}

int main( void ) {
	double sd;
	int32_t N;
	int32_t K;
	int32_t n;
	int i;

	for ( i = 0; i < 10; i++ ) {
		N = stdlib_base_ceil( random_uniform( 2.0, 100.0 ) );
		K = stdlib_base_ceil( random_uniform( 0.0, N ) );
		n = stdlib_base_ceil( random_uniform( 0.0, N ) );
		sd = stdlib_base_dists_hypergeometric_stdev( N, K, n );
		printf( "N: %d, K: %d, n: %d, SD(X;N,K,n): %lf\n", N, K, n, sd );
	}
}
