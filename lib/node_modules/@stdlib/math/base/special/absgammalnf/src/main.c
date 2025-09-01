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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgammaf_r.c}. The implementation follows the original, but has been modified according to stdlib conventions.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/absgammalnf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/math/base/special/truncf.h"
#include "stdlib/math/base/special/sinpif.h"
#include "stdlib/constants/float32/pi.h"
#include "stdlib/constants/float32/pinf.h"
#include <stdint.h>

static const float T0C = -2.94064460e-11f;        // 0xAE0154B7
static const float T1C = -2.35939837e-08f;        // 0xB2CAABB8
static const float W0C = 4.18938547e-01f;         // 0x3ED67F1D
static const float TWO23 = 8388608.0f;            // 2**23
static const float TWO27 = 134217728.0f;          // 2**27
static const float TINY = 7.450580596923828e-9f;  // 2**-27
static const float YMIN = 1.46163213e+00f;        // 0x3FBB16C3
static const float TF = -1.21486291e-01f;         // 0xBDF8CDCE

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_a0

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
static float polyval_a0( const float x ) {
	return 0.0772156641f + (x * (0.0673484802f + (x * 0.00698275631f)));
}

// END: polyval_a0

// BEGIN: polyval_a1

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
static float polyval_a1( const float x ) {
	return 0.322467119f + (x * (0.0206395667f + (x * 0.00411768444f)));
}

// END: polyval_a1

// BEGIN: polyval_r

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
static float polyval_r( const float x ) {
	return 0.679650068f + (x * (0.11605873f + (x * 0.00375673687f)));
}

// END: polyval_r

// BEGIN: polyval_s

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
static float polyval_s( const float x ) {
	return -0.0772156641f + (x * (0.269987404f + (x * (0.14285101f + (x * 0.0119389519f)))));
}

// END: polyval_s

// BEGIN: polyval_t2

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
static float polyval_t2( const float x ) {
	return 0.483836412f + (x * (-0.147586212f + (x * (0.0646013096f + (x * (-0.0328450352f + (x * (0.0186483748f + (x * -0.00989206228f)))))))));
}

// END: polyval_t2

// BEGIN: polyval_u

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
static float polyval_u( const float x ) {
	return -0.0772156641f + (x * (0.736789703f + (x * 0.49564904f)));
}

// END: polyval_u

// BEGIN: polyval_v

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
static float polyval_v( const float x ) {
	return 1.10958421f + (x * (0.210598111f + (x * -0.0102995494f)));
}

// END: polyval_v

// BEGIN: polyval_w

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
static float polyval_w( const float x ) {
	return 0.0833332464f + (x * -0.00276129087f);
}

// END: polyval_w

/* End auto-generated functions. */

/**
* Evaluates the natural logarithm of the absolute value of the gamma function for a single-precision floating-point number.
*
* ## Method
*
* 1.  Argument reduction for \\(0 < x \leq 8\\). Since \\(\Gamma(1+s) = s \Gamma(s)\\), for \\(x \in \[0,8]\\), we may reduce \\(x\\) to a number in \\(\[1.5,2.5]\\) by
*
*     ```tex
*     \operatorname{lgamma}(1+s) = \ln(s) + \operatorname{lgamma}(s)
*     ```
*
*     For example,
*
*     ```tex
*     \begin{align*}
*     \operatorname{lgamma}(7.3) &= \ln(6.3) + \operatorname{lgamma}(6.3) \\
*     &= \ln(6.3 \cdot 5.3) + \operatorname{lgamma}(5.3) \\
*     &= \ln(6.3 \cdot 5.3 \cdot 4.3 \cdot 3.3 \cdot2.3) + \operatorname{lgamma}(2.3)
*     \end{align*}
*     ```
*
* 2.  Compute a polynomial approximation of \\(\mathrm{lgamma}\\) around its minimum (\\(\mathrm{ymin} = 1.46163213\\)) to maintain monotonicity. On the interval \\(\[\mathrm{ymin} - 0.24, \mathrm{ymin} + 0.28]\\) (i.e., \\(\[1.22163213,1.74163213]\\)), we let \\(z = x - \mathrm{ymin}\\) and use
*
*     ```tex
*     \operatorname{lgamma}(x) = -1.214862905358496078218 + z^2 \cdot \operatorname{poly}(z)
*     ```
*
*     where \\(\operatorname{poly}(z)\\) is a \\(7\\) degree polynomial.
*
* 3.  Compute a rational approximation in the primary interval \\(\[2,3]\\). Let \\( s = x - 2.0 \\). We can thus use the approximation
*
*     ```tex
*     \operatorname{lgamma}(x) = \frac{s}{2} + s\frac{\operatorname{P}(s)}{\operatorname{Q}(s)}
*     ```
*
*     with accuracy
*
*     ```tex
*     \biggl|\frac{\mathrm{P}}{\mathrm{Q}} - \biggr(\operatorname{lgamma}(x)-\frac{s}{2}\biggl)\biggl| < 2^{-35.0}
*     ```
*
*     The algorithms are based on the observation
*
*     ```tex
*     \operatorname{lgamma}(2+s) = s(1 - \gamma) + \frac{\zeta(2) - 1}{2} s^2 - \frac{\zeta(3) - 1}{3} s^3 + \ldots
*     ```
*
*     where \\(\zeta\\) is the zeta function and \\(\gamma = 0.5772156649...\\) is the Euler-Mascheroni constant, which is very close to \\(0.5\\).
*
* 4.  For \\(x \geq 8\\),
*
*     ```tex
*     \operatorname{lgamma}(x) \approx \biggl(x-\frac{1}{2}\biggr) \ln(x) - x + \frac{\ln(2\pi)}{2} + \frac{1}{12x} - \frac{1}{360x^3} + \ldots
*     ```
*
*     which can be expressed
*
*     ```tex
*     \operatorname{lgamma}(x) \approx \biggl(x-\frac{1}{2}\biggr)(\ln(x)-1)-\frac{\ln(2\pi)-1}{2} + \ldots
*     ```
*
*     Let \\(z = \frac{1}{x}\\). We can then use the approximation
*
*     ```tex
*     f(z) = \operatorname{lgamma}(x) - \biggl(x-\frac{1}{2}\biggr)(\ln(x)-1)
*     ```
*
*     by
*
*     ```tex
*     w = w_0 + w_1 z + w_2 z^3
*     ```
*
*     where
*
*     ```tex
*     |w - f(z)| < 2^{-29.6}
*     ```
*
* 5.  For negative \\(x\\), since
*
*     ```tex
*     -x \Gamma(-x) \Gamma(x) = \frac{\pi}{\sin(\pi x)}
*     ```
*
*     where \\(\Gamma\\) is the gamma function, we have
*
*     ```tex
*     \Gamma(x) = \frac{\pi}{\sin(\pi x)(-x)\Gamma(-x)}
*     ```
*
*     Since \\(\Gamma(-x)\\) is positive,
*
*     ```tex
*     \operatorname{sign}(\Gamma(x)) = \operatorname{sign}(\sin(\pi x))
*     ```
*
*     for \\(x < 0\\). Hence, for \\(x < 0\\),
*
*     ```tex
*     \mathrm{signgam} = \operatorname{sign}(\sin(\pi x))
*     ```
*
*     and
*
*     ```tex
*     \begin{align*}
*     \operatorname{lgamma}(x) &= \ln(|\Gamma(x)|) \\
*     &= \ln\biggl(\frac{\pi}{|x \sin(\pi x)|}\biggr) - \operatorname{lgamma}(-x)
*     \end{align*}
*     ```
*
*     <!-- <note> -->
*
*     Note that one should avoid computing \\(\pi (-x)\\) directly in the computation of \\(\sin(\pi (-x))\\).
*
*     <!-- </note> -->
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{lgamma}(2+s) &\approx s (1-\gamma) & \mathrm{for\ tiny\ s} \\
* \operatorname{lgamma}(x) &\approx -\ln(x) & \mathrm{for\ tiny\ x} \\
* \operatorname{lgamma}(1) &= 0 & \\
* \operatorname{lgamma}(2) &= 0 & \\
* \operatorname{lgamma}(0) &= \infty & \\
* \operatorname{lgamma}(\infty) &= \infty & \\
* \operatorname{lgamma}(-\mathrm{integer}) &= \pm \infty
* \end{align*}
* ```
*
* @param x    input value
* @return     function value
*
* @example
* float out = stdlib_base_absgammalnf( 1.0f );
* // returns 0.0f
*/
float stdlib_base_absgammalnf( const float x ) {
	uint8_t isNegative;
	int32_t flg;
	float nadj;
	float xc;
	float p2;
	float p1;
	float p;
	float q;
	float t;
	float w;
	float y;
	float z;
	float r;

	// Special cases: NaN, +-infinity
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) ) {
		return x;
	}

	// Special case: 0
	if ( x == 0.0f ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	xc = x;
	if ( xc < 0.0f ) {
		isNegative = 1;
		xc = -xc;
	} else {
		isNegative = 0;
	}
	// If |x| < 2**-27, return -ln(|x|)
	if ( xc < TINY ) {
		return -stdlib_base_lnf( xc );
	}
	if ( isNegative ) {
		// If |x| >= 2**23, must be -integer
		if ( xc >= TWO23 ) {
			return STDLIB_CONSTANT_FLOAT32_PINF;
		}
		t = stdlib_base_sinpif( xc );
		if ( t == 0.0f ) {
			return STDLIB_CONSTANT_FLOAT32_PINF;
		}
		nadj = stdlib_base_lnf( STDLIB_CONSTANT_FLOAT32_PI / stdlib_base_absf( t * xc ) );
	}
	// If x equals 1 or 2, return 0
	if ( xc == 1.0f || xc == 2.0f ) {
		return 0.0f;
	}
	// If x < 2, use lgamma(x) = lgamma(x+1) - log(x)
	if ( xc < 2.0f ) {
		if ( xc <= 0.9f ) {
			r = -stdlib_base_lnf( xc );

			// 0.7316 <= x <= 0.9
			if ( xc >= ( YMIN - 1.0f + 0.27f ) ) {
				y = 1.0f - xc;
				flg = 0;
			}
			// 0.2316 <= x < 0.7316
			else if ( xc >= ( YMIN - 1.0f - 0.23f ) ) {
				y = xc - ( YMIN - 1.0f );
				flg = 1;
			}
			// 0 < x < 0.2316
			else {
				y = xc;
				flg = 2;
			}
		} else {
			r = 0.0f;

			// 1.7316 <= x < 2
			if ( xc >= ( YMIN + 0.27f ) ) {
				y = 2.0f - xc;
				flg = 0;
			}
			// 1.2316 <= x < 1.7316
			else if ( xc >= ( YMIN - 0.23f ) ) {
				y = xc - YMIN;
				flg = 1;
			}
			// 0.9 < x < 1.2316
			else {
				y = xc - 1.0f;
				flg = 2;
			}
		}
		switch ( flg ) {
		case 0:
			z = y * y;
			p1 = polyval_a0( z );
			p2 = z * polyval_a1( z );
			p = ( y * p1 ) + p2;
			r += ( p - ( 0.5f * y ) );
			break;
		case 1:
			z = y * y;
			p = T0C + ( y * T1C ) + ( z * polyval_t2( y ) );
			r += ( TF + p );
			break;
		case 2:
			p1 = y * polyval_u( y );
			p2 = 1.0f + ( y * polyval_v( y ) );
			r += ( p1 / p2 ) - ( 0.5f * y );
			break;
		}
	}
	// 2 <= x < 8
	else if ( xc < 8.0f ) {
		flg = (int32_t)stdlib_base_truncf( xc );
		y = xc - flg;
		p = y * polyval_s( y );
		q = 1.0f + ( y * polyval_r( y ) );
		r = ( 0.5f * y ) + ( p / q );
		z = 1.0f; // gammaln(1+s) = ln(s) + gammaln(s)
		switch ( flg ) {
		case 7:
			z *= y + 6.0f;

			/* Falls through */
		case 6:
			z *= y + 5.0f;

			/* Falls through */
		case 5:
			z *= y + 4.0f;

			/* Falls through */
		case 4:
			z *= y + 3.0f;

			/* Falls through */
		case 3:
			z *= y + 2.0f;
			r += stdlib_base_lnf( z );
		}
	}
	// 8 <= x < 2**27
	else if ( xc < TWO27 ) {
		t = stdlib_base_lnf( xc );
		z = 1.0f / xc;
		y = z * z;
		w = W0C + ( z * polyval_w( y ) );
		r = ( ( xc - 0.5f ) * ( t - 1.0f ) ) + w;
	}
	// 2**27 <= x <= Inf
	else {
		r = xc * ( stdlib_base_lnf( xc ) - 1.0f );
	}
	if ( isNegative ) {
		r = nadj - r;
	}
	return r;
}
