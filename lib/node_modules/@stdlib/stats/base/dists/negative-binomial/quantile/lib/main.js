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
* Evaluates the quantile function for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p` at a probability `k`.
*
* @param {Probability} k - input value
* @param {PositiveNumber} r - number of successes until experiment is stopped
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} evaluated quantile function
*
* @example
* var y = quantile( 0.9, 20.0, 0.2 );
* // returns 106
*
* @example
* var y = quantile( 0.9, 20.0, 0.8 );
* // returns 8
*
* @example
* var y = quantile( 0.5, 10.0, 0.4 );
* // returns 14
*
* @example
* var y = quantile( 0.0, 10.0, 0.9 );
* // returns 0
*
* @example
* var y = quantile( 1.1, 20.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( -0.1, 20.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 0.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, 20.0, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, 20.0, 1.5 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 20.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.3, 20.0, NaN );
* // returns NaN
*/
function quantile( k, r, p ) {
	var sigmaInv;
	var guess;
	var sigma;
	var corr;
	var mu;
	var x2;
	var x;
	var q;

	if (
		isnan( r ) ||
		isnan( p ) ||
		isnan( k ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0 ||
		k < 0.0 ||
		k > 1.0
	) {
		return NaN;
	}
	if ( k === 0.0 ) {
		return 0.0;
	}
	if ( k === 1.0 ) {
		return PINF;
	}
	q = 1.0 - p;
	mu = ( r * q ) / p;
	sigma = sqrt( r * q ) / p;
	sigmaInv = 1.0 / sigma;

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


// EXPORTS //

module.exports = quantile;
