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

#include "stdlib/stats/base/dists/invgamma/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the probability density function (PDF) for an inverse gamma distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @param x     input value
* @param alpha shape parameter
* @param beta  scale parameter
* @return      evaluated PDF
*
* @example
* double y = stdlib_base_dists_invgamma_pdf( 2.0, 0.5, 1.0 );
* // returns ~0.121
*/
double stdlib_base_dists_invgamma_pdf( const double x, const double alpha, const double beta ) {
	double lnl;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return 0.0;
	}
	lnl = (alpha * stdlib_base_ln( beta )) - stdlib_base_gammaln( alpha );
	lnl -= (alpha + 1.0) * stdlib_base_ln( x );
	lnl -= beta / x;
	return stdlib_base_exp( lnl );
}
