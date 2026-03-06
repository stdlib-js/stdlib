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
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/assert/is_negative_zero.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/sin.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/eulergamma.h"
#include "stdlib/constants/float64/sqrt_two_pi.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/exp.h"
#include <stdint.h>

static const double MAX_STIRLING = 143.01608;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: poly_p

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
static double poly_p( const double x ) {
	return 0.08333333333334822 + (x * (0.0034722222160545866 + (x * (-0.0026813261780578124 + (x * (-0.00022954996161337813 + (x * 0.0007873113957930937)))))));
}

// END: poly_p

// BEGIN: rational_pq

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_pq( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 1.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 1.0 + (x * (0.4942148268014971 + (x * (0.20744822764843598 + (x * (0.04763678004571372 + (x * (0.010421379756176158 + (x * (0.0011913514700658638 + (x * (0.00016011952247675185 + (x * 0.0)))))))))))));
		s2 = 1.0 + (x * (0.0714304917030273 + (x * (-0.23459179571824335 + (x * (0.035823639860549865 + (x * (0.011813978522206043 + (x * (-0.004456419138517973 + (x * (0.0005396055804933034 + (x * -0.000023158187332412014)))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (0.00016011952247675185 + (ix * (0.0011913514700658638 + (ix * (0.010421379756176158 + (ix * (0.04763678004571372 + (ix * (0.20744822764843598 + (ix * (0.4942148268014971 + (ix * 1.0)))))))))))));
		s2 = -0.000023158187332412014 + (ix * (0.0005396055804933034 + (ix * (-0.004456419138517973 + (ix * (0.011813978522206043 + (ix * (0.035823639860549865 + (ix * (-0.23459179571824335 + (ix * (0.0714304917030273 + (ix * 1.0)))))))))))));
	}
	return s1 / s2;
}

// END: rational_pq

/* End auto-generated functions. */

/**
* Evaluates the gamma function using Stirling's formula. The polynomial is valid for \\(33 \leq x \leq 172\\).
*
* @param x    input value
* @return     function value
*/
static double stirlingApprox( const double x ) {
	double w;
	double y;
	double v;

	w = 1.0 / x;
	w = 1.0 + ( w * poly_p( w ) );
	y = stdlib_base_exp( x );

	// Check `x` to avoid `pow()` overflow...
	if ( x > MAX_STIRLING ) {
		v = stdlib_base_pow( x, ( 0.5 * x ) - 0.25 );
		y = v * ( v / y );
	} else {
		y = stdlib_base_pow( x, x - 0.5 ) / y;
	}
	return STDLIB_CONSTANT_FLOAT64_SQRT_TWO_PI * y * w;
}

/**
* Evaluates the gamma function using a small-value approximation.
*
* @param x    input value
* @param z    scale factor
* @return     function value
*/
static double smallApprox( const double x, const double z ) {
	return z / ( ( 1.0 + ( STDLIB_CONSTANT_FLOAT64_EULERGAMMA * x ) ) * x );
}

/**
* Evaluates the gamma function.
*
* ## Method
*
* 1.  Arguments \\(|x| \leq 34\\) are reduced by recurrence and the function approximated by a rational function of degree \\(6/7\\) in the interval \\((2,3)\\).
* 2.  Large negative arguments are made positive using a reflection formula.
* 3.  Large arguments are handled by Stirling's formula.
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain    | # trials | peak    | rms     |
*     |:----------:|:---------:|:--------:|:-------:|:-------:|
*     | DEC        | -34,34    | 10000    | 1.3e-16 | 2.5e-17 |
*     | IEEE       | -170,-33  | 20000    | 2.3e-15 | 3.3e-16 |
*     | IEEE       | -33, 33   | 20000    | 9.4e-16 | 2.2e-16 |
*     | IEEE       | 33, 171.6 | 20000    | 2.3e-15 | 3.2e-16 |
*
* -   Error for arguments outside the test range will be larger owing to error amplification by the exponential function.
*
* @param x    input value
* @return     function value
*
* @example
* double v = stdlib_base_gamma( 4.0 );
* // returns 6.0
*/
double stdlib_base_gamma( const double x ) {
	double sign;
	double xc;
	int32_t i;
	double p;
	double q;
	double z;

	if ( ( stdlib_base_is_integer( x ) && x < 0 ) || x == STDLIB_CONSTANT_FLOAT64_NINF || stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 0.0 ) {
		if ( stdlib_base_is_negative_zero( x ) ) {
			return STDLIB_CONSTANT_FLOAT64_NINF;
		}
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( x > 171.61447887182298 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( x < -170.5674972726612 ) {
		return 0.0;
	}
	q = stdlib_base_abs( x );
	if ( q > 33.0 ) {
		if ( x >= 0.0 ) {
			return stirlingApprox( x );
		}
		p = stdlib_base_floor( q );
		
		// Check whether `x` is even...
		i = (int32_t)p;
		if ( ( i & 1 ) == 0 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		z = q - p;
		if ( z > 0.5 ) {
			p += 1.0;
			z = q - p;
		}
		z = q * stdlib_base_sin( STDLIB_CONSTANT_FLOAT64_PI * z );
		return sign * STDLIB_CONSTANT_FLOAT64_PI / ( stdlib_base_abs( z ) * stirlingApprox( q ) );
	}
	
	// Reduce `x`...
	z = 1.0;
	xc = x;
	while ( xc >= 3.0 ) {
		xc -= 1.0;
		z *= xc;
	}
	while ( xc < 0.0 ) {
		if ( xc > -1.0e-9 ) {
			return smallApprox( xc, z );
		}
		z /= xc;
		xc += 1.0;
	}
	while ( xc < 2.0 ) {
		if ( xc < 1.0e-9 ) {
			return smallApprox( xc, z );
		}
		z /= xc;
		xc += 1.0;
	}
	if ( xc == 2.0 ) {
		return z;
	}
	xc -= 2.0;
	return z * rational_pq( xc );
}
