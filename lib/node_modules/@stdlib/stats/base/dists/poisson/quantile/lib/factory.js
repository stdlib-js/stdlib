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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/quantile' ).factory;
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var round = require( '@stdlib/math/base/special/round' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var cdf = require( '@stdlib/stats/base/dists/poisson/cdf' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var search = require( './search.js' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a Poisson distribution with mean parameter `lambda`.
*
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 5.0 );
* var y = quantile( 0.4 );
* // returns 4
*
* y = quantile( 0.8 );
* // returns 7
*
* y = quantile( 1.0 );
* // returns Infinity
*/
function factory( lambda ) {
	var sigmaInv;
	var sigma;

	if ( isnan( lambda ) || lambda < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( lambda === 0.0 ) {
		return degenerate( 0.0 );
	}
	sigma = sqrt( lambda );
	sigmaInv = 1.0 / sigma;
	return quantile;

	/**
	* Evaluates the quantile function for a Poisson distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {NonNegativeInteger} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( p ) {
		var guess;
		var corr;
		var x2;
		var x;

		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		if ( p === 0.0 ) {
			return 0.0;
		}
		if ( p === 1.0 ) {
			return PINF;
		}
		// Cornish-Fisher expansion:
		if ( p < 0.5 ) {
			x = -erfcinv( 2.0 * p ) * SQRT2;
		} else {
			x = erfcinv( 2.0 * ( 1.0 - p ) ) * SQRT2;
		}
		x2 = x * x;

		// Skewness correction:
		corr = x + (sigmaInv * ( x2 - 1.0 ) / 6.0);
		guess = round( lambda + (sigma * corr) );
		return ( cdf( guess, lambda ) >= p ) ?
			search.left( guess, p, lambda ) :
			search.right( guess, p, lambda );
	}
}


// EXPORTS //

module.exports = factory;
