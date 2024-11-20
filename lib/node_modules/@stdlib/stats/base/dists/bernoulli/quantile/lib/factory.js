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
* Returns a function for evaluating the quantile function for a Bernoulli distribution with success probability `p`.
*
* @param {Probability} p - success probability
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 0.4 );
* var y = quantile( 0.4 );
* // returns 0
*
* y = quantile( 0.8 );
* // returns 1
*
* y = quantile( 1.0 );
* // returns 1
*/
function factory( p ) {
	if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
		return constantFunction( NaN );
	}
	return quantile;

	/**
	* Evaluates the quantile function for a Bernoulli distribution.
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
		if ( isnan( r ) || r < 0.0 || r > 1.0 ) {
			return NaN;
		}
		if ( r <= 1.0 - p ) {
			return 0;
		}
		return 1;
	}
}


// EXPORTS //

module.exports = factory;
