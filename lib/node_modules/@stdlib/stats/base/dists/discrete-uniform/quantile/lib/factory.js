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
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a discrete uniform distribution with minimum support `a` an maximum support `b`.
*
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 2, 4 );
* var y = quantile( 0.4 );
* // returns 3
*
* y = quantile( 0.8 );
* // returns 4
*/
function factory( a, b ) {
	var n;
	if (
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return constantFunction( NaN );
	}
	n = b - a + 1;
	return quantile;

	/**
	* Evaluates the quantile function for a discrete uniform distribution.
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
		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		return a + floor( p * n );
	}
}


// EXPORTS //

module.exports = factory;
