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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_atanhf.c?view=markup}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/atanhf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/log1pf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"
#include <stdint.h>

static const float NEAR_ZERO = 1.0f / (1 << 28); // 2**-28

/**
* Computes the hyperbolic arctangent of a single-precision floating-point number.
*
* ## Method
*
* 1.  Reduce \\( x \\) to positive by \\( \operatorname{atanhf}(-x) = -\operatorname{atanhf}(x) \\)
*
* 2.  For \\( x \ge 0.5 \\), we calculate
*
*     ```tex
*     \operatorname{atanhf}(x) = \frac{1}{2} \cdot \log\left( 1 + \tfrac{2x}{1-x} \right) = \frac{1}{2} \cdot \operatorname{log1pf}\left( 2 \tfrac{x}{1-x} \right)
*     ```
*
*     For \\( x < 0.5 \\), we have
*
*     ```tex
*     \operatorname{atanhf}(x) = \frac{1}{2} \cdot \operatorname{log1pf}\left( 2x + \tfrac{2x^2}{1-x} \right)
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{atanhf}(\mathrm{NaN}) &= \mathrm{NaN}\\
* \operatorname{atanhf}(1.0) &= \infty \\
* \operatorname{atanhf}(-1.0) &= -\infty \\
* \end{align*}
* ```
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_atanhf( 0.0f );
* // returns 0.0f
*
* out = stdlib_base_atanhf( 0.9f );
* // returns ~1.472f
*/
float stdlib_base_atanhf( const float x ) {
	int32_t sgn;
	float ax;
	float t;
	if ( stdlib_base_is_nanf( x ) || x < -1.0f || x > 1.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x == 1.0f ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	if ( x == -1.0f ) {
		return STDLIB_CONSTANT_FLOAT32_NINF;
	}
	if ( x < 0.0f ) {
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
	if ( ax < 0.5f ) {
		t = ax + ax;
		t = 0.5f * stdlib_base_log1pf( t + ( t * ax / ( 1.0f - ax ) ) );
	} else {
		t = 0.5f * stdlib_base_log1pf( ( ax + ax ) / ( 1.0f - ax ) );
	}
	return ( sgn == 1 ) ? -t : t;
}
