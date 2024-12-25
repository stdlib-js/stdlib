/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var exp = require( '@stdlib/math/base/special/exp' );
var expm1 = require( '@stdlib/math/base/special/expm1' );


// MAIN //

/**
* Returns a function for evaluating the probability mass function (PMF) for a Planck distribution with shape parameter `lambda`.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {Function} PMF
*
* @example
* var pmf = factory( 0.5 );
* var y = pmf( 3.0 );
* // returns ~0.0878
*
* y = pmf( 1.0 );
* // returns ~0.2387
*/
function factory( lambda ) {
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return constantFunction( NaN );
	}
	return pmf;

	/**
	* Evaluates the probability mass function (PMF) for a Planck distribution.
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
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( isNonNegativeInteger( x ) ) {
			return -expm1( -lambda ) * exp( -lambda * x );
		}
		return 0.0;
	}
}


// EXPORTS //

module.exports = factory;
