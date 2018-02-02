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
var atan2 = require( '@stdlib/math/base/special/atan2' );


// VARIABLES //

var ONE_OVER_PI = 0.3183098861837907;


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma`.
*
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 10.0, 2.0 );
*
* var y = cdf( 10.0 );
* // returns 0.5
*
* y = cdf( 12.0 );
* // returns 0.75
*/
function factory( x0, gamma ) {
	if (
		isnan( gamma ) ||
		isnan( x0 ) ||
		gamma <= 0.0
	) {
		return constantFunction( NaN );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Cauchy distribution.
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
		if ( isnan( x ) ) {
			return NaN;
		}
		return ( ONE_OVER_PI * atan2( x-x0, gamma ) ) + 0.5;
	}
}


// EXPORTS //

module.exports = factory;
