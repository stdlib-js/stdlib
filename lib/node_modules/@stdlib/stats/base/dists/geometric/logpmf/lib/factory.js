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
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the logarithm of the probability mass function (PMF) for a geometric distribution with success probability `p`.
*
* @param {Probability} p - success probability
* @returns {Function} logPMF
*
* @example
* var logpmf = factory( 0.5 );
* var y = logpmf( 3.0 );
* // returns ~-2.773
*
* y = logpmf( 1.0 );
* // returns ~-1.386
*/
function factory( p ) {
	if (
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return constantFunction( NaN );
	}
	return logpmf;

	/**
	* Evaluates the logarithm of the probability mass function (PMF) for a geometric distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {NonPositiveNumber} evaluated logPMF
	*
	* @example
	* var y = logpmf( 2.0 );
	* // returns <number>
	*/
	function logpmf( x ) {
		var q;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( isNonNegativeInteger( x ) ) {
			q = 1.0 - p;
			return ln( p ) + (x * ln( q ));
		}
		return NINF;
	}
}


// EXPORTS //

module.exports = factory;
