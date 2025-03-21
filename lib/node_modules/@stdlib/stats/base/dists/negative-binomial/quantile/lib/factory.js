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
*/

'use strict';

// MODULES //

var constantFunction = require( '@stdlib/utils/constant-function' );
var cdf = require( '@stdlib/stats/base/dists/negative-binomial/cdf' );
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var round = require( '@stdlib/math/base/special/round' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var search = require( './search.js' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p`.
*
* @param {PositiveNumber} r - number of successes until experiment is stopped
* @param {Probability} p - success probability
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 10.0, 0.5 );
* var y = quantile( 0.1 );
* // returns 5
*
* y = quantile( 0.9 );
* // returns 16
*/
function factory( r, p ) {
	var sigmaInv;
	var sigma;
	var mu;
	var q;
	if (
		isnan( r ) ||
		isnan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return constantFunction( NaN );
	}
	q = 1.0 - p;
	mu = ( r * q ) / p;
	sigma = sqrt( r * q ) / p;
	sigmaInv = ( (2.0/p) - 1.0 ) / sigma;
	return quantile;

	/**
	* Evaluates the quantile function for a negative binomial distribution.
	*
	* @private
	* @param {Probability} k - input value
	* @returns {NonNegativeInteger} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( k ) {
		var guess;
		var corr;
		var x2;
		var x;

		if ( isnan( k ) || k < 0.0 || k > 1.0 ) {
			return NaN;
		}
		if ( k === 0.0 ) {
			return 0.0;
		}
		if ( k === 1.0 ) {
			return PINF;
		}

		// Cornish-Fisher expansion:
		if ( k < 0.5 ) {
			x = -erfcinv( 2.0 * k ) * SQRT2;
		} else {
			x = erfcinv( 2.0 * (1.0-k) ) * SQRT2;
		}
		x2 = x * x;

		// Skewness correction:
		corr = x + (sigmaInv * ( x2 - 1.0 ) / 6.0);
		guess = round( mu + (sigma * corr) );
		return ( cdf( guess, r, p ) >= k ) ?
			search.left( guess, k, r, p ) :
			search.right( guess, k, r, p );
	}
}


// EXPORTS //

module.exports = factory;
