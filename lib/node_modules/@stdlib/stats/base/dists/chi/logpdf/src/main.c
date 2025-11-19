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

#include "stdlib/stats/base/dists/chi/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the log probability density function (logPDF) for a Chi distribution with degrees of freedom `k` at a value `x`.
*
* @param x    input value
* @param k    degrees of freedom
* @return     evaluated logPDF
*
* @example
* double y = stdlib_base_dists_chi_logpdf( 2.0, 2.0 );
* // returns ~-1.309
*/
double stdlib_base_dists_chi_logpdf( const double x, const double k ) {
	double out;
	double kh;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( k ) || k < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( k == 0.0 ) {
		// Point mass at 0...
		return ( x == 0.0 ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x < 0.0 || x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	kh = k / 2.0;
	out = ( ( 1.0 - kh ) * STDLIB_CONSTANT_FLOAT64_LN2 ) + ( ( k - 1.0 ) * stdlib_base_ln( x ) ) - ( ( x * x ) / 2.0 );
	out -= stdlib_base_gammaln( kh );
	return out;
}
