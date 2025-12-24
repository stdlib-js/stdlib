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

#include "stdlib/math/base/special/atan.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/half_pi.h"
#include "stdlib/constants/float64/fourth_pi.h"
#include <stdint.h>

static const double MOREBITS = 6.123233995736765886130e-17; // pi/2 = PIO2 + MOREBITS.
static const double T3P8 = 2.41421356237309504880; // tan( 3*pi/8 )

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
	return -64.85021904942025 + (x * (-122.88666844901361 + (x * (-75.00855792314705 + (x * (-16.157537187333652 + (x * -0.8750608600031904)))))));
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
	return 194.5506571482614 + (x * (485.3903996359137 + (x * (432.88106049129027 + (x * (165.02700983169885 + (x * (24.858464901423062 + (x * 1.0)))))))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Computes the arctangent of a double-precision floating-point number.
*
* ## Method
*
* -   Range reduction is from three intervals into the interval from 0 to 0.66. The approximant uses a rational function of degree 4/5 of the form
*
*     ```tex
*     x + x^3 \frac{P(x)}{Q(x)}
*     ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain  | # trials | peak    | rms     |
*     |:-----------|:--------|:---------|:--------|:--------|
*     | DEC        | -10, 10 | 50000    | 2.4e-17 | 8.3e-18 |
*     | IEEE       | -10, 10 | 10^6     | 1.8e-16 | 5.0e-17 |
*
* @param x    input value
* @return     arctangent (in radians)
*
* @example
* double out = stdlib_base_atan( 0.0 );
* // returns ~0.0
*/
double stdlib_base_atan( const double x ) {
	int32_t flg;
	int32_t sgn;
	double ax;
	double y;
	double z;

	if ( stdlib_base_is_nan( x ) || x == 0.0 ) {
		return x;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return STDLIB_CONSTANT_FLOAT64_HALF_PI;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return -STDLIB_CONSTANT_FLOAT64_HALF_PI;
	}
	if ( x < 0.0 ) {
		sgn = 1;
		ax = -x;
	} else {
		sgn = 0;
		ax = x;
	}
	// Range reduction...
	flg = 0;
	if ( ax > T3P8 ) {
		y = STDLIB_CONSTANT_FLOAT64_HALF_PI;
		flg = 1;
		ax = -( 1.0 / ax );
	} else if ( ax <= 0.66 ) {
		y = 0.0;
	} else {
		y = STDLIB_CONSTANT_FLOAT64_FOURTH_PI;
		flg = 2;
		ax = ( ax - 1.0 ) / ( ax + 1.0 );
	}
	z = ax * ax;
	z = z * polyval_p( z ) / polyval_q( z );
	z = ( ax * z ) + ax;
	if ( flg == 2 ) {
		z += 0.5 * MOREBITS;
	} else if ( flg == 1 ) {
		z += MOREBITS;
	}
	y += z;
	return ( sgn == 1 ) ? -y : y;
}
