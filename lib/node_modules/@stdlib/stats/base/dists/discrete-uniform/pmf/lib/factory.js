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


// MAIN //

/**
* Returns a function for evaluating the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b`.
*
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {Function} PMF
*
* @example
* var pmf = factory( 0, 10 );
* var y = pmf( 2.0 );
* // returns ~0.091
*
* y = pmf( 12.0 );
* // returns 0.0
*/
function factory( a, b ) {
	var ninv;
	if (
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return constantFunction( NaN );
	}
	ninv = 1.0 / ( b - a + 1.0 );
	return pmf;

	/**
	* Evaluates the probability mass function (PMF) for a discrete uniform distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PMF
	*
	* @example
	* var y = pmf( 2.0 );
	* // returns <number>
	*/
	function pmf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < a || x > b || !isInteger( x ) ) {
			return 0.0;
		}
		return ninv;
	}
}


// EXPORTS //

module.exports = factory;
