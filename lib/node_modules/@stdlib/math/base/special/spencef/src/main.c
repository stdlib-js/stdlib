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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to stdlib conventions.
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

#include "stdlib/math/base/special/spencef.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/lnf.h"
#include <stdint.h>

// π^2 / 6
static const float PI2O6 = 1.644934058189392f;

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
static float polyval_a( const float x ) {
	return 1.0f + (x * (3.297713409852251f + (x * (4.256971560081218f + (x * (2.7114985119655346f + (x * (0.8796913117545303f + (x * (0.13384763957830903f + (x * (0.007315890452380947f + (x * 0.000046512858607399003f)))))))))))));
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
static float polyval_b( const float x ) {
	return 1.0f + (x * (3.547713409852251f + (x * (5.03278880143317f + (x * (3.6380053334513707f + (x * (1.4117259775183106f + (x * (0.2829748606025681f + (x * (0.02540437639325444f + (x * 0.0006909904889125533f)))))))))))));
}

// END: polyval_b

/* End auto-generated functions. */

/**
* Evaluates Spence's function (the dilogarithm) for a single-precision floating-point number.
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
*     | IEEE       | 0,4         | 30000    | 4.4e-7  | 6.3e-8  |
*
* @param x    input value
* @return     function value
*
* @example
* float y = stdlib_base_spencef( 3.0f );
* // returns ~-1.437f
*/
float stdlib_base_spencef( const float x ) {
	int32_t flg;
	float xc;
	float w;
	float y;
	float z;

	if ( stdlib_base_is_nanf( x ) || x < 0.0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x == 1.0f ) {
		return 0.0f;
	}
	if ( x == 0.0f ) {
		return PI2O6;
	}
	flg = 0;
	xc = x;
	if ( xc > 2.0f ) {
		xc = 1.0f / xc;
		flg |= 2;
	}
	if ( xc > 1.5f ) {
		w = ( 1.0f / xc ) - 1.0f;
		flg |= 2;
	} else if ( xc < 0.5f ) {
		w = -xc;
		flg |= 1;
	} else {
		w = xc - 1.0f;
	}
	y = -w * polyval_a( w ) / polyval_b( w );
	if ( flg & 1 ) {
		y = PI2O6 - ( stdlib_base_lnf( xc ) * stdlib_base_lnf( 1.0f - xc ) ) - y;
	}
	if ( flg & 2 ) {
		z = stdlib_base_lnf( xc );
		y = -( 0.5f * z * z ) - y;
	}
	return y;
}
