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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/cosh.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"

/**
* Computes the hyperbolic cosine of a number.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_cosh( 0.0 );
* // returns 1.0
*/
double stdlib_base_cosh( const double x ) {
	double xc = x;
	if ( stdlib_base_is_nan( xc ) ) {
		return xc;
	}
	if ( xc < 0.0 ) {
		xc = -xc;
	}
	if ( xc > 21.0 ) {
		return stdlib_base_exp( xc ) / 2.0;
	}
	return ( stdlib_base_exp( xc ) + stdlib_base_exp( -xc ) ) / 2.0;
}
