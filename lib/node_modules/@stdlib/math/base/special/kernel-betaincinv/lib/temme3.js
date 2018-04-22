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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
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

/* eslint-disable no-mixed-operators, max-len */

'use strict';

// MODULES //

var gammaincinv = require( '@stdlib/math/base/special/gammaincinv' );
var ln = require( '@stdlib/math/base/special/ln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants/math/float64-smallest-subnormal' );
var temmeRootFinder = require( './root_finder.js' );
var newtonRaphsonIterate = require( './newton_raphson.js' );


// MAIN //

/**
* Carries out the third method by Temme (described in section 4).
*
* ## References
*
* -   Temme, N. M. 1992. "Incomplete Laplace Integrals: Uniform Asymptotic Expansion with Application to the Incomplete Beta Function." _Journal of Computational and Applied Mathematics_ 41 (1–2): 1638–63. doi:[10.1016/0377-0427(92)90244-R](https://doi.org/10.1016/0377-0427(92)90244-R).
*
* @private
* @param {PositiveNumber} a - function parameter
* @param {PositiveNumber} b - function parameter
* @param {Probability} p - function parameter
* @param {Probability} q - probability equal to `1-p`
* @returns {number} function value
*/
function temme3( a, b, p, q ) {
	var cross;
	var roots;
	var lower;
	var upper;
	var eta0;
	var eta;
	var w10;
	var w12;
	var w13;
	var w14;
	var e1;
	var e2;
	var e3;
	var mu;
	var d2;
	var d3;
	var d4;
	var w2;
	var w3;
	var w4;
	var w5;
	var w6;
	var w7;
	var w8;
	var w9;
	var w1;
	var d;
	var w;
	var u;
	var x;

	// Begin by getting an initial approximation for the quantity eta from the dominant part of the incomplete beta:
	if ( p < q ) {
		eta0 = gammaincinv( p, b, true );
	} else {
		eta0 = gammaincinv( q, b, false );
	}
	eta0 /= a;

	// Define the variables and powers we'll need later on:
	mu = b / a;
	w = sqrt( 1.0+mu );
	w2 = w * w;
	w3 = w2 * w;
	w4 = w2 * w2;
	w5 = w3 * w2;
	w6 = w3 * w3;
	w7 = w4 * w3;
	w8 = w4 * w4;
	w9 = w5 * w4;
	w10 = w5 * w5;
	d = eta0 - mu;
	d2 = d * d;
	d3 = d2 * d;
	d4 = d2 * d2;
	w1 = w + 1.0;
	w12 = w1 * w1;
	w13 = w1 * w12;
	w14 = w12 * w12;

	// Now we need to compute the perturbation error terms that convert eta0 to eta, these are all polynomials of polynomials. Probably these should be re-written to use tabulated data (see examples above), but it's less of a win in this case as we need to calculate the individual powers for the denominator terms anyway, so we might as well use them for the numerator-polynomials as well. Refer to p154-p155 for the details of these expansions:
	e1 = (w+2.0) * (w-1.0) / (3.0*w);
	e1 += (w3 + 9.0*w2 + 21.0*w + 5.0) * d / (36.0*w2*w1);
	e1 -= (w4 - 13.0*w3 + 69.0*w2 + 167.0*w + 46.0) * d2 / (1620.0*w12*w3);
	e1 -= (7.0*w5 + 21.0*w4 + 70.0*w3 + 26.0*w2 - 93.0*w - 31.0) * d3 / (6480.0*w13*w4);
	e1 -= (75.0*w6 + 202.0*w5 + 188.0*w4 - 888.0*w3 - 1345.0*w2 + 118.0*w + 138.0) * d4 / (272160.0*w14*w5);

	e2 = (28.0*w4 + 131.0*w3 + 402.0*w2 + 581.0*w + 208.0) * (w-1.0) / (1620.0*w1*w3);
	e2 -= (35.0*w6 - 154.0*w5 - 623.0*w4 - 1636.0*w3 - 3983.0*w2 - 3514.0*w - 925.0) * d / (12960.0*w12*w4);
	e2 -= (2132.0*w7 + 7915.0*w6 + 16821.0*w5 + 35066.0*w4 + 87490.0*w3 + 141183.0*w2 + 95993.0*w + 21640.0) * d2 / (816480.0*w5*w13);
	e2 -= (11053.0*w8 + 53308.0*w7 + 117010.0*w6 + 163924.0*w5 + 116188.0*w4 - 258428.0*w3 - 677042.0*w2 - 481940.0*w - 105497.0) * d3 / (14696640.0*w14*w6);

	e3 = -((3592.0*w7 + 8375.0*w6 - 1323.0*w5 - 29198.0*w4 - 89578.0*w3 - 154413.0*w2 - 116063.0*w - 29632.0) * (w-1.0)) / (816480.0*w5*w12);
	e3 -= (442043.0*w9 + 2054169.0*w8 + 3803094.0*w7 + 3470754.0*w6 + 2141568.0*w5 - 2393568.0*w4 - 19904934.0*w3 - 34714674.0*w2 - 23128299.0*w - 5253353.0) * d / (146966400.0*w6*w13);
	e3 -= (116932.0*w10 + 819281.0*w9 + 2378172.0*w8 + 4341330.0*w7 + 6806004.0*w6 + 10622748.0*w5 + 18739500.0*w4 + 30651894.0*w3 + 30869976.0*w2 + 15431867.0*w + 2919016.0) * d2 / (146966400.0*w14*w7);

	// Combine eta0 and the error terms to compute eta (Second equation p155):
	eta = eta0 + (e1/a) + (e2/(a*a)) + (e3/(a*a*a));

	/*
		Now we need to solve Eq 4.2 to obtain x.  For any given value of
		eta there are two solutions to this equation, and since the distribution
		may be very skewed, these are not related by x ~ 1-x we used when
		implementing section 3 above.  However we know that:

			cross < x <= 1       ; iff eta < mu
				x == cross   ; iff eta == mu
				0 <= x < cross    ; iff eta > mu

		Where cross == 1 / (1 + mu)
		Many thanks to Prof Temme for clarifying this point. Therefore we'll just jump straight into Newton iterations to solve Eq 4.2 using these bounds, and simple bisection as the first guess, in practice this converges pretty quickly and we only need a few digits correct anyway:
	*/
	if ( eta <= 0 ) {
		eta = SMALLEST_SUBNORMAL;
	}
	u = eta - ( mu*ln(eta) ) + ( ( 1.0+mu ) * ln( 1.0+mu ) ) - mu;
	cross = 1.0 / ( 1.0+mu );
	lower = (eta < mu) ? cross : 0.0;
	upper = (eta < mu) ? 1.0 : cross;
	x = (lower+upper) / 2.0;
	roots = temmeRootFinder( u, mu );
	return newtonRaphsonIterate( roots, x, lower, upper, 32, 100 );
}


// EXPORTS //

module.exports = temme3;
