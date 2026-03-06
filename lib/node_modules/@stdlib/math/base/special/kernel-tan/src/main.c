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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_tan.c}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/kernel_tan.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include <stdint.h>

static const double PI04 = 7.85398163397448278999e-01;
static const double PI04LO = 3.06161699786838301793e-17;
static const double T0 = 3.33333333333334091986e-01; // 3FD55555, 55555563

// Absolute value mask: 2147483647 => 0x7fffffff => 01111111111111111111111111111111
static const int32_t HIGH_WORD_ABS_MASK = 0x7fffffff;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_t_odd

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
static double polyval_t_odd( const double x ) {
	return 0.13333333333320124 + (x * (0.021869488294859542 + (x * (0.0035920791075913124 + (x * (0.0005880412408202641 + (x * (0.00007817944429395571 + (x * -0.000018558637485527546)))))))));
}

// END: polyval_t_odd

// BEGIN: polyval_t_even

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
static double polyval_t_even( const double x ) {
	return 0.05396825397622605 + (x * (0.0088632398235993 + (x * (0.0014562094543252903 + (x * (0.0002464631348184699 + (x * (0.00007140724913826082 + (x * 0.00002590730518636337)))))))));
}

// END: polyval_t_even

/* End auto-generated functions. */

/**
* Computes the tangent on \\( \approx\[-\pi/4, \pi/4] \\) (except on -0), \\( \pi/4 \approx 0.7854 \\).
*
* ## Method
*
* -   Since \\( \tan(-x) = -\tan(x) \\), we need only to consider positive \\( x \\).
*
* -   Callers must return \\( \tan(-0) = -0 \\) without calling here since our odd polynomial is not evaluated in a way that preserves \\( -0 \\). Callers may do the optimization \\( \tan(x) \approx x \\) for tiny \\( x \\).
*
* -   \\( \tan(x) \\) is approximated by a odd polynomial of degree 27 on \\( \[0, 0.67434] \\)
*
*     ```tex
*     \tan(x) \approx x + T_1 x^3 + \ldots + T_{13} x^{27}
*     ```
*     where
*
*     ```tex
*     \left| \frac{\tan(x)}{x} - \left( 1 + T_1 x^2 + T_2 x^4 + \ldots + T_{13} x^{26} \right) \right|  \le 2^{-59.2}
*     ```
*
* -   Note: \\( \tan(x+y) = \tan(x) + \tan'(x) \cdot y \approx \tan(x) + ( 1 + x \cdot x ) \cdot y \\). Therefore, for better accuracy in computing \\( \tan(x+y) \\), let
*
*     ```tex
*     r = x^3 \cdot \left( T_2+x^2 \cdot (T_3+x^2 \cdot (\ldots+x^2 \cdot (T_{12}+x^2 \cdot T_{13}))) \right)
*     ```
*
*     then
*
*     ```tex
*     \tan(x+y) = x^3 + \left( T_1 \cdot x^2 + (x \cdot (r+y)+y) \right)
*     ```
*
* -   For \\( x \\) in \\( \[0.67434, \pi/4] \\),  let \\( y = \pi/4 - x \\), then
*
*     ```tex
*     \tan(x) = \tan\left(\tfrac{\pi}{4}-y\right) = \frac{1-\tan(y)}{1+\tan(y)} \\
*     = 1 - 2 \cdot \left( \tan(y) - \tfrac{\tan(y)^2}{1+\tan(y)} \right)
*     ```
*
* @param x    input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @param y    tail of `x`
* @param k    indicates whether tan (if k = 1) or -1/tan (if k = -1) is returned
* @return     tangent
*
* @example
* double out = stdlib_base_kernel_tan( 3.141592653589793/4.0, 0.0, 1 );
* // returns ~1.0
*/
double stdlib_base_kernel_tan( const double x, const double y, const int32_t k ) {
	uint32_t hx;
	int32_t ix;
	double xc;
	double yc;
	double z;
	double r;
	double t;
	double v;
	double w;
	double s;
	double a;

	stdlib_base_float64_get_high_word( x, &hx );

	// High word of |x|:
	ix =  ( hx & HIGH_WORD_ABS_MASK );

	// Case: |x| >= 0.6744
	if ( ix >= 0x3FE59428 ) {
		if ( x < 0 ) {
			xc = -x;
			yc = -y;
		} else {
			xc = x;
			yc = y;
		}
		z = PI04 - xc;
		w = PI04LO - yc;
		xc = z + w;
		yc = 0.0;
	} else {
		xc = x;
		yc = y;
	}
	z = xc * xc;
	w = z * z;

	// Break x^5*(T[1]+x^2*T[2]+...) into x^5(T[1]+x^4*T[3]+...+x^20*T[11]) + x^5(x^2*(T[2]+x^4*T[4]+...+x^22*T[12]))...
	r = polyval_t_odd( w );
	v = z * polyval_t_even( w );
	s = z * xc;
	r = yc + (z * ((s * (r + v)) + yc));
	r += T0 * s;
	w = xc + r;
	if ( ix >= 0x3FE59428 ) {
		v = (double)k;
		return ( 1.0 - (double)( (hx >> 30) & 2 ) ) * ( v - (2.0 * (xc - ((w * w / (w + v)) - r)) ));
	}
	if ( k == 1 ) {
		return w;
	}
	// Compute -1/(x+r) accurately...
	z = w;
	stdlib_base_float64_set_low_word( 0, &z );
	v = r - (z - xc); // z + v = r + xc
	a = -1.0 / w;
	t = a;
	stdlib_base_float64_set_low_word( 0, &t );
	s = 1.0 + (t * z);
	return t + (a * (s + (t * v)));
}
