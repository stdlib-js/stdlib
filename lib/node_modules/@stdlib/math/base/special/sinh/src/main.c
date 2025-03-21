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
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/sinh.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/ln_two.h"
#include <stdint.h>

// MAXLOG + LN2 = ln(2^1024) + LN2
static const double POS_OVERFLOW = 7.09782712893383996843e2 + STDLIB_CONSTANT_FLOAT64_LN2;

// MINLOG - LN2 = ln(2^-1022) - LN2
static const double NEG_OVERFLOW = -7.08396418532264106224e2 - STDLIB_CONSTANT_FLOAT64_LN2;

// MAXLOG - LN2 = ln(2^1024) - LN2
static const double LARGE = 7.09782712893383996843e2 - STDLIB_CONSTANT_FLOAT64_LN2;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_pq

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
static double rational_pq( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.16666666666666666;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -351754.9648081514 + (x * (-11561.443576500522 + (x * (-163.72585752598383 + (x * -0.789474443963537)))));
		s2 = -2110529.7888489086 + (x * (36157.827983443196 + (x * (-277.7110814206028 + (x * 1.0)))));
	} else {
		ix = 1.0 / x;
		s1 = -0.789474443963537 + (ix * (-163.72585752598383 + (ix * (-11561.443576500522 + (ix * -351754.9648081514)))));
		s2 = 1.0 + (ix * (-277.7110814206028 + (ix * (36157.827983443196 + (ix * -2110529.7888489086)))));
	}
	return s1 / s2;
}

// END: rational_pq

/* End auto-generated functions. */

/**
* Computes the hyperbolic sine of a double-precision floating-point number.
*
* ## Method
*
* The range is partitioned into two segments. If \\( |x| \le 1 \\), we use a rational function of the form
*
* ```tex
* x + x^3 \frac{\mathrm{P}(x)}{\mathrm{Q}(x)}
* ```
*
* Otherwise, the calculation is
*
* ```tex
* \operatorname{sinh}(x) = \frac{ e^x - e^{-x} }{2}.
* ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain   | # trials | peak    | rms     |
*     |:----------:|:--------:|:--------:|:-------:|:-------:|
*     | DEC        | +- 88    | 50000    | 4.0e-17 | 7.7e-18 |
*     | IEEE       | +-MAXLOG | 30000    | 2.6e-16 | 5.7e-17 |
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_sinh( 0.0 );
* // returns 0.0
*
* @example
* double out = stdlib_base_sinh( 2.0 );
* // returns ~3.627
*/
double stdlib_base_sinh( const double x ) {
	double a;
	if ( x == 0.0 ) {
		return x; // handles `+-0`
	}
	if ( x > POS_OVERFLOW || x < NEG_OVERFLOW ) {
		return ( x > 0.0 ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	a = stdlib_base_abs( x );
	if ( a > 1.0 ) {
		if ( a >= LARGE ) {
			a = stdlib_base_exp( 0.5*a );
			a *= 0.5 * a;
			if ( x < 0.0 ) {
				a = -a;
			}
			return a;
		}
		a = stdlib_base_exp( a );
		a = ( 0.5*a ) - ( 0.5/a );
		if ( x < 0.0 ) {
			a = -a;
		}
		return a;
	}
	a *= a;
	return x + ( x * a * rational_pq( a ) );
}
