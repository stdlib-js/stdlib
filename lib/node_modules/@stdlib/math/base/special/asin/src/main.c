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

#include "stdlib/math/base/special/asin.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/fourth_pi.h"
#include <stdint.h>

static const double MOREBITS = 6.123233995736765886130e-17; // pi/2 = PIO2 + MOREBITS

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
		return 0.16666666666666713;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -8.198089802484825 + (x * (19.562619833175948 + (x * (-16.262479672107002 + (x * (5.444622390564711 + (x * (-0.6019598008014124 + (x * 0.004253011369004428)))))))));
		s2 = -49.18853881490881 + (x * (139.51056146574857 + (x * (-147.1791292232726 + (x * (70.49610280856842 + (x * (-14.740913729888538 + (x * 1.0)))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.004253011369004428 + (ix * (-0.6019598008014124 + (ix * (5.444622390564711 + (ix * (-16.262479672107002 + (ix * (19.562619833175948 + (ix * -8.198089802484825)))))))));
		s2 = 1.0 + (ix * (-14.740913729888538 + (ix * (70.49610280856842 + (ix * (-147.1791292232726 + (ix * (139.51056146574857 + (ix * -49.18853881490881)))))))));
	}
	return s1 / s2;
}

// END: rational_pq

// BEGIN: rational_rs

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
static double rational_rs( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.08333333333333809;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 28.536655482610616 + (x * (-25.56901049652825 + (x * (6.968710824104713 + (x * (-0.5634242780008963 + (x * 0.002967721961301243)))))));
		s2 = 342.43986579130785 + (x * (-383.8770957603691 + (x * (147.0656354026815 + (x * (-21.947795316429207 + (x * 1.0)))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.002967721961301243 + (ix * (-0.5634242780008963 + (ix * (6.968710824104713 + (ix * (-25.56901049652825 + (ix * 28.536655482610616)))))));
		s2 = 1.0 + (ix * (-21.947795316429207 + (ix * (147.0656354026815 + (ix * (-383.8770957603691 + (ix * 342.43986579130785)))))));
	}
	return s1 / s2;
}

// END: rational_rs

/* End auto-generated functions. */

/**
* Computes the arcsine of a double-precision floating-point number.
*
* ## Method
*
* -   A rational function of the form
*
*     ```tex
*     x + x^3 \frac{P(x^2)}{Q(x^2)}
*     ```
*
*     is used for \\(\|x\|\\) in the interval \\(\[0, 0.5\]\\). If \\(\|x\| > 0.5\\), it is transformed by the identity
*
*     ```tex
*     \operatorname{asin}(x) = \frac{\pi}{2} - 2 \operatorname{asin}( \sqrt{ (1-x)/2 } )
*     ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain | # trials | peak    | rms     |
*     |:-----------|:-------|:---------|:--------|:--------|
*     | DEC        | -1, 1  | 40000    | 2.6e-17 | 7.1e-18 |
*     | IEEE       | -1, 1  | 10^6     | 1.9e-16 | 5.4e-17 |
*
* @param x    input value
* @return     output value (in radians)
*
* @example
* double out = stdlib_base_asin( 0.0 );
* // returns 0.0
*/
double stdlib_base_asin( const double x ) {
	int32_t sgn;
	double zz;
	double a;
	double p;
	double z;

	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x > 0.0 ) {
		sgn = 0;
		a = x;
	} else {
		sgn = 1;
		a = -x;
	}
	if ( a > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( a > 0.625 ) {
		// arcsin(1-x) = pi/2 - sqrt(2x)(1+R(x))
		zz = 1.0 - a;
		p = zz * rational_rs( zz );
		zz = stdlib_base_sqrt( zz + zz );
		z = STDLIB_CONSTANT_FLOAT64_FOURTH_PI - zz;
		zz = ( zz * p ) - MOREBITS;
		z -= zz;
		z += STDLIB_CONSTANT_FLOAT64_FOURTH_PI;
	} else {
		if ( a < 1.0e-8 ) {
			return x;
		}
		zz = a * a;
		z = zz * rational_pq( zz );
		z = ( a * z ) + a;
	}
	return ( sgn == 1 ) ? -z : z;
}
