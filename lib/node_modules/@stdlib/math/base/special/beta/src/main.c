/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/beta.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/e.h"
#include "stdlib/constants/float64/eps.h"

static const double G = 10.90051099999999983936049829935654997826;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: lanczos_sum_expg_scaled_pq

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double lanczos_sum_expg_scaled_pq( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 1.0 / 0.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 709811.662581658 + (x * (679979.8474157227 + (x * (293136.7857211597 + (x * (74887.54032914672 + (x * (12555.290582413863 + (x * (1443.4299244417066 + (x * (115.24194596137347 + (x * (6.309239205732627 + (x * (0.22668404630224365 + (x * (0.004826466289237662 + (x * 0.00004624429436045379)))))))))))))))))));
		s2 = 0.0 + (x * (362880.0 + (x * (1026576.0 + (x * (1172700.0 + (x * (723680.0 + (x * (269325.0 + (x * (63273.0 + (x * (9450.0 + (x * (870.0 + (x * (45.0 + (x * 1.0)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.00004624429436045379 + (ix * (0.004826466289237662 + (ix * (0.22668404630224365 + (ix * (6.309239205732627 + (ix * (115.24194596137347 + (ix * (1443.4299244417066 + (ix * (12555.290582413863 + (ix * (74887.54032914672 + (ix * (293136.7857211597 + (ix * (679979.8474157227 + (ix * 709811.662581658)))))))))))))))))));
		s2 = 1.0 + (ix * (45.0 + (ix * (870.0 + (ix * (9450.0 + (ix * (63273.0 + (ix * (269325.0 + (ix * (723680.0 + (ix * (1172700.0 + (ix * (1026576.0 + (ix * (362880.0 + (ix * 0.0)))))))))))))))))));
	}
	return s1 / s2;
}

// END: lanczos_sum_expg_scaled_pq

/* End auto-generated functions. */

/**
* Evaluates the beta function.
*
* @param a    input value
* @param b    input value
* @return     evaluated beta function
*
* @example
* double v = stdlib_base_beta( 1.0, 1.0 );
* // returns 1.0
*/
double stdlib_base_beta( const double a, const double b ) {
	double ambh;
	double agh;
	double bgh;
	double cgh;
	double res;
	double tmp;
	double ac;
	double bc;
	double c;

	if ( stdlib_base_is_nan( a ) || stdlib_base_is_nan( b ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( a < 0.0 || b < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( b == 1.0 ) {
		return 1.0 / a;
	}
	if ( a == 1.0 ) {
		return 1.0 / b;
	}
	c = a + b;
	if ( c < STDLIB_CONSTANT_FLOAT64_EPS ) {
		res = c / a;
		res /= b;
		return res;
	}

	// Special cases:
	if ( c == a && b < STDLIB_CONSTANT_FLOAT64_EPS ) {
		return 1.0 / b;
	}
	if ( c == b && a < STDLIB_CONSTANT_FLOAT64_EPS ) {
		return 1.0 / a;
	}
	ac = a;
	bc = b;
	if ( ac < bc ) {
		// Swap `a` and `b`:
		tmp = bc;
		bc = ac;
		ac = tmp;
	}

	// Lanczos calculation:
	agh = ac + G - 0.5;
	bgh = bc + G - 0.5;
	cgh = c + G - 0.5;
	res = lanczos_sum_expg_scaled_pq( ac ) * ( lanczos_sum_expg_scaled_pq( bc ) / lanczos_sum_expg_scaled_pq( c ) ); // eslint-disable-line max-len
	ambh = ac - 0.5 - bc;
	if ( ( stdlib_base_abs( bc * ambh ) < ( cgh * 100.0 ) ) && ac > 100.0 ) {
		// Special case where the base of the power term is close to 1; compute `(1+x)^y` instead:
		res *= stdlib_base_exp( ambh * stdlib_base_log1p( -bc / cgh ) );
	} else {
		res *= stdlib_base_pow( agh / cgh, ambh );
	}
	if ( cgh > 1.0e10 ) {
		// This avoids possible overflow, but appears to be marginally less accurate:
		res *= stdlib_base_pow( ( agh / cgh ) * ( bgh / cgh ), bc );
	} else {
		res *= stdlib_base_pow( ( agh * bgh ) / ( cgh * cgh ), bc );
	}
	res *= stdlib_base_sqrt( STDLIB_CONSTANT_FLOAT64_E / bgh );
	return res;
}
