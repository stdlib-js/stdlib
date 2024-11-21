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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/exp2.h"
#include "stdlib/constants/float64/max_base2_exponent.h"
#include "stdlib/constants/float64/min_base2_exponent.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

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
	return 1513.906801156151 + (x * (20.202065669316532 + (x * 0.023093347705734523)));
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
	return 4368.211668792106 + (x * (233.1842117223149 + (x * 1.0)));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Evaluates the base `2` exponential function.
*
* ## Method
*
* -   Range reduction is accomplished by separating the argument into an integer \\( k \\) and fraction \\( f \\) such that
*
*     ```tex
*     2^x = 2^k 2^f
*     ```
*
* -   A Pade' approximate
*
*     ```tex
*     1 + 2x \frac{\mathrm{P}\left(x^2\right)}{\mathrm{Q}\left(x^2\right) - x \mathrm{P}\left(x^2\right)}
*     ```
*
*     approximates \\( 2^x \\) in the basic range \\( \[-0.5, 0.5] \\).
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain      | # trials | peak    | rms     |
*     |:----------:|:-----------:|:--------:|:-------:|:-------:|
*     | IEEE       | -1022,+1024 | 30000    | 1.8e-16 | 5.4e-17 |
*
* @param x    input value
* @return     function value
*
* @example
* double out = stdlib_base_exp2( 3.0 );
* // returns 8.0
*/
double stdlib_base_exp2( const double x ) {
	double px;
	double ax;
	double xx;
	double n;

	if ( stdlib_base_is_nan( x ) ) {
		return x;
	}
	if ( x > STDLIB_CONSTANT_FLOAT64_MAX_BASE2_EXPONENT ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( x < STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT ) {
		return 0.0;
	}

	// Separate into integer and fractional parts...
	n = stdlib_base_round( x );
	ax = x - n;
	xx = ax * ax;
	px = ax * polyval_p( xx );
	ax = px / ( polyval_q( xx ) - px );
	ax = 1.0 + stdlib_base_ldexp( ax, 1 );

	// Scale by power of 2:
	return stdlib_base_ldexp( ax, n );
}
