/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var expm1 = require( '@stdlib/math/base/special/expm1' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the logarithm of the probability mass function (PMF) for a Planck distribution with shape parameter `lambda`.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {Function} logPMF
*
* @example
* var logpmf = factory( 0.5 );
* var y = logpmf( 3.0 );
* // returns ~-2.4328
*
* y = logpmf( 1.0 );
* // returns ~-1.4328
*/
function factory( lambda ) {
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return constantFunction( NaN );
	}
	return logpmf;

	/**
	* Evaluates the logarithm of the probability mass function (PMF) for a Planck distribution.
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
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( isNonNegativeInteger( x ) ) {
			return ln( -expm1( -lambda ) ) - ( lambda * x );
		}
		return NINF;
	}
}


// EXPORTS //

module.exports = factory;
