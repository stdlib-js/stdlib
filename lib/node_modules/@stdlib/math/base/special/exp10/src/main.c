/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright 1984, 1991, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/exp10.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/max_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent.h"
#include "stdlib/constants/float64/pinf.h"
#include <stdint.h>

static const double LOG210 = 3.32192809488736234787e0;
static const double LG102A = 3.01025390625000000000e-1;
static const double LG102B = 4.60503898119521373889e-6;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_p

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_p( const double x ) {
	return 2394.2374120738828 + (x * (406.7172899368727 + (x * (11.745273255434405 + (x * 0.040996251979858706)))));
}

// END: polyval_p

// BEGIN: polyval_q

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_q( const double x ) {
	return 2079.608192860019 + (x * (1272.0927117834513 + (x * (85.09361608493066 + (x * 1.0)))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Returns `10` raised to the `x` power.
*
* ## Method
*
* -   Range reduction is accomplished by expressing the argument as \\( 10^x = 2^n 10^f \\), with \\( |f| < 0.5 log_{10}(2) \\). The Pade' form
*
*     ```tex
*     1 + 2x \frac{P(x^2)}{Q(x^2) - P(x^2)}
*     ```
*
*     is used to approximate \\( 10^f \\).
*
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain      | # trials | peak    | rms     |
*     |:----------:|:-----------:|:--------:|:-------:|:-------:|
*     | IEEE       | -307,+307   |  30000   | 2.2e-16 | 5.5e-17 |
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_exp10( 2.0 );
* // returns 100.0
*/
double stdlib_base_exp10( const double x ) {
	double xc;
	double px;
	double xx;
	int32_t n;

	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x > STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( x < STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT ) {
		return 0.0;
	}
	// Express 10^x = 10^g 2^n = 10^g 10^( n log10(2) ) = 10^( g + n log10(2) )
	px = stdlib_base_floor( ( LOG210 * x ) + 0.5 );
	n = (int32_t)px;
	xc = x;
	xc -= px * LG102A;
	xc -= px * LG102B;

	// Rational approximation for exponential of the fractional part: 10^x = 1 + 2x P(x^2)/( Q(x^2) - P(x^2) )
	xx = xc * xc;
	px = xc * polyval_p( xx );
	xc = px / ( polyval_q( xx ) - px );
	xc = 1.0 + stdlib_base_ldexp( xc, 1 );

	// Multiply by power of 2:
	return stdlib_base_ldexp( xc, n );
}
