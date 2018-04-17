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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var sign = require( '@stdlib/math/base/special/signum' );
var abs = require( '@stdlib/math/base/special/abs' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var MAX_VALUE = require( '@stdlib/constants/math/float64-max' );


// MAIN //

/**
* Performs root finding via second order Newton-Raphson iteration.
*
* @private
* @param {Array} fun - two-element array of the function and its first derivative
* @param {number} guess - initial starting value.
* @param {number} min - minimum possible value for the result,used as initial lower bracket.
* @param {number} max - maximum possible value for the result, used as initial upper bracket.
* @param {PositiveInteger} digits - desired number of binary digits
* @param {PositiveInteger} maxIter - maximum number of iterations
* @returns {number} function value
*/
function newtonRaphsonIterate( fun, guess, min, max, digits, maxIter ) {
	var f0last;
	var delta1;
	var delta2;
	var factor;
	var result;
	var count;
	var delta;
	var res;
	var f0;
	var f1;

	f0 = 0.0;
	f0last = 0.0;
	result = guess;

	factor = ldexp( 1.0, 1.0 - digits );
	delta = MAX_VALUE;
	delta1 = MAX_VALUE;
	delta2 = MAX_VALUE;

	count = maxIter;
	do {
		f0last = f0;
		delta2 = delta1;
		delta1 = delta;
		res = fun(result);
		f0 = res[ 0 ];
		f1 = res[ 1 ];
		count -= 1;
		if ( f0 === 0.0 ) {
			break;
		}
		if ( f1 === 0.0 ) {
			// Oops zero derivative!!!
			if ( f0last === 0.0 ) {
				// Must be the first iteration, pretend that we had a previous one at either min or max:
				if ( result === min ) {
					guess = max;
				} else {
					guess = min;
				}
				f0last = fun( guess );
				delta = guess - result;
			}
			if ( sign(f0last) * sign(f0) < 0 ) {
				// We've crossed over so move in opposite direction to last step:
				if ( delta < 0 ) {
					delta = (result - min) / 2.0;
				} else {
					delta = (result - max) / 2.0;
				}
			} else if ( delta < 0 ) {
				delta = (result - max) / 2.0;
			} else {
				delta = (result - min) / 2.0;
			}
		} else {
			delta = f0 / f1;
		}
		if ( abs(delta * 2.0) > abs(delta2) ) {
			// Last two steps haven't converged, try bisection:
			delta = ( delta > 0.0 ) ? (result-min) / 2.0 : (result-max) / 2.0;
		}
		guess = result;
		result -= delta;
		if ( result <= min ) {
			delta = 0.5 * (guess - min);
			result = guess - delta;
			if ( result === min || result === max ) {
				break;
			}
		} else if ( result >= max ) {
			delta = 0.5 * (guess - max);
			result = guess - delta;
			if ( result === min || result === max ) {
				break;
			}
		}
		// Update brackets:
		if ( delta > 0.0 ) {
			max = guess;
		} else {
			min = guess;
		}
	}
	while ( count && ( abs(result * factor) < abs(delta) ) );

	return result;
}


// EXPORTS //

module.exports = newtonRaphsonIterate;
