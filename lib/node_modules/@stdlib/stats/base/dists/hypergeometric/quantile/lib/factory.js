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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var cdf = require( '@stdlib/stats/base/dists/hypergeometric/cdf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
*
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 100, 20, 10 );
* var y = quantile( 0.2 );
* // returns 1
*
* y = quantile( 0.9 );
* // returns 4
*/
function factory( N, K, n ) {
	if (
		isnan( N ) ||
		isnan( K ) ||
		isnan( n ) ||
		!isNonNegativeInteger( N ) ||
		!isNonNegativeInteger( K ) ||
		!isNonNegativeInteger( n ) ||
		N === PINF ||
		K === PINF ||
		K > N ||
		n > N
	) {
		return constantFunction( NaN );
	}
	return quantile;

	/**
	* Evaluates the quantile function for a hypergeometric distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {NonNegativeInteger} evaluated quantile function
	*/
	function quantile( p ) {
		var prob;
		var x;

		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		if ( p === 0.0 ) {
			return max( 0, n + K - N );
		}
		if ( p === 1.0 ) {
			return min( n, K );
		}
		x = max( 0, n + K - N );
		while ( true ) {
			prob = cdf( x, N, K, n );
			if ( prob > p ) {
				break;
			}
			x += 1;
		}
		return x;
	}
}


// EXPORTS //

module.exports = factory;
