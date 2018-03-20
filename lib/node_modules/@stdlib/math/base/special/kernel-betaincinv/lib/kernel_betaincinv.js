/* eslint-disable max-statements, max-lines */

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );
var betainc = require( '@stdlib/math/base/special/betainc' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var asin = require( '@stdlib/math/base/special/asin' );
var beta = require( '@stdlib/math/base/special/beta' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var sin = require( '@stdlib/math/base/special/sin' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var ln = require( '@stdlib/math/base/special/ln' );
var FLOAT64_MIN_NORM = require( '@stdlib/constants/math/float64-smallest-normal' );
var HALF_PI = require( '@stdlib/constants/math/float64-half-pi' );
var EPSILON = require( '@stdlib/constants/math/float64-eps' );
var findIBetaInvFromTDist = require( './find_ibeta_inv_from_t_dist.js' );
var temme1 = require( './temme1.js' );
var temme2 = require( './temme2.js' );
var temme3 = require( './temme3.js' );
var halleyIterate = require( './halley_iterate.js' );
var ibetaRoots = require( './ibeta_roots.js' );


// VARIABLES //

var DIGITS = 32;
var MAX_ITERATIONS = 1000;

// Workspace for the polynomial coefficients:
var terms = [ 0.0, 0.0, 0.0, 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Calculates the inverse of the incomplete beta function.
*
* @private
* @param {PositiveNumber} a - function parameter
* @param {PositiveNumber} b - function parameter
* @param {Probability} p - function parameter
* @param {Probability} q - probability equal to `1 - p`
* @returns {Array} two-element array holding function value `y` and `1-y`
*/
function ibetaInvImp( a, b, p, q ) {
	var digits;
	var invert;
	var lambda;
	var lower;
	var theta;
	var upper;
	var roots;
	var maxv;
	var minv;
	var bet;
	var ppa;
	var tmp;
	var xs2;
	var ap1;
	var bm1;
	var fs;
	var lx;
	var ps;
	var xg;
	var xs;
	var yp;
	var a2;
	var a3;
	var b2;
	var r;
	var l;
	var u;
	var x;
	var y;

	// The flag invert is set to true if we swap a for b and p for q, in which case the result has to be subtracted from 1:
	invert = false;

	// Handle trivial cases first...
	if ( q === 0.0 ) {
		return [ 1.0, 0.0 ];
	}
	if ( p === 0.0 ) {
		return [ 0.0, 1.0 ];
	}
	if ( a === 1.0 ) {
		if ( b === 1.0 ) {
			return [ p, 1.0-p ];
		}
		// Change things around so we can handle as b == 1 special case below:
		tmp = b;
		b = a;
		a = tmp;

		tmp = q;
		q = p;
		p = tmp;

		invert = true;
	}
	// Depending upon which approximation method we use, we may end up calculating either x or y initially (where y = 1-x):
	x = 0.0; // Set to a safe zero to avoid a

	// For some of the methods we can put tighter bounds on the result than simply [0,1]:
	lower = 0.0;
	upper = 1.0;

	// Student's T with b = 0.5 gets handled as a special case, swap around if the arguments are in the "wrong" order:
	if ( a === 0.5 ) {
		if ( b === 0.5 ) {
			x = sin( p*HALF_PI );
			x *= x;
			y = sin( q*HALF_PI );
			y *= y;
			return [ x, y ];
		}
		if ( b > 0.5 ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = q;
			q = p;
			p = tmp;

			invert = !invert;
		}
	}
	// Select calculation method for the initial estimate:
	if ( b === 0.5 && a >= 0.5 && p !== 1.0 ) {
		// We have a Student's T distribution:
		yp = {};
		x = findIBetaInvFromTDist( a, p, yp );
		y = yp.value;
	}
	else if ( b === 1.0 ) {
		if ( p < q ) {
			if ( a > 1.0 ) {
				x = pow( p, 1.0/a );
				y = -expm1( ln(p) / a );
			} else {
				x = pow( p, 1.0/a );
				y = 1.0 - x;
			}
		} else {
			x = exp( log1p(-q) / a );
			y = -expm1( log1p(-q) / a );
		}
		if ( invert ) {
			tmp = y;
			y = x;
			x = tmp;
		}
		return [ x, y ];
	}
	else if ( a+b > 5.0 ) {
		// When a+b is large then we can use one of Prof Temme's asymptotic expansions, begin by swapping things around so that p < 0.5, we do this to avoid cancellations errors when p is large.
		if ( p > 0.5 ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = q;
			q = p;
			p = tmp;

			invert = !invert;
		}
		minv = min( a, b );
		maxv = max( a, b );
		if ( ( sqrt(minv) > (maxv-minv) ) && minv > 5.0 ) {
			// When a and b differ by a small amount the curve is quite symmetrical and we can use an error function to approximate the inverse. This is the cheapest of the three Temme expansions, and the calculated value for x will never be much larger than p, so we don't have to worry about cancellation as long as p is small.
			x = temme1( a, b, p );
			y = 1.0 - x;
		} else {
			r = a + b;
			theta = asin( sqrt( a/r ) );
			lambda = minv / r;
			if (
				lambda >= 0.2 &&
				lambda <= 0.8 &&
				r >= 10
			) {
				// The second error function case is the next cheapest to use, it breaks down when the result is likely to be very small, if `a+b` is also small, but we can use a cheaper expansion there in any case. As before `x` won't be much larger than `p`, so as long as `p` is small we should be free of cancellation error.
				ppa = pow( p, 1.0/a );
				if ( ppa < 0.0025 && ( a+b ) < 200.0 ) {
					x = ppa * pow( a*beta( a, b ), 1.0/a );
				} else {
					x = temme2( p, r, theta );
				}
				y = 1.0 - x;
			} else {
				// If we get here then a and b are very different in magnitude and we need to use the third of Temme's methods which involves inverting the incomplete gamma.  This is much more expensive than the other methods.  We also can only use this method when a > b, which can lead to cancellation errors if we really want y (as we will when x is close to 1), so a different expansion is used in that case.
				if ( a < b ) {
					tmp = b;
					b = a;
					a = tmp;

					tmp = q;
					q = p;
					p = tmp;
					invert = !invert;
				}
				// Try and compute the easy way first:
				bet = 0.0;
				if ( b < 2.0 ) {
					bet = beta( a, b );
				}
				if ( bet === 0.0 ) {
					y = 1.0;
				} else {
					y = pow( b*q*bet, 1.0/b );
					x = 1.0 - y;
				}
			}
			if ( y > 1.0e-5 ) {
				x = temme3( a, b, p, q );
				y = 1.0 - x;
			}
		}
	}
	else if ( a < 1.0 && b < 1.0 ) {
		// Both a and b less than 1, there is a point of inflection at xs:
		xs = ( 1.0-a ) / ( 2.0-a-b );

		// Now we need to ensure that we start our iteration from the right side of the inflection point:
		fs = betainc( xs, a, b ) - p;
		if ( abs(fs)/p < EPSILON*3.0 ) {
			// The result is at the point of inflection, best just return it:
			if ( invert ) {
				return [ 1.0-xs, xs ];
			}
			return [ xs, 1.0-xs ];
		}
		if ( fs < 0.0 ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = q;
			q = p;
			p = tmp;

			invert = !invert;
			xs = 1.0 - xs;
		}
		xg = pow( a*p*beta( a, b ), 1.0/a );
		x = xg / ( 1.0+xg );
		y = 1.0 / ( 1.0+xg );

		// And finally we know that our result is below the inflection point, so set an upper limit on our search:
		if ( x > xs ) {
			x = xs;
		}
		upper = xs;
	}
	else if ( a > 1.0 && b > 1.0 ) {
		// Small a and b, both greater than 1, there is a point of inflection at xs, and it's complement is xs2, we must always start our iteration from the right side of the point of inflection.
		xs = ( a-1.0 ) / ( a+b-2.0 );
		xs2 = ( b-1.0 ) / ( a+b-2.0 );
		ps = betainc( xs, a, b ) - p;

		if ( ps < 0.0 ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = q;
			q = p;
			p = tmp;

			tmp = xs2;
			xs2 = xs;
			xs = tmp;

			invert = !invert;
		}
		// Estimate x and y, using expm1 to get a good estimate for y when it's very small:
		lx = ln( p*a*beta( a, b ) ) / a;
		x = exp( lx );
		y = ( x < 0.9 ) ? 1.0-x : -expm1(lx);

		if ( b < a && x < 0.2 ) {
			// Under a limited range of circumstances we can improve our estimate for x...
			ap1 = a - 1.0;
			bm1 = b - 1.0;
			a2 = a * a;
			a3 = a * a2;
			b2 = b * b;
			terms[ 0 ] = 0.0;
			terms[ 1 ] = 1.0;
			terms[ 2 ] = bm1 / ap1;
			ap1 *= ap1;
			terms[ 3 ] = bm1 * (3.0*a*b + 5.0*b + a2 - a - 4.0) / (2.0 * (a+2.0) * ap1); // eslint-disable-line max-len, no-mixed-operators
			ap1 *= (a + 1.0);
			terms[ 4 ] = bm1 * (33.0*a*b2 + 31.0*b2 + 8.0*a2*b2 - 30.0*a*b - 47.0*b + 11.0*a2*b + 6.0*a3*b + 18.0 + 4.0*a - a3 + a2*a2 - 10.0*a2); // eslint-disable-line max-len, no-mixed-operators
			terms[ 4 ] /= (3.0 * (a+3.0) * (a+2.0) * ap1);
			x = evalpoly( terms, x );
		}
		// Know that result is below the inflection point, so set an upper limit on search...
		if ( x > xs ) {
			x = xs;
		}
		upper = xs;
	} else {
		// Case: ( a <= 1 ) != ( b <= 1 ). If all else fails we get here, only one of a and b is above 1, and a+b is small.  Start by swapping things around so that we have a concave curve with b > a and no points of inflection in [0,1].  As long as we expect x to be small then we can use the simple (and cheap) power term to estimate x, but when we expect x to be large then this greatly underestimates x and leaves us trying to iterate "round the corner" which may take almost forever. We could use Temme's inverse gamma function case in that case, this works really rather well (albeit expensively) even though strictly speaking we're outside it's defined range. However it's expensive to compute, and an alternative approach which models the curve as a distorted quarter circle is much cheaper to compute, and still keeps the number of iterations required down to a reasonable level. With thanks to Prof. Temme for this suggestion.
		if ( b < a ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = q;
			q = p;
			p = tmp;
			invert = !invert;
		}
		if ( pow( p, 1.0/a ) < 0.5 ) {
			x = pow( p*a*beta( a, b ), 1.0/a );
			if ( x === 0.0 ) {
				x = FLOAT64_MIN_NORM;
			}
			y = 1.0 - x;
		}
		// Case: pow(q, 1/b) < 0.1
		else {
			// Model a distorted quarter circle:
			y = pow( 1.0-pow( p, b*beta( a, b ) ), 1.0/b );
			if ( y === 0 ) {
				y = FLOAT64_MIN_NORM;
			}
			x = 1.0 - y;
		}
	}
	// Now we have a guess for x (and for y) we can set things up for iteration.  If x > 0.5 it pays to swap things round:
	if ( x > 0.5 ) {
		tmp = b;
		b = a;
		a = tmp;

		tmp = q;
		q = p;
		p = tmp;

		tmp = y;
		y = x;
		x = tmp;

		invert = !invert;
		l = 1.0 - upper;
		u = 1.0 - lower;
		lower = l;
		upper = u;
	}
	// Lower bound for our search:  We're not interested in denormalized answers as these tend to take up lots of iterations, given that we can't get accurate derivatives in this area (they tend to be infinite).
	if ( lower === 0 ) {
		if ( invert ) {
			// We're not interested in answers smaller than machine epsilon:
			lower = EPSILON;
			if ( x < lower ) {
				x = lower;
			}
		} else {
			lower = FLOAT64_MIN_NORM;
		}
		if ( x < lower ) {
			x = lower;
		}
	}
	// Figure out how many digits to iterate towards:
	digits = DIGITS;
	if ( x < 1.0e-50 && ( a < 1.0 || b < 1.0 ) ) {
		// If we're in a region where the first derivative is very large, then we have to take care that the root-finder doesn't terminate prematurely.  We'll bump the precision up to avoid this, but we have to take care not to set the precision too high or the last few iterations will just thrash around and convergence may be slow in this case. Try 3/4 of machine epsilon:
		digits *= 3;
		digits /= 2;
	}
	// Now iterate, we can use either p or q as the target here depending on which is smaller:
	roots = ibetaRoots( a, b, ( (p < q) ? p : q ), p >= q );
	x = halleyIterate( roots, x, lower, upper, digits, MAX_ITERATIONS );

	// Tidy up, if we "lower" was too high then zero is the best answer we have:
	if ( x === lower ) {
		x = 0.0;
	}
	if ( invert ) {
		return [ 1.0-x, x ];
	}
	return [ x, 1.0-x ];
}


// EXPORTS //

module.exports= ibetaInvImp;
