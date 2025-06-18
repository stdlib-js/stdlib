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

#include "stdlib/stats/base/dists/hypergeometric/mean.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

static int32_t random_int( const int32_t min, const int32_t max ) {
	int32_t v = rand() % ( max - min + 1 );
	return min + v;
}

int main( void ) {
	int32_t N;
	int32_t K;
	int32_t n;
	double y;
	int i;

	for ( i = 0; i < 10; i++ ) {
		N = random_int( 1, 20 );
		K = random_int( 0, N );
		n = random_int( 0, K );
		y = stdlib_base_dists_hypergeometric_mean( N, K, n );
		printf( "N: %d, K: %d, n: %d, E(X;N,K,n): %.4f\n", N, K, n, y );
	}
}
