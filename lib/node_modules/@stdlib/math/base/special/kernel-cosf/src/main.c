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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cosf.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/kernel_cosf.h"

static const double C0 = -0.499999997251031003120; // -0x1ffffffd0c5e81.0p-54
static const double C1 =  0.0416666233237390631894; // 0x155553e1053a42.0p-57

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_c23

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
static double polyval_c23( const double x ) {
	return -0.001388676377460993 + (x * 0.00002439044879627741);
}

// END: polyval_c23

/**
* Computes the cosine of a number on \\( \[-\pi/4, \pi/4] \\) in single-precision floating-point format, where \\( \pi/4 \approx 0.785398164 \\).
*
* ## Notes
*
* -   \\( | \cos(x) - c(x) | < 2^{-34.1} \\), where \\( 2^{-34.1} \approx \[ -5.37 \times 10^{-11}, 5.295 \times 10^{-11} \] \\).
*
* @param x    input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @return     cosine
*
* @example
* float out = stdlib_base_kernel_cosf( 3.141592653589793/6.0 );
* // returns ~0.866f
*/
float stdlib_base_kernel_cosf( const double x ) {
	double r;
	double w;
	double z;

	z = x * x;
	w = z * z;
	r = polyval_c23( z );
	return ( ( 1.0 + ( z*C0 ) ) + ( w*C1 ) ) + ( ( w*z ) * r );
}
