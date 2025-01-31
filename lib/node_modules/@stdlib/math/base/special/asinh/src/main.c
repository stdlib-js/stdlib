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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_asinh.c?view=markup}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/asinh.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ln_two.h"
#include <stdint.h>

static const double NEAR_ZERO = 1.0 / (1 << 28); // 2**-28
static const double HUGE = 1 << 28; // 2**28

/**
* Computes the hyperbolic arcsine of double-precision floating-point number.
*
* ## Method
*
* Based on
*
* ```tex
* \operatorname{asinh}(x) = \operatorname{sgn}(x) \cdot \log \left( |x| + \sqrt{x^2 + 1} \right)
* ```
*
* we have
*
* ```tex
* \operatorname{asinh}(x) = \begin{cases}
* x  & \text{ if }  1+x^2 =1, \\
* \operatorname{sgn}(x) \cdot \left( \log(x) + \tfrac{\ln}{2} \right) & \text{ if large } |x| \\
* \operatorname{sgn}(x) \cdot \log\left( 2 |x| + 1 / ( |x|+ \sqrt{x^2+1} ) \right) & \text{ if } |x| > 2 \\
* \operatorname{sgn}(x) \cdot \operatorname{log1p}\left( |x| + \tfrac{x^2}{1 + \sqrt{1+x^2}} \right) & \text{otherwise}
* \end{cases}
* ```
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_asinh( 0.0 );
* // returns 0.0
*/
double stdlib_base_asinh( const double x ) {
	int32_t sgn;
	double xx;
	double ax;
	double t;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		return x;
	}
	if ( x < 0.0 ) {
		ax = -x;
		sgn = 1;
	} else {
		ax = x;
		sgn = 0;
	}
	// Case: |x| < 2**-28
	if ( ax < NEAR_ZERO ) {
		t = ax;
	}
	// Case: |x| > 2**28
	else if ( ax > HUGE ) {
		t = stdlib_base_ln( ax ) + STDLIB_CONSTANT_FLOAT64_LN2;
	}
	// Case: 2**28 > |x| > 2.0
	else if ( ax > 2.0 ) {
		t = stdlib_base_ln( ( 2.0 * ax ) + ( 1.0 / ( stdlib_base_sqrt( ( ax * ax ) + 1.0 ) + ax ) ) );
	}
	// Case: 2.0 > |x| > 2**-28
	else {
		xx = ax * ax;
		t = stdlib_base_log1p( ax + ( xx / ( 1.0 + stdlib_base_sqrt( 1.0 + xx ) ) ) );
	}
	return ( sgn == 1 ) ? -t : t;
}
