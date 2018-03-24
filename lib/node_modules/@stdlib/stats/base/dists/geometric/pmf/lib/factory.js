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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the probability mass function (PMF) for a geometric distribution with success probability `p`.
*
* @param {Probability} p - success probability
* @returns {Function} PMF
*
* @example
* var pmf = factory( 0.5 );
* var y = pmf( 3.0 );
* // returns 0.0625
*
* y = pmf( 1.0 );
* // returns 0.25
*/
function factory( p ) {
	if (
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return constantFunction( NaN );
	}
	return pmf;

	/**
	* Evaluates the probability mass function (PMF) for a geometric distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated PMF
	*
	* @example
	* var y = pmf( 2.0 );
	* // returns <number>
	*/
	function pmf( x ) {
		var q;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( isNonNegativeInteger( x ) ) {
			q = 1.0 - p;
			return p * pow( q, x );
		}
		return 0.0;
	}
}


// EXPORTS //

module.exports = factory;
