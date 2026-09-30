/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_acoshf.c?view=markup}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/acoshf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/log1pf.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/constants/float32/ln_two.h"
#include <stdint.h>

static const float HUGE = 1 << 28; // 2**28

/**
* Computes the hyperbolic arccosine of a single-precision floating-point number.
*
* ## Method
*
* Based on
*
* ```tex
* \operatorname{acoshf}(x) = \log \left[ x + \sqrt{ x^2 - 1 } \right]
* ```
*
* we have
*
* ```tex
* \operatorname{acoshf}(x) = \begin{cases}
* \log(x) + \tfrac{\ln}{2} & \text{ if x is large } \\
* \log \left( 2x-\tfrac{1}{\sqrt{x^2-1}+x} \right) & \text{ if } x > 2 \\
* \operatorname{log1p}\left( x - 1 + \sqrt{ 2 \cdot (x-1) + (x-1)^2 } \right) & \text{ otherwise }
* \end{cases}
* ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{acoshf}(x) &= \mathrm{NaN}\ \text{ if } x < 1 \\
* \end{align*}
* ```
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_acoshf( 1.0f );
* // returns 0.0f
*/
float stdlib_base_acoshf( const float x ) {
	float t;

	if ( stdlib_base_is_nanf( x ) || x < 1.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x == 1.0f ) {
		return 0.0f;
	}
	if ( x >= HUGE ) {
		return stdlib_base_lnf( x ) + STDLIB_CONSTANT_FLOAT32_LN2;
	}
	if ( x > 2.0f ) {
		return stdlib_base_lnf( ( 2.0f * x ) - ( 1.0f / ( x + stdlib_base_sqrtf( ( x * x ) - 1.0f ) ) ) );
	}
	// Case: 2 >= x > 1
	t = x - 1.0f;
	return stdlib_base_log1pf( t + stdlib_base_sqrtf( ( 2.0f * t ) + ( t * t ) ) );
}
