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
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/half_ln_two.h"
#include <stdint.h>

static const double OVERFLOW_THRESHOLD = 7.09782712893383973096e+02; // 0x40862E42 0xFEFA39EF

// High and low words of ln(2):
static const double LN2_HI = 6.93147180369123816490e-01; // 0x3FE62E42 0xFEE00000
static const double LN2_LO = 1.90821492927058770002e-10; // 0x3DEA39EF 0x35793C76

// 1 / ln(2):
static const double LN2_INV = 1.44269504088896338700e+00; // 0x3FF71547 0x652B82FE

// ln(2) * 56:
static const double LN2x56 = 3.88162421113569373274e+01; // 0x4043687A 0x9F1AF2B1

// ln(2) * 1.5:
static const double LN2_HALFX3 = 1.03972077083991796413e+00; // 0x3FF0A2B2 0x3F3BAB73

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_q

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
static double polyval_q( const double x ) {
	return -0.03333333333333313 + (x * (0.0015873015872548146 + (x * (-0.0000793650757867488 + (x * (0.000004008217827329362 + (x * -2.0109921818362437e-7)))))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Computes `exp(x) - 1`.
*
* ## Method
*
* 1.  Given \\(x\\), we use argument reduction to find \\(r\\) and an integer \\(k\\) such that
*
*     ```tex
*     x = k \cdot \ln(2) + r
*     ```
*
*     where
*
*     ```tex
*     |r| \leq \frac{\ln(2)}{2} \approx 0.34658
*     ```
*
*     <!-- <note> -->
*
*     A correction term \\(c\\) will need to be computed to compensate for the error in \\(r\\) when rounded to a floating-point number.
*
*     <!-- </note> -->
*
* 2.  To approximate \\(\operatorname{expm1}(r)\\), we use a special rational function on the interval \\(\[0,0.34658]\\). Since
*
*     ```tex
*     r \frac{e^r + 1}{e^r - 1} = 2 + \frac{r^2}{6} - \frac{r^4}{360} + \ldots
*     ```
*
*     we define \\(\operatorname{R1}(r^2)\\) by
*
*     ```tex
*     r \frac{e^r + 1}{e^r - 1} = 2 + \frac{r^2}{6} \operatorname{R1}(r^2)
*     ```
*
*     That is,
*
*     ```tex
*     \begin{align*}
*     \operatorname{R1}(r^2) &= \frac{6}{r} \biggl(\frac{e^r+1}{e^r-1} - \frac{2}{r}\biggr) \\
*     &= \frac{6}{r} \biggl( 1 + 2 \biggl(\frac{1}{e^r-1} - \frac{1}{r}\biggr)\biggr) \\
*     &= 1 - \frac{r^2}{60} + \frac{r^4}{2520} - \frac{r^6}{100800} + \ldots
*     \end{align*}
*     ```
*
*     We use a special Remes algorithm on \\(\[0,0.347]\\) to generate a polynomial of degree \\(5\\) in \\(r^2\\) to approximate \\(\mathrm{R1}\\). The maximum error of this polynomial approximation is bounded by \\(2^{-61}\\). In other words,
*
*     ```tex
*     \operatorname{R1}(z) \approx 1 + \mathrm{Q1} \cdot z + \mathrm{Q2} \cdot z^2 + \mathrm{Q3} \cdot z^3 + \mathrm{Q4} \cdot z^4 + \mathrm{Q5} \cdot z^5
*     ```
*
*     where
*
*     ```tex
*     \begin{align*}
*     \mathrm{Q1} &= -1.6666666666666567384\mbox{e-}2 \\
*     \mathrm{Q2} &= 3.9682539681370365873\mbox{e-}4 \\
*     \mathrm{Q3} &= -9.9206344733435987357\mbox{e-}6 \\
*     \mathrm{Q4} &= 2.5051361420808517002\mbox{e-}7 \\
*     \mathrm{Q5} &= -6.2843505682382617102\mbox{e-}9
*     \end{align*}
*     ```
*
*     where \\(z = r^2\\) and the values of \\(\mathrm{Q1}\\) to \\(\mathrm{Q5}\\) are listed in the source. The error is bounded by
*
*     ```tex
*     \biggl| 1 + \mathrm{Q1} \cdot z + \ldots + \mathrm{Q5} \cdot z - \operatorname{R1}(z) \biggr| \leq 2^{-61}
*     ```
*
*     \\(\operatorname{expm1}(r) = e^r - 1\\) is then computed by the following specific way which minimizes the accumulated rounding error
*
*     ```tex
*     \operatorname{expm1}(r) = r + \frac{r^2}{2} + \frac{r^3}{2} \biggl( \frac{3 - (\mathrm{R1} + \mathrm{R1} \cdot \frac{r}{2})}{6 - r ( 3 - \mathrm{R1} \cdot \frac{r}{2})} \biggr)
*     ```
*
*     To compensate for the error in the argument reduction, we use
*
*     ```tex
*     \begin{align*}
*     \operatorname{expm1}(r+c) &= \operatorname{expm1}(r) + c + \operatorname{expm1}(r) \cdot c \\
*     &\approx \operatorname{expm1}(r) + c + rc
*     \end{align*}
*     ```
*
*     Thus, \\(c + rc\\) will be added in as the correction terms for \\(\operatorname{expm1}(r+c)\\). Now, we can rearrange the term to avoid optimization screw up.
*
*     ```tex
*     \begin{align*}
*     \operatorname{expm1}(r+c) &\approx r - \biggl( \biggl( r + \biggl( \frac{r^2}{2} \biggl( \frac{\mathrm{R1} - (3 - \mathrm{R1} \cdot \frac{r}{2})}{6 - r (3 - \mathrm{R1} \cdot \frac{r}{2})} \biggr) - c \biggr) - c \biggr) - \frac{r^2}{2} \biggr) \\
*     &= r - \mathrm{E}
*     \end{align*}
*     ```
*
* 3.  To scale back to obtain \\(\operatorname{expm1}(x)\\), we have (from step 1)
*
*     ```tex
*     \operatorname{expm1}(x) = \begin{cases}
*     2^k  (\operatorname{expm1}(r) + 1) - 1 \\
*     2^k (\operatorname{expm1}(r) + (1-2^{-k}))
*     \end{cases}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{expm1}(\infty) &= \infty \\
* \operatorname{expm1}(-\infty) &= -1 \\
* \operatorname{expm1}(\mathrm{NaN}) &= \mathrm{NaN}
* \end{align*}
* ```
*
*
* ## Notes
*
* -   For finite arguments, only \\(\operatorname{expm1}(0) = 0\\) is exact.
*
* -   To save one multiplication, we scale the coefficient \\(\mathrm{Qi}\\) to \\(\mathrm{Qi} \cdot {2^i}\\) and replace \\(z\\) by \\(\frac{x^2}{2}\\).
*
* -   To achieve maximum accuracy, we compute \\(\operatorname{expm1}(x)\\) by
*
*     -   if \\(x < -56 \cdot \ln(2)\\), return \\(-1.0\\) (raise inexact if \\(x\\) does not equal \\(\infty\\))
*
*     -   if \\(k = 0\\), return \\(r-\mathrm{E}\\)
*
*     -   if \\(k = -1\\), return \\(\frac{(r-\mathrm{E})-1}{2}\\)
*
*     -   if \\(k = 1\\),
*
*         -   if \\(r < -0.25\\), return \\(2((r+0.5)- \mathrm{E})\\)
*         -   else return \\(1+2(r-\mathrm{E})\\)
*
*     -   if \\(k < -2\\) or \\(k > 56\\), return \\(2^k(1-(\mathrm{E}-r)) - 1\\) (or \\(e^x-1\\))
*
*     -   if \\(k \leq 20\\), return \\(2^k((1-2^{-k})-(\mathrm{E}-r))\\)
*
*     -   else return \\(2^k(1-((\mathrm{E}+2^{-k})-r))\\)
*
* -   For IEEE 754 double, if \\(x > 7.09782712893383973096\mbox{e+}02\\), then \\(\operatorname{expm1}(x)\\) will overflow.
*
* -   The hexadecimal values listed in the source are the intended ones for the implementation constants. Decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the intended hexadecimal values.
*
* -   According to an error analysis, the error is always less than \\(1\\) ulp (unit in the last place).
*
* @param x    input value
* @return     output value
*
* @example
* double v = stdlib_base_expm1( 0.0 );
* // returns 0.0
*/
double stdlib_base_expm1( const double x ) {
	double halfX;
	double twopk;
	uint32_t hy;
	uint32_t hx;
	int32_t k;
	double lo;
	double hi;
	double r1;
	double xc;
	double y;
	double z;
	double c;
	double t;
	double e;
	int sign;

	if ( x == STDLIB_CONSTANT_FLOAT64_PINF || stdlib_base_is_nan( x ) ) {
		return x;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return -1.0;
	}
	if ( x == 0.0 ) {
		return x; // handles +-0
	}
	// Set y = |x|:
	if ( x < 0.0 ) {
		sign = 1;
		y = -x;
	} else {
		sign = 0;
		y = x;
	}
	// Filter out huge and non-finite arguments...
	if ( y >= LN2x56 ) { // if |x| >= 56*ln(2)
		if ( sign == 1 ) { // if x <= -56*ln(2)
			return -1.0;
		}
		if ( y >= OVERFLOW_THRESHOLD ) { // if |x| >= 709.78...
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
	}
	xc = x;

	// Extract the more significant bits from |x|:
	stdlib_base_float64_get_high_word( y, &hx );

	// Argument reduction...
	if ( y > STDLIB_CONSTANT_FLOAT64_HALF_LN_TWO ) {
		if ( y < LN2_HALFX3 ) {
			if ( sign == 1 ) {
				hi = xc + LN2_HI;
				lo = -LN2_LO;
				k = -1;
			} else {
				hi = xc - LN2_HI;
				lo = LN2_LO;
				k = 1;
			}
		} else {
			if ( sign == 1 ) {
				k = ( LN2_INV * xc ) - 0.5;
			} else {
				k = ( LN2_INV * xc ) + 0.5;
			}
			t = k;
			hi = xc - ( t * LN2_HI ); // t*ln2_hi is exact here
			lo = t * LN2_LO;
		}
		xc = hi - lo;
		c = ( hi - xc ) - lo;
	}
	// If |x| < 2**-54 => high word: 0 01111001001 00000000000000000000 => 0x3c900000 = 1016070144  => exponent = 01111001001 = 969 = 1023-54
	else if ( hx < 1016070144 ) {
		return xc;
	} else {
		k = 0;
	}
	// x is now in primary range...
	halfX = 0.5 * xc;
	z = xc * halfX;

	r1 = 1.0 + ( z * polyval_q( z ) );

	t = 3.0 - ( r1 * halfX );
	e = z * ( ( r1 - t ) / ( 6.0 - ( xc * t ) ) );
	if ( k == 0 ) {
		return xc - ( ( xc * e ) - z ); // c is 0
	}
	stdlib_base_float64_from_words( ((uint32_t)( STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS+k ))<<20, 0, &twopk ); // 2^k

	e = ( xc * ( e - c ) ) - c;
	e -= z;
	if ( k == -1 ) {
		return ( 0.5 * ( xc - e ) ) - 0.5;
	}
	if ( k == 1 ) {
		if ( xc < -0.25 ) {
			return -2.0 * ( e - ( xc + 0.5 ) );
		}
		return 1.0 + ( 2.0 * ( xc - e ) );
	}
	if ( k <= -2 || k > 56 ) { // suffice to return exp(x)-1
		y = 1.0 - ( e - xc );
		if ( k == 1024 ) { // NOTE: msun does `y = y*2.0*0x1p1023;` here (see https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c?view=markup#l201), but depending on order of operation, this may overflow, which I am not sure is desired, so kept the previous logic from FDLIBM.
			// Add k to y's exponent:
			stdlib_base_float64_get_high_word( y, &hy );
			hy += ( k << 20 );
			stdlib_base_float64_set_high_word( hy, &y );
		} else {
			y *= twopk;
		}
		return y - 1.0;
	}
	t = 1.0;
	if ( k < 20 ) {
		// 0x3ff00000 - (0x200000>>k) = 1072693248 - (0x200000>>k) => 0x3ff00000 = 00111111111100000000000000000000 and 0x200000 = 0 00000000010 00000000000000000000
		hy = 1072693248 - ( 0x200000 >> k ); // cppcheck-suppress shiftNegative
		stdlib_base_float64_set_high_word( hy, &t ); // t=1-2^-k
		y = t - ( e - xc );
	} else {
		hy = ( ( STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS - k ) << 20 );
		stdlib_base_float64_set_high_word( hy, &t ); // t=2^-k
		y = xc - ( e + t );
		y += 1.0;
	}
	y *= twopk;
	return y;
}
