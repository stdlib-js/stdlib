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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_log.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/kernel_log1p.h"
#include <stdint.h>

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
	return 0.3999999999940942 + (x * (0.22222198432149784 + (x * 0.15313837699209373)));
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
	return 0.6666666666666735 + (x * (0.2857142874366239 + (x * (0.1818357216161805 + (x * 0.14798198605116586)))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Computes `log(1+f) - f` for `1+f` in `~[sqrt(2)/2, sqrt(2)]`.
*
* ## Method
*
* This function is a helper function for computing logarithms in base \\(e\\), and what follows describes the overall strategy for doing so. The argument reduction and adding the final term of the polynomial are done by the caller for increased accuracy when different bases are used.
*
* 1.  Argument Reduction. Find \\(k\\) and \\(f\\) such that
*
*     ```tex
*     x = 2^k \cdot (1+f)
*     ```
*
*     where \\(\sqrt(2)/2 < 1+f < \sqrt(2)\\).
*
* 2.  Approximation of \\(\operatorname{log}(1+f)\\). Let
*
*     ```tex
*     \begin{align*}
*     s &= \frac{f}{2+f} \\
*     &= 2s + \frac{2}{3} s^3 + \frac{2}{5} s^5 + \ldots \\
*     &= 2s + s R
*     \end{align*}
*     ```
*
*     based on
*
*     ```tex
*     \operatorname{log}(1+f) &= \operatorname{log}(1+s) - \operatorname{log}(1-s)
*     ```
*
*     We use a special Reme algorithm on \\(\[0,0.1716]\\) to generate a polynomial of degree \\(14\\) to approximate \\(R\\). The maximum error of this polynomial approximation is bounded by \\(2^{-58.45}\\). In other words,
*
*     ```tex
*     R(z) ~ L_{g1} s^2 + L_{g2} s^4 + L_{g3} s^6 + L_{g4} s^8 + L_{g5} s^{10} + L_{g6} s^{12} + L_{g7} s^{14}
*     ```
*
*     where the values of \\(L_{g1}\\) to \\(L_{g7}\\) are the polynomial coefficients used in the program below and
*
*     ```tex
*     L_{g1} s^2 + \ldots + L_{g7} s^{14} - R(z) \leq 2^{-58.45}
*     ```
*
*     Note that
*
*     ```tex
*     2s = f - s \cdot f = f - h_{fsq} + (s \cdot h_{fsq})
*     ```
*
*     where \\(h_{fsq} = f^{2}/2\\).
*
*     In order to guarantee an error in \\(\operatorname{log}\\) below 1 ulp, we compute \\(\operatorname{log}\\) by
*
*     ```tex
*     \begin{align*}
*     \operatorname{log}(1+f) &= f - s (f - R) & \textrm{(if f is not too large)} \\
*     \operatorname{log}(1+f) &= f - (h_{fsq} - s (h_{fsq}+R)) & \textrm{(better accuracy)}
*     \end{align*}
*
* 3.  Finally,
*
*     ```tex
*     \begin{align*}
*     \operatorname{log}(x) &= k \cdot \operatorname{ln2} + \operatorname{log}(1+f) \\
*     &= k \cdot \operatorname{ln2}_{hi} + (f-(h_{fsq}-(s \cdot (h_{fsq}+R) + k \cdot \operatorname{ln2}_{lo})))
*     \end{align*}
*     ```
*
*     Here, \\(\operatorname{ln2}\\) is split into two floating point numbers:
*
*     ```tex
*     \operatorname{ln2} = \operatorname{ln2}_{hi} + \operatorname{ln2}_{lo}
*     ```
*
*     where \\(n \cdot \operatorname{ln2}_{hi}\\) is always exact for \\(|n| < 2000\\).
*
* @param f    input value
* @return     output value
*
* @example
* double out = stdlib_base_kernel_log1p( 1.0 );
* // returns ~0.1931
*/
double stdlib_base_kernel_log1p( const double f ) {
	double hfsq;
	double t1;
	double t2;
	double R;
	double s;
	double z;
	double w;

	s = f / ( 2.0 + f );
	z = s * s;
	w = z * z;
	t1 = w * polyval_p( w );
	t2 = z * polyval_q( w );
	R = t2 + t1;
	hfsq = 0.5 * f * f;
	return s * ( hfsq + R );
}
