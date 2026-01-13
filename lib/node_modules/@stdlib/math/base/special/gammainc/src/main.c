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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified according to stdlib conventions.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/gammainc.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaled.h"
#include "stdlib/math/base/special/gamma1pm1.h"
#include "stdlib/math/base/special/log1pmx.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/powm1.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/erfc.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/min.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float32/smallest_normal.h"
#include "stdlib/constants/float64/max_nth_factorial.h"
#include "stdlib/constants/float64/gamma_lanczos_g.h"
#include "stdlib/constants/float64/sqrt_two_pi.h"
#include "stdlib/constants/float64/sqrt_eps.h"
#include "stdlib/constants/float64/two_pi.h"
#include "stdlib/constants/float64/max_ln.h"
#include "stdlib/constants/float64/min_ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/max.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/e.h"
#include <stdbool.h>
#include <stdint.h>

static const int32_t MAX_ITERATIONS = 1000000;
static const double E = STDLIB_CONSTANT_FLOAT64_E;
static const double PI = STDLIB_CONSTANT_FLOAT64_PI;
static const double EPS = STDLIB_CONSTANT_FLOAT64_EPS;
static const double MAX = STDLIB_CONSTANT_FLOAT64_MAX;
static const double PINF = STDLIB_CONSTANT_FLOAT64_PINF;
static const double TWO_PI = STDLIB_CONSTANT_FLOAT64_TWO_PI;
static const double MAX_LN = STDLIB_CONSTANT_FLOAT64_MAX_LN;
static const double MIN_LN = STDLIB_CONSTANT_FLOAT64_MIN_LN;
static const double SQRT_EPS = STDLIB_CONSTANT_FLOAT64_SQRT_EPS;
static const double SQRT_TWO_PI = STDLIB_CONSTANT_FLOAT64_SQRT_TWO_PI;
static const double GAMMA_LANCZOS_G = STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G;
static const double MAX_NTH_FACTORIAL = STDLIB_CONSTANT_FLOAT64_MAX_NTH_FACTORIAL;
static const float SMALLEST_NORMAL = STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_c0

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
static double polyval_c0( const double x ) {
	return -0.3333333333333333 + (x * (0.08333333333333333 + (x * (-0.014814814814814815 + (x * (0.0011574074074074073 + (x * (0.0003527336860670194 + (x * (-0.0001787551440329218 + (x * (0.00003919263178522438 + (x * (-0.0000021854485106799924 + (x * (-0.00000185406221071516 + (x * (8.296711340953087e-7 + (x * (-1.7665952736826078e-7 + (x * (6.707853543401498e-9 + (x * (1.0261809784240309e-8 + (x * (-4.382036018453353e-9 + (x * 9.14769958223679e-10)))))))))))))))))))))))))));
}

// END: polyval_c0

// BEGIN: polyval_c1

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
static double polyval_c1( const double x ) {
	return -0.001851851851851852 + (x * (-0.003472222222222222 + (x * (0.0026455026455026454 + (x * (-0.0009902263374485596 + (x * (0.00020576131687242798 + (x * (-4.018775720164609e-7 + (x * (-0.000018098550334489977 + (x * (0.00000764916091608111 + (x * (-0.0000016120900894563446 + (x * (4.647127802807434e-9 + (x * (1.378633446915721e-7 + (x * (-5.752545603517705e-8 + (x * 1.1951628599778148e-8)))))))))))))))))))))));
}

// END: polyval_c1

// BEGIN: polyval_c2

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
static double polyval_c2( const double x ) {
	return 0.004133597883597883 + (x * (-0.0026813271604938273 + (x * (0.0007716049382716049 + (x * (0.0000020093878600823047 + (x * (-0.00010736653226365161 + (x * (0.000052923448829120125 + (x * (-0.000012760635188618728 + (x * (3.423578734096138e-8 + (x * (0.0000013721957309062932 + (x * (-6.298992138380055e-7 + (x * 1.4280614206064242e-7)))))))))))))))))));
}

// END: polyval_c2

// BEGIN: polyval_c3

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
static double polyval_c3( const double x ) {
	return 0.0006494341563786008 + (x * (0.00022947209362139917 + (x * (-0.0004691894943952557 + (x * (0.00026772063206283885 + (x * (-0.00007561801671883977 + (x * (-2.396505113867297e-7 + (x * (0.000011082654115347302 + (x * (-0.0000056749528269915965 + (x * 0.0000014230900732435883)))))))))))))));
}

// END: polyval_c3

// BEGIN: polyval_c4

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
static double polyval_c4( const double x ) {
	return -0.0008618882909167117 + (x * (0.0007840392217200666 + (x * (-0.0002990724803031902 + (x * (-0.0000014638452578843418 + (x * (0.00006641498215465122 + (x * (-0.00003968365047179435 + (x * 0.000011375726970678419)))))))))));
}

// END: polyval_c4

// BEGIN: polyval_c5

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
static double polyval_c5( const double x ) {
	return -0.00033679855336635813 + (x * (-0.00006972813758365858 + (x * (0.0002772753244959392 + (x * (-0.00019932570516188847 + (x * (0.00006797780477937208 + (x * (1.419062920643967e-7 + (x * (-0.000013594048189768693 + (x * (0.000008018470256334202 + (x * -0.000002291481176508095)))))))))))))));
}

// END: polyval_c5

// BEGIN: polyval_c6

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
static double polyval_c6( const double x ) {
	return 0.0005313079364639922 + (x * (-0.0005921664373536939 + (x * (0.0002708782096718045 + (x * (7.902353232660328e-7 + (x * (-0.00008153969367561969 + (x * (0.0000561168275310625 + (x * -0.000018329116582843375)))))))))));
}

// END: polyval_c6

// BEGIN: polyval_c7

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
static double polyval_c7( const double x ) {
	return 0.00034436760689237765 + (x * (0.00005171790908260592 + (x * (-0.00033493161081142234 + (x * (0.0002812695154763237 + (x * -0.00010976582244684731)))))));
}

// END: polyval_c7

// BEGIN: polyval_c8

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
static double polyval_c8( const double x ) {
	return -0.0006526239185953094 + (x * (0.0008394987206720873 + (x * -0.000438297098541721)));
}

// END: polyval_c8

/* End auto-generated functions. */

/**
* Evaluates a series expansion of the upper incomplete gamma fraction and stores the numerator and denominator in an output array.
*
* @param a		   function parameter
* @param z		   pointer to function parameter
* @param k		   pointer to function parameter
* @param out	   destination array for storing the numerator and denominator
*/
static void upperIncompleteGammaFract( const double a, double* z, double* k, double *out ) {
	*z += 2.0;
	*k += 1.0;
	out[ 0 ] = ( *k ) * ( a - (*k) );
	out[ 1 ] = *z;
	return;
}

/**
* Evaluates a continued fraction expansion of the lower incomplete gamma integral.
*
* ```text
*           a1
*      ---------------
*      b1 +     a2
*           ----------
*            b2 +   a3
*                -----
*                b3 + ...
* ```
*
* @param a	           function parameter
* @param z	           function parameter
* @param factor        further terms are only added as long as factor*result is smaller than the next term
* @param maxIter       maximum number of iterations
* @returns             evaluated expansion
*/
static double continuedFractionA( const double a, const double z, const double factor, const int32_t maxIter ) {
	int32_t maxIterC;
	double out[ 2 ];
	double delta;
	double zc;
	double a0;
	double C;
	double D;
	double f;
	double k;

	zc = z;
	k = 0.0;
	upperIncompleteGammaFract( a, &zc, &k, out );

	f = out[ 1 ];
	a0 = out[ 0 ];
	if ( f == 0.0 ) {
		f = SMALLEST_NORMAL;
	}
	C = f;
	D = 0.0;
	maxIterC = maxIter;

	do {
		upperIncompleteGammaFract( a, &zc, &k, out );
		D = out[ 1 ] + ( out[ 0 ] * D );
		if ( D == 0.0 ) {
			D = SMALLEST_NORMAL;
		}
		C = out[ 1 ] + ( out[ 0 ] / C );
		if ( C == 0.0 ) {
			C = SMALLEST_NORMAL;
		}
		D = 1.0 / D;
		delta = C * D;
		f *= delta;
	} while ( ( stdlib_base_abs( delta - 1.0 ) > factor ) && --maxIterC );

	return a0 / f;
}

/**
* Evaluates the upper incomplete gamma integral via a series expansion and divide by `gamma(z)` to normalize.
*
* ## Method
*
* -   Multiply result by `(z^a) * (e^-z)` to get the full upper incomplete integral.
* -   Divide by `gamma(z)` to get the normalized value.
*
* @param a       function parameter
* @param z       function parameter
* @returns       function value
*/
static double upperGammaFraction( const double a, const double z ) {
	double f;

	f = z - a + 1.0;
	return 1.0 / ( f + continuedFractionA( a, f, EPS, MAX_ITERATIONS ) );
}

/**
* Computes the next term in the series expansion of the lower incomplete gamma function.
*
* @param a          pointer to function parameter
* @param z          function parameter
* @param result     pointer to result so far in series
* @return           next term in series
*/
static double lowerIncompleteGammaSeries( double* a, const double z, double* result ) {
	double r;

	r = *result;
	*a += 1.0;
	*result *= z / ( *a );
	return r;
}

/**
* Helper function to sum the elements of the series expansion of the lower incomplete gamma function.
*
* @param a                 function parameter
* @param z                 function parameter
* @param initialValue      initial value for the series
* @return                  sum of series
*/
static double sumSeries1( const double a, const double z, const double initialValue ) {
	int32_t counter;
	double nextTerm;
	double result;
	double sum;
	double ac;

	ac = a;
	result = 1.0;
	sum = initialValue;
	counter = MAX_ITERATIONS;

	// Repeatedly call function...
	do {
		nextTerm = lowerIncompleteGammaSeries( &ac, z, &result );
		sum += nextTerm;
	}
	while ( ( stdlib_base_abs(EPS * sum) < stdlib_base_abs(nextTerm) ) && --counter );

	return sum;
}

/**
* Sums elements of the series expansion of the lower incomplete gamma function.
*
* ## Method
*
* -   Multiply result by `((z^a) * (e^-z) / a)` to get the full lower incomplete integral.
* -   Divide by `gamma(a)` to get the normalized value.
*
* @param a                 function parameter
* @param z                 function parameter
* @param initialValue      initial value of the resulting sum
* @returns                 sum of terms of lower gamma series
*/
static double lowerGammaSeries( const double a, const double z, const double initValue ) {
	return sumSeries1( a, z, initValue );
}

/**
* Calculates normalized `Q` when `a` is an integer.
*
* @param a       function parameter
* @param x       function parameter
* @returns       upper gamma fraction
*/
static double finiteGammaQ( const double a, const double x ) {
	double term;
	double sum;
	double e;
	int32_t n;

	e = stdlib_base_exp( -x );
	sum = e;
	if ( sum != 0.0 ) {
		term = sum;
		for ( n = 1; n < a; ++n ) {
			term /= n;
			term *= x;
			sum += term;
		}
	}
	return sum;
}

/**
* Calculates normalized `Q` when `a` is a half-integer.
*
* @param a       function parameter
* @param x       function parameter
* @returns       upper gamma fraction
*/
static double finiteHalfGammaQ( const double a, const double x ) {
	double half;
	double term;
	double sum;
	double e;
	int32_t n;

	e = stdlib_base_erfc( stdlib_base_sqrt(x) );
	if ( e != 0 && a > 1.0 ) {
		term = stdlib_base_exp( -x ) / stdlib_base_sqrt( PI * x );
		term *= x;
		half = 0.5;
		term /= half;
		sum = term;
		for ( n = 2; n < a; ++n ) {
			term /= n - half;
			term *= x;
			sum += term;
		}
		e += sum;
	}
	return e;
}

/**
* Computes `(z^a)*(e^-z) / gamma(a)`.
*
* @param a       input value
* @param z       input value
* @returns       function value
*/
static double regularisedGammaPrefix( const double a, const double z ) {
	double prefix;
	double amza;
	double agh;
	double alz;
	double amz;
	double sq;
	double d;

	agh = a + GAMMA_LANCZOS_G - 0.5;
	d = ( (z - a) - GAMMA_LANCZOS_G + 0.5 ) / agh;
	if ( a < 1.0 ) {
		// Treat a < 1.0 as a special case because our Lanczos approximations are optimized against the factorials with a > 1.0, and for high precision types very small values of `a` can give rather erroneous results for gamma:
		if ( z <= MIN_LN || a < 1.0 / MAX ) {
			// Use logs, so should be free of cancellation errors:
			return stdlib_base_exp( ( a * stdlib_base_ln(z) ) - z - stdlib_base_gammaln( a ) );
		}
		// No danger of overflow as `gamma(a) < 1/a` for small `a`, so direct calculation:
		return stdlib_base_pow( z, a ) * stdlib_base_exp( -z ) / stdlib_base_gamma( a );
	}
	if ( stdlib_base_abs(d*d*a) <= 100.0 && a > 150.0 ) {
		// Special case for large a and a ~ z:
		prefix = ( a * stdlib_base_log1pmx( d ) ) + ( z * ( 0.5-GAMMA_LANCZOS_G ) / agh );
		prefix = stdlib_base_exp( prefix );
	}
	else {
		// General case. Direct computation is most accurate, but use various fallbacks for different parts of the problem domain:
		alz = a * stdlib_base_ln( z / agh );
		amz = a - z;
		if (
			stdlib_base_min(alz, amz) <= MIN_LN ||
			stdlib_base_max(alz, amz) >= MAX_LN
		) {
			amza = amz / a;
			if (
				stdlib_base_min(alz, amz)/2.0 > MIN_LN &&
				stdlib_base_max(alz, amz)/2.0 < MAX_LN
			) {
				// Compute square root of the result and then square it:
				sq = stdlib_base_pow( z / agh, a / 2.0 ) * stdlib_base_exp( amz / 2.0 );
				prefix = sq * sq;
			} else if (
				stdlib_base_min(alz, amz)/4.0 > MIN_LN &&
				stdlib_base_max(alz, amz)/4.0 < MAX_LN &&
				z > a
			) {
				// Compute the 4th root of the result then square it twice:
				sq = stdlib_base_pow( z / agh, a / 4.0 ) * stdlib_base_exp( amz / 4.0 );
				prefix = sq * sq;
				prefix *= prefix;
			} else if (
				amza > MIN_LN &&
				amza < MAX_LN
			) {
				prefix = stdlib_base_pow( (z * stdlib_base_exp(amza)) / agh, a );
			} else {
				prefix = stdlib_base_exp( alz + amz );
			}
		} else {
			prefix = stdlib_base_pow( z / agh, a ) * stdlib_base_exp( amz );
		}
	}
	prefix *= stdlib_base_sqrt( agh / E ) / stdlib_base_gamma_lanczos_sum_expg_scaled( a );
	return prefix;
}

/**
* Calculates the power term prefix `(z^a)(e^-z)` used in the non-normalized incomplete gammas.
*
* @param a       function parameter
* @param z       function parameter
* @returns       power term prefix
*/
static double fullIGammaPrefix( const double a, const double z ) {
	double prefix;
	double alz;

	alz = a * stdlib_base_ln( z );
	if ( z >= 1.0 ) {
		if ( ( alz < MAX_LN ) && ( -z > MIN_LN) ) {
			prefix = stdlib_base_pow( z, a ) * stdlib_base_exp( -z );
		} else if ( a >= 1.0 ) {
			prefix = stdlib_base_pow( z / stdlib_base_exp(z/a), a );
		} else {
			prefix = stdlib_base_exp( alz - z );
		}
	} else {
		if ( alz > MIN_LN ) {
			prefix = stdlib_base_pow( z, a ) * stdlib_base_exp( -z );
		} else if ( z/a < MAX_LN ) {
			prefix = stdlib_base_pow( z / stdlib_base_exp(z/a), a );
		} else {
			prefix = stdlib_base_exp( alz - z );
		}
	}
	return prefix;
}

/**
* Computes the next term in the series for the full upper fraction (Q) when `a` is very small.
*
* @param a          pointer to function parameter
* @param x          function parameter
* @param result     pointer to result so far in series
* @return           next term in series
*/
static double smallGamma2Series( double* a, const double x, int32_t* n, double* result ) {
	double r;

	r = ( *result ) / ( *a );
	*result *= x;
	*n += 1;
	*result /= ( *n );
	*a += 1.0;
	return r;
}

/**
* Sums the elements of the series given by the full upper fraction (Q) when `a` is very small.
*
* @param a                 function parameter
* @param x                 function parameter
* @param initialValue      initial value for the series
* @return                  sum of series
*/
static double sumSeries2( const double a, const double x, const double initialValue ) {
	int32_t counter;
	double nextTerm;
	double result;
	double sum;
	int32_t n;
	double ac;
	double xc;

	xc = -x;
	ac = a + 1.0;
	result = -x;
	n = 1;
	sum = initialValue;
	counter = MAX_ITERATIONS;

	// Repeatedly call function...
	do {
		nextTerm = smallGamma2Series( &ac, xc, &n, &result );
		sum += nextTerm;
	}
	while ( ( stdlib_base_abs(EPS * sum) < stdlib_base_abs(nextTerm) ) && --counter );

	return sum;
}

/**
* Compute the full upper fraction (Q) when `a` is very small.
*
* @param a           function parameter
* @param x           function parameter
* @param invert      boolean indicating if the upper tail of the incomplete gamma function should be evaluated
* @param out         destination array for storing the full upper fraction (Q) and pgam
*/
static void tgammaSmallUpperPart( const double a, const double x, const bool invert, double* out ) {
	double initialValue;
	double result;
	double pgam;
	double p;

	result = stdlib_base_gamma1pm1( a );
	pgam = ( result + 1.0 ) / a;
	p = stdlib_base_powm1( x, a );
	result -= p;
	result /= a;
	p += 1.0;
	initialValue = ( invert ) ? pgam : 0.0;
	result = -p * sumSeries2( a, x, ( initialValue-result ) / p );
	if ( invert ) {
		result = -result;
	}
	out[ 0 ] = result;
	out[ 1 ] = pgam;
}

/**
* Computes the next term in the series for the full upper fraction (Q) when `x` is large.
*
* @param a          pointer to function parameter
* @param x          function parameter
* @param result     pointer to result so far in series
* @return           next term in series
*/
static double tgammaILargeXSeries( double* a, const double x, double* result ) {
	double r;

	r = *result;
	*result *= ( *a ) / x;
	*a -= 1.0;
	return r;
}

/**
* Sums the elements of the series given by the full upper fraction (Q) when `x` is large.
*
* @param a      function parameter
* @param x      function parameter
* @return       sum of series
*/
static double sumSeries3( const double a, const double x ) {
	int32_t counter;
	double nextTerm;
	double result;
	double sum;
	double ac;

	ac = a;
	sum = 0.0;
	result = 1.0;
	counter = MAX_ITERATIONS;

	// Repeatedly call function...
	do {
		nextTerm = tgammaILargeXSeries( &ac, x, &result );
		sum += nextTerm;
	}
	while ( ( stdlib_base_abs(EPS * sum) < stdlib_base_abs(nextTerm) ) && --counter );

	return sum;
}

/**
* Computes the asymptotic expansion of the full upper fraction (Q) when `x` is large.
*
* @param a      function parameter
* @param x      function parameter
* @return       function value
*/
static double tgammaILargeX( const double a, const double x ) {
	return sumSeries3( a, x );
}

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param c     pointer to polynomial coefficients sorted in ascending degree
* @param x     value at which to evaluate the polynomial
* @returns     evaluated polynomial
*/
static double evalpoly( double *c, const double x ){
	int32_t i;
	double p;

	i = 10;
	if ( x == 0.0 ) {
		return c[ 0 ];
	}
	i -= 1;
	p = ( c[ i ] * x ) + c[ i-1 ];
	i -= 2;
	while ( i >= 0 ) {
		p = ( p * x ) + c[ i ];
		i -= 1;
	}
	return p;
}

/**
* Asymptotic expansions of the incomplete gamma functions when `a` is large and `x ~ a` (IEEE double precision or 10^-17).
*
* @param a     function parameter
* @param x     function parameter
* @returns     value of asymptotic expansion
*/
static double igammaTemmeLarge( const double a, const double x ) {
	double workspace[ 10 ];
	double result;
	double sigma;
	double phi;
	double y;
	double z;

	sigma = ( x-a ) / a;
	phi = -stdlib_base_log1pmx( sigma );
	y = a * phi;
	z = stdlib_base_sqrt( 2.0 * phi );
	if ( x < a ) {
		z = -z;
	}
	workspace[ 0 ] = polyval_c0( z );
	workspace[ 1 ] = polyval_c1( z );
	workspace[ 2 ] = polyval_c2( z );
	workspace[ 3 ] = polyval_c3( z );
	workspace[ 4 ] = polyval_c4( z );
	workspace[ 5 ] = polyval_c5( z );
	workspace[ 6 ] = polyval_c6( z );
	workspace[ 7 ] = polyval_c7( z );
	workspace[ 8 ] = polyval_c8( z );
	workspace[ 9 ] = -0.00059676129019274625;
	result = evalpoly( workspace, 1.0/a );
	result *= stdlib_base_exp( -y ) / stdlib_base_sqrt( TWO_PI * a );
	if ( x < a ) {
		result = -result;
	}
	result += stdlib_base_erfc( stdlib_base_sqrt(y) ) / 2.0;
	return result;
}

/**
* Main entry point for evaluating all the four incomplete gamma functions (lower, upper, regularized lower, and regularized upper).
*
* @param x                  function parameter
* @param a                  function parameter
* @param regularized        boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions
* @param upper              boolean indicating if the function should return the upper tail of the incomplete gamma function
* @return                   function value
*/
static double igammaFinal( const double x, const double a, const bool regularized, const bool upper ) {
	bool optimisedInvert;
	int32_t evalMethod;
	double initValue;
	double out[ 2 ];
	bool isHalfInt;
	bool useTemme;
	bool isSmallA;
	double result;
	double sigma;
	bool invert;
	bool isInt;
	double gam;
	double fa;
	double g;

	result = 0.0;
	invert = upper;
	isSmallA = ( a < 30 ) && ( a <= x + 1.0 ) && ( x < MAX_LN );
	if ( isSmallA ) {
		fa = stdlib_base_floor( a );
		isInt = ( fa == a );
		isHalfInt = ( isInt ) ? false : ( stdlib_base_abs( fa - a ) == 0.5 );
	} else {
		isInt = false;
		isHalfInt = false;
	}
	if ( isInt && x > 0.6 ) {
		// Calculate Q via finite sum:
		invert = !invert;
		evalMethod = 0;
	} else if ( isHalfInt && x > 0.2 ) {
		// Calculate Q via finite sum for half integer `a`:
		invert = !invert;
		evalMethod = 1;
	} else if ( x < SQRT_EPS && a > 1.0 ) {
		evalMethod = 6;
	} else if ( ( x > 1000.0 ) && ( ( a < x ) || ( stdlib_base_abs( a - 50.0 ) / x < 1.0 ) ) ) {
		// Calculate Q via asymptotic approximation:
		invert = !invert;
		evalMethod = 7;
	} else if ( x < 0.5 ) {
		// Changeover criterion chosen to give a changeover at Q ~ 0.33:
		if ( -0.4 / stdlib_base_ln( x ) < a ) {
			evalMethod = 2;
		} else {
			evalMethod = 3;
		}
	} else if ( x < 1.1 ) {
		// Changeover here occurs when P ~ 0.75 or Q ~ 0.25:
		if ( x * 0.75 < a ) {
			evalMethod = 2;
		} else {
			evalMethod = 3;
		}
	} else {
		// Begin by testing whether we're in the "bad" zone where the result will be near 0.5 and the usual series and continued fractions are slow to converge:
		useTemme = false;
		if ( regularized && a > 20.0 ) {
			sigma = stdlib_base_abs( (x-a)/a );
			if ( a > 200 ) {
				// Limit chosen so that we use Temme's expansion only if the result would be larger than about 10^-6. Below that the regular series and continued fractions converge OK, and if we use Temme's method we get increasing errors from the dominant stdlib_base_erfc term as it's (inexact) argument increases in magnitude.
				if ( 20 / a > sigma * sigma ) {
					useTemme = true;
				}
			} else if ( sigma < 0.4 ) {
				useTemme = true;
			}
		}
		if ( useTemme ) {
			evalMethod = 5;
		}
		// Regular case where the result will not be too close to 0.5: Changeover occurs at P ~ Q ~ 0.5. Note that series computation of P is about x2 faster than continued fraction calculation of Q, so try and use the CF only when really necessary, especially for small x.
		else if ( x - ( 1.0 / (3.0 * x) ) < a ) {
			evalMethod = 2;
		} else {
			evalMethod = 4;
			invert = !invert;
		}
	}

	switch ( evalMethod ) {
	case 0:
		result = finiteGammaQ( a, x );
		if ( regularized == false ) {
			result *= stdlib_base_gamma( a );
		}
		break;
	case 1:
		result = finiteHalfGammaQ( a, x );
		if ( regularized == false ) {
			result *= stdlib_base_gamma( a );
		}
		break;
	case 2:
		// Compute P:
		result = ( regularized ) ?
			regularisedGammaPrefix( a, x ) :
			fullIGammaPrefix( a, x );
		if ( result != 0.0 ) {
			// If the result will be inverted, we can potentially save computation by initializing the series sum closer to the final result. This reduces the number of iterations needed in the series evaluation. However, care must be taken to avoid spurious numeric overflows. In practice, the more expensive overflow checks below are typically bypassed for well-behaved input values.
			initValue = 0.0;
			optimisedInvert = false;
			if ( invert ) {
				initValue = ( regularized ) ? 1.0 : stdlib_base_gamma( a );
				if (
					regularized ||
					result >= 1.0 ||
					MAX * result > initValue
				) {
					initValue /= result;
					if (
						regularized ||
						a < 1.0 ||
						( MAX / a > initValue )
					) {
						initValue *= -a;
						optimisedInvert = true;
					}
					else {
						initValue = 0.0;
					}
				} else {
					initValue = 0.0;
				}
			}
			result *= lowerGammaSeries( a, x, initValue ) / a;
			if ( optimisedInvert ) {
				invert = false;
				result = -result;
			}
		}
		break;
	case 3:
		// Compute Q:
		invert = !invert;
		tgammaSmallUpperPart( a, x, invert, out );
		result = out[ 0 ];
		g = out[ 1 ];
		invert = false;
		if ( regularized ) {
			result /= g;
		}
		break;
	case 4:
		// Compute Q:
		result = ( regularized ) ?
			regularisedGammaPrefix( a, x ) :
			fullIGammaPrefix( a, x );
		if ( result != 0 ) {
			result *= upperGammaFraction( a, x );
		}
		break;
	case 5:
		result = igammaTemmeLarge( a, x );
		if ( x >= a ) {
			invert = !invert;
		}
		break;
	case 6:
		// Since `x` is so small that P is necessarily very small too, use http://functions.wolfram.com/GammaBetaErf/GammaRegularized/06/01/05/01/01/
		result = ( regularized ) ?
			stdlib_base_pow(x, a) / stdlib_base_gamma( a + 1.0 ) :
			stdlib_base_pow( x, a ) / a;
		result *= 1.0 - ( a * x / ( a + 1.0 ) );
		break;
	case 7:
		// `x` is large, so compute Q:
		result = ( regularized ) ?
			regularisedGammaPrefix( a, x ) :
			fullIGammaPrefix( a, x );
		result /= x;
		if ( result != 0.0 ) {
			result *= tgammaILargeX( a, x );
		}
		break;
	}
	if ( regularized && result > 1.0 ) {
		result = 1.0;
	}
	if ( invert ) {
		gam = ( regularized ) ? 1.0 : stdlib_base_gamma( a );
		result = gam - result;
	}
	return result;
}

/**
* Computes the incomplete gamma function.
*
* ## Notes
*
* -   The upper tail is calculated via the modified Lentz's method for computing continued fractions, the lower tail using a power expansion.
* -   When `a >= FLOAT64_MAX_NTH_FACTORIAL` and computing the non-normalized incomplete gamma, result is rather hard to compute unless we use logs. There are really two options a) if `x` is a long way from `a` in value then we can reliably use methods 2 and 4 below in logarithmic form and go straight to the result. Otherwise we let the regularized gamma take the strain (the result is unlikely to underflow in the central region anyway) and combine with `lgamma` in the hopes that we get a finite result.
*
* @param x                  function parameter
* @param a                  function parameter
* @param regularized        boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions
* @param upper              boolean indicating if the function should return the upper tail of the incomplete gamma function
* @return                   function value
*
* @example
* double v = stdlib_base_gammainc( 0.0, 1.0, true, false );
* // returns 0.0
*/
double stdlib_base_gammainc( const double x, const double a, const bool regularized, const bool upper ) {
	double initValue;
	double result;
	bool invert;

	if ( x < 0.0 || a <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	invert = upper;
	if ( a >= MAX_NTH_FACTORIAL && !regularized ) {
		if ( invert && ( a * 4.0 < x ) ) {
			// This is method 4 in `igammaFinal`, done in logs:
			result = ( a * stdlib_base_ln(x) ) - x;
			result += stdlib_base_ln( upperGammaFraction( a, x ) );
		} else if ( !invert && ( a > 4.0 * x ) ) {
			// This is method 2 in `igammaFinal`, done in logs:
			result = ( a * stdlib_base_ln(x) ) - x;
			initValue = 0.0;
			result += stdlib_base_ln( lowerGammaSeries( a, x, initValue ) / a );
		} else {
			result = igammaFinal( x, a, true, invert );
			if ( result == 0.0 ) {
				if ( invert ) {
					// Try http://functions.wolfram.com/06.06.06.0039.01:
					result = 1.0 + ( 1.0 / (12.0*a) ) + ( 1.0 / (288.0*a*a) );
					result = stdlib_base_ln( result ) - a + ( ( a-0.5 ) * stdlib_base_ln(a) );
					result += stdlib_base_ln( SQRT_TWO_PI );
				} else {
					// This is method 2 in `igammaFinal`, done in logs, we're really outside the range of this method, but since the result is almost certainly infinite, we should probably be OK:
					result = ( a * stdlib_base_ln( x ) ) - x;
					initValue = 0.0;
					result += stdlib_base_ln( lowerGammaSeries( a, x, initValue ) / a );
				}
			} else {
				result = stdlib_base_ln( result ) + stdlib_base_gammaln( a );
			}
		}
		if ( result > MAX_LN ) {
			return PINF;
		}
		return stdlib_base_exp( result );
	}
	// If no special handling is required then we proceed as normal:
	return igammaFinal( x, a, regularized, invert );
}
