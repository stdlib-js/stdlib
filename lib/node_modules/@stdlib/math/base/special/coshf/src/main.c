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

#include "stdlib/math/base/special/coshf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/constants/float32/pinf.h"


static const float MAXLOGF = 88.72283935546875f; // log(FLT_MAX)

/**
* Define prototypes for external functions.
*/
extern float expf( float x );

/**
* Computes the hyperbolic cosine of a single-precision floating-point number.
*
* ## Method
*
* ```tex
* \operatorname{coshf}(x) = \frac{ \exp(x) + \exp(-x) }{2}
* ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain    | # trials | peak    | rms     |
*     |:----------:|:---------:|:--------:|:-------:|:-------:|
*     | IEEE       | +-MAXLOGF | 100000   | 1.2e-7  | 2.8e-8  |
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_coshf( 0.0f );
* // returns 1.0f
*/
float stdlib_base_coshf( const float x ) {
	float z;
	if ( stdlib_base_is_nanf( x ) ) {
		return x;
	}
	if ( x < 0.0f ) {
		z = -x;
	} else {
		z = x;
	}
	if ( stdlib_base_is_infinitef( z ) || z > MAXLOGF ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	z = expf( z );
	z = z + ( 1.0f/z );
	return ( z / 2.0f );
}
