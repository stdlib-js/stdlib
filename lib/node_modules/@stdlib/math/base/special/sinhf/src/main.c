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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright 1985, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/sinhf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/max_ln.h"
#include "stdlib/math/base/special/expf.h"

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
static float polyval_p( const float x ) {
	return 0.166667160211f + (x * (0.00833028376239f + (x * 0.000203721912945f)));
}

// END: polyval_p

/* End auto-generated functions. */

/**
* Computes the hyperbolic sine of a single-precision floating-point number.
*
* ## Method
*
* The range is partitioned into two segments. If |x| <= 1, a polynomial approximation is used. Otherwise, the calculation is
*
* ```tex
* \operatorname{sinhf}(x) = \frac{ \exp(x) - \exp(-x) }{2}
* ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain    | # trials | peak    | rms     |
*     |:----------:|:---------:|:--------:|:-------:|:-------:|
*     | IEEE       | +-MAXLOGF | 100000   | 1.1e-7  | 2.9e-8  |
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_sinhf( 0.0f );
* // returns 0.0f
*/
float stdlib_base_sinhf( const float x ) {
	float z;
	float a;

	if ( x == 0.0f ) {
		return x; // preserves signed zero
	}
	if ( stdlib_base_is_nanf( x ) ) {
		return x;
	}
	if ( stdlib_base_is_infinitef( x ) ) {
		return x;
	}
	if ( x > 0.0f ) {
		a = x;
	} else {
		a = -x;
	}
	// Handle overflow:
	if ( a > STDLIB_CONSTANT_FLOAT32_MAX_LN ) {
		if ( x > 0.0f ) {
			return STDLIB_CONSTANT_FLOAT32_PINF;
		}
		return STDLIB_CONSTANT_FLOAT32_NINF;
	}
	if ( a > 1.0f ) {
		z = stdlib_base_expf( a );
		z = ( 0.5f * z ) - ( 0.5f / z );
		if ( x < 0.0f ) {
			z = -z;
		}
	} else {
		z = x * x;
		z = ( polyval_p( z ) * z * x ) + x;
	}
	return z;
}
