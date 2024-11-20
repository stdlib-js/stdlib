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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var degenerate = require( '@stdlib/stats/base/dists/degenerate/quantile' ).factory;
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var round = require( '@stdlib/math/base/special/round' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var cdf = require( '@stdlib/stats/base/dists/binomial/cdf' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var searchLeft = require( './search_left.js' );
var searchRight = require( './search_right.js' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a binomial distribution with number of trials `n` and success probability `p`.
*
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 10, 0.5 );
* var y = quantile( 0.1 );
* // returns 3
*
* y = quantile( 0.9 );
* // returns 7
*/
function factory( n, p ) {
	var sigmaInv;
	var sigma;
	var mu;

	if (
		isnan( n ) ||
		isnan( p ) ||
		!isNonNegativeInteger( n ) ||
		n === PINF ||
		p < 0.0 ||
		p > 1.0
	) {
		return constantFunction( NaN );
	}
	if ( p === 0.0 || n === 0.0 ) {
		return degenerate( 0.0 );
	}
	if ( p === 1.0 ) {
		return degenerate( n );
	}
	mu = n * p;
	sigma = sqrt( n * p * ( 1.0-p ) );
	sigmaInv = 1.0 / sigma;
	return quantile;

	/**
	* Evaluates the quantile function for a binomial distribution.
	*
	* @private
	* @param {Probability} r - input value
	* @returns {NonNegativeInteger} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( r ) {
		var guess;
		var corr;
		var x2;
		var x;

		if ( isnan( r ) || r < 0.0 || r > 1.0 ) {
			return NaN;
		}
		if ( r === 0.0 ) {
			return 0;
		}
		if ( r === 1.0 ) {
			return n;
		}
		// Cornish-Fisher expansion:
		if ( r < 0.5 ) {
			x = -erfcinv( 2.0 * r ) * SQRT2;
		} else {
			x = erfcinv( 2.0 * ( 1.0-r ) ) * SQRT2;
		}
		x2 = x * x;

		// Skewness correction:
		corr = x + ( sigmaInv * ( x2-1.0 ) / 6.0 );
		guess = round( mu + (sigma * corr) );
		if ( cdf( guess, n, p ) >= r ) {
			return searchLeft( guess, r, n, p );
		}
		return searchRight( guess, r, n, p );
	}
}


// EXPORTS //

module.exports = factory;
