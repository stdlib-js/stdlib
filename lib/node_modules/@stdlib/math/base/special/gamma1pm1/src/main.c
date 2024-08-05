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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/gamma1pm1.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/eps.h"

static const double Y1 = 0.158963680267333984375;
static const double Y2 = 0.52815341949462890625;
static const double Y3 = 0.452017307281494140625;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_p1q1

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
static double rational_p1q1( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.01803556856784494;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.01803556856784494 + (x * (0.02512664961998968 + (x * (0.049410315156753225 + (x * (0.0172491608709614 + (x * (-0.0002594535632054381 + (x * (-0.0005410098692152044 + (x * (-0.00003245886498259485 + (x * 0.0)))))))))))));
		s2 = 1.0 + (x * (1.962029871977952 + (x * (1.4801966942423133 + (x * (0.5413914320717209 + (x * (0.09885042511280101 + (x * (0.008213096746488934 + (x * (0.00022493629192211576 + (x * -2.2335276320861708e-7)))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (-0.00003245886498259485 + (ix * (-0.0005410098692152044 + (ix * (-0.0002594535632054381 + (ix * (0.0172491608709614 + (ix * (0.049410315156753225 + (ix * (0.02512664961998968 + (ix * -0.01803556856784494)))))))))))));
		s2 = -2.2335276320861708e-7 + (ix * (0.00022493629192211576 + (ix * (0.008213096746488934 + (ix * (0.09885042511280101 + (ix * (0.5413914320717209 + (ix * (1.4801966942423133 + (ix * (1.962029871977952 + (ix * 1.0)))))))))))));
	}
	return s1 / s2;
}

// END: rational_p1q1

// BEGIN: rational_p2q2

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
static double rational_p2q2( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.04906224540690395;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.04906224540690395 + (x * (-0.09691175301595212 + (x * (-0.4149833583594954 + (x * (-0.4065671242119384 + (x * (-0.1584135863906922 + (x * (-0.024014982064857155 + (x * -0.0010034668769627955)))))))))));
		s2 = 1.0 + (x * (3.0234982984646304 + (x * (3.4873958536072385 + (x * (1.9141558827442668 + (x * (0.5071377386143635 + (x * (0.05770397226904519 + (x * 0.001957681026011072)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.0010034668769627955 + (ix * (-0.024014982064857155 + (ix * (-0.1584135863906922 + (ix * (-0.4065671242119384 + (ix * (-0.4149833583594954 + (ix * (-0.09691175301595212 + (ix * 0.04906224540690395)))))))))));
		s2 = 0.001957681026011072 + (ix * (0.05770397226904519 + (ix * (0.5071377386143635 + (ix * (1.9141558827442668 + (ix * (3.4873958536072385 + (ix * (3.0234982984646304 + (ix * 1.0)))))))))));
	}
	return s1 / s2;
}

// END: rational_p2q2

// BEGIN: rational_p3q3

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
static double rational_p3q3( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.029232972183027003;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.029232972183027003 + (x * (0.14421626775719232 + (x * (-0.14244039073863127 + (x * (0.05428096940550536 + (x * (-0.008505359768683364 + (x * (0.0004311713426792973 + (x * 0.0)))))))))));
		s2 = 1.0 + (x * (-1.5016935605448505 + (x * (0.846973248876495 + (x * (-0.22009515181499575 + (x * (0.02558279715597587 + (x * (-0.0010066679553914337 + (x * -8.271935218912905e-7)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (0.0004311713426792973 + (ix * (-0.008505359768683364 + (ix * (0.05428096940550536 + (ix * (-0.14244039073863127 + (ix * (0.14421626775719232 + (ix * -0.029232972183027003)))))))))));
		s2 = -8.271935218912905e-7 + (ix * (-0.0010066679553914337 + (ix * (0.02558279715597587 + (ix * (-0.22009515181499575 + (ix * (0.846973248876495 + (ix * (-1.5016935605448505 + (ix * 1.0)))))))))));
	}
	return s1 / s2;
}

// END: rational_p3q3

/* End auto-generated functions. */

/**
* Evaluates the natural logarithm of the gamma function for small arguments.
*
* ## Method
*
* 1.  For \\( z > 2 \\), begin by performing argument reduction until \\( z \\) is in \\(\[2,3)\\). Use the following form:
*
*     ```tex
*     \operatorname{gammaln}(z) = (z-2)(z+1)(Y + R(z-2))
*     ```
*
*     where \\( R(z-2) \\) is a rational approximation optimized for low absolute error. As long as the absolute error is small compared to the constant \\( Y \\), then any rounding error in the computation will get wiped out.
*
* 2.  If \\( z < 1 \\), use recurrence to shift to \\( z \\) in the interval \\(\[1,2\]\\). Then, use one of two approximations: one for \\( z \\) in \\(\[1,1.5\]\\) and one for \\( z \\) in \\(\[1.5,2\]\\):
*
*     -   For \(( z \\) in \\(\[1,1.5\]\\), use
*
*         ```tex
*         \operatorname{gammaln}(z) = (z-1)(z-2)(Y + R(z-1))
*         ```
*
*         where \\( R(z-1) \\) is a rational approximation optimized for low absolute error. As long as the absolute error is small compared to the constant \\( Y \\), then any rounding error in the computation will get wiped out.
*
*     -   For \\( z \\) in \\(\[1.5,2\]\\), use
*
*         ```tex
*         \operatorname{gammaln}(z) = (2-z)(1-z)(Y + R(2-z))
*         ```
*
*         where \\( R(2-z) \\) is a rational approximation optimized for low absolute error. As long as the absolute error is small compared to the constant \\( Y \\), then any rounding error in the computation will get wiped out.
*
* ## Notes
*
* -   Relative error:
*
*     | function | peak         | maximum deviation |
*     |:--------:|:------------:|:-----------------:|
*     | R(Z-2)   | 4.231e-18    | 5.900e-24         |
*     | R(Z-1)   | 1.230011e-17 | 3.139e-021        |
*     | R(2-Z)   | 1.797565e-17 | 2.151e-021        |
*
* @param z      input value
* @param zm1    `z` minus one
* @param zm2    `z` minus two
* @return       function value
*/
static double lgammaSmallImp( const double z, const double zm1, const double zm2 ) {
	double prefix;
	double result;
	double zm1c;
	double zm2c;
	double zc;
	double r;
	double R;

	if ( z < STDLIB_CONSTANT_FLOAT64_EPS ) {
		return -stdlib_base_ln( z );
	}
	if ( zm1 == 0.0 || zm2 == 0.0 ) {
		return 0.0;
	}
	result = 0.0;
	zc = z;
	zm1c = zm1;
	zm2c = zm2;
	if ( zc > 2.0 ) {
		if ( zc >= 3.0 ) {
			do {
				zc -= 1.0;
				zm2c -= 1.0;
				result += stdlib_base_ln( zc );
			} while ( zc >= 3.0 );
			zm2c = zc - 2.0;
		}
		r = zm2c * ( zc + 1.0 );
		R = rational_p1q1( zm2c );
		result += ( r * Y1 ) + ( r * R );
		return result;
	}
	if ( zc < 1.0 ) {
		result += -stdlib_base_ln( zc );
		zm2c = zm1c;
		zm1c = zc;
		zc += 1.0;
	}
	if ( zc <= 1.5 ) {
		r = rational_p2q2( zm1c );
		prefix = zm1c * zm2c;
		result += ( prefix * Y2 ) + ( prefix * r );
		return result;
	}

	// Case: 1.5 < zc <= 2
	r = zm2c * zm1c;
	R = rational_p3q3( -zm2c );
	result += ( r * Y3 ) + ( r * R );
	return result;
}

/**
* Computes `gamma(x+1) - 1`.
*
* @param x    input value
* @return     function value
*
* @example
* double out = stdlib_base_gamma1pm1( 0.2 );
* // returns ~-0.082
*/
double stdlib_base_gamma1pm1( const double x ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < 0.0 ) {
		if ( x < -0.5 ) {
			// Best method is simply to subtract 1 from gamma:
			return stdlib_base_gamma( 1.0 + x ) - 1.0;
		}

		// Use expm1 on the logarithm of gamma:
		return stdlib_base_expm1( -stdlib_base_log1p( x ) + lgammaSmallImp( x + 2.0, x + 1.0, x ) );
	}
	if ( x < 2.0 ) {
		// Use expm1 on the logarithm of gamma:
		return stdlib_base_expm1( lgammaSmallImp( x + 1.0, x, x - 1.0 ) );
	}

	// Best method is simply to subtract 1 from gamma:
	return stdlib_base_gamma( 1.0 + x ) - 1.0;
}
