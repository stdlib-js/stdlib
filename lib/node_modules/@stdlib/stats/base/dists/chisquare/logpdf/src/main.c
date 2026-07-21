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

#include "stdlib/stats/base/dists/chisquare/logpdf.h"
#include "stdlib/stats/base/dists/gamma/logpdf.h"

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a chi-squared distribution with degrees of freedom `k` at a value `x`.
*
* @param x   input value
* @param k   degrees of freedom
* @return    evaluated logPDF
*
* @example
* double v = stdlib_base_dists_chisquare_logpdf( 0.3, 4.0 );
* // returns ~-2.74
*/
double stdlib_base_dists_chisquare_logpdf( const double x, const double k ) {
	return stdlib_base_dists_gamma_logpdf( x, k / 2.0, 0.5 );
}
