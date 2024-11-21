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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_atanh.c?view=markup}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/atanh.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>

static const double NEAR_ZERO = 1.0 / (1 << 28); // 2**-28

/**
* Computes the hyperbolic arctangent of a double-precision floating-point number.
*
* ## Method
*
* 1.  Reduce \\( x \\) to positive by \\( \operatorname{atanh}(-x) = -\operatorname{atanh}(x) \\)
*
* 2.  For \\( x \ge 0.5 \\), we calculate
*
*     ```tex
*     \operatorname{atanh}(x) = \frac{1}{2} \cdot \log\left( 1 + \tfrac{2x}{1-x} \right) = \frac{1}{2} \cdot \operatorname{log1p}\left( 2 \tfrac{x}{1-x} \right)
*     ```
*
*     For \\( x < 0.5 \\), we have
*
*     ```tex
*     \operatorname{atanh}(x) = \frac{1}{2} \cdot \operatorname{log1p}\left( 2x + \tfrac{2x^2}{1-x} \right)
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{atanh}(\mathrm{NaN}) &= \mathrm{NaN}\\
* \operatorname{atanh}(1.0) &= \infty \\
* \operatorname{atanh}(-1.0) &= -\infty \\
* \end{align*}
* ```
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_atanh( 0.0 );
* // returns 0.0
*
* out = stdlib_base_atanh( 0.9 );
* // returns ~1.472
*/
double stdlib_base_atanh( const double x ) {
	int32_t sgn;
	double ax;
	double t;
	if ( stdlib_base_is_nan( x ) || x < -1.0 || x > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( x == -1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x < 0.0 ) {
		sgn = 1;
		ax = -x;
	} else {
		sgn = 0;
		ax = x;
	}
	// Case: |x| < 2**-28
	if ( ax < NEAR_ZERO ) {
		return ( sgn == 1 ) ? -ax : ax;
	}
	if ( ax < 0.5 ) {
		t = ax + ax;
		t = 0.5 * stdlib_base_log1p( t + ( t * ax / ( 1 - ax ) ) );
	} else {
		t = 0.5 * stdlib_base_log1p( ( ax + ax ) / ( 1 - ax ) );
	}
	return ( sgn == 1 ) ? -t : t;
}
