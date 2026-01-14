/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Copyright 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/cosm1.h"
#include "stdlib/math/base/special/cos.h"

static const double PIO4 = 7.85398163397448309616e-1; // 4/π

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
static double polyval_p( const double x ) {
	return 0.041666666666666664 + (x * (-0.0013888888888888872 + (x * (0.00002480158730157055 + (x * (-2.755731921499979e-7 + (x * (2.087675428708152e-9 + (x * (-1.147028484342536e-11 + (x * 4.737750796424621e-14)))))))))));
}

// END: polyval_p

/* End auto-generated functions. */

/**
* Computes the cosine of a number minus one.
*
* @param x    input value (in radians)
* @return     cosine minus one
*
* @example
* double y = stdlib_base_cosm1( 0.0 );
* // returns 0.0
*/
double stdlib_base_cosm1( const double x ) {
	double x2;
	if ( x < -PIO4 || x > PIO4 ) {
		return stdlib_base_cos( x ) - 1.0;
	}
	x2 = x * x;
	return ( -0.5 * x2 ) + ( x2 * x2 * polyval_p( x2 ) );
}
