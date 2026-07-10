/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* The implementation was translated from the Fortran module by
*
* ```text
* ----------------------------------------------------------------------
* Authors:
*  Amparo Gil    (U. Cantabria, Santander, Spain)
*                 e-mail: amparo.gil@unican.es
*  Javier Segura (U. Cantabria, Santander, Spain)
*                 e-mail: javier.segura@unican.es
*  Nico M. Temme (CWI, Amsterdam, The Netherlands)
*                 e-mail: nico.temme@cwi.nl
* ---------------------------------------------------------------------
* ```
*/

#include "stdlib/math/base/special/gammaincinv.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gammainc.h"
#include "stdlib/math/base/special/erfcinv.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/min.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float32/smallest_normal.h"
#include "stdlib/constants/float64/ln_sqrt_two_pi.h"
#include "stdlib/constants/float64/sqrt_two_pi.h"
#include "stdlib/constants/float64/two_pi.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float32/max.h"
#include <stdbool.h>
#include <stdint.h>

static const double PINF = STDLIB_CONSTANT_FLOAT64_PINF;
static const float SMALLEST_NORMAL_FLOAT32 = STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL;
static const double SQRT_TWO_PI = STDLIB_CONSTANT_FLOAT64_SQRT_TWO_PI;
static const float MAX_FLOAT32 = STDLIB_CONSTANT_FLOAT32_MAX;
static const double TWO_PI = STDLIB_CONSTANT_FLOAT64_TWO_PI;
static const double LN_SQRT_TWO_PI = STDLIB_CONSTANT_FLOAT64_LN_SQRT_TWO_PI;

static const double HALF = 0.5;
static const double ONEO3 = 0.333333333333333333333333333333;
static const double ONEO4 = 0.25;
static const double ONEO5 = 0.2;
static const double ONEO6 = 0.166666666666666666666666666667;
static const double ONEO12 = 0.0833333333333333333333333333333;
static const double ONEO24 = 0.0416666666666666666666666666667;
static const double ONEO120 = 0.00833333333333333333333333333333;
static const double THRESHOLD = 1.0e-8;
static const double C6 = 0.30865217988013567769;

// Chebyshev polynomial coefficients...
static const double A[ 18 ] = {
	1.996379051590076518221,
	-0.17971032528832887213e-2,
	0.131292857963846713e-4,
	-0.2340875228178749e-6,
	0.72291210671127e-8,
	-0.3280997607821e-9,
	0.198750709010e-10,
	-0.15092141830e-11,
	0.1375340084e-12,
	-0.145728923e-13,
	0.17532367e-14,
	-0.2351465e-15,
	0.346551e-16,
	-0.55471e-17,
	0.9548e-18,
	-0.1748e-18,
	0.332e-19,
	-0.58e-20
};

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_ak1

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
static double polyval_ak1( const double x ) {
	return 0.0 + (x * (1.0 + (x * (1.0 + (x * (1.5 + (x * (2.6666666666666665 + (x * (5.208333333333333 + (x * 10.8)))))))))));
}

// END: polyval_ak1

// BEGIN: polyval_ak2

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
static double polyval_ak2( const double x ) {
	return 1.0 + (x * (1.0 + (x * (0.3333333333333333 + (x * (0.027777777777777776 + (x * (-0.003703703703703704 + (x * (0.0002314814814814815 + (x * 0.00005878894767783657)))))))))));
}

// END: polyval_ak2

// BEGIN: polyval_c

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
static double polyval_c( const double x ) {
	return 0.025721014990011306 + (x * (0.08247596616699963 + (x * (-0.0025328157302663564 + (x * (0.0006099292666946337 + (x * (-0.00033543297638406 + (x * 0.000250505279903)))))))));
}

// END: polyval_c

// BEGIN: polyval_d

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
static double polyval_d( const double x ) {
	return 0.08333333333333333 + (x * (-0.002777777777777778 + (x * (0.0007936507936507937 + (x * -0.0005952380952380953)))));
}

// END: polyval_d

// BEGIN: rational_ak0bk0

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
static double rational_ak0bk0( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.3333333333438;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.3333333333438 + (x * (-0.2070740359969 + (x * (-0.05041806657154 + (x * (-0.004923635739372 + (x * -0.00004293658292782)))))));
		s2 = 1.0 + (x * (0.7045554412463 + (x * (0.2118190062224 + (x * (0.03048648397436 + (x * 0.001605037988091)))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.00004293658292782 + (ix * (-0.004923635739372 + (ix * (-0.05041806657154 + (ix * (-0.2070740359969 + (ix * -0.3333333333438)))))));
		s2 = 0.001605037988091 + (ix * (0.03048648397436 + (ix * (0.2118190062224 + (ix * (0.7045554412463 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak0bk0

// BEGIN: rational_ak1bk1

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
static double rational_ak1bk1( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.0172847633523;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.0172847633523 + (x * (-0.0159372646475 + (x * (-0.00464910887221 + (x * (-0.00060683488776 + (x * -0.00000614830384279)))))));
		s2 = 1.0 + (x * (0.764050615669 + (x * (0.297143406325 + (x * (0.0579490176079 + (x * 0.00574558524851)))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.00000614830384279 + (ix * (-0.00060683488776 + (ix * (-0.00464910887221 + (ix * (-0.0159372646475 + (ix * -0.0172847633523)))))));
		s2 = 0.00574558524851 + (ix * (0.0579490176079 + (ix * (0.297143406325 + (ix * (0.764050615669 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak1bk1

// BEGIN: rational_ak2bk2

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
static double rational_ak2bk2( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.0172839517431;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.0172839517431 + (x * (-0.0146362417966 + (x * (-0.00357406772616 + (x * (-0.000391032032692 + (x * 0.00000249634036069)))))));
		s2 = 1.0 + (x * (0.690560400696 + (x * (0.249962384741 + (x * (0.0443843438769 + (x * 0.00424073217211)))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.00000249634036069 + (ix * (-0.000391032032692 + (ix * (-0.00357406772616 + (ix * (-0.0146362417966 + (ix * -0.0172839517431)))))));
		s2 = 0.00424073217211 + (ix * (0.0443843438769 + (ix * (0.249962384741 + (ix * (0.690560400696 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak2bk2

// BEGIN: rational_ak3bk3

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
static double rational_ak3bk3( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.99994466948;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.99994466948 + (x * (104.649839762 + (x * (857.204033806 + (x * (731.901559577 + (x * 45.5174411671)))))));
		s2 = 1.0 + (x * (104.526456943 + (x * (823.313447808 + (x * (3119.93802124 + (x * 3970.03311219)))))));
	} else {
		ix = 1.0 / x;
		s1 = 45.5174411671 + (ix * (731.901559577 + (ix * (857.204033806 + (ix * (104.649839762 + (ix * 0.99994466948)))))));
		s2 = 3970.03311219 + (ix * (3119.93802124 + (ix * (823.313447808 + (ix * (104.526456943 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak3bk3

// BEGIN: rational_ak4bk4

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
static double rational_ak4bk4( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.0495346498136;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.0495346498136 + (x * (0.0299521337141 + (x * (0.00688296911516 + (x * (0.000512634846317 + (x * -0.0000201411722031)))))));
		s2 = 1.0 + (x * (0.759803615283 + (x * (0.261547111595 + (x * (0.0464854522477 + (x * 0.00403751193496)))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.0000201411722031 + (ix * (0.000512634846317 + (ix * (0.00688296911516 + (ix * (0.0299521337141 + (ix * 0.0495346498136)))))));
		s2 = 0.00403751193496 + (ix * (0.0464854522477 + (ix * (0.261547111595 + (ix * (0.759803615283 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak4bk4

// BEGIN: rational_ak5bk5

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
static double rational_ak5bk5( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.00452313583942;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.00452313583942 + (x * (0.00120744920113 + (x * (-0.0000789724156582 + (x * (-0.0000504476066942 + (x * -0.00000535770949796)))))));
		s2 = 1.0 + (x * (0.912203410349 + (x * (0.405368773071 + (x * (0.0901638932349 + (x * 0.00948935714996)))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.00000535770949796 + (ix * (-0.0000504476066942 + (ix * (-0.0000789724156582 + (ix * (0.00120744920113 + (ix * 0.00452313583942)))))));
		s2 = 0.00948935714996 + (ix * (0.0901638932349 + (ix * (0.405368773071 + (ix * (0.912203410349 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak5bk5

// BEGIN: rational_ak6bk6

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
static double rational_ak6bk6( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.00439937562904;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.00439937562904 + (x * (0.000487225670639 + (x * (-0.000128470657374 + (x * (0.00000529110969589 + (x * 1.5716677175e-7)))))));
		s2 = 1.0 + (x * (0.794435257415 + (x * (0.333094721709 + (x * (0.0703527806143 + (x * 0.00806110846078)))))));
	} else {
		ix = 1.0 / x;
		s1 = 1.5716677175e-7 + (ix * (0.00000529110969589 + (ix * (-0.000128470657374 + (ix * (0.000487225670639 + (ix * 0.00439937562904)))))));
		s2 = 0.00806110846078 + (ix * (0.0703527806143 + (ix * (0.333094721709 + (ix * (0.794435257415 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak6bk6

// BEGIN: rational_ak7bk7

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
static double rational_ak7bk7( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.0011481191232;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.0011481191232 + (x * (-0.112850923276 + (x * (1.51623048511 + (x * (-0.218472031183 + (x * 0.0730002451555)))))));
		s2 = 1.0 + (x * (14.2482206905 + (x * (69.7360396285 + (x * (218.938950816 + (x * 277.067027185)))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0730002451555 + (ix * (-0.218472031183 + (ix * (1.51623048511 + (ix * (-0.112850923276 + (ix * -0.0011481191232)))))));
		s2 = 277.067027185 + (ix * (218.938950816 + (ix * (69.7360396285 + (ix * (14.2482206905 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak7bk7

// BEGIN: rational_ak8bk8

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
static double rational_ak8bk8( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.000145727889667;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.000145727889667 + (x * (-0.290806748131 + (x * (-13.308504545 + (x * (199.722374056 + (x * -11.4311378756)))))));
		s2 = 1.0 + (x * (139.612587808 + (x * (2189.01116348 + (x * (7115.24019009 + (x * 45574.6081453)))))));
	} else {
		ix = 1.0 / x;
		s1 = -11.4311378756 + (ix * (199.722374056 + (ix * (-13.308504545 + (ix * (-0.290806748131 + (ix * -0.000145727889667)))))));
		s2 = 45574.6081453 + (ix * (7115.24019009 + (ix * (2189.01116348 + (ix * (139.612587808 + (ix * 1.0)))))));
	}
	return s1 / s2;
}

// END: rational_ak8bk8

/* End auto-generated functions. */

/**
* Computes the sum of a Chebyshev polynomial.
*
* @param n    degree of polynomial
* @param t    input value
* @return     Chebyshev sum
*/
static double chepolsum( const int32_t n, const double t ) {
	double tt;
	double u0;
	double u1;
	double u2;
	int32_t k;

	u0 = 0.0;
	u1 = 0.0;
	tt = t + t;
	k = n;
	do {
		u2 = u1;
		u1 = u0;
		u0 = ( tt*u1 ) - u2 + A[ k ];
		k -= 1;
	} while ( k >= 0 );
	return ( u0-u2 ) / 2.0;
}

/**
* Computes the Stirling series corresponding to asymptotic series for the logarithm of the gamma function.
*
* ```tex
* \frac{1}{12x}-\frac{1}{360x^3}\ldots; x \ge 3
* ```
*
* @param x    input value
* @return     function value
*/
static double stirling( const double x ) {
	double z;

	if ( x < SMALLEST_NORMAL_FLOAT32 ) {
		return MAX_FLOAT32;
	}
	if ( x < 1.0 ) {
		return stdlib_base_gammaln( x+1.0 ) - ( ( x+0.5 ) * stdlib_base_ln( x ) ) + x - LN_SQRT_TWO_PI;
	}
	if ( x < 2.0 ) {
		return stdlib_base_gammaln( x ) - ( ( x-0.5 ) * stdlib_base_ln( x ) ) + x - LN_SQRT_TWO_PI;
	}
	if ( x < 3.0 ) {
		return stdlib_base_gammaln( x-1.0 ) - ( ( x-0.5 ) * stdlib_base_ln( x ) ) + x - LN_SQRT_TWO_PI + stdlib_base_ln( x-1.0 );
	}
	if ( x < 12.0 ) {
		z = ( 18.0/( x*x ) ) - 1.0;
		return chepolsum( 17, z ) / ( 12.0*x );
	}
	z = 1.0 / ( x*x );
	if ( x < 1000.0 ) {
		return polyval_c( z ) / ( C6+z ) / x;
	}
	return polyval_d( z ) / x;
}

/**
* Computes the regulated gamma function.
*
* @param x    input value
* @return     function value
*/
static double gamstar( const double x ) {
	if ( x >= 3.0 ) {
		return stdlib_base_exp( stirling( x ) );
	}
	if ( x > 0.0 ) {
		return stdlib_base_gamma( x ) / ( stdlib_base_exp( -x + ( ( x-0.5 ) * stdlib_base_ln( x ) ) ) * SQRT_TWO_PI );
	}
	// Case: x <= 0.0
	return MAX_FLOAT32;
}

/**
* Returns the positive number satisfying \\( \eta^2/2=\lambda-1-\ln(\lambda) \\) with \\( \operatorname{sign}(\lambda-1)=\operatorname{sign}(\eta) \\).
*
* @param eta    eta value
* @return       value satisfying equation
*/
static double lambdaeta( const double eta ) {
	double AK[ 6 ];
	double L2;
	double L3;
	double L4;
	double L5;
	double la;
	double L;
	double q;
	double r;
	double s;

	s = eta * eta * 0.5;
	if ( eta == 0.0 ) {
		la = 0.0;
	} else if ( eta < -1.0 ) {
		r = stdlib_base_exp( -1.0 - s );
		la = polyval_ak1( r );
	} else if ( eta < 1.0 ) {
		r = eta;
		la = polyval_ak2( r );
	} else {
		r = 11.0 + s;
		L = stdlib_base_ln( r );
		la = r + L;
		r = 1.0 / r;
		L2 = L * L;
		L3 = L2 * L;
		L4 = L3 * L;
		L5 = L4 * L;
		AK[ 0 ] = 1.0;
		AK[ 1 ] = ( 2.0-L ) * 0.5;
		AK[ 2 ] = ( ( -9.0*L ) + 6.0 + ( 2.0*L2 ) ) / 6.0;
		AK[ 3 ] = -( (3.0*L3) + (36.0*L) - (22.0*L2) - 12.0 ) * ONEO12;
		AK[ 4 ] = ( 60.0 + (350.0*L2) - (300.0*L) - (125.0*L3) + (12.0*L4) ) / 60.0;
		AK[ 5 ] = -( -120.0 - (274.0*L4) + (900.0*L) - (1700.0*L2) + (1125.0*L3) + (20.0*L5) ) * ONEO120;
		la += ( L * r * ( AK[ 0 ] + ( r * ( AK[ 1 ] + ( r * ( AK[ 2 ] + ( r * ( AK[ 3 ] + ( r * ( AK[ 4 ] + ( r*AK[ 5 ] ) ) ) ) ) ) ) ) ) ) );
	}
	if (
		( eta > -3.5 && eta < -0.03 ) ||
		( eta > 0.03 && eta < 40.0 )
	) {
		r = 1.0;
		q = la;
		do {
			la = q * ( s+stdlib_base_ln( q ) ) / ( q-1.0 );
			r = stdlib_base_abs( ( q/la ) - 1.0 );
			q = la;
		} while ( r > THRESHOLD );
	}
	return la;
}

/**
* Evaluates the `eps1` function.
*
* @param eta    eta value
* @return       function value
*/
static double eps1( const double eta ) {
	double la;

	if ( stdlib_base_abs( eta ) < 1.0 ) {
		return rational_ak0bk0( eta );
	}
	la = lambdaeta( eta );
	return stdlib_base_ln( eta / ( la-1.0 ) ) / eta;
}

/**
* Evaluates the `eps2` function.
*
* @param eta    eta value
* @return       function value
*/
static double eps2( const double eta ) {
	double lnmeta;
	double x;

	if ( eta < -5.0 ) {
		x = eta * eta;
		lnmeta = stdlib_base_ln( -eta );
		return ( 12.0 - x - ( 6.0*( lnmeta*lnmeta ) ) ) / ( 12.0*x*eta );
	}
	if ( eta < -2.0 ) {
		return rational_ak1bk1( eta );
	}
	if ( eta < 2.0 ) {
		return rational_ak2bk2( eta );
	}
	if ( eta < 1000.0 ) {
		return rational_ak3bk3( eta ) / ( -12.0*eta );
	}
	return -1.0 / ( 12.0*eta );
}

/**
* Evaluates the `eps3` function.
*
* @param eta    eta value
* @return       function value
*/
static double eps3( const double eta ) {
	double x;
	double y;

	if ( eta < -8.0 ) {
		x = eta * eta;
		y = stdlib_base_ln( -eta ) / eta;
		return ( -30.0 + ( eta*y*( (6.0*x*y*y) - 12.0 + x ) ) ) / ( 12.0*eta*x*x );
	}
	if ( eta < -4.0 ) {
		return rational_ak4bk4( eta ) / ( eta*eta );
	}
	if ( eta < -2.0 ) {
		return rational_ak5bk5( eta );
	}
	if ( eta < 2.0 ) {
		return rational_ak6bk6( eta );
	}
	if ( eta < 10.0 ) {
		x = 1.0 / eta;
		return rational_ak7bk7( x ) / ( eta*eta );
	}
	if ( eta < 100.0 ) {
		x = 1.0 / eta;
		return rational_ak8bk8( x ) / ( eta*eta );
	}
	return -stdlib_base_ln( eta ) / ( 12.0*eta*eta*eta );
}

/**
* Implementation of the high order Newton-like method.
*
* @param x0       initial value
* @param a        scale parameter
* @param m        indicator
* @param p        probability value
* @param q        probability value
* @param lgama    logarithm of scale parameter
* @param invfp    one over `fp`
* @param pcase    boolean indicating whether `p < 0.5`
* @return         function value of the inverse
*/
static double higherNewton( double x0, const double a, const int32_t m, const double p, const double q, const double lgama, const double invfp, const bool pcase ) {
	double dlnr;
	double xini;
	double ck0;
	double ck1;
	double ck2;
	double a2;
	double x2;
	double px;
	double qx;
	double xr;
	double t;
	int32_t n;
	double r;
	double x;

	x = x0;
	t = 1.0;
	n = 1;
	a2 = a * a;
	xini = x0;
	do {
		x = x0;
		x2 = x * x;
		if ( m == 0 ) {
			dlnr = ( ( 1.0-a ) * stdlib_base_ln( x ) ) + x + lgama;
			if ( dlnr > stdlib_base_ln( MAX_FLOAT32 ) ) {
				// Overflow problems in one or more steps of the computation; the initial approximation to the root is returned...
				return xini;
			}
			r = stdlib_base_exp( dlnr );
		} else {
			r = -invfp * x;
		}
		if ( pcase ) {
			// Call: gammainc( x, s[, regularized = true ][, upper = false ] )
			px = stdlib_base_gammainc( x, a, true, false );
			ck0 = -r * ( px - p );
		} else {
			// Call: gammainc( x, s[, regularized = true ][, upper = true ] )
			qx = stdlib_base_gammainc( x, a, true, true );
			ck0 = r * ( qx - q );
		}
		r = ck0;
		if ( ( p > 1e-120 ) || ( n > 1 ) ) {
			ck1 = 0.5 * ( x - a + 1.0 ) / x;
			ck2 = ( (2.0*x2) - (4.0*x*a) + (4.0*x) + (2.0*a2) - (3.0*a) + 1.0 ) / x2;
			ck2 /= 6.0;
			x0 = x + ( r * ( 1.0 + ( r * ( ck1 + (r*ck2) ) ) ) );
		} else {
			x0 = x + r;
		}
		t = stdlib_base_abs( ( x/x0 ) - 1.0 );
		n += 1;
		x = x0;
		if ( x < 0.0 ) {
			x = xini;
			n = 100;
		}
	} while ( ( t > 2e-14 ) && ( n < 35 ) );
	if ( x == 0.0 || stdlib_base_is_nan( x ) ) {
		xr = 0.0;
	} else {
		xr = x;
	}
	return xr;
}

/**
* Computes `x` in the equations `P(a,xr) = p` and `Q(a,xr) = q`, where `a` is a positive parameter and `p` and `q` satisfy `p+q = 1`.
*
* ## Notes
*
* -   The equation is inverted with `min(p,q)`.
*
* @param a    scale value of incomplete gamma function
* @param p    probability value
* @param q    probability value
* @return     solution of the equations `P(a,xr) = p` and `Q(a,xr) = q` where `a` is a positive parameter
*/
static double compute( const double a, const double p, const double q ) {
	double CK[ 5 ];
	double ap1inv;
	double invfp;
	double lgama;
	bool pcase;
	double porq;
	double ainv;
	double logr;
	double ap22;
	double ap14;
	double ap13;
	double ap12;
	double vgam;
	double vmin;
	double xini;
	double ap1;
	double ap2;
	double ap3;
	double eta;
	double p6;
	double p5;
	double x0;
	double a2;
	double L2;
	double L3;
	double L4;
	double b2;
	double b3;
	double p3;
	double a4;
	double fp;
	double p4;
	double p2;
	double a3;
	double xr;
	double ck;
	double b;
	double L;
	int32_t i;
	int32_t k;
	int32_t m;
	double r;
	double s;
	double t;
	double y;

	invfp = 0.0;
	lgama = 0.0;
	if ( p < HALF ) {
		pcase = true;
		porq = p;
		s = -1.0;
	} else {
		pcase = false;
		porq = q;
		s = 1.0;
	}
	k = 0;
	if ( stdlib_base_abs( a-1.0 ) < 1.0e-4 ) {
		m = 0;
		if ( pcase ) {
			if ( p < 1.0e-3 ) {
				p2 = p * p;
				p3 = p2 * p;
				p4 = p3 * p;
				p5 = p4 * p;
				p6 = p5 * p;
				x0 = p + ( p2*HALF ) + ( p3*ONEO3 ) + ( p4*ONEO4 ) + ( p5*ONEO5 ) + ( p6*ONEO6 );
			} else {
				x0 = -stdlib_base_ln( 1.0-p );
			}
		} else {
			x0 = -stdlib_base_ln( q );
		}
		if ( a == 1.0 ) {
			k = 2;
			xr = x0;
		} else {
			lgama = stdlib_base_gammaln( a );
			k = 1;
		}
	}
	if ( q < 1.0e-30 && a < HALF ) {
		m = 0;
		x0 = -stdlib_base_ln( q*stdlib_base_gamma( a ) ) + ( ( a-1.0 ) * stdlib_base_ln( -stdlib_base_ln( q*stdlib_base_gamma( a ) ) ) );
		k = 1;
		lgama = stdlib_base_gammaln( a );
	}
	if ( a > 1.0 && a < 500.0 && p < 1.0e-80 ) {
		m = 0;
		ainv = 1.0 / a;
		ap1inv = 1.0 / ( a+1.0 );
		x0 = ( stdlib_base_gammaln( a+1.0 ) + stdlib_base_ln( p ) ) * ainv;
		x0 = stdlib_base_exp( x0 );
		xini = x0;
		for ( i = 0; i < 10; i++ ) {
			x0 = xini * stdlib_base_exp( x0*ainv ) * stdlib_base_pow( 1.0-( x0*ap1inv ), ainv );
		}
		k = 1;
		lgama = stdlib_base_gammaln( a );
	}
	logr = ( 1.0/a ) * ( stdlib_base_ln( p ) + stdlib_base_gammaln( a+1.0 ) );
	if ( ( logr < stdlib_base_ln( ONEO5 * ( 1.0+a ) ) ) && ( k == 0 ) ) {
		r = stdlib_base_exp( logr );
		m = 0;
		a2 = a * a;
		a3 = a2 * a;
		a4 = a3 * a;
		ap1 = a + 1.0;
		ap12 = ap1 * ap1;
		ap13 = ap1 * ap12;
		ap14 = ap12 * ap12;
		ap2 = a + 2.0;
		ap22 = ap2 * ap2;
		ap3 = a + 3.0;
		CK[ 0 ] = 1.0;
		CK[ 1 ] = 1.0 / ap1;
		CK[ 2 ] = HALF * ( ( 3.0*a ) + 5.0 ) / ( ap12*ap2 );
		CK[ 3 ] = ONEO3 * ( 31.0 + (8.0*a2) + (33.0*a) ) / ( ap13*ap2*ap3 );
		CK[ 4 ] = ONEO24 * ( 2888.0 + (1179.0*a3) + (125.0*a4) + (3971.0*a2) + (5661.0*a) ) / ( ap14*ap22*ap3*( a+4.0 ) );
		x0 = r * ( CK[ 0 ] + ( r * ( CK[ 1 ] + ( r * ( CK[ 2 ] + ( r * ( CK[ 3 ] + ( r*CK[ 4 ] ) ) ) ) ) ) ) );
		lgama = stdlib_base_gammaln( a );
		k = 1;
	}
	if ( ( a < 10.0 ) && ( k == 0 ) ) {
		vgam = stdlib_base_sqrt( a ) / ( gamstar( a )*SQRT_TWO_PI );
		vmin = stdlib_base_min( 0.02, vgam );
		if ( q < vmin ) {
			m = 0;
			b = 1.0 - a;
			b2 = b * b;
			b3 = b2 * b;
			eta = stdlib_base_sqrt( -2.0/a * stdlib_base_ln( q/vgam ) );
			x0 = a * lambdaeta( eta );
			L = stdlib_base_ln( x0 );
			if ( x0 > 5.0 ) {
				L2 = L * L;
				L3 = L2 * L;
				L4 = L3 * L;
				r = 1.0 / x0;
				CK[ 0 ] = L - 1.0;
				CK[ 1 ] = ( (3.0*b) - (2.0*b*L) + L2 - ( 2.0*L ) + 2.0 ) * HALF;
				CK[ 2 ] = ( (24.0*b*L) - (11.0*b2) - (24.0*b) - (6.0*L2) + (12.0*L) - 12.0 - (9.0*b*L2) + (6.0*b2*L) + (2.0*L3) ) * ONEO6;
				CK[ 3 ] = ( (-12.0*b3*L) + (8.04*b*L2) - (114.0*b2*L) + (72.0+(36.0*L2)) + (((3.0*L4)-(72.0*L)+162.0) * (b-(168.0*b*L))) - ((12.0*L3)+(25.0*b3)) - ( (22.0*b*L3)+(36.0*b2*L2)+(120.0*b2) ) ) * ONEO12;
				CK[ 4 ] = 0.0;
				x0 = x0 - L + ( b*r*( CK[ 0 ] + ( r * ( CK[ 1 ] + ( r * ( CK[ 2 ] + ( r * ( CK[ 3 ] + ( r*CK[ 4 ] ) ) ) ) ) ) ) ) );
			} else {
				r = 1.0 / x0;
				ck = L - 1.0;
				t = L - ( b*r*ck );
				if ( t < x0 ) {
					x0 -= t;
				}
			}
			lgama = stdlib_base_gammaln( a );
			k = 1;
		}
	}
	if ( ( stdlib_base_abs( porq-HALF ) < 1.0e-5 ) && ( k == 0 ) ) {
		m = 0;
		ainv = 1.0 / a;
		x0 = a - ONEO3 + ( ( 0.0197530864197530864197530864198 + ( 0.00721144424848128551832255535959*ainv ) ) * ainv );
		lgama = stdlib_base_gammaln( a );
		k = 1;
	}
	if ( ( a < 1.0 ) && ( k == 0 ) ) {
		m = 0;
		if ( pcase ) {
			x0 = stdlib_base_exp( ( 1.0/a ) * ( stdlib_base_ln( porq ) + stdlib_base_gammaln( a+1.0 ) ) );
		} else {
			x0 = stdlib_base_exp( ( 1.0/a ) * ( stdlib_base_ln( 1.0-porq ) + stdlib_base_gammaln( a+1.0 ) ) );
		}
		lgama = stdlib_base_gammaln( a );
		k = 1;
	}
	if ( k == 0 ) {
		m = 1;
		ainv = 1.0 / a;
		r = stdlib_base_erfcinv( 2.0 * porq );
		eta = s * r / stdlib_base_sqrt( a*HALF );
		if ( r < MAX_FLOAT32 ) {
			eta += ( eps1( eta ) + ( ( eps2( eta )+( eps3( eta )*ainv ) )*ainv ) ) * ainv;
			x0 = a * lambdaeta( eta );
			y = eta;
			fp = -stdlib_base_sqrt( a/TWO_PI ) * stdlib_base_exp( -HALF*a*y*y ) / ( gamstar( a ) );
			invfp = 1.0 / fp;
		} else {
			// Overflow problems in one or more steps of the computation...
			return 0.0 / 0.0; // NaN
		}
	}
	if ( k < 2 ) {
		xr = higherNewton( x0, a, m, p, q, lgama, invfp, pcase );
	}
	return xr;
}

/**
* Inverts the lower gamma function; i.e., computes `xr` such that `P(a,xr) = p`.
*
* ## Method
*
* The present code uses different methods of computation depending on the values of the input values: Taylor, asymptotic expansions and high-order Newton methods.
*
* ## Notes
*
* -   The claimed accuracy obtained using this inversion routine is near `1e-12`.
*
* ## References
*
* -   A. Gil, J. Segura and N.M. Temme, GammaCHI: a package for the inversion and computation of the gamma and chi-square distribution functions (central and noncentral). Computer Physics Commun
* -   A. Gil, J. Segura and N.M. Temme. Efficient and accurate algorithms for the computation and inversion of the incomplete gamma function ratios. SIAM J Sci Comput. (2012) 34(6), A2965-A2981
*
* @param p        probability value
* @param a        scale parameter
* @param upper    boolean indicating if the function should invert the upper tail of the incomplete gamma function instead; i.e., compute `xr` such that `Q(a,xr) = p`
* @return         function value of the inverse
*
* @example
* double y = stdlib_base_gammaincinv( 0.5, 2.0, false );
* // returns ~1.678
*/
double stdlib_base_gammaincinv( const double p, const double a, const bool upper ) {
	if ( stdlib_base_is_nan( p ) || stdlib_base_is_nan( a ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( a < SMALLEST_NORMAL_FLOAT32 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( p > 1.0 || p < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	// Case: invert upper gamma function
	if ( upper ) {
		if ( p == 0.0 ) {
			return PINF;
		}
		if ( p == 1.0 ) {
			return 0.0;
		}
		return compute( a, 1.0-p, p );
	}
	// Default: invert lower gamma function
	if ( p == 0.0 ) {
		return 0.0;
	}
	if ( p == 1.0 ) {
		return PINF;
	}
	return compute( a, p, 1.0-p );
}
