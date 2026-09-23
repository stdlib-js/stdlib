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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_asinhf.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/asinhf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/log1pf.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/constants/float32/ln_two.h"
#include <stdint.h>

static const float HUGE = 1 << 28; // 2**28
static const float NEAR_ZERO = 1.0f / HUGE; // 2**-28

/**
* Computes the hyperbolic arcsine of a single-precision floating-point number.
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
* x  & \text{ if }  1+x^2 = 1, \\
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
* float out = stdlib_base_asinhf( 0.0f );
* // returns 0.0f
*/
float stdlib_base_asinhf( const float x ) {
	int32_t sgn;
	float xx;
	float ax;
	float t;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) ) {
		return x;
	}
	if ( x < 0.0f ) {
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
		t = stdlib_base_lnf( ax ) + STDLIB_CONSTANT_FLOAT32_LN2;
	}
	// Case: 2**28 > |x| > 2.0
	else if ( ax > 2.0f ) {
		xx = ax * ax;
		t = stdlib_base_lnf( ( 2.0f * ax ) + ( 1.0f / ( stdlib_base_sqrtf( xx + 1.0f ) + ax ) ) );
	}
	// Case: 2.0 > |x| > 2**-28
	else {
		xx = ax * ax;
		t = stdlib_base_log1pf( ax + ( xx / ( 1.0f + stdlib_base_sqrtf( 1.0f + xx ) ) ) );
	}
	return ( sgn == 1 ) ? -t : t;
}
