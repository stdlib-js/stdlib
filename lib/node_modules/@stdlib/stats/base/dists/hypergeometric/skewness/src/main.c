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

#include "stdlib/stats/base/dists/hypergeometric/skewness.h"
#include "stdlib/math/base/special/sqrt.h"
#include <stdint.h>

/**
* Returns the skewness of a hypergeometric distribution.
*
* @param N    population size
* @param K    subpopulation size
* @param n    number of draws
* @return     skewness
*
* @example
* double skew = stdlib_base_dists_hypergeometric_skewness( 16, 11, 4 );
* // returns ~-0.258
*/
double stdlib_base_dists_hypergeometric_skewness( const int32_t N, const int32_t K, const int32_t n ) {
	double N_d;
	double K_d;
	double n_d;
	double p;
	double q;

	if (  N < 0 || K < 0 || n < 0 || K > N || n > N ) {
		return 0.0/0.0; // NaN
	}
	N_d = (double)N;
	K_d = (double)K;
	n_d = (double)n;
	p = ( N_d - ( 2.0*K_d ) ) * stdlib_base_sqrt( N_d-1.0 ) * ( N_d - ( 2.0*n_d ) );
	q = stdlib_base_sqrt( n_d * K_d * ( N_d-K_d ) * ( N_d-n_d ) ) * ( N_d-2.0 );
	return p / q;
}
