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
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_sinf.c}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/kernel_sinf.h"

// BEGIN: polyval_s12

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
static double polyval_s12( const double x ) {
	return -0.16666666641626524 + (x * 0.008333329385889463);
}

// END: polyval_s12

// BEGIN: polyval_s34

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
static double polyval_s34( const double x ) {
	return -0.00019839334836096632 + (x * 0.000002718311493989822);
}

// END: polyval_s34

/**
* Computes the sine of a number on \\( \[-\pi/4, \pi/4] \\) in single-precision floating-point format, where \\( \pi/4 \approx 0.785398164 \\).
*
* ## Notes
*
* -   \\( | \sin(x) - s(x) | < 2^{-37.5} \\), where \\( 2^{-37.5} \approx \[ -4.89 \times 10^{-12}, 4.824 \times 10^{-12} \] \\).
*
* @param x    input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @return     sine
*
* @example
* float out = stdlib_base_kernel_sinf( 3.141592653589793/6.0 );
* // returns ~0.5f
*/
float stdlib_base_kernel_sinf( const double x ) {
	double r;
	double s;
	double w;
	double z;

	z = x * x;
	w = z * z;
	r = polyval_s34( z );
	s = z * x;
	return ( x + ( s * polyval_s12( z ) ) ) + ( s*w*r );
}
