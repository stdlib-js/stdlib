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
*/

#include "stdlib/stats/base/dists/studentized-range/cdf.h"
#include "stdlib/math/base/assert/is_positive_integer.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/sqrt_two_pi.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/math/base/special/exp.h"
#include <stdint.h>

static const double WEIGHT[ 20 ] = {
	0.0176140071391521,
	0.0406014298003869,
	0.0626720483341091,
	0.0832767415767048,
	0.10193011981724,
	0.118194531961518,
	0.131688638449177,
	0.142096109318382,
	0.149172986472604,
	0.152753387130726,
	0.152753387130726,
	0.149172986472604,
	0.142096109318382,
	0.131688638449177,
	0.118194531961518,
	0.10193011981724,
	0.0832767415767048,
	0.0626720483341091,
	0.0406014298003869,
	0.0176140071391521
};
static const double ROOT[ 20 ] = {
	0.993128599185095,
	0.963971927277914,
	0.912234428251326,
	0.839116971822219,
	0.746331906460151,
	0.636053680726515,
	0.510867001950827,
	0.37370608871542,
	0.227785851141645,
	0.0765265211334973,
	-0.0765265211334973,
	-0.227785851141645,
	-0.37370608871542,
	-0.510867001950827,
	-0.636053680726515,
	-0.746331906460151,
	-0.839116971822219,
	-0.912234428251326,
	-0.963971927277914,
	-0.993128599185095
};
static const double CUTOFF = 7.071; // 10 / sqrt(2)
static const double p0 = 220.2068679123761e0;
static const double p1 = 221.2135961699311e0;
static const double p2 = 112.0792914978709e0;
static const double p3 = 33.91286607838300e0;
static const double p4 = 6.373962203531650e0;
static const double p5 = 0.7003830644436881e0;
static const double p6 = 0.3526249659989109e-01;
static const double q0 = 440.4137358247522e0;
static const double q1 = 793.8265125199484e0;
static const double q2 = 637.3336333788311e0;
static const double q3 = 296.5642487796737e0;
static const double q4 = 86.78073220294608e0;
static const double q5 = 16.06417757920695e0;
static const double q6 = 1.755667163182642e0;
static const double q7 = 0.8838834764831844e-1;
static const double PRECISION = 1e-10;

/**
* Evaluates the CDF of the standard normal distribution.
*
* @private
* @param z    standard deviation from the mean
* @return     evaluated CDF
*/
static double apnorm( const double z ) {
	double expntl;
	double zabs;
	double p;
	double q;

	zabs = stdlib_base_abs( z );
	if ( zabs > 37.0 ) {
		if ( z > 0.0 ) {
			p = 1.0;
		} else {
			p = 0.0;
		}
	} else {
		// Case: |z| <= 37
		expntl = stdlib_base_exp( -0.5 * zabs * zabs );
		if ( zabs < CUTOFF ) {
			p = expntl * ((((((p6 * zabs + p5) * zabs + p4) * zabs + p3) * zabs + p2) * zabs + p1) * zabs + p0) /
				(((((((q7 * zabs + q6) * zabs + q5) * zabs + q4) * zabs + q3) * zabs + q2) * zabs + q1) * zabs + q0);
		} else {
			p = ( expntl / STDLIB_CONSTANT_FLOAT64_SQRT_TWO_PI ) / (zabs + 1.0 / (zabs + 2.0 / (zabs + 3.0 / (zabs + 4.0 / (zabs + 0.65)))));
		}
		if ( z >= 0.0 ) {
			q = p;
			p = 1.0 - q;
		}
	}
	return p;
}

/**
* Evaluates a Gauss-Legendre quadrature integrand.
*
* @private
* @param ww     quadrature point
* @param yii    integral bound
* @param aii    integral bound
* @param bii    integral bound
* @param r      relative error tolerance
* @return       integral value
*/
static double fint( const double ww, const double yii, const double aii, const double bii, const double r ) {
	double yyi;
	double out;

	yyi = ( ( bii - aii ) * yii ) + bii + aii;
	out = stdlib_base_exp( -yyi * yyi * 0.125 );
	out *= stdlib_base_pow( apnorm( yyi * 0.5 ) -
		apnorm( ( yyi - ( 2.0 * ww ) ) * 0.5 ), r - 1.0 );
	return out;
}

/**
* Evaluates the Gauss-Legendre quadrature rule.
*
* @private
* @param ww     quadrature point
* @param aii    integral bound
* @param bii    integral bound
* @param r      relative error tolerance
* @param a      lower bound of integration
* @param b      upper bound of integration
* @param n      number of quadrature points
* @return       integral value
*/
static double gaussLegreQuadrature( const double ww, const double aii, const double bii, const double r, const double a, const double b, const double n ) {
	double wsum;
	double c;
	double d;
	int32_t j;

	c = ( b - a ) * 0.5;
	d = ( b + a ) * 0.5;
	wsum = 0.0;
	for ( j = 0; j < n; j++ ) {
		if ( ROOT[j] == 0.0 ) {
			wsum += WEIGHT[j] * fint( ww, d, aii, bii, r );
		} else {
			wsum += WEIGHT[j] * ( fint( ww, ( ROOT[j] * c ) + d, aii, bii, r ) );
		}
	}
	return c * wsum;
}

/**
* Evaluates `H(w)`.
*
* @private
* @param w    quantile of the studentized range
* @param r    sample size for range (same for each group)
* @return     evaluated function
*/
static double prangeVInf( const double w, const double r ) {
	double soma;
	double ai;
	double ii;
	double bi;
	int32_t i;
	double k;

	if ( w <= 0.0 ) {
		return 0.0;
	}
	if ( w <= 3.0 ) {
		k = 3.0;
	} else {
		k = 2.0;
	}
	ai = w / 2.0;
	ii = 1.0;
	bi = ( ( (k - ii) * (w / 2.0) ) + ( 8.0 * ii ) ) / k;
	soma = 0.0;
	for ( i = 1; i < stdlib_base_round( k ) + 1; i++ ) {
		ii = i;
		soma += ( (bi - ai) / 2.0 ) *
			gaussLegreQuadrature( w, ai, bi, r, -1.0, +1.0, 20 );
		ai = bi;
		if ( i + 1 == (int32_t)stdlib_base_round( k ) ) {
			bi = 8.0;
		} else {
			bi = ( ( (k - ii - 1.0) * (w / 2.0) ) + ( 8.0 * (ii + 1.0) ) ) / k;
		}
	}
	soma *= 2.0 * r / stdlib_base_sqrt( 2.0 * STDLIB_CONSTANT_FLOAT64_PI );
	soma += stdlib_base_exp( r * stdlib_base_ln( ( 2.0 * apnorm( w / 2.0 ) ) - 1.0 ) );
	return soma;
}

/**
* Evaluates a Gauss-Legendre quadrature integrand.
*
* @private
* @param q      quadrature point
* @param za     integral bound
* @param aii    integral bound
* @param c      integral upper bound
* @param r      relative error tolerance
* @param v      number of integration variables
* @param l      logarithm of the absolute value of the integral
* @return       integral value
*/
static double f26( const double q, const double za, const double aii, const double c, const double r, const double v, const double l ) {
	double aux1;
	double yyi;
	double aux;

	yyi = ( za * l ) + ( 2.0 * aii * l ) + l;
	aux1 = prangeVInf( stdlib_base_sqrt( yyi / 2.0 ) * q, r );
	if ( aux1 == 0.0 ) {
		aux1 = 1.0e-37;
	}
	aux = ( c * stdlib_base_ln( aux1 ) ) + stdlib_base_ln( l ) + ( ( v / 2.0 ) * stdlib_base_ln( v ) ) +
		( -yyi * v / 4.0 ) + ( ( ( v / 2.0 ) - 1.0 ) * stdlib_base_ln( yyi ) ) -
		( ( v * STDLIB_CONSTANT_FLOAT64_LN2 ) + stdlib_base_gammaln( v / 2.0 ) );
	if ( stdlib_base_abs( aux ) >= 1.0e30 ) {
		return 0.0;
	}
	return stdlib_base_exp( aux );
}

/**
* Evaluates a Gauss-Legendre quadrature rule.
*
* @private
* @param q      quadrature point
* @param aii    integral bound
* @param r      relative error tolerance
* @param ci     integral upper bound
* @param a      lower bound of integration
* @param b      upper bound of integration
* @param n      number of quadrature points
* @param v      number of integration variables
* @param l      logarithm of the absolute value of the integral
* @return       integral value
*/
static double gausslegdquad( const double q, const double aii, const double r, const double ci, const double a, const double b, const double n, const double v, const double l ) {
	double wsum;
	double cmm;
	double d;
	int32_t j;

	cmm = ( b - a ) / 2.0;
	d = ( b + a ) / 2.0;
	wsum = 0.0;
	for ( j = 0; j < n; j++ ) {
		if ( ROOT[ j ] == 0.0 ) {
			wsum += WEIGHT[ j ] * f26( q, d, aii, ci, r, v, l );
		} else {
			wsum += WEIGHT[ j ] *
				( f26( q, ( ROOT[ j ] * cmm ) + d, aii, ci, r, v, l ) );
		}
	}
	return cmm * wsum;
}

/**
* Evaluates the cumulative distribution function (CDF) of the studentized range distribution.
*
* ## References
*
* -   Ferreira, D. F., Demetrico, C. G. B., Manly, B. F. J., and Machado, A. de A. 2007. "Quantis da distribuição do máximo da amplitude estudentizada." _Rev. Mat. Est._, São Paulo, 25 (1): 117-135. <http://jaguar.fcav.unesp.br/RME/fasciculos/v25/v25_n1/A8_Daniel.pdf>.
*
* @param q         quantile of the studentized range
* @param r         sample size for range (same for each group)
* @param v         degrees of freedom
* @param nranges   number of groups whose maximum range is considered
* @return          evaluated CDF
*
* @example
* double y = stdlib_base_dists_studentized_range_cdf( 0.5, 3.0, 2.0, 1.0 );
* // returns ~0.0644
*/
double stdlib_base_dists_studentized_range_cdf( const double q, const double r, const double v, const double nranges ) {
	double probinic;
	double auxprob;
	int32_t found;
	double ll;
	double a;

	if ( stdlib_base_is_nan( q ) || stdlib_base_is_nan( r ) || stdlib_base_is_nan( v ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( r < 2.0 || v < 2.0 ) {
		return 0.0 / 0.0;
	}
	if ( !stdlib_base_is_positive_integer( nranges ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( v == 1 ) {
		if ( r < 10 ) {
			ll = 1.0 + ( 1.0 / ( (2.0 * r) + 3.0 ) );
		} else if ( r <= 100 ) {
			ll = 1.0844 + ( (1.119 - 1.0844) / 90.0 * (r - 10.0) );
		} else {
			ll = 1.119 + ( 1.0 / r );
		}
	} else if ( v == 2 ) {
		ll = 0.968;
	} else if ( v <= 100 ) {
		ll = 1.0;
	} else if ( v <= 800 ) {
		ll = 1.0 / 2.0;
	} else if ( v <= 5000 ) {
		ll = 1.0 / 4.0;
	} else {
		ll = 1.0 / 8.0;
	}

	if ( q < 0.0 ) {
		return 0.0;
	}
	if ( q == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 1.0;
	}
	if (
		v > 25000.0 ||
		gausslegdquad( q, 0.0, r, nranges, -1.0, 1.0, 20, v, ll ) == 0.0
	) {
		return stdlib_base_pow( prangeVInf( q, r ), nranges );
	}
	auxprob = 0.0;
	found = 0;
	a = 0.0;
	probinic = 0.0;
	while ( !found ) {
		auxprob += gausslegdquad( q, a, r, nranges, -1.0, +1.0, 20, v, ll );
		if ( auxprob > 1.0 ) {
			return 1.0;
		}
		if ( stdlib_base_abs( auxprob - probinic ) / auxprob <= PRECISION ) {
			found = 1;
		} else {
			probinic = auxprob;
		}
		a += 1;
	}
	return auxprob;
}
