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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/acos.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/asin.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/fourth_pi.h"
#include <stdint.h>

static const double MOREBITS = 6.123233995736765886130e-17; // pi/2 = PIO2 + MOREBITS.

/**
* Computes the arccosine of a double-precision floating-point number.
*
* ## Method
*
* -   Analytically,
*
*     ```tex
*     \operatorname{acos}(x) = \frac{\pi}{2} - \operatorname{asin}(x)
*     ```
*
*     However, if \\(\|x\|\\) is near \\(1\\), there is cancellation error in subtracting \\(\opertorname{asin}(x)\\) from \\(\pi/2\\). Hence, if \\(x < -0.5\\),
*
*     ```tex
*     \operatorname{acos}(x) = \pi - 2.0 \cdot \operatorname{asin}(\sqrt{(1+x)/2})
*     ```
*
*     or, if \\(x > +0.5\\),
*
*     ```tex
*     \operatorname{acos}(x) = 2.0 \cdot \operatorname{asin}( \sqrt{(1-x)/2} )}
*     ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain | # trials | peak    | rms     |
*     |:-----------|:------:|:---------|:--------|:--------|
*     | DEC        | -1, 1  | 50000    | 3.3e-17 | 8.2e-18 |
*     | IEEE       | -1, 1  | 10^6     | 2.2e-16 | 6.5e-17 |
*
* @param x    input value ( in radians )
* @return     output value
*
* @example
* double out = stdlib_base_acos( 0.0 );
* // returns ~1.571
*/
double stdlib_base_acos( const double x ) {
	double z;
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < -1.0 || x > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x > 0.5 ) {
		return 2.0 * stdlib_base_asin( stdlib_base_sqrt( 0.5 - ( 0.5 * x ) ) );
	}
	z = STDLIB_CONSTANT_FLOAT64_FOURTH_PI - stdlib_base_asin( x );
	z += MOREBITS;
	z += STDLIB_CONSTANT_FLOAT64_FOURTH_PI;
	return z;
}
