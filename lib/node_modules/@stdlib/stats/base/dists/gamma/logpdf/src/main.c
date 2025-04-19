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
*/

// MODULES //

#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/max.h"
#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaled.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/min.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/max_ln.h"
#include "stdlib/constants/float64/min_ln.h"
#include "stdlib/constants/float64/gamma_lanczos_g.h"
#include "stdlib/constants/float64/e.h"

// BEGIN: regularised_gamma_prefix

/**
* Computes `(z^a)*(e^-z) / gamma(a)`.
*
* @param a   input value
* @param z   input value
* @return    function value
*/
static double regularised_gamma_prefix( const double a, const double z ) {
	double prefix;
	double amza;
	double agh;
	double alz;
	double amz;
	double sq;
	double d;

	agh = a + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
	d = ( (z - a) - STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G + 0.5 ) / agh;
	if ( a < 1.0 ) {
		// Treat a < 1 as a special case because our Lanczos approximations are optimized against the factorials with a > 1, and for high precision types very small values of `a` can give rather erroneous results for gamma:
		if ( z <= STDLIB_CONSTANT_FLOAT64_MIN_LN ) {
			// Use logs, so should be free of cancellation errors:
			return stdlib_base_exp( ( a * stdlib_base_ln(z) ) - z - stdlib_base_gammaln( a ) );
		}
		// No danger of overflow as gamma(a) < 1/a for small a, so direct calculation:
		return stdlib_base_pow( z, a ) * stdlib_base_exp( -z ) / stdlib_base_gamma( a );
	}
	if ( stdlib_base_abs(d*d*a) <= 100.0 && a > 150.0 ) {
		// Special case for large a and a ~ z:
		prefix = ( a * ( stdlib_base_log1p( d ) - d ) ) + ( z * ( 0.5-STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G ) / agh );
		prefix = stdlib_base_exp( prefix );
	}
	else {
		// General case. Direct computation is most accurate, but use various fallbacks for different parts of the problem domain:
		alz = a * stdlib_base_ln(z / agh);
		amz = a - z;
		if (
			stdlib_base_min(alz, amz) <= STDLIB_CONSTANT_FLOAT64_MIN_LN ||
			stdlib_base_max(alz, amz) >= STDLIB_CONSTANT_FLOAT64_MAX_LN
		) {
			amza = amz / a;
			if (
				stdlib_base_min(alz, amz)/2.0 > STDLIB_CONSTANT_FLOAT64_MIN_LN &&
				stdlib_base_max(alz, amz)/2.0 < STDLIB_CONSTANT_FLOAT64_MAX_LN
			) {
				// Compute square root of the result and then square it:
				sq = stdlib_base_pow( z / agh, a / 2.0 ) * stdlib_base_exp( amz / 2.0 );
				prefix = sq * sq;
			}
			else if (
				stdlib_base_min(alz, amz)/4.0 > STDLIB_CONSTANT_FLOAT64_MIN_LN &&
				stdlib_base_max(alz, amz)/4.0 < STDLIB_CONSTANT_FLOAT64_MAX_LN &&
				z > a
			) {
				// Compute the 4th root of the result then square it twice:
				sq = stdlib_base_pow( z / agh, a / 4.0 ) * stdlib_base_exp( amz / 4.0 );
				prefix = sq * sq;
				prefix *= prefix;
			}
			else if (
				amza > STDLIB_CONSTANT_FLOAT64_MIN_LN &&
				amza < STDLIB_CONSTANT_FLOAT64_MAX_LN
			) {
				prefix = stdlib_base_pow( (z * stdlib_base_exp(amza)) / agh, a );
			}
			else {
				prefix = stdlib_base_exp( alz + amz );
			}
		}
		else
		{
			prefix = stdlib_base_pow( z / agh, a ) * stdlib_base_exp( amz );
		}
	}
	prefix *= stdlib_base_sqrt( agh / STDLIB_CONSTANT_FLOAT64_E ) / stdlib_base_gamma_lanczos_sum_expg_scaled( a );
	return prefix;
}

// END: regularised_gamma_prefix

// BEGIN: gammma_p_derivative

/**
* Calculates the partial derivative with respect to x of the incomplete gamma function.
*
* @param a   function parameter
* @param x   function parameter
* @return    function value
*/
static double gamma_p_derivative( const double a, const double x ) {
	double f1;
	if ( a <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	if ( x < 0.0 ) {
		return 0.0/0.0; // NaN
	}
	if ( x == 0.0 ) {
		if ( a > 1.0 ) {
			return 0.0;
		}
		return ( a == 1.0 ) ? 1.0 : STDLIB_CONSTANT_FLOAT64_PINF;
	}
	f1 = regularised_gamma_prefix( a, x );
	if ( x < 1.0 && ( STDLIB_CONSTANT_FLOAT64_MAX * x < f1 ) ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( f1 == 0.0 ) {
		// Underflow in calculation, use logs instead:
		f1 = (a * stdlib_base_ln( x )) - x - stdlib_base_gammaln( a ) - stdlib_base_ln( x );
		f1 = stdlib_base_exp( f1 );
	} else {
		f1 /= x;
	}
	return f1;
}

// END: gammma_p_derivative

// MAIN //

/**
* Evaluates the logarithm of the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
*
* @param x       input value
* @param alpha   shape parameter
* @param beta    rate parameter
* @return        evaluated logPDF
*
* @example
* double y = stdlib_base_dists_gamma_logpdf( 2.0, 0.5, 1.0 );
* // returns ~-2.919
*/
double stdlib_base_dists_gamma_logpdf( const double x, const double alpha, const double beta ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha < 0.0 ||
		beta <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x < 0.0 || x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( alpha == 0.0 ) {
		// Point mass at 0...
		return ( x == 0.0 ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	return stdlib_base_ln( gamma_p_derivative( alpha, x * beta ) ) + stdlib_base_ln( beta );
}

