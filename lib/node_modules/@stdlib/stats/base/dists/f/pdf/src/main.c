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

#include "stdlib/stats/base/dists/f/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/betaln.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the probability density function (PDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a value `x`.
*
* @param x     input value
* @param d1    numerator degrees of freedom
* @param d2    denominator degrees of freedom
* @return      evaluated PDF
*
* @example
* double y = stdlib_base_dists_f_pdf( 2.0, 1.0, 1.0 );
* // returns ~0.075
*/
double stdlib_base_dists_f_pdf( const double x, const double d1, const double d2 ) {
	double hd1;
	double hd2;
	double out;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( d1 ) ||
		stdlib_base_is_nan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return 0.0 / 0.0; /* NaN */
	}
	if ( x < 0.0 || x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	if ( x == 0.0 ) {
		if ( d1 < 2.0 ) {
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		if ( d1 == 2.0 ) {
			return 1.0;
		}
		return 0.0;
	}

	hd1 = d1 / 2.0;
	hd2 = d2 / 2.0;

	/*
	* Compute the log-PDF:
	*
	*   ln(f(x; d1, d2)) = (d1/2)*ln(d1) + (d2/2)*ln(d2) + (d1/2 - 1)*ln(x) - ((d1+d2)/2)*ln(d1*x + d2) - betaln(d1/2, d2/2)
	*/
	out = hd1 * stdlib_base_ln( d1 );
	out += hd2 * stdlib_base_ln( d2 );
	out += ( hd1 - 1.0 ) * stdlib_base_ln( x );
	out -= ( hd1 + hd2 ) * stdlib_base_ln( ( d1 * x ) + d2 );
	out -= stdlib_base_betaln( hd1, hd2 );
	return stdlib_base_exp( out );
}
