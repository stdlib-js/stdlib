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
* Copyright 1985, 1987, 1989, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/spence.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pi_squared.h"
#include <stdint.h>

// π^2 / 6
static const double PI2O6 = STDLIB_CONSTANT_FLOAT64_PI_SQUARED / 6.0;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_a

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
static double polyval_a( const double x ) {
	return 1.0 + (x * (3.297713409852251 + (x * (4.256971560081218 + (x * (2.7114985119655346 + (x * (0.8796913117545303 + (x * (0.13384763957830903 + (x * (0.007315890452380947 + (x * 0.000046512858607399003)))))))))))));
}

// END: polyval_a

// BEGIN: polyval_b

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
static double polyval_b( const double x ) {
	return 1.0 + (x * (3.547713409852251 + (x * (5.03278880143317 + (x * (3.6380053334513707 + (x * (1.4117259775183106 + (x * (0.2829748606025681 + (x * (0.02540437639325444 + (x * 0.0006909904889125533)))))))))))));
}

// END: polyval_b

/* End auto-generated functions. */

/**
* Evaluates Spence's function, which is also known as the dilogarithm.
*
* ## Method
*
* -   A rational approximation gives the integral in the interval (0.5, 1.5).
* -   Transformation formulas for \\( \tfrac{1}{x} \\) and \\( 1 - x \\) are employed outside the basic expansion range.
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain      | # trials | peak    | rms     |
*     |:----------:|:-----------:|:--------:|:-------:|:-------:|
*     | IEEE       | 0,4         | 30000    | 3.9e-15 | 5.4e-16 |
*
* @param x    input value
* @return     function value
*
* @example
* double y = stdlib_base_spence( 3.0 );
* // returns ~-1.437
*/
double stdlib_base_spence( const double x ) {
	int32_t flg;
	double xc;
	double w;
	double y;
	double z;

	if ( stdlib_base_is_nan( x ) || x < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 1.0 ) {
		return 0.0;
	}
	if ( x == 0.0 ) {
		return PI2O6;
	}
	flg = 0;
	xc = x;
	if ( xc > 2.0 ) {
		xc = 1.0 / xc;
		flg |= 2;
	}
	if ( xc > 1.5 ) {
		w = ( 1.0 / xc ) - 1.0;
		flg |= 2;
	} else if ( xc < 0.5 ) {
		w = -xc;
		flg |= 1;
	} else {
		w = xc - 1.0;
	}
	y = -w * polyval_a( w ) / polyval_b( w );
	if ( flg & 1 ) {
		y = PI2O6 - ( stdlib_base_ln( xc ) * stdlib_base_ln( 1.0 - xc ) ) - y;
	}
	if ( flg & 2 ) {
		z = stdlib_base_ln( xc );
		y = -( 0.5 * z * z ) - y;
	}
	return y;
}
