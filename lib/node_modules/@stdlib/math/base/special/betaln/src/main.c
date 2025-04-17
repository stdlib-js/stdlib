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
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://www.netlib.org/slatec/fnlib/albeta.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/

#include "stdlib/math/base/special/betaln.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/min.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ln_sqrt_two_pi.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib//constants/float64/ninf.h"
#include <stdint.h>

static const double ALGMCS[ 15 ] = {
	+0.1276642195630062933333333333333e-30,
	-0.3401102254316748799999999999999e-29,
	+0.1025680058010470912000000000000e-27,
	-0.3547598158101070547199999999999e-26,
	+0.1429227355942498147573333333333e-24,
	-0.6831888753985766870111999999999e-23,
	+0.3962837061046434803679306666666e-21,
	-0.2868042435334643284144622399999e-19,
	+0.2683181998482698748957538846666e-17,
	-0.3399615005417721944303330599666e-15,
	+0.6221098041892605227126015543416e-13,
	-0.1809129475572494194263306266719e-10,
	+0.9810825646924729426157171547487e-8,
	-0.1384948176067563840732986059135e-4,
	+0.1666389480451863247205729650822e+0
};
static const int32_t LEN = 15;
static const double XBIG = 94906265.62425156;
static const double XMAX = 3.745194030963158e306;

/**
* Evaluates the n-term Chebyshev series at `x`.
*
* ## References
*
* -   Broucke, Roger. 1973. "Algorithm: Ten Subroutines for the Manipulation of Chebyshev Series." _Communications of the ACM_ 16 (4). New York, NY, USA: ACM: 254–56. doi:[10.1145/362003.362037](https://doi.org/10.1145/362003.362037).
* -   Fox, Leslie, and Ian Bax Parker. 1968. _Chebyshev polynomials in numerical analysis_. Oxford Mathematical Handbooks. London, United Kingdom: Oxford University Press. <https://books.google.com/books?id=F8NzsEtJCD0C>.
*
* @param x    value at which the series is to be evaluated
* @return     series value
*/
static double dceval( const double x ) {
	double twox;
	double b2;
	double b1;
	double b0;
	int32_t i;

	if ( x < -1.1 || x > 1.1 ) {
		return 0.0 / 0.0; // NaN
	}
	b1 = 0.0;
	b0 = 0.0;
	twox = 2.0 * x;
	for ( i = 0; i < LEN; i++ ) {
		b2 = b1;
		b1 = b0;
		b0 = ( twox * b1 ) - b2 + ALGMCS[ i ];
	}
	return ( b0 - b2 ) * 0.5;
}

/**
* Computes the log gamma correction factor for `x >= 10`.
*
* ```tex
* \log(\gamma(x)) = \log(\sqrt{2*\Pi}) + (x-0.5) \cdot \log(x) - x \operatorname{R9LGMC}(x).
* ```
*
* @param x    input value
* @return     correction value
*/
static double gammaCorrection( const double x ) {
	if ( x < 10.0 ) {
		return 0.0 / 0.0; // NaN
	}

	// Check for underflow...
	if ( x >= XMAX ) {
		return 0.0;
	}
	if ( x < XBIG ) {
		return dceval( ( 2.0 * stdlib_base_pow( 10.0 / x, 2.0 ) ) - 1.0 ) / x;
	}
	return 1.0 / ( x * 12.0 );
}

/**
* Evaluates the natural logarithm of the beta function.
*
* @param a    first input value
* @param b    second input value
* @return     natural logarithm of beta function
*
* @example
* double out = stdlib_base_betaln( 5.0, 0.2 );
* // returns ~1.218
*/
double stdlib_base_betaln( const double a, const double b ) {
	double corr;
	double p;
	double q;

	p = stdlib_base_min( a, b );
	q = stdlib_base_max( a, b );

	if ( p < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( p == 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( q == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}

	// Case: p and q are big
	if ( p >= 10.0 ) {
		corr = gammaCorrection( p ) + gammaCorrection( q ) - gammaCorrection( p + q );
		return ( -0.5 * stdlib_base_ln( q ) ) + STDLIB_CONSTANT_FLOAT64_LN_SQRT_TWO_PI + corr + ( ( p - 0.5 ) * stdlib_base_ln( p / ( p + q ) ) ) + ( q * stdlib_base_log1p( -p / ( p + q ) ) );
	}

	// Case: p is small, but q is big
	if ( q >= 10.0 ) {
		corr = gammaCorrection( q ) - gammaCorrection( p + q );
		return stdlib_base_gammaln( p ) + corr + p - ( p * stdlib_base_ln( p + q ) ) + ( ( q - 0.5 ) * stdlib_base_log1p( -p / ( p + q ) ) );
	}

	// Case: p and q are small
	return stdlib_base_ln( stdlib_base_gamma( p ) * ( stdlib_base_gamma( q ) / stdlib_base_gamma( p + q ) ) );
}
