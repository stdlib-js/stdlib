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
* The original C code and copyright notice are from the [Cephes Mathematical Library]{@link https://www.netlib.org/cephes/}. The implementation has been modified according to stdlib conventions.
*
* ```text
* (C) Copyright Stephen L. Moshier 1984, 1987, 1992, 2000.
*
* Use, modification and distribution are subject to the
* Cephes Mathematical Library License. (See accompanying file
* LICENSE or copy at https://smath.com/en-US/view/CephesMathLibrary/license)
* ```
*/

#include "stdlib/math/base/special/hyp2f1.h"
#include "stdlib/math/base/special/gammasgn.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/nan.h"
#include <stdbool.h>
#include <stdint.h>

static const double MACHEP = 1.11022302462515654042e-16;
static const double EPS = 1.0e-13;
static const double ETHRESH = 1.0e-12;
static const double MAX_ITERATIONS = 10000.0;

static double hys2f1( double a, double b, const double c, const double x, double *loss );

/**
* Tests if a finite double-precision floating-point number is a "close enough" integer.
*
* @param x      input value
* @return       boolean indicating whether the value is a "close enough" integer
*/
static bool isInteger( const double x ) {
	double diff;
	double ix;

	ix = stdlib_base_round( x );
	diff = stdlib_base_abs( x - ix );
	return ( diff < EPS );
}

/**
* Tests if a finite double-precision floating-point number is a "close enough" nonpositive integer.
*
* @param x      input value
* @return       boolean indicating whether the value is a "close enough" nonpositive integer
*/
static bool isNonPositiveInteger( const double x ) {
	double diff;
	double ix;

	ix = stdlib_base_round( x );
	diff = stdlib_base_abs( x - ix );
	return ( ( ix <= 0.0 ) && ( diff < EPS ) );
}

/**
* Evaluates the Gaussian hypergeometric function by two-term recurrence in `a`.
*
* ## Notes
*
* -   This function helps prevent losing accuracy in the highly alternating hypergeometric series and allows a and b to be reduced to smaller values.
*
* ## References
*
* -   AMS55 #15.2.10
*
* @param a        input value
* @param b        input value
* @param c        input value
* @param x        input value
* @param loss     starting loss of significance
* @return         function value
*/
static double hyp2f1ra( const double a, const double b, const double c, const double x, double *loss ) {
	double err;
	double da;
	double f2;
	double f1;
	double f0;
	double t;
	double n;

	*loss = 0.0;
	err = 0.0;

	if ( ( c < 0.0 && a <= c ) || ( c >= 0.0 && a >= c ) ) {
		da = stdlib_base_round( a-c );
	} else {
		da = stdlib_base_round( a );
	}

	t = a - da;
	if ( stdlib_base_abs( da ) > MAX_ITERATIONS ) {
		// Too expensive to compute, so return `NaN`:
		*loss = 1.0;
		return STDLIB_CONSTANT_FLOAT64_NAN;
	}

	if ( da < 0.0 ) {
		// Backward recurrence...
		f1 = hys2f1( t, b, c, x, &err );
		*loss += err;
		f0 = hys2f1( t-1.0, b, c, x, &err );
		*loss += err;
		t -= 1.0;
		for ( n = 1; n < -da; n++ ) {
			f2 = f1;
			f1 = f0;

			// eslint-disable-next-line max-len
			f0 = -( ( ( ( (2.0*t)-c )-( t*x )+( b*x ) ) * f1 ) + ( ( t*(x-1.0) ) * f2 ) ) / ( c-t );
			t -= 1.0;
		}
	} else {
		// Forward recurrence...
		f1 = hys2f1( t, b, c, x, &err );
		*loss += err;
		f0 = hys2f1( t+1.0, b, c, x, &err );
		*loss += err;
		t += 1.0;
		for ( n = 1; n < da; n++ ) {
			f2 = f1;
			f1 = f0;

			// eslint-disable-next-line max-len
			f0 = -( ( ( ( (2.0*t)-c )-( t*x )+( b*x ) ) * f1 ) + ( (c-t)*f2 ) ) / ( t*(x-1.0) );
			t += 1.0;
		}
	}
	return f0;
}

/**
* Evaluates the power series expansion of Gaussian hypergeometric function.
*
* @param a        input value
* @param b        input value
* @param c        input value
* @param x        input value
* @param loss     starting loss of significance
* @return         function value
*/
static double hys2f1( double a, double b, const double c, const double x, double *loss ) {
	double intFlag;
	double umax;
	double f;
	double g;
	double h;
	double k;
	double m;
	double s;
	double u;
	double i;

	intFlag = 0.0;

	if ( stdlib_base_abs( b ) > stdlib_base_abs( a ) ) {
		f = b;
		b = a;
		a = f;
	}

	if ( isNonPositiveInteger( b ) && ( stdlib_base_abs( b ) < stdlib_base_abs( a ) ) ) {
		f = b;
		b = a;
		a = f;
		intFlag = 1.0;
	}

	// eslint-disable-next-line max-len
	if ( ( ( stdlib_base_abs( a ) > stdlib_base_abs( c ) + 1.0 ) || intFlag ) && ( stdlib_base_abs( c-a ) > 2.0 ) && ( stdlib_base_abs( a ) > 2.0 ) ) {
		return hyp2f1ra( a, b, c, x, loss );
	}

	i = 0.0;
	umax = 0.0;
	f = a;
	g = b;
	h = c;
	s = 1.0;
	u = 1.0;
	k = 0.0;

	do {
		if ( stdlib_base_abs( h ) < EPS ) {
			*loss = 1.0;
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		m = k + 1.0;
		u *= ( ( f+k ) * ( g+k ) * x / ( ( h+k ) * m ) );
		s += u;
		k = stdlib_base_abs( u );
		if ( k > umax ) {
			umax = k;
		}
		k = m;
		i += 1.0;
		if ( i > MAX_ITERATIONS ) {
			*loss = 1.0;
			return s;
		}
	} while ( s == 0.0 || stdlib_base_abs( u/s ) > MACHEP );

	// Estimate the relative error due to truncation by the series:
	*loss = ( ( MACHEP*umax ) / stdlib_base_abs( s ) ) + ( MACHEP*i );
	return s;
}

/**
* Applies transformations for `|x|` near unity before performing a power series expansion.
*
* @param a        input value
* @param b        input value
* @param c        input value
* @param x        input value
* @param loss     starting loss of significance
* @return         function value
*/
static double hyt2f1( const double a, const double b, const double c, const double x, double *loss ) {
	double negIntA;
	double negIntB;
	double sign;
	double err1;
	double err;
	double aid;
	double ax;
	double id;
	double d1;
	double d2;
	double y1;
	double i;
	double p;
	double q;
	double r;
	double t;
	double y;
	double w;
	double d;
	double e;
	double s;

	negIntA = isNonPositiveInteger( a );
	negIntB = isNonPositiveInteger( b );
	err = 0.0;
	err1 = 0.0;
	s = 1.0 - x;

	if ( x < -0.5 && !( negIntA || negIntB ) ) {
		if ( b > a ) {
			// Transformation based on AMS55 #15.3.4:
			y = stdlib_base_pow( s, -a ) * hys2f1( a, c-b, c, -x/s, &err );
		} else {
			// Transformation based on AMS55 #15.3.5:
			y = stdlib_base_pow( s, -b ) * hys2f1( c-a, b, c, -x/s, &err );
		}
		*loss = err;
		return y;
	}

	d = c - a - b;
	id = stdlib_base_round( d );

	if ( x > 0.9 && !negIntA && !negIntB ) {
		if ( isInteger( d ) == false ) {
			// Try the power series first:
			y = hys2f1( a, b, c, x, &err );
			if ( err < ETHRESH ) {
				*loss = err;
				return y;
			}
			// If the power series fails, then apply AMS55 #15.3.6...
			q = hys2f1( a, b, 1.0-d, s, &err );
			sign = 1.0;
			w = stdlib_base_gammaln( d );
			sign *= stdlib_base_gammasgn( d );
			w -= stdlib_base_gammaln( c-a );
			sign *= stdlib_base_gammasgn( c-a );
			w -= stdlib_base_gammaln( c-b );
			sign *= stdlib_base_gammasgn( c-b );
			q *= sign * stdlib_base_exp( w );

			r = stdlib_base_pow( s, d ) * hys2f1( c-a, c-b, d+1.0, s, &err1 );
			sign = 1.0;
			w = stdlib_base_gammaln( -d );
			sign *= stdlib_base_gammasgn( -d );
			w -= stdlib_base_gammaln( a );
			sign *= stdlib_base_gammasgn( a );
			w -= stdlib_base_gammaln( b );
			sign *= stdlib_base_gammasgn( b );
			r *= sign * stdlib_base_exp( w );

			y = q + r;
			q = stdlib_base_abs( q );
			r = stdlib_base_abs( r );
			if ( q > r ) {
				r = q;
			}
			err += err1 + ( ( MACHEP*r ) / y );
			y *= stdlib_base_gamma( c );
		} else {
			// Psi function expansion, AMS55 #15.3.10, #15.3.11, #15.3.12...
			if ( id >= 0.0 ) {
				e = d;
				d1 = d;
				d2 = 0.0;
				aid = id;
			} else {
				e = -d;
				d1 = 0.0;
				d2 = d;
				aid = -id;
			}
			ax = stdlib_base_ln( s );

			// eslint-disable-next-line max-len
			y = stdlib_base_digamma( 1.0 ) + stdlib_base_digamma( 1.0+e ) - stdlib_base_digamma( a+d1 ) - stdlib_base_digamma( b+d1 ) - ax;
			y /= stdlib_base_gamma( e+1.0 );
			p = ( a+d1 ) * ( b+d1 ) * s / stdlib_base_gamma( e+2.0 );
			t = 1.0;
			do {
				// eslint-disable-next-line max-len
				r = stdlib_base_digamma( 1.0+t ) + stdlib_base_digamma( 1.0+t+e ) - stdlib_base_digamma( a+t+d1 ) - stdlib_base_digamma( b+t+d1 ) - ax;
				q = p * r;
				y += q;
				p *= s * ( a+t+d1 ) / ( t+1.0 );
				p *= ( b+t+d1 ) / ( t+1.0+e );
				t += 1.0;
				if ( t > MAX_ITERATIONS ) {
					*loss = 1.0;
					return STDLIB_CONSTANT_FLOAT64_NAN;
				}
			} while ( y == 0.0 || stdlib_base_abs( q/y ) > EPS );

			if ( id == 0.0 ) {
				y *= stdlib_base_gamma( c ) / ( stdlib_base_gamma( a ) * stdlib_base_gamma( b ) );
				*loss = err;
				return y;
			}

			y1 = 1.0;
			if ( aid != 1.0 ) {
				t = 0.0;
				p = 1.0;
				for ( i = 1; i < aid; i++ ) {
					r = 1.0 - e + t;
					p *= s * ( a+t+d2 ) * ( b+t+d2 ) / r;
					t += 1.0;
					p /= t;
					y1 += p;
				}
			}

			p = stdlib_base_gamma( c );
			y1 *= stdlib_base_gamma( e ) * p / ( stdlib_base_gamma( a+d1 ) * stdlib_base_gamma( b+d1 ) );
			y *= p / ( stdlib_base_gamma( a+d2 ) * stdlib_base_gamma( b+d2 ) );
			if ( ( (int)aid & 1 ) != 0 ) {
				y = -y;
			}
			q = stdlib_base_pow( s, id );
			y = ( id > 0.0 ) ? y*q : y1*q;
			y += y1;
		}
		*loss = err;
		return y;
	}
	// Perform power series if no special cases:
	y = hys2f1( a, b, c, x, &err );
	*loss = err;
	return y;
}

/**
* Evaluates the Gaussian hypergeometric function.
*
* @param a        input value
* @param b        input value
* @param c        input value
* @param x        input value
* @return         function value
*
* @example
* double v = stdlib_base_gamma( 1.0, 1.0, 1.0, 0.0 );
* // returns 1.0
*/
double stdlib_base_hyp2f1( const double a, const double b, const double c, const double x ) {
	double negIntCaOrCb;
	double negIntC;
	double negIntB;
	double negIntA;
	double isIntD;
	double aid;
	double err;
	double ax;
	double d2;
	double d1;
	double id;
	double ic;
	double ia;
	double ib;
	double t1;
	double y1;
	double y2;
	double q;
	double r;
	double p;
	double e;
	double s;
	double d;
	double y;
	double i;

	err = 0.0;
	s = 1.0 - x;
	d = c - a - b;
	ax = stdlib_base_abs( x );
	ia = stdlib_base_round( a );
	ib = stdlib_base_round( b );
	id = stdlib_base_round( d );
	ic = stdlib_base_round( c );
	negIntA = isNonPositiveInteger( a );
	negIntB = isNonPositiveInteger( b );
	negIntC = isNonPositiveInteger( c );
	isIntD = isInteger( d );
	t1 = stdlib_base_abs( b-a );

	if ( stdlib_base_is_nan( a ) || stdlib_base_is_nan( b ) || stdlib_base_is_nan( c ) || stdlib_base_is_nan( x ) ) {
		return STDLIB_CONSTANT_FLOAT64_NAN;
	}

	if ( x == 0.0 ) {
		return 1.0;
	}

	if ( ( a == 0.0 || b == 0.0 ) && c != 0.0 ) {
		return 1.0;
	}

	// The transformation for c - a or c - b negative integer (AMS55 #15.3.3)...
	if ( d <= -1.0 && !( !isIntD && s < 0.0 ) && !( negIntA || negIntB ) ) {
		return stdlib_base_pow( s, d ) * stdlib_base_hyp2f1( c-a, c-b, c, x );
	}

	// Check whether the series diverges...
	if ( d <= 0.0 && x == 1.0 && !( negIntA || negIntB ) ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}

	if ( ax < 1.0 || x == -1.0 ) {
		if ( b == c ) {
			// 2F1(a,b;b;x) = (1-x)**(-a):
			y = stdlib_base_pow( s, -a );
			return y;
		}
		if ( a == c ) {
			// 2F1(a,b;a;x) = (1-x)**(-b):
			y = stdlib_base_pow( s, -b );
			return y;
		}
	}

	if ( negIntC ) {
		// Check if termination before explosion...
		if ( negIntA && ( ia > ic ) ) {
			y = hyt2f1( a, b, c, x, &err );
			return y;
		}
		if ( negIntB && ( ib > ic ) ) {
			y = hyt2f1( a, b, c, x, &err );
			return y;
		}
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}

	// Check whether the function is a polynomial before trying the power series expansion...
	if ( negIntA || negIntB )	{
		y = hyt2f1( a, b, c, x, &err );
		return y;
	}

	// The following transform has a pole for integer b - a and may cause large cancellation errors near |1/x| = 1 (AMS55 #15.3.7)...
	if ( x < -2.0 && !isInteger( t1 ) ) {
		p = stdlib_base_hyp2f1( a, 1.0-c+a, 1.0-b+a, 1.0/x );
		q = stdlib_base_hyp2f1( b, 1.0-c+b, 1.0-a+b, 1.0/x );
		p *= stdlib_base_pow( -x, -a );
		q *= stdlib_base_pow( -x, -b );
		t1 = stdlib_base_gamma( c );
		s = t1 * stdlib_base_gamma( b-a ) / ( stdlib_base_gamma( b ) * stdlib_base_gamma( c-a ) );
		y = t1 * stdlib_base_gamma( a-b ) / ( stdlib_base_gamma( a ) * stdlib_base_gamma( c-b ) );
		return ( s*p ) + ( y*q );
	}
	if ( x < -1.0 ) {
		// Transformation based on AMS55 #15.3.4...
		if ( stdlib_base_abs( a ) < stdlib_base_abs( b ) ) {
			return stdlib_base_pow( s, -a ) * stdlib_base_hyp2f1( a, c-b, c, x/( x-1.0 ) );
		}
		// Transformation based on AMS55 #15.3.5:
		return stdlib_base_pow( s, -b ) * stdlib_base_hyp2f1( b, c-a, c, x/( x-1.0 ) );
	}

	// The series diverges for `|x|` greater than unity if above checks fail...
	if ( ax > 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}

	p = c - a;
	r = c - b;
	negIntCaOrCb = isNonPositiveInteger( p ) || isNonPositiveInteger( r );

	// If `|x|` is equal to unity, the function is a polynomial...
	if ( ax == 1.0 ) {
		if ( x > 0.0 ) {
			if ( negIntCaOrCb ) {
				if ( d >= 0.0 ) {
					// Transformation based on AMS55 #15.3.3:
					y = stdlib_base_pow( s, d ) * hys2f1( c - a, c - b, c, x, &err );
					return y;
				}
				return STDLIB_CONSTANT_FLOAT64_PINF;
			}
			if ( d <= 0.0 ) {
				return STDLIB_CONSTANT_FLOAT64_PINF;
			}
			// Transformation based on AMS55 #15.3.6:
			y = stdlib_base_gamma( c ) * stdlib_base_gamma( d ) / ( stdlib_base_gamma( p ) * stdlib_base_gamma( r ) );
			return y;
		}
		if ( d <= -1.0 ) {
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
	}

	// Conditionally make `d > 0` by recurrence on `c` (AMS55 #15.2.27)...
	if ( d < 0.0 ) {
		// Try the power series first:
		y = hyt2f1( a, b, c, x, &err );
		if ( err < ETHRESH ) {
			return y;
		}
		// If the power series fails, then apply the recurrence...
		err = 0.0;
		aid = 2.0 - id;
		e = c + aid;
		d2 = stdlib_base_hyp2f1( a, b, e, x );
		d1 = stdlib_base_hyp2f1( a, b, e+1.0, x );
		q = a + b + 1.0;
		for ( i = 0; i < aid; i++ ) {
			r = e - 1.0;
			y1 = ( e-a ) * ( e-b ) * x;
			y2 = r - ( ( (2.0*e)-q ) * x );
			y2 *= e;
			y = ( ( y2*d2 ) + ( y1*d1 ) ) / ( e*r*s );
			e = r;
			d1 = d2;
			d2 = y;
		}
		return y;
	}

	// The transformation for c - a or c - b negative integer (AMS55 #15.3.3)...
	if ( negIntCaOrCb ) {
		y = stdlib_base_pow( s, d ) * hys2f1( c - a, c - b, c, x, &err );
		return y;
	}

	// Try the power series:
	y = hyt2f1( a, b, c, x, &err );
	return y;
}
