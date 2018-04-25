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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
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

var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var floor = require( '@stdlib/math/base/special/floor' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var round = require( '@stdlib/math/base/special/round' );
var acos = require( '@stdlib/math/base/special/acos' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var cos = require( '@stdlib/math/base/special/cos' );
var pow = require( '@stdlib/math/base/special/pow' );
var sin = require( '@stdlib/math/base/special/sin' );
var SQRT2 = require( '@stdlib/constants/math/float64-sqrt-two' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var inverseStudentsTBodySeries = require( './inverse_students_t_body_series.js' );
var inverseStudentsTTailSeries = require( './inverse_students_t_tail_series.js' );
var inverseStudentsTHill = require( './inverse_students_t_hill.js' );


// VARIABLES //

var DF_THRESHOLD = 0x10000000; // 2^28
var ONE_THIRD = 1.0 / 3.0;
var EXP = ( 2.0 * 53.0 ) / 3.0;
var C = 0.85498797333834849467655443627193;


// MAIN //

/**
* Evaluates Student's t quantiles.
*
* @private
* @param {PositiveNumber} df - degrees of freedom
* @param {Probability} u - input probability
* @param {Probability} v - probability equal to `1-u`
* @returns {number} function value
*/
function inverseStudentsT( df, u, v ) {
	var crossover;
	var tolerance;
	var rootAlpha;
	var invert;
	var result;
	var alpha;
	var tmp;
	var p0;
	var p2;
	var p4;
	var p5;
	var p;
	var r;
	var x;
	var a;
	var b;

	result = 0;
	if ( u > v ) {
		// Function is symmetric, so invert it:
		tmp = v;
		v = u;
		u = tmp;
		invert = true;
	} else {
		invert = false;
	}
	if ( floor(df) === df && df < 20 ) {
		// We have integer degrees of freedom, try for the special cases first:
		tolerance = ldexp( 1.0, EXP );

		switch ( floor( df ) ) {
		case 1:
			// `df = 1` is the same as the Cauchy distribution, see Shaw Eq 35:
			if ( u === 0.5 ) {
				result = 0.0;
			} else {
				result = -cos( PI * u ) / sin( PI * u );
			}
			break;
		case 2:
			// `df = 2` has an exact result, see Shaw Eq 36:
			result = ( (2.0*u) - 1.0 ) / sqrt( 2.0 * u * v );
			break;
		case 4:
			// `df = 4` has an exact result, see Shaw Eq 38 & 39:
			alpha = 4.0 * u * v;
			rootAlpha = sqrt( alpha );
			r = 4 * cos( acos( rootAlpha ) / 3.0 ) / rootAlpha;
			x = sqrt( r - 4.0 );
			result = ( u - 0.5 < 0.0 ) ? -x : x;
			break;
		case 6:
			// We get numeric overflow in this area:
			if ( u < 1.0e-150 ) {
				return ( ( invert ) ? -1 : 1 ) * inverseStudentsTHill( df, u );
			}
			// Newton-Raphson iteration of a polynomial case, choice of seed value is taken from Shaw's online supplement:
			a = 4.0 * ( u - (u*u) );// 1 - 4 * (u - 0.5f) * (u - 0.5f);
			b = pow( a, ONE_THIRD );
			p = 6.0 * ( 1.0 + ( C * ( (1.0/b) - 1.0 ) ) );
			do {
				p2 = p * p;
				p4 = p2 * p2;
				p5 = p * p4;
				p0 = p;

				// Next term is given by Eq 41:
				p = 2.0 * ( (8.0*a*p5) - (270.0*p2) + 2187 ) /
					( 5.0 * ( (4.0*a*p4) - (216.0*p) - 243.0 ) );
			} while ( abs( (p - p0) / p ) > tolerance );

			// Use Eq 45 to extract the result:
			p = sqrt( p - df );
			result = ( u - 0.5 < 0.0 ) ? -p : p;
			break;
		default:
			if ( df > DF_THRESHOLD ) { // 2^28
				result = erfcinv( 2.0 * u ) * SQRT2;
			} else if ( df < 3 ) {
				// Use a roughly linear scheme to choose between Shaw's tail series and body series:
				crossover = 0.2742 - ( df * 0.0242143 );
				if ( u > crossover ) {
					result = inverseStudentsTBodySeries( df, u );
				} else {
					result = inverseStudentsTTailSeries( df, u );
				}
			} else {
				// Use Hill's method except in the extreme tails where we use Shaw's tail series. The crossover point is roughly exponential in -df:
				crossover = ldexp( 1.0, round( df / -0.654 ) );
				if ( u > crossover ) {
					result = inverseStudentsTHill( df, u );
				} else {
					result = inverseStudentsTTailSeries( df, u );
				}
			}
		}
	} else if ( df > DF_THRESHOLD ) {
		result = -erfcinv( 2.0 * u ) * SQRT2;
	} else if ( df < 3 ) {
		// Use a roughly linear scheme to choose between Shaw's tail series and body series:
		crossover = 0.2742 - ( df * 0.0242143 );
		if ( u > crossover ) {
			result = inverseStudentsTBodySeries( df, u );
		} else {
			result = inverseStudentsTTailSeries( df, u );
		}
	} else {
		// Use Hill's method except in the extreme tails where we use Shaw's tail series. The crossover point is roughly exponential in -df:
		crossover = ldexp( 1.0, round( df / -0.654 ) );
		if ( u > crossover ) {
			result = inverseStudentsTHill( df, u );
		} else {
			result = inverseStudentsTTailSeries( df, u );
		}
	}
	return ( invert ) ? -result : result;
}


// EXPORTS //

module.exports = inverseStudentsT;
