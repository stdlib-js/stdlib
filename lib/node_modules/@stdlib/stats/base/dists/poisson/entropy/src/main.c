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

#include "stdlib/stats/base/dists/poisson/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/factorialln.h"
#include "stdlib/math/base/special/factorial.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the entropy of a Poisson distribution.
*
* @param lambda    mean parameter
* @return          entropy
*
* @example
* double y = stdlib_base_dists_poisson_entropy( 9.0 );
* // returns ~2.508
*/
double stdlib_base_dists_poisson_entropy( const double lambda ) {
	double term;
	double sum;
	double out;
	double lk;
	int k;

	if ( stdlib_base_is_nan( lambda ) || lambda < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return 0.0;
	}
	out = lambda * ( 1.0 - stdlib_base_ln( lambda ) );

	// Compute: sum_{k=2}^{inf} lambda^k * ln(k!) / k!
	// k starts at 1, lk = lambda^1, first iteration makes k=2, lk=lambda^2
	sum = 0.0;
	lk = lambda; // lambda^1
	for ( k = 2; k < 1000; k++ ) {
		lk *= lambda;
		term = lk * stdlib_base_factorialln( k ) / stdlib_base_factorial( k );
		sum += term;

		// Convergence: check relative size of term
		if ( term < 1.0e-16 * sum ) {
			break;
		}
	}
	out += stdlib_base_exp( -lambda ) * sum;
	return out;
}
