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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/trunc.h"
#include "stdlib/math/base/special/sinpi.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/pinf.h"
#include <stdint.h>

static const double A1C = 7.72156649015328655494e-02; // 0x3FB3C467E37DB0C8
static const double A2C = 3.22467033424113591611e-01; // 0x3FD4A34CC4A60FAD
static const double RC = 1.0;
static const double SC = -7.72156649015328655494e-02; // 0xBFB3C467E37DB0C8
static const double T1C = 4.83836122723810047042e-01; // 0x3FDEF72BC8EE38A2
static const double T2C = -1.47587722994593911752e-01; // 0xBFC2E4278DC6C509
static const double T3C = 6.46249402391333854778e-02; // 0x3FB08B4294D5419B
static const double UC = -7.72156649015328655494e-02; // 0xBFB3C467E37DB0C8
static const double VC = 1.0;
static const double WC = 4.18938533204672725052e-01; // 0x3FDACFE390C97D69
static const double YMIN = 1.461632144968362245;
static const double TWO52 = 4503599627370496; // 2**52
static const double TWO56 = 72057594037927936; // 2**56
static const double TINY = 1.3877787807814457e-17;
static const double TC = 1.46163214496836224576e+00; // 0x3FF762D86356BE3F
static const double TF = -1.21486290535849611461e-01; // 0xBFBF19B9BCC38A42
static const double TT = -3.63867699703950536541e-18; // 0xBC50C7CAA48A971F => TT = -(tail of TF)

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

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
static double polyval_a1( const double x ) {
	return 0.06735230105312927 + (x * (0.007385550860814029 + (x * (0.0011927076318336207 + (x * (0.00022086279071390839 + (x * 0.000025214456545125733)))))));
}

// END: polyval_a1

// BEGIN: polyval_a2

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
static double polyval_a2( const double x ) {
	return 0.020580808432516733 + (x * (0.0028905138367341563 + (x * (0.0005100697921535113 + (x * (0.00010801156724758394 + (x * 0.000044864094961891516)))))));
}

// END: polyval_a2

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
static double polyval_r( const double x ) {
	return 1.3920053346762105 + (x * (0.7219355475671381 + (x * (0.17193386563280308 + (x * (0.01864591917156529 + (x * (0.0007779424963818936 + (x * 0.000007326684307446256)))))))));
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
static double polyval_s( const double x ) {
	return 0.21498241596060885 + (x * (0.325778796408931 + (x * (0.14635047265246445 + (x * (0.02664227030336386 + (x * (0.0018402845140733772 + (x * 0.00003194753265841009)))))))));
}

// END: polyval_s

// BEGIN: polyval_t1

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
static double polyval_t1( const double x ) {
	return -0.032788541075985965 + (x * (0.006100538702462913 + (x * (-0.0014034646998923284 + (x * 0.00031563207090362595)))));
}

// END: polyval_t1

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
static double polyval_t2( const double x ) {
	return 0.01797067508118204 + (x * (-0.0036845201678113826 + (x * (0.000881081882437654 + (x * -0.00031275416837512086)))));
}

// END: polyval_t2

// BEGIN: polyval_t3

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
static double polyval_t3( const double x ) {
	return -0.010314224129834144 + (x * (0.0022596478090061247 + (x * (-0.0005385953053567405 + (x * 0.0003355291926355191)))));
}

// END: polyval_t3

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
static double polyval_u( const double x ) {
	return 0.6328270640250934 + (x * (1.4549225013723477 + (x * (0.9777175279633727 + (x * (0.22896372806469245 + (x * 0.013381091853678766)))))));
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
static double polyval_v( const double x ) {
	return 2.4559779371304113 + (x * (2.128489763798934 + (x * (0.7692851504566728 + (x * (0.10422264559336913 + (x * 0.003217092422824239)))))));
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
static double polyval_w( const double x ) {
	return 0.08333333333333297 + (x * (-0.0027777777772877554 + (x * (0.0007936505586430196 + (x * (-0.00059518755745034 + (x * (0.0008363399189962821 + (x * -0.0016309293409657527)))))))));
}

// END: polyval_w

/* End auto-generated functions. */

/**
* Evaluates the natural logarithm of the gamma function.
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
* 2.  Compute a polynomial approximation of \\(\mathrm{lgamma}\\) around its minimum (\\(\mathrm{ymin} = 1.461632144968362245\\)) to maintain monotonicity. On the interval \\(\[\mathrm{ymin} - 0.23, \mathrm{ymin} + 0.27]\\) (i.e., \\(\[1.23164,1.73163]\\)), we let \\(z = x - \mathrm{ymin}\\) and use
*
*     ```tex
*     \operatorname{lgamma}(x) = -1.214862905358496078218 + z^2 \cdot \operatorname{poly}(z)
*     ```
*
*     where \\(\operatorname{poly}(z)\\) is a \\(14\\) degree polynomial.
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
*     \biggl|\frac{\mathrm{P}}{\mathrm{Q}} - \biggr(\operatorname{lgamma}(x)-\frac{s}{2}\biggl)\biggl| < 2^{-61.71}
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
*     w = w_0 + w_1 z + w_2 z^3 + w_3 z^5 + \ldots + w_6 z^{11}
*     ```
*
*     where
*
*     ```tex
*     |w - f(z)| < 2^{-58.74}
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
* double out = stdlib_base_gammaln( 1.0 );
* // returns 0.0
*/
double stdlib_base_gammaln( const double x ) {
	uint8_t isNegative;
	int32_t flg;
	double nadj;
	double xc;
	double p3;
	double p2;
	double p1;
	double p;
	double q;
	double t;
	double w;
	double y;
	double z;
	double r;

	// Special cases: NaN, +-infinity
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		return x;
	}

	// Special case: 0
	if ( x == 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	xc = x;
	if ( xc < 0.0 ) {
		isNegative = 1;
		xc = -xc;
	} else {
		isNegative = 0;
	}

	// If |x| < 2**-56, return -ln(|x|)
	if ( xc < TINY ) {
		return -stdlib_base_ln( xc );
	}
	if ( isNegative ) {
		// If |x| >= 2**52, must be -integer
		if ( xc >= TWO52 ) {
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		t = stdlib_base_sinpi( xc );
		if ( t == 0.0 ) {
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		nadj = stdlib_base_ln( STDLIB_CONSTANT_FLOAT64_PI / stdlib_base_abs( t * xc ) );
	}

	// If x equals 1 or 2, return 0
	if ( xc == 1.0 || xc == 2.0 ) {
		return 0.0;
	}

	// If x < 2, use lgamma(x) = lgamma(x+1) - log(x)
	if ( xc < 2.0 ) {
		if ( xc <= 0.9 ) {
			r = -stdlib_base_ln( xc );
			if ( xc >= ( YMIN - 1.0 + 0.27 ) ) { // 0.7316 <= x <=  0.9
				y = 1.0 - xc;
				flg = 0;
			} else if ( xc >= ( YMIN - 1.0 - 0.27 ) ) { // 0.2316 <= x < 0.7316
				y = xc - ( TC - 1.0 );
				flg = 1;
			} else { // 0 < x < 0.2316
				y = xc;
				flg = 2;
			}
		} else {
			r = 0.0;
			if ( xc >= ( YMIN + 0.27 ) ) { // 1.7316 <= x < 2
				y = 2.0 - xc;
				flg = 0;
			} else if ( xc >= ( YMIN - 0.27 ) ) { // 1.2316 <= x < 1.7316
				y = xc - TC;
				flg = 1;
			} else { // 0.9 < x < 1.2316
				y = xc - 1.0;
				flg = 2;
			}
		}
		switch ( flg ) {
		case 0:
			z = y * y;
			p1 = A1C + ( z * polyval_a1( z ) );
			p2 = z * ( A2C + ( z * polyval_a2( z ) ) );
			p = ( y * p1 ) + p2;
			r += ( p - ( 0.5 * y ) );
			break;
		case 1:
			z = y * y;
			w = z * y;
			p1 = T1C + ( w * polyval_t1( w ) );
			p2 = T2C + ( w * polyval_t2( w ) );
			p3 = T3C + ( w * polyval_t3( w ) );
			p = ( z * p1 ) - ( TT - ( w * ( p2 + ( y * p3 ) ) ) );
			r += ( TF + p );
			break;
		case 2:
			p1 = y * ( UC + ( y * polyval_u( y ) ) );
			p2 = VC + ( y * polyval_v( y ) );
			r += ( -0.5 * y ) + ( p1 / p2 );
			break;
		}
	} else if ( xc < 8.0 ) { // 2 <= x < 8
		flg = stdlib_base_trunc( xc );
		y = xc - flg;
		p = y * ( SC + ( y * polyval_s( y ) ) );
		q = RC + ( y * polyval_r( y ) );
		r = ( 0.5 * y ) + ( p / q );
		z = 1.0; // gammaln(1+s) = ln(s) + gammaln(s)
		switch ( flg ) {
		case 7:
			z *= y + 6.0;

			/* Falls through */
		case 6:
			z *= y + 5.0;

			/* Falls through */
		case 5:
			z *= y + 4.0;

			/* Falls through */
		case 4:
			z *= y + 3.0;

			/* Falls through */
		case 3:
			z *= y + 2.0;
			r += stdlib_base_ln( z );
		}
	} else if ( xc < TWO56 ) { // 8 <= x < 2**56
		t = stdlib_base_ln( xc );
		z = 1.0 / xc;
		y = z * z;
		w = WC + ( z * polyval_w( y ) );
		r = ( ( xc - 0.5 ) * ( t - 1.0 ) ) + w;
	} else { // 2**56 <= x <= Inf
		r = xc * ( stdlib_base_ln( xc ) - 1.0 );
	}
	if ( isNegative ) {
		r = nadj - r;
	}
	return r;
}
