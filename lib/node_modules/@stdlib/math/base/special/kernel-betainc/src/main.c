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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified according to stdlib conventions.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/kernel_betainc.h"
#include "stdlib/constants/float64/e.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/gamma_lanczos_g.h"
#include "stdlib/constants/float64/half_pi.h"
#include "stdlib/constants/float64/max.h"
#include "stdlib/constants/float64/max_ln.h"
#include "stdlib/constants/float64/min_ln.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float32/smallest_normal.h"
#include "stdlib/constants/float64/smallest_normal.h"
#include "stdlib/constants/int32/max.h"
#include "stdlib/constants/float64/nan.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/asin.h"
#include "stdlib/math/base/special/beta.h"
#include "stdlib/math/base/special/binomcoef.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/factorial.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/gamma_delta_ratio.h"
#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaled.h"
#include "stdlib/math/base/special/gammainc.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/maxabs.h"
#include "stdlib/math/base/special/min.h"
#include "stdlib/math/base/special/minabs.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/powm1.h"
#include "stdlib/math/base/special/sqrt.h"
#include <stdbool.h>
#include <stdint.h>
#include <stddef.h>

static const double ONE_OVER_PI = 1.0 / STDLIB_CONSTANT_FLOAT64_PI;

/**
* Calculates the power term prefix `(z^a)(e^-z)` used in the non-normalized incomplete gammas.
*
* @param a    function parameter
* @param z    function parameter
* @return     power term prefix
*/
static double fullIGammaPrefix( const double a, const double z ) {
	double prefix;
	double alz;

	alz = a * stdlib_base_ln( z );
	if ( z >= 1.0 ) {
		if ( ( alz < STDLIB_CONSTANT_FLOAT64_MAX_LN ) && ( -z > STDLIB_CONSTANT_FLOAT64_MIN_LN ) ) {
			prefix = stdlib_base_pow( z, a ) * stdlib_base_exp( -z );
		} else if ( a >= 1.0 ) {
			prefix = stdlib_base_pow( z / stdlib_base_exp( z / a ), a );
		} else {
			prefix = stdlib_base_exp( alz - z );
		}
	} else if ( alz > STDLIB_CONSTANT_FLOAT64_MIN_LN ) {
		prefix = stdlib_base_pow( z, a ) * stdlib_base_exp( -z );
	} else if ( z / a < STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
		prefix = stdlib_base_pow( z / stdlib_base_exp( z / a ), a );
	} else {
		prefix = stdlib_base_exp( alz - z );
	}
	return prefix;
}

/**
* Computes `(z^a)*(e^-z) / gamma(a)`.
*
* @param a    input value
* @param z    input value
* @return     function value
*/
static double regularizedGammaPrefix( const double a, const double z ) {
	double prefix;
	double amza;
	double agh;
	double alz;
	double amz;
	double sq;
	double d;

	agh = a + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
	d = ( ( z - a ) - STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G + 0.5 ) / agh;
	if ( a < 1.0 ) {
		// Treat a < 1 as a special case because our Lanczos approximations are optimized against the factorials with a > 1, and for high precision types very small values of `a` can give rather erroneous results for gamma:
		if ( z <= STDLIB_CONSTANT_FLOAT64_MIN_LN ) {
			// Use logs, so should be free of cancellation errors:
			return stdlib_base_exp( ( a * stdlib_base_ln( z ) ) - z - stdlib_base_gammaln( a ) );
		}
		// No danger of overflow as gamma(a) < 1/a for small a, so direct calculation:
		return stdlib_base_pow( z, a ) * stdlib_base_exp( -z ) / stdlib_base_gamma( a );
	}
	if ( stdlib_base_abs( d * d * a ) <= 100.0 && a > 150.0 ) {
		// Special case for large a and a ~ z:
		prefix = ( a * ( stdlib_base_log1p( d ) - d ) ) + ( z * ( 0.5 - STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G ) / agh );
		prefix = stdlib_base_exp( prefix );
	} else {
		// General case. Direct computation is most accurate, but use various fallbacks for different parts of the problem domain:
		alz = a * stdlib_base_ln( z / agh );
		amz = a - z;
		if ( stdlib_base_min( alz, amz ) <= STDLIB_CONSTANT_FLOAT64_MIN_LN || stdlib_base_max( alz, amz ) >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
			amza = amz / a;
			if ( stdlib_base_min( alz, amz ) / 2.0 > STDLIB_CONSTANT_FLOAT64_MIN_LN && stdlib_base_max( alz, amz ) / 2.0 < STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
				// Compute square root of the result and then square it:
				sq = stdlib_base_pow( z / agh, a / 2.0 ) * stdlib_base_exp( amz / 2.0 );
				prefix = sq * sq;
			} else if ( stdlib_base_min( alz, amz ) / 4.0 > STDLIB_CONSTANT_FLOAT64_MIN_LN && stdlib_base_max( alz, amz ) / 4.0 < STDLIB_CONSTANT_FLOAT64_MAX_LN && z > a ) {
				// Compute the 4th root of the result then square it twice:
				sq = stdlib_base_pow( z / agh, a / 4.0 ) * stdlib_base_exp( amz / 4.0 );
				prefix = sq * sq;
				prefix *= prefix;
			} else if ( amza > STDLIB_CONSTANT_FLOAT64_MIN_LN && amza < STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
				prefix = stdlib_base_pow( ( z * stdlib_base_exp( amza ) ) / agh, a );
			} else {
				prefix = stdlib_base_exp( alz + amz );
			}
		} else {
			prefix = stdlib_base_pow( z / agh, a ) * stdlib_base_exp( amz );
		}
	}
	prefix *= stdlib_base_sqrt( agh / STDLIB_CONSTANT_FLOAT64_E ) / stdlib_base_gamma_lanczos_sum_expg_scaled( a );
	return prefix;
}

/**
* Continued fraction term generator for the incomplete beta.
*
* @param a      function parameter
* @param b      function parameter
* @param x      function parameter
* @param m      pointer to iteration counter (mutated)
* @param y      probability equal to `1-x`
* @param out    destination pointer for storing the numerator and denominator
*/
static void ibetaFraction2t( const double a, const double b, const double x, double *m, const double y, double *out ) {
	double denom;
	double aN;
	double bN;

	aN = ( a + ( *m ) - 1 ) * ( a + b + ( *m ) - 1 ) * ( *m ) * ( b - ( *m ) ) * x * x;
	denom = a + ( 2.0 * ( *m ) ) - 1.0;
	aN /= denom * denom;
	bN = ( *m );
	bN += ( ( *m ) * ( b - ( *m ) ) * x ) / ( a + ( 2.0 * ( *m ) ) - 1.0 );
	bN += ( ( a + ( *m ) ) * ( ( a * y ) - ( b * x ) + 1.0 + ( ( *m ) * ( 2.0 - x ) ) ) ) / ( a + ( 2.0 * ( *m ) ) + 1.0 );
	( *m ) += 1;
	out[ 0 ] = aN;
	out[ 1 ] = bN;
	return;
}

/**
* Evaluates the incomplete beta function via the continued fraction representation using the modified Lentz algorithm.
*
* ```text
*      b0 +   a1
*      ---------------
*      b1 +   a2
*           ----------
*           b2 +   a3
*                -----
*                b3 + ...
* ```
* @param a      	function parameter
* @param b      	function parameter
* @param x      	function parameter
* @param y      	probability equal to `1-x`
* @param tol    	tolerance for convergence
* @param maxIter 	maximum number of iterations
* @return       	continued fraction value
*/
static double ibetaFraction2CF( const double a, const double b, const double x, const double y, const double tol, int32_t maxIter ) {
	double outTerms[ 2 ];
	double delta;
	double C;
	double D;
	double f;
	double m;

	m = 0.0;
	ibetaFraction2t( a, b, x, &m, y, outTerms );
	f = outTerms[ 1 ];
	if ( f == 0.0 ) {
		f = STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL;
	}
	C = f;
	D = 0.0;
	do {
		ibetaFraction2t( a, b, x, &m, y, outTerms );
		D = outTerms[ 1 ] + ( outTerms[ 0 ] * D );
		if ( D == 0.0 ) {
			D = STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL;
		}
		C = outTerms[ 1 ] + ( outTerms[ 0 ] / C );
		if ( C == 0.0 ) {
			C = STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL;
		}
		D = 1.0 / D;
		delta = C * D;
		f *= delta;
	} while ( ( stdlib_base_abs( delta - 1.0 ) > tol ) && --maxIter );
	return f;
}

/**
* Computes the leading power terms in the incomplete beta function.
*
* When normalized,
*
* ```tex
* \frac{ x^a y^b }{ \operatorname{Beta}(a,b) }
* ```
*
* and otherwise
*
* ```tex
* x^a y^b
* ```
*
* ## Notes
*
* -   Almost all of the error in the incomplete beta comes from this function, particularly when \\( a \\) and \\( b \\) are large. Computing large powers are _hard_ though, and using logarithms just leads to horrendous cancellation errors.
*
* -   For \\( l1 * l2 > 0 \\) or \\( \operatorname{min}( a, b ) < 1 \\), the two power terms both go in the same direction (toward zero or toward infinity). In this case if either term overflows or underflows, then the product of the two must do so also. Alternatively, if one exponent is less than one, then we can't productively use it to eliminate overflow or underflow from the other term.  Problems with spurious overflow/underflow can't be ruled out. In this case, but it is _very_ unlikely since one of the power terms will evaluate to a number close to 1.
*
* -   If \\( \max( \abs(l1), \abs(l2) ) < 0.5 \\), both exponents are near one and both the exponents are greater than one, and, further, these two power terms tend in opposite directions (one toward zero, the other toward infinity), so we have to combine the terms to avoid any risk of overflow or underflow. We do this by moving one power term inside the other, we have:
*
*     ```tex
*     (1 + l_1)^a \cdot (1 + l_2)^b \\
*     = ((1 + l_1) \cdot (1 + l_2)^(b/a))^a \\
*     = (1 + l_1 + l_3 + l_1*l_3)^a
*     ```
*
*     and
*
*     ```tex
*     l_3 = (1 + l_2)^(b/a) - 1 \\
*     = \exp((b/a) * \ln(1 + l_2)) - 1
*     ```
*
*     The tricky bit is deciding which term to move inside. By preference, we move the larger term inside, so that the size of the largest exponent is reduced.  However, that can only be done as long as l3 (see above) is also small.
*
* @param a    			function parameter
* @param b    			function parameter
* @param x    			function parameter
* @param y    			probability equal to `1-x`
* @param normalized    	boolean indicating whether to evaluate the power terms of the regularized or non-regularized incomplete beta function
* @return     			power terms
*/
static double ibetaPowerTerms( const double a, const double b, const double x, const double y, const bool normalized ) {
	double result;
	double smallA;
	double ratio;
	double agh;
	double bgh;
	double cgh;
	double l1;
	double l2;
	double l3;
	double p1;
	double b1;
	double b2;
	double c;
	double l;

	if ( !normalized ) {
		// Can we do better here?
		return stdlib_base_pow( x, a ) * stdlib_base_pow( y, b );
	}
	c = a + b;
	// Combine power terms with Lanczos approximation:
	agh = a + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
	bgh = b + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
	cgh = c + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
	result = stdlib_base_gamma_lanczos_sum_expg_scaled( c );
	result /= stdlib_base_gamma_lanczos_sum_expg_scaled( a ) * stdlib_base_gamma_lanczos_sum_expg_scaled( b );
	// Combine with the leftover terms from the Lanczos approximation:
	result *= stdlib_base_sqrt( bgh / STDLIB_CONSTANT_FLOAT64_E );
	result *= stdlib_base_sqrt( agh / cgh );
	// `l1` and `l2` are the base of the exponents minus one:
	l1 = ( ( x * b ) - ( y * agh ) ) / agh;
	l2 = ( ( y * a ) - ( x * bgh ) ) / bgh;
	if ( stdlib_base_minabs( l1, l2 ) < 0.2 ) {
		// When the base of the exponent is very near 1 we get really gross errors unless extra care is taken:
		if ( l1 * l2 > 0 || stdlib_base_min( a, b ) < 1 ) {
			if ( stdlib_base_abs( l1 ) < 0.1 ) {
				result *= stdlib_base_exp( a * stdlib_base_log1p( l1 ) );
			} else {
				result *= stdlib_base_pow( ( x * cgh ) / agh, a );
			}
			if ( stdlib_base_abs( l2 ) < 0.1 ) {
				result *= stdlib_base_exp( b * stdlib_base_log1p( l2 ) );
			} else {
				result *= stdlib_base_pow( ( y * cgh ) / bgh, b );
			}
		} else if ( stdlib_base_maxabs( l1, l2 ) < 0.5 ) {
			smallA = a < b;
			ratio = b / a;
			if ( ( smallA && ( ratio * l2 < 0.1 ) ) || ( !smallA && ( l1 / ratio > 0.1 ) ) ) {
				l3 = stdlib_base_expm1( ratio * stdlib_base_log1p( l2 ) );
				l3 = l1 + l3 + ( l3 * l1 );
				l3 = a * stdlib_base_log1p( l3 );
				result *= stdlib_base_exp( l3 );
			} else {
				l3 = stdlib_base_expm1( stdlib_base_log1p( l1 ) / ratio );
				l3 = l2 + l3 + ( l3 * l2 );
				l3 = b * stdlib_base_log1p( l3 );
				result *= stdlib_base_exp( l3 );
			}
		} else if ( stdlib_base_abs( l1 ) < stdlib_base_abs( l2 ) ) {
			// First base near 1 only:
			l = ( a * stdlib_base_log1p( l1 ) ) + ( b * stdlib_base_ln( ( y * cgh ) / bgh ) );
			if ( l <= STDLIB_CONSTANT_FLOAT64_MIN_LN || l >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
				l += stdlib_base_ln( result );
				if ( l >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
					return STDLIB_CONSTANT_FLOAT64_NAN;
				}
				result = stdlib_base_exp( l );
			} else {
				result *= stdlib_base_exp( l );
			}
		} else {
			// Second base near 1 only:
			l = ( b * stdlib_base_log1p( l2 ) ) + ( a * stdlib_base_ln( ( x * cgh ) / agh ) );
			if ( l <= STDLIB_CONSTANT_FLOAT64_MIN_LN || l >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
				l += stdlib_base_ln( result );
				if ( l >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
					return STDLIB_CONSTANT_FLOAT64_NAN;
				}
				result = stdlib_base_exp( l );
			} else {
				result *= stdlib_base_exp( l );
			}
		}
	} else {
		// General case:
		b1 = ( x * cgh ) / agh;
		b2 = ( y * cgh ) / bgh;
		l1 = a * stdlib_base_ln( b1 );
		l2 = b * stdlib_base_ln( b2 );
		if ( l1 >= STDLIB_CONSTANT_FLOAT64_MAX_LN || l1 <= STDLIB_CONSTANT_FLOAT64_MIN_LN || l2 >= STDLIB_CONSTANT_FLOAT64_MAX_LN || l2 <= STDLIB_CONSTANT_FLOAT64_MIN_LN ) {
			// Oops, under/overflow, sidestep if we can:
			if ( a < b ) {
				p1 = stdlib_base_pow( b2, b / a );
				l3 = a * ( stdlib_base_ln( b1 ) + stdlib_base_ln( p1 ) );
				if ( l3 < STDLIB_CONSTANT_FLOAT64_MAX_LN && l3 > STDLIB_CONSTANT_FLOAT64_MIN_LN ) {
					result *= stdlib_base_pow( p1 * b1, a );
				} else {
					l2 += l1 + stdlib_base_ln( result );
					if ( l2 >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
						return STDLIB_CONSTANT_FLOAT64_NAN;
					}
					result = stdlib_base_exp( l2 );
				}
			} else {
				p1 = stdlib_base_pow( b1, a / b );
				l3 = ( stdlib_base_ln( p1 ) + stdlib_base_ln( b2 ) ) * b;
				if ( l3 < STDLIB_CONSTANT_FLOAT64_MAX_LN && l3 > STDLIB_CONSTANT_FLOAT64_MIN_LN ) {
					result *= stdlib_base_pow( p1 * b2, b );
				} else {
					l2 += l1 + stdlib_base_ln( result );
					if ( l2 >= STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
						return STDLIB_CONSTANT_FLOAT64_NAN;
					}
					result = stdlib_base_exp( l2 );
				}
			}
		} else {
			// Finally the normal case:
			result *= stdlib_base_pow( b1, a ) * stdlib_base_pow( b2, b );
		}
	}
	return result;
}

/**
* Evaluates the incomplete beta via the continued fraction representation.
*
* @param a    			function parameter
* @param b    			function parameter
* @param x    			function parameter
* @param y    			probability equal to `1-x`
* @param normalized    	boolean indicating whether to evaluate the power terms of the regularized or non-regularized incomplete beta function
* @param out    		destination pointer for storing the derivative term
* @return     			incomplete beta value
*/
static double ibetaFraction2( const double a, const double b, const double x, const double y, const bool normalized, double *out ) {
	double result;
	double fract;

	result = ibetaPowerTerms( a, b, x, y, normalized );
	if ( out ) {
		*out = result;
	}
	if ( result == 0.0 ) {
		return result;
	}
	fract = ibetaFraction2CF( a, b, x, y, STDLIB_CONSTANT_FLOAT64_EPS, 1000 );
	return result / fract;
}

/**
* This is DiDonato and Morris's BGRAT routine, see Eq's 9 through 9.6.
*
* @param a    			function parameter
* @param b    			function parameter
* @param x    			function parameter
* @param y    			probability equal to `1-x`
* @param s0    			initial value
* @param mult   		initial value
* @param normalized    	boolean indicating whether to evaluate the regularized or non-regularized incomplete beta function
* @return     			function value
*/
static double betaSmallBLargeASeries( const double a, const double b, const double x, const double y, const double s0, const double mult, const bool normalized ) {
	double p[ 30 ];
	double prefix;
	double tmp1;
	double tnp1;
	double sum;
	double b2n;
	double bm1;
	double lx2;
	double lxp;
	double mbn;
	double lx;
	double t4;
	int32_t m;
	int32_t n;
	double h;
	double j;
	double r;
	double t;
	double u;

	// Some values we'll need later, these are Eq 9.1:
	bm1 = b - 1.0;
	t = a + ( bm1 / 2.0 );
	if ( y < 0.35 ) {
		lx = stdlib_base_log1p( -y );
	} else {
		lx = stdlib_base_ln( x );
	}
	u = -t * lx;
	// And from 9.2:
	h = regularizedGammaPrefix( b, u );
	if ( h <= STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL ) {
		return s0;
	}
	if ( normalized ) {
		prefix = h / stdlib_base_gamma_delta_ratio( a, b );
		prefix /= stdlib_base_pow( t, b );
	} else {
		prefix = fullIGammaPrefix( b, u ) / stdlib_base_pow( t, b );
	}
	prefix *= mult;
	// We need the quantity Pn. Unfortunately, this is computed recursively and requires a full history of all the previous values. No choice but to declare a big table and hope it's big enough...
	p[ 0 ] = 1;  // see 9.3.
	// Now an initial value for J, see 9.6: gammainc( u, b, regularized, upper )
	j = stdlib_base_gammainc( u, b, true, true );
	j /= h;
	// Now we can start to pull things together and evaluate the sum in Eq 9:
	sum = s0 + ( prefix * j ); // Value at N = 0
	// Some variables we'll need...
	tnp1 = 1.0; // 2*N+1
	lx2 = lx / 2.0;
	lx2 *= lx2;
	lxp = 1.0;
	t4 = 4.0 * t * t;
	b2n = b;
	for ( n = 1; n < 30; ++n ) {
		// Begin by evaluating the next Pn from Eq 9.4:
		tnp1 += 2.0;
		p[ n ] = 0.0;
		tmp1 = 3;
		for ( m = 1; m < n; ++m ) {
			mbn = ( m * b ) - n;
			p[ n ] += mbn * p[ n - m ] / stdlib_base_factorial( tmp1 );
			tmp1 += 2;
		}
		p[ n ] /= n;
		p[ n ] += bm1 / stdlib_base_factorial( tnp1 );
		// Now we want Jn from Jn-1 using Eq 9.6:
		j = ( ( b2n * ( b2n + 1.0 ) * j ) + ( ( u + b2n + 1.0 ) * lxp ) ) / t4;
		lxp *= lx2;
		b2n += 2.0;
		// Pull it together with Eq 9:
		r = prefix * p[ n ] * j;
		sum += r;
		if ( r > 1.0 ) {
			if ( stdlib_base_abs( r ) < stdlib_base_abs( STDLIB_CONSTANT_FLOAT64_EPS * sum ) ) {
				break;
			}
		} else if ( stdlib_base_abs( r / STDLIB_CONSTANT_FLOAT64_EPS ) < stdlib_base_abs( sum ) ) {
			break;
		}
	}
	return sum;
}

/**
* Computes the difference between `ibeta(a,b,x)` and `ibeta(a+k,b,x)`.
*
* @param a    			function parameter
* @param b    			function parameter
* @param x    			function parameter
* @param y    			probability equal to `1-x`
* @param k    			function input
* @param normalized		boolean indicating whether to evaluate the power terms of the regularized or non-regularized incomplete beta function
* @param out			destination pointer for storing the derivative term
* @return     			difference between ibeta(a,b,x) and ibeta(a+k,b,x)
*/
static double ibetaAStep( const double a, const double b, const double x, const double y, const double k, const bool normalized, double *out ) {
	double prefix;
	double term;
	double sum;
	double i;

	prefix = ibetaPowerTerms( a, b, x, y, normalized );
	if ( out ) {
		*out = prefix;
	}
	prefix /= a;
	if ( prefix == 0.0 ) {
		return prefix;
	}
	sum = 1.0;
	term = 1.0;
	// Series summation from 0 to k-1:
	for ( i = 0; i < k - 1; ++i ) {
		term *= ( a + b + i ) * x / ( a + i + 1.0 );
		sum += term;
	}
	prefix *= sum;
	return prefix;
}

/**
* Computes the delta in `beta(a,b,x) = prefix + delta * beta(a+k,b,x)`.
*
* ## Notes
*
* Specifically, the function calculates
*
* ```tex
* \frac{ (a)(a+1)(a+2)...(a+k-1) }{ (b)(b+1)(b+2)...(b+k-1) }
* ```
*
* The function should only called with small `k`; for large `k`, it is grossly inefficient.
*
* @param a    input value
* @param b    input value
* @param k    input value
* @return     ratio value
*/
static double risingFactorialRatio( const double a, const double b, const double k ) {
	double result;
	double i;

	if ( k == 0 ) {
		return 1.0;
	}
	result = 1.0;
	for ( i = 0; i < k; i++ ) {
		result *= ( a + i ) / ( b + i );
	}
	return result;
}

/**
* Calculates the next term of the incomplete beta series.
*
* @param a         pointer to function parameter
* @param x         function parameter
* @param poch      pointer to Pochhammer term
* @param n         pointer to term counter
* @param result    pointer to current result value
* @return          series expansion term
*/
static double ibetaSeriesT( double *a, const double x, double *poch, int32_t *n, double *result ) {
	double r;

	r = ( *result ) / ( *a );
	*a += 1.0;
	*result *= ( *poch ) * x / (double)( *n );
	*n += 1;
	*poch += 1.0;
	return r;
}

/**
* For integer arguments we can relate the incomplete beta to the complement of the binomial distribution cdf and use this finite sum.
*
* @param n    number of trials
* @param k    function input
* @param x    function input
* @param y    probability equal to `1-x`
* @return     sum
*/
static double binomialCCDF( const double n, const double k, const double x, const double y ) {
	double startTerm;
	double result;
	double start;
	double term;
	double i;

	result = stdlib_base_pow( x, n );
	if ( result > STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL ) {
		term = result;
		for ( i = stdlib_base_floor( n - 1 ); i > k; i-- ) {
			term *= ( ( i + 1 ) * y ) / ( ( n - i ) * x );
			result += term;
		}
	} else {
		// First term underflows so we need to start at the mode of the distribution and work outwards:
		start = stdlib_base_floor( n * x );
		if ( start <= k + 1 ) {
			start = stdlib_base_floor( k + 2 );
		}
		result = stdlib_base_pow( x, start ) * stdlib_base_pow( y, n - start );
		result *= stdlib_base_binomcoef( stdlib_base_floor( n ), stdlib_base_floor( start ) );
		if ( result == 0.0 ) {
			// OK, starting slightly above the mode didn't work, we'll have to sum the terms the old fashioned way:
			for ( i = start - 1; i > k; i-- ) {
				result += stdlib_base_pow( x, i ) * stdlib_base_pow( y, n - i );
				result *= stdlib_base_binomcoef( stdlib_base_floor( n ), stdlib_base_floor( i ) );
			}
		} else {
			term = result;
			startTerm = result;
			for ( i = start - 1; i > k; i-- ) {
				term *= ( ( i + 1 ) * y ) / ( ( n - i ) * x );
				result += term;
			}
			term = startTerm;
			for ( i = start + 1; i <= n; i++ ) {
				term *= ( n - i + 1 ) * x / ( i * y );
				result += term;
			}
		}
	}
	return result;
}

/**
* Incomplete beta series.
*
* @param a    			function parameter
* @param b    			function parameter
* @param x    			function parameter
* @param s0    			initial value
* @param normalized    	boolean indicating whether to evaluate the power terms of the regularized or non-regularized incomplete beta function
* @param out    		destination for storing the derivative term
* @param y    			probability equal to `1-x`
* @return     			function value
*/
static double ibetaSeries( const double a, const double b, const double x, const double s0, const bool normalized, double *out, const double y ) {
	int32_t counter;
	double result;
	double poch;
	double agh;
	double bgh;
	double cgh;
	double sum;
	double ac;
	int32_t n;
	double l1;
	double l2;
	double c;
	double r;

	if ( normalized ) {
		c = a + b;
		// Incomplete beta power term, combined with the Lanczos approximation:
		agh = a + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
		bgh = b + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
		cgh = c + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
		result = stdlib_base_gamma_lanczos_sum_expg_scaled( c ) / ( stdlib_base_gamma_lanczos_sum_expg_scaled( a ) * stdlib_base_gamma_lanczos_sum_expg_scaled( b ) );
		l1 = stdlib_base_ln( cgh / bgh ) * ( b - 0.5 );
		l2 = stdlib_base_ln( x * cgh / agh ) * a;
		// Check for over/underflow in the power terms:
		if ( l1 > STDLIB_CONSTANT_FLOAT64_MIN_LN && l1 < STDLIB_CONSTANT_FLOAT64_MAX_LN && l2 > STDLIB_CONSTANT_FLOAT64_MIN_LN && l2 < STDLIB_CONSTANT_FLOAT64_MAX_LN ) {
			if ( a * b < bgh * 10.0 ) {
				result *= stdlib_base_exp( ( b - 0.5 ) * stdlib_base_log1p( a / bgh ) );
			} else {
				result *= stdlib_base_pow( cgh / bgh, b - 0.5 );
			}
			result *= stdlib_base_pow( x * cgh / agh, a );
			result *= stdlib_base_sqrt( agh / STDLIB_CONSTANT_FLOAT64_E );
			if ( out ) {
				*out = result * stdlib_base_pow( y, b );
			}
		} else {
			// We need logs, and this *will* cancel:
			result = stdlib_base_ln( result ) + l1 + l2 + ( ( stdlib_base_ln( agh ) - 1.0 ) / 2.0 );
			if ( out ) {
				*out = stdlib_base_exp( result + ( b * stdlib_base_ln( y ) ) );
			}
			result = stdlib_base_exp( result );
		}
	} else {
		// Non-normalized, just compute the power:
		result = stdlib_base_pow( x, a );
	}
	if ( result < STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL ) {
		return s0; // Safeguard: series can't cope with denorms.
	}
	poch = 1.0 - b;
	ac = a;
	n = 1;
	counter = 100;
	sum = s0;
	do {
		r = ibetaSeriesT( &ac, x, &poch, &n, &result );
		sum += r;
	} while ( ( stdlib_base_abs( STDLIB_CONSTANT_FLOAT64_EPS * sum ) < stdlib_base_abs( r ) ) && --counter );
	return sum;
}

/**
* Evaluates the incomplete beta function and its first derivative.
*
* @param x              function input
* @param a              function parameter
* @param b              function parameter
* @param regularized    boolean indicating if the function should evaluate the regularized incomplete beta function
* @param upper          boolean indicating if the function should return the upper tail of the incomplete beta function
* @param out            destination pointer to store the function value
* @param derivative     destination pointer to store the first derivative
*
* @example
* double out;
* double derivative;
*
* stdlib_base_kernel_betainc( 0.2, 1.0, 2.0, true, false, &out, &derivative );
*/
void stdlib_base_kernel_betainc( double x, double a, double b, const bool regularized, const bool upper, double *out, double *derivative ) {
	double lambda;
	double prefix;
	double fract;
	bool invert;
	double bbar;
	double div;
	double tmp;
	double k;
	double n;
	double p;
	double y;

	invert = upper;
	y = 1.0 - x;
	// Derivative not set...
	*derivative = -1;
	if ( stdlib_base_is_nan( x ) || x < 0.0 || x > 1.0 ) {
		*out = STDLIB_CONSTANT_FLOAT64_NAN;
		*derivative = STDLIB_CONSTANT_FLOAT64_NAN;
		return;
	}
	if ( regularized ) {
		if ( a < 0.0 || b < 0.0 ) {
			*out = STDLIB_CONSTANT_FLOAT64_NAN;
			*derivative = STDLIB_CONSTANT_FLOAT64_NAN;
			return;
		}
		// Extend to a few very special cases...
		if ( a == 0.0 ) {
			if ( b == 0.0 ) {
				*out = STDLIB_CONSTANT_FLOAT64_NAN;
				*derivative = STDLIB_CONSTANT_FLOAT64_NAN;
				return;
			}
			if ( b > 0.0 ) {
				*out = ( invert ) ? 0.0 : 1.0;
				return;
			}
		} else if ( b == 0.0 ) {
			if ( a > 0.0 ) {
				*out = ( invert ) ? 1.0 : 0.0;
				return;
			}
		}
	} else if ( a <= 0.0 || b <= 0.0 ) {
		*out = STDLIB_CONSTANT_FLOAT64_NAN;
		*derivative = STDLIB_CONSTANT_FLOAT64_NAN;
		return;
	}
	if ( x == 0.0 ) {
		if ( a == 1.0 ) {
			*derivative = 1.0;
		} else {
			*derivative = ( a < 1.0 ) ? STDLIB_CONSTANT_FLOAT64_MAX / 2.0 : STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL * 2.0;
		}
		if ( invert ) {
			*out = ( regularized ) ? 1.0 : stdlib_base_beta( a, b );
			return;
		}
		*out = 0.0;
		return;
	}
	if ( x == 1.0 ) {
		if ( b == 1.0 ) {
			*derivative = 1.0;
		} else {
			*derivative = ( b < 1.0 ) ? STDLIB_CONSTANT_FLOAT64_MAX / 2.0 : STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL * 2.0;
		}
		if ( invert ) {
			*out = 0.0;
		} else {
			*out = ( regularized ) ? 1.0 : stdlib_base_beta( a, b );
		}
		return;
	}
	if ( a == 0.5 && b == 0.5 ) {
		*derivative = ONE_OVER_PI * stdlib_base_sqrt( y * x );
		// We have an arcsine distribution:
		p = ( invert ) ? stdlib_base_asin( stdlib_base_sqrt( y ) ) : stdlib_base_asin( stdlib_base_sqrt( x ) );
		p /= STDLIB_CONSTANT_FLOAT64_HALF_PI;
		if ( !regularized ) {
			p *= STDLIB_CONSTANT_FLOAT64_PI;
		}
		*out = p;
		return;
	}
	if ( a == 1.0 ) {
		tmp = b;
		b = a;
		a = tmp;
		tmp = y;
		y = x;
		x = tmp;
		invert = !invert;
	}
	if ( b == 1.0 ) {
		// Special case see: http://functions.wolfram.com/GammaBetaErf/BetaRegularized/03/01/01/
		if ( a == 1.0 ) {
			*out = ( invert ) ? y : x;
			*derivative = 1.0;
			return;
		}
		*derivative = a * stdlib_base_pow( x, a - 1.0 );
		if ( y < 0.5 ) {
			p = ( invert ) ? -stdlib_base_expm1( a * stdlib_base_log1p( -y ) ) : stdlib_base_exp( a * stdlib_base_log1p( -y ) );
		} else {
			p = ( invert ) ? -stdlib_base_powm1( x, a ) : stdlib_base_pow( x, a );
		}
		if ( !regularized ) {
			p /= a;
		}
		*out = p;
		return;
	}
	if ( stdlib_base_min( a, b ) <= 1.0 ) {
		if ( x > 0.5 ) {
			tmp = b;
			b = a;
			a = tmp;
			tmp = y;
			y = x;
			x = tmp;
			invert = !invert;
		}
		if ( stdlib_base_max( a, b ) <= 1.0 ) {
			// Both a,b < 1:
			if ( ( a >= stdlib_base_min( 0.2, b ) ) || ( stdlib_base_pow( x, a ) <= 0.9 ) ) {
				if ( invert ) {
					fract = -( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) );
					invert = false;
					fract = -ibetaSeries( a, b, x, fract, regularized, derivative, y );
				} else {
					fract = ibetaSeries( a, b, x, 0, regularized, derivative, y );
				}
			} else {
				tmp = b;
				b = a;
				a = tmp;
				tmp = y;
				y = x;
				x = tmp;
				invert = !invert;
				if ( y >= 0.3 ) {
					if ( invert ) {
						fract = -( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) );
						invert = false;
						fract = -ibetaSeries( a, b, x, fract, regularized, derivative, y );
					} else {
						fract = ibetaSeries( a, b, x, 0, regularized, derivative, y );
					}
				} else {
					// Sidestep on a, and then use the series representation:
					if ( regularized ) {
						prefix = 1;
					} else {
						prefix = risingFactorialRatio( a + b, a, 20 );
					}
					fract = ibetaAStep( a, b, x, y, 20, regularized, derivative );
					if ( invert ) {
						fract -= ( ( regularized ) ? 1 : stdlib_base_beta( a, b ) );
						invert = false;
						fract = -betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized );
					} else {
						fract = betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized );
					}
				}
			}
		} else if ( b <= 1.0 || ( x < 0.1 && ( stdlib_base_pow( b * x, a ) <= 0.7 ) ) ) {
			if ( invert ) {
				fract = -( ( regularized ) ? 1 : stdlib_base_beta( a, b ) );
				invert = false;
				fract = -ibetaSeries( a, b, x, fract, regularized, derivative, y );
			} else {
				fract = ibetaSeries( a, b, x, 0.0, regularized, derivative, y );
			}
		} else {
			tmp = b;
			b = a;
			a = tmp;
			tmp = y;
			y = x;
			x = tmp;
			invert = !invert;
			if ( y >= 0.3 ) {
				if ( invert ) {
					fract = -( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) );
					invert = false;
					fract = -ibetaSeries( a, b, x, fract, regularized, derivative, y );
				} else {
					fract = ibetaSeries( a, b, x, 0.0, regularized, derivative, y );
				}
			} else if ( a >= 15.0 ) {
				if ( invert ) {
					fract = -( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) );
					invert = false;
					fract = -betaSmallBLargeASeries( a, b, x, y, fract, 1.0, regularized );
				} else {
					fract = betaSmallBLargeASeries( a, b, x, y, 0.0, 1.0, regularized );
				}
			} else {
				if ( regularized ) {
					prefix = 1;
				} else {
					// Sidestep to improve errors:
					prefix = risingFactorialRatio( a + b, a, 20.0 );
				}
				fract = ibetaAStep( a, b, x, y, 20.0, regularized, derivative );
				if ( invert ) {
					fract -= ( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) );
					invert = false;
					fract = -betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized );
				} else {
					fract = betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized );
				}
			}
		}
	} else {
		// Both a,b >= 1:
		if ( a < b ) {
			lambda = a - ( ( a + b ) * x );
		} else {
			lambda = ( ( a + b ) * y ) - b;
		}
		if ( lambda < 0.0 ) {
			tmp = b;
			b = a;
			a = tmp;
			tmp = y;
			y = x;
			x = tmp;
			invert = !invert;
		}
		if ( b < 40.0 ) {
			if ( stdlib_base_floor( a ) == a && stdlib_base_floor( b ) == b && a < STDLIB_CONSTANT_INT32_MAX - 100 ) {
				// Relate to the binomial distribution and use a finite sum:
				k = a - 1.0;
				n = b + k;
				fract = binomialCCDF( n, k, x, y );
				if ( !regularized ) {
					fract *= stdlib_base_beta( a, b );
				}
			} else if ( b * x <= 0.7 ) {
				if ( invert ) {
					fract = -( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) );
					invert = false;
					fract = -ibetaSeries( a, b, x, fract, regularized, derivative, y );
				} else {
					fract = ibetaSeries( a, b, x, 0.0, regularized, derivative, y );
				}
			} else if ( a > 15.0 ) {
				// Sidestep so we can use the series representation:
				n = stdlib_base_floor( b );
				if ( n == b ) {
					n -= 1;
				}
				bbar = b - n;
				if ( regularized ) {
					prefix = 1;
				} else {
					prefix = risingFactorialRatio( a + bbar, bbar, n );
				}
				fract = ibetaAStep( bbar, a, y, x, n, regularized, NULL );
				fract = betaSmallBLargeASeries( a, bbar, x, y, fract, 1.0, regularized );
				fract /= prefix;
			} else if ( regularized ) {
				n = stdlib_base_floor( b );
				bbar = b - n;
				if ( bbar <= 0 ) {
					n -= 1;
					bbar += 1;
				}
				fract = ibetaAStep( bbar, a, y, x, n, regularized, NULL );
				fract += ibetaAStep( a, bbar, x, y, 20.0, regularized, NULL );
				if ( invert ) {
					fract -= 1;
				}
				fract = betaSmallBLargeASeries( a + 20.0, bbar, x, y, fract, 1, regularized );
				if ( invert ) {
					fract = -fract;
					invert = false;
				}
			} else {
				fract = ibetaFraction2( a, b, x, y, regularized, derivative );
			}
		} else {
			fract = ibetaFraction2( a, b, x, y, regularized, derivative );
		}
	}
	if ( *derivative < 0.0 ) {
		*derivative = ibetaPowerTerms( a, b, x, y, true );
	}
	div = y * x;
	if ( *derivative != 0.0 ) {
		if ( STDLIB_CONSTANT_FLOAT64_MAX * div < *derivative ) {
			// Overflow, return an arbitrarily large value:
			*derivative = STDLIB_CONSTANT_FLOAT64_MAX / 2.0;
		} else {
			*derivative /= div;
		}
	}
	*out = ( invert ) ? ( ( regularized ) ? 1.0 : stdlib_base_beta( a, b ) ) - fract : fract;
	return;
}
