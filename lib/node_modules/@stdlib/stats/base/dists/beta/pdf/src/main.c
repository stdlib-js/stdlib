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

#include "stdlib/stats/base/dists/beta/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/betaln.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the probability density function (PDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param x        input value
* @param alpha    first shape parameter
* @param beta     second shape parameter
* @return         evaluated PDF
*
* @example
* double y = stdlib_base_dists_beta_pdf( 0.5, 1.0, 1.0 );
* // returns 1.0
*/
double stdlib_base_dists_beta_pdf( const double x, double alpha, const double beta ) {
	double out;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return 0.0 / 0.0;
	}
	if ( x < 0.0 || x > 1.0 ) {
		// Support of the Beta distribution: [0,1]
		return 0.0;
	}
	if ( x == 0.0 ) {
		if ( alpha < 1.0 ) {
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		if ( alpha > 1.0 ) {
			return 0.0;
		}
		return beta;
	}
	if ( x == 1.0 ) {
		if ( beta < 1.0 ) {
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		if ( beta > 1.0 ) {
			return 0.0;
		}
		return alpha;
	}
	out = ( alpha-1.0 ) * stdlib_base_ln( x );
	out += ( beta-1.0 ) * stdlib_base_log1p( -x );
	out -= stdlib_base_betaln( alpha, beta );
	return stdlib_base_exp( out );
}
