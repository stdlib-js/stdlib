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

#include "stdlib/stats/base/dists/chi/pdf.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the probability density function (PDF) for a Chi distribution with degrees of freedom `k` at a value `x`.
*
* @param x    input value
* @param k    degrees of freedom
* @return     evaluated PDF
*
* @example
* double y = stdlib_base_dists_chi_pdf( 2.0, 2.0 );
* // returns ~0.270
*/
double stdlib_base_dists_chi_pdf( const double x, const double k ) {
	double out;
	double kh;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( k ) || k < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( k == 0.0 ) {
		// Point mass at 0...
		return ( x == 0.0 ) ? STDLIB_CONSTANT_FLOAT64_PINF : 0.0;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	kh = k / 2.0;
	out = stdlib_base_pow( 2.0, 1.0 - kh ) * stdlib_base_pow( x, k - 1.0 ) * stdlib_base_exp( -( x * x ) / 2.0 );
	out /= stdlib_base_gamma( kh );
	return out;
}
