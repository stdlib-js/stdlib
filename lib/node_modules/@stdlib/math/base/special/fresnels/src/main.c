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
* Copyright 1984, 1987, 1989, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/fresnels.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/half_pi.h"

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_psqs

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
static double rational_psqs( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.5235987755982989;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 318016297876.5678 + (x * (-44297951805.96978 + (x * (2548908805.7337637 + (x * (-62974148.62058625 + (x * (708840.0452577386 + (x * (-2991.8191940101983 + (x * 0.0)))))))))));
		s2 = 607366389490.0846 + (x * (22441179564.534092 + (x * (419320245.8981112 + (x * (5173438.887700964 + (x * (45584.78108065326 + (x * (281.3762688899943 + (x * 1.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (-2991.8191940101983 + (ix * (708840.0452577386 + (ix * (-62974148.62058625 + (ix * (2548908805.7337637 + (ix * (-44297951805.96978 + (ix * 318016297876.5678)))))))))));
		s2 = 1.0 + (ix * (281.3762688899943 + (ix * (45584.78108065326 + (ix * (5173438.887700964 + (ix * (419320245.8981112 + (ix * (22441179564.534092 + (ix * 607366389490.0846)))))))))));
	}
	return s1 / s2;
}

// END: rational_psqs

// BEGIN: rational_pfqf

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
static double rational_pfqf( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 2.999999999999634;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 3.763297112699879e-20 + (x * (1.3428327623306275e-16 + (x * (1.7201074326816183e-13 + (x * (1.0230451416490724e-10 + (x * (3.055689837902576e-8 + (x * (0.0000046361374928786735 + (x * (0.000345017939782574 + (x * (0.011522095507358577 + (x * (0.1434079197807589 + (x * (0.4215435550436775 + (x * 0.0)))))))))))))))))));
		s2 = 1.2544323709001127e-20 + (x * (4.5200143407412973e-17 + (x * (5.887545336215784e-14 + (x * (3.6014002958937136e-11 + (x * (1.1269922476399903e-8 + (x * (0.0000018462756734893055 + (x * (0.00015593440916415301 + (x * (0.0064405152650885865 + (x * (0.11688892585919138 + (x * (0.7515863983533789 + (x * 1.0)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (0.4215435550436775 + (ix * (0.1434079197807589 + (ix * (0.011522095507358577 + (ix * (0.000345017939782574 + (ix * (0.0000046361374928786735 + (ix * (3.055689837902576e-8 + (ix * (1.0230451416490724e-10 + (ix * (1.7201074326816183e-13 + (ix * (1.3428327623306275e-16 + (ix * 3.763297112699879e-20)))))))))))))))))));
		s2 = 1.0 + (ix * (0.7515863983533789 + (ix * (0.11688892585919138 + (ix * (0.0064405152650885865 + (ix * (0.00015593440916415301 + (ix * (0.0000018462756734893055 + (ix * (1.1269922476399903e-8 + (ix * (3.6014002958937136e-11 + (ix * (5.887545336215784e-14 + (ix * (4.5200143407412973e-17 + (ix * 1.2544323709001127e-20)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_pfqf

// BEGIN: rational_pgqg

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
static double rational_pgqg( const double x ) {
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
		s1 = 1.8695871016278324e-22 + (x * (8.363544356306774e-19 + (x * (1.375554606332618e-15 + (x * (1.0826804113902088e-12 + (x * (4.4534441586175015e-10 + (x * (9.828524436884223e-8 + (x * (0.000011513882611188428 + (x * (0.0006840793809153931 + (x * (0.018764858409257526 + (x * (0.1971028335255234 + (x * (0.5044420736433832 + (x * 0.0)))))))))))))))))))));
		s2 = 1.8695871016278324e-22 + (x * (8.391588162831187e-19 + (x * (1.3879653125957886e-15 + (x * (1.1027321506624028e-12 + (x * (4.6068072814652043e-10 + (x * (1.0431458965757199e-7 + (x * (0.000012754507566772912 + (x * (0.0008146791071843061 + (x * (0.02536037414203388 + (x * (0.33774898912002 + (x * (1.4749575992512833 + (x * 1.0)))))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (0.5044420736433832 + (ix * (0.1971028335255234 + (ix * (0.018764858409257526 + (ix * (0.0006840793809153931 + (ix * (0.000011513882611188428 + (ix * (9.828524436884223e-8 + (ix * (4.4534441586175015e-10 + (ix * (1.0826804113902088e-12 + (ix * (1.375554606332618e-15 + (ix * (8.363544356306774e-19 + (ix * 1.8695871016278324e-22)))))))))))))))))))));
		s2 = 1.0 + (ix * (1.4749575992512833 + (ix * (0.33774898912002 + (ix * (0.02536037414203388 + (ix * (0.0008146791071843061 + (ix * (0.000012754507566772912 + (ix * (1.0431458965757199e-7 + (ix * (4.6068072814652043e-10 + (ix * (1.1027321506624028e-12 + (ix * (1.3879653125957886e-15 + (ix * (8.391588162831187e-19 + (ix * 1.8695871016278324e-22)))))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_pgqg

/* End auto-generated functions. */

/**
* Computes the Fresnel integral S(x).
*
* ## Method
*
* Evaluates the Fresnel integral
*
* ```tex
* \operatorname{S}(x) = \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t
* ```
*
* The integral is evaluated by a power series for \\( x < 1 \\). For \\( x >= 1 \\) auxiliary functions \\( f(x) \\) and \\( g(x) \\) are employed such that
*
* ```tex
* \operatorname{S}(x) = \frac{1}{2} - f(x) \cos\left( \frac{\pi}{2} x^2 \right) - g(x) \sin\left( \frac{\pi}{2} x^2 \right).
* ```
*
* ## Notes
*
* -   Relative error on test interval \\( \[0,10\] \\):
*
*     | arithmetic | function | # trials | peak    | rms     |
*     |:----------:|:--------:|:--------:|:--------:|:-------:|
*     | IEEE       | S(x)     | 10000    | 2.0e-15 | 3.2e-16 |
*
* @param x    input value
* @return     S(x)
*
* @example
* double v = stdlib_base_fresnels( 1.0 );
* // returns ~0.438
*/
double stdlib_base_fresnels( const double x ) {
	double x2;
	double xa;
	double S;
	double f;
	double g;
	double t;
	double u;
	double s;
	double c;

	xa = stdlib_base_abs( x );
	x2 = xa * xa;
	if ( x2 < 2.5625 ) {
		t = x2 * x2;
		S = xa * x2 * rational_psqs( t );
	} else if ( xa > 36974.0 ) {
		S = 0.5;
	} else {
		// Asymptotic power series auxiliary functions for large arguments...
		x2 = xa * xa;
		t = STDLIB_CONSTANT_FLOAT64_PI * x2;
		u = 1.0 / ( t * t );
		t = 1.0 / t;
		f = 1.0 - ( u * rational_pfqf( u ) );
		g = t * rational_pgqg( u );
		t = STDLIB_CONSTANT_FLOAT64_HALF_PI * x2;
		stdlib_base_sincos( t, &s, &c );
		t = STDLIB_CONSTANT_FLOAT64_PI * xa;
		S = 0.5 - ( ( ( f * c ) + ( g * s ) ) / t );
	}
	if ( x < 0.0 ) {
		S = -S;
	}
	return S;
}
