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
* Evaluates the quantile function for a binomial distribution with number of trials `n` and success probability `p` at a probability `r`.
*
* @param {Probability} r - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p  - success probability
* @returns {NonNegativeInteger} evaluated quantile function
*
* @example
* var y = quantile( 0.4, 20, 0.2 );
* // returns 3
*
* @example
* var y = quantile( 0.8, 20, 0.2 );
* // returns 5
*
* @example
* var y = quantile( 0.5, 10, 0.4 );
* // returns 4
*
* @example
* var y = quantile( 0.0, 10, 0.4 );
* // returns 0
*
* @example
* var y = quantile( 1.0, 10, 0.4 );
* // returns 10
*
* @example
* var y = quantile( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.2, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.2, 20, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.5, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 20, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 20, 1.5 );
* // returns NaN
*/
function quantile( r, n, p ) {
	var sigmaInv;
	var guess;
	var sigma;
	var corr;
	var mu;
	var x2;
	var x;

	if (
		isnan( r ) ||
		isnan( n ) ||
		isnan( p ) ||
		r < 0.0 ||
		r > 1.0 ||
		p < 0.0 ||
		p > 1.0 ||
		!isNonNegativeInteger( n ) ||
		n === PINF
	) {
		return NaN;
	}
	if ( r === 1.0 || p === 1.0 ) {
		return n;
	}
	if ( r === 0.0 || p === 0.0 || n === 0 ) {
		return 0.0;
	}
	// Cornish-Fisher expansion:
	mu = n * p;
	sigma = sqrt( n * p * ( 1.0-p ) );
	sigmaInv = 1.0 / sigma;
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


// EXPORTS //

module.exports = quantile;
