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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_65_0/boost/math/special_functions/detail/polygamma.hpp}. The implementation follows the original but has been modified for JavaScript.
*
* ```text
* (C) Copyright Nikhar Agrawal 2013.
* (C) Copyright Christopher Kormanyos 2013.
* (C) Copyright John Maddock 2014.
* (C) Copyright Paul Bristow 2013.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var logger = require( 'debug' );
var bernoulli = require( '@stdlib/math/base/special/bernoulli' );
var factorial = require( '@stdlib/math/base/special/factorial' );
var gammaln = require( '@stdlib/math/base/special/gammaln' );
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var MAX_LN = require( '@stdlib/constants/math/float64-max-ln' );
var LN_TWO = require( '@stdlib/constants/math/float64-ln-two' );
var EPS = require( '@stdlib/constants/math/float64-eps' );


// VARIABLES //

var debug = logger( 'polygamma' );
var MAX_SERIES_ITERATIONS = 1000000;
var MAX_FACTORIAL = 172;


// MAIN //

/**
* Evaluates the polygamma function for large values of `x` such as for `x > 400`.
*
* @private
* @param {PositiveInteger} n - derivative to evaluate
* @param {number} x - input
* @returns {number} (n+1)'th derivative
* @see {@link http://functions.wolfram.com/GammaBetaErf/PolyGamma2/06/02/0001/}
*/
function atinfinityplus( n, x ) {
	var partTerm; // Value of current term excluding the Bernoulli number part
	var xsquared;
	var term; // Value of current term to be added to sum
	var sum; // Current value of accumulated sum
	var nlx;
	var k2;
	var k;

	if ( n+x === x ) {
		// If `x` is very large, just concentrate on the first part of the expression and use logs:
		if ( n === 1 ) {
			return 1.0 / x;
		}
		nlx = n * ln( x );
		if ( nlx < MAX_LN && n < MAX_FACTORIAL ) {
			return ( (n & 1) ? 1.0 : -1.0 ) * factorial( n-1 ) * pow( x, -n );
		}
		return ( (n & 1) ? 1.0 : -1.0 ) * exp( gammaln( n ) - ( n*ln(x) ) );
	}
	xsquared = x * x;

	// Start by setting `partTerm` to `(n-1)! / x^(n+1)`, which is common to both the first term of the series (with k = 1) and to the leading part. We can then get to the leading term by: `partTerm * (n + 2 * x) / 2` and to the first term in the series (excluding the Bernoulli number) by: `partTerm n * (n + 1) / (2x)`. If either the factorial would over- or the power term underflow, set `partTerm` to 0 and then we know that we have to use logs for the initial terms:
	if ( n > MAX_FACTORIAL && n*n > MAX_LN ) {
		partTerm = 0.0;
	} else {
		partTerm = factorial( n-1 ) * pow( x, -n-1 );
	}
	if ( partTerm === 0.0 ) {
		// Either `n` is very large, or the power term underflows. Set the initial values of `partTerm`, `term`, and `sum` via logs:
		partTerm = gammaln(n) - ( (n+1) * ln(x) );
		sum = exp( partTerm + ln( n + (2.0*x) ) - LN_TWO );
		partTerm += ln( n*(n+1) ) - LN_TWO - ln(x);
		partTerm = exp( partTerm );
	} else {
		sum = partTerm * ( n+(2.0*x) ) / 2.0;
		partTerm *= ( n*(n+1) ) / 2.0;
		partTerm /= x;
	}
	// If the leading term is 0, so is the result:
	if ( sum === 0.0 ) {
		return sum;
	}
	for ( k = 1; ; ) {
		term = partTerm * bernoulli( k*2 );
		sum += term;

		// Normal termination condition:
		if ( abs( term/sum ) < EPS ) {
			break;
		}

		// Increment our counter, and move `partTerm` on to the next value:
		k += 1;
		k2 = 2 * k;
		partTerm *= ( n+k2-2 ) * ( n-1+k2 );
		partTerm /= ( k2-1 ) * k2;
		partTerm /= xsquared;
		if ( k > MAX_SERIES_ITERATIONS ) {
			debug( 'Series did not converge, closest value was: %d.', sum );
			return NaN;
		}
	}
	if ( ( n-1 ) & 1 ) {
		sum = -sum;
	}
	return sum;
}


// EXPORTS //

module.exports = atinfinityplus;
