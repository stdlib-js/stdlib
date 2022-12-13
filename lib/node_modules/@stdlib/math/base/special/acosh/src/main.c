/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_acosh.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/acosh.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ln_two.h"
#include <stdint.h>

static const double HUGE = 1 << 28; // 2**28

/**
*  Computes the hyperbolic arccosine of `x`.
*
* @param x    input value
* @return	  output value
*
* @example
* double out = stdlib_base_acosh( 1.0 );
* // returns 0.0
*/
double stdlib_base_acosh( const double x ) {
	double t;
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 1.0 ) {
		return 0.0;
	}
	if ( x >= HUGE ) {
		return stdlib_base_ln( x ) + STDLIB_CONSTANT_FLOAT64_LN2;
	}
	if ( x > 2.0 ) {
		return stdlib_base_ln( ( 2.0 * x ) - ( 1.0 / ( x + stdlib_base_sqrt( ( x * x ) - 1.0 ) ) ) );
	}
	// Case: 2 >= x > 1
	t = x - 1.0;
	return stdlib_base_log1p( t + stdlib_base_sqrt( ( 2.0 * t ) + ( t * t ) ) );
}
