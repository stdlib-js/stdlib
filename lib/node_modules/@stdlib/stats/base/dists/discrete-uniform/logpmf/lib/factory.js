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
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b`.
*
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {Function} logPMF
*
* @example
* var logpmf = factory( 0, 10 );
* var y = logpmf( 2.0 );
* // returns ~-2.398
*
* y = logpmf( 12.0 );
* // returns -Infinity
*/
function factory( a, b ) {
	var logn;
	if (
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return constantFunction( NaN );
	}
	logn = -ln( b - a + 1.0 );
	return logpmf;

	/**
	* Evaluates the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPMF
	*
	* @example
	* var y = logpmf( 2.0 );
	* // returns <number>
	*/
	function logpmf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < a || x > b || !isInteger( x ) ) {
			return NINF;
		}
		return logn;
	}
}


// EXPORTS //

module.exports = factory;
