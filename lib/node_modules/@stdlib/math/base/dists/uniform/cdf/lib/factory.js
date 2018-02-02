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


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a uniform distribution with minimum support `a` and maximum support `b`.
*
* @param {number} a - minimum support
* @param {number} b - maximum support
* @returns {Function} CDF
*
* @example
* var cdf = factory( 0.0, 10.0 );
* var y = cdf( 0.5 );
* // returns 0.05
*
* y = cdf( 8.0 );
* // returns 0.8
*/
function factory( a, b ) {
	if (
		isnan( a ) ||
		isnan( b ) ||
		a >= b
	) {
		return constantFunction( NaN );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a uniform distribution.
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
		if ( x < a ) {
			return 0.0;
		}
		if ( x >= b ) {
			return 1.0;
		}
		return ( x - a ) / ( b - a );
	}
}


// EXPORTS //

module.exports = factory;
