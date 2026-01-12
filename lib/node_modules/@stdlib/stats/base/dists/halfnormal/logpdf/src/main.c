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

#include "stdlib/stats/base/dists/halfnormal/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/constants/float64/ln_pi.h"

// log(sqrt(2/pi)) = 0.5 * log(2/pi) = 0.5 * (ln(2) - ln(pi))
static const double C = 0.5 * ( STDLIB_CONSTANT_FLOAT64_LN2 - STDLIB_CONSTANT_FLOAT64_LN_PI );

/**
* Evaluates the logarithm of the probability density function (PDF) for a half-normal distribution with scale parameter `sigma`.
*
* @param x       input value
* @param sigma   scale parameter
* @return        evaluated logarithm of PDF
*
* @example
* double y = stdlib_base_dists_halfnormal_logpdf( 0.8, 1.0 );
* // returns ~-0.546
*/
double stdlib_base_dists_halfnormal_logpdf( const double x, const double sigma ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x < 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	return C - stdlib_base_ln( sigma ) - ( (x*x) / ( 2.0 * (sigma*sigma) ) );
}
