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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 0.0, 3.0 );
*
* var y = cdf( 10.0 );
* // returns ~0.965
*
* y = cdf( -2.0 );
* // returns ~0.143
*/
function factory( mu, beta ) {
	if (
		isnan( mu ) ||
		isnan( beta ) ||
		beta <= 0
	) {
		return constantFunction( NaN );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Gumbel distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( -2.0 );
	* // returns <number>
	*/
	function cdf( x ) {
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		z = ( x - mu ) / beta;
		return exp( -exp( -z ) );
	}
}


// EXPORTS //

module.exports = factory;
