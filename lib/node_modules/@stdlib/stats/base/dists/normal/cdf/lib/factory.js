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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/cdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var erfc = require( '@stdlib/math/base/special/erfc' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Normal distribution.
*
* @param {number} mu - mean
* @param {NonNegativeNumber} sigma - standard deviation
* @returns {Function} function to evaluate the cumulative distribution function
*
* @example
* var cdf = factory( 10.0, 2.0 );
* var y = cdf( 10.0 );
* // returns 0.5
*
* y = cdf( 12.0 );
* // returns ~0.841
*/
function factory( mu, sigma ) {
	var denom;
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return constantFunction( NaN );
	}
	if ( sigma === 0.0 ) {
		return degenerate( mu );
	}
	denom = sigma * sqrt( 2.0 );
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Normal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2.0 );
	* // returns <number>
	*/
	function cdf( x ) {
		var xc;
		if ( isnan( x ) ) {
			return NaN;
		}
		xc = x - mu;
		return 0.5 * erfc( -xc / denom );
	}
}


// EXPORTS //

module.exports = factory;
