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
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a Lévy distribution.
*
* @param {number} mu - location parameter
* @param {NonNegativeNumber} c - scale parameter
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 10.0, 2.0 );
* var y = quantile( 0.5 );
* // returns ~14.396
*
* y = quantile( 0.8 );
* // returns ~41.16
*/
function factory( mu, c ) {
	if ( isnan( mu ) || isnan( c ) || c <= 0.0 ) {
		return constantFunction( NaN );
	}
	return quantile;

	/**
	* Evaluates the quantile function for a Lévy distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {number} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( p ) {
		var fval;
		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		fval = erfcinv( p );
		return mu + ( c / ( 2.0*fval*fval ) );
	}
}


// EXPORTS //

module.exports = factory;
