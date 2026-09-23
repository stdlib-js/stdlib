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
* The following copyright and license were part of the original implementation available as part of FreeBSD [k_sincosf.h]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_sincosf.h}. The implementation follows the original, but has been modified according to stdlib conventions.
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

#include "stdlib/math/base/special/kernel_sincosf.h"

static const double C0 = -0.499999997251031003120; // -0x1ffffffd0c5e81.0p-5
static const double C1 = 0.0416666233237390631894; // 0x155553e1053a42.0p-57

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

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

/* End auto-generated functions. */

/**
* Simultaneously computes the sine and cosine of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format, and stores the results in the provided output parameters.
*
* @param x         input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*
* @example
* double x = 0.0;
*
* float cosine;
* float sine;
* stdlib_base_kernel_sincosf( x, &sine, &cosine );
*/
void stdlib_base_kernel_sincosf( const double x, float* sine, float* cosine ) {
	double r;
	double s;
	double w;
	double z;

	z = x * x;
	w = z * z;
	r = polyval_s34( z );
	s = z * x;
	*sine = (float)( ( x + ( s * polyval_s12( z ) ) ) + ( s*w*r ) );
	r = polyval_c23( z );
	*cosine = (float)( ( ( 1.0 + z*C0 ) + w*C1 ) + ( ( w*z ) * r ) );
	return;
}
