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
var betainc = require( '@stdlib/math/base/special/betainc' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2`.
*
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {Function} CDF
*
* @example
* var cdf = factory( 10.0, 2.0 );
*
* var y = cdf( 10.0 );
* // returns ~0.906
*
* y = cdf( 8.0 );
* // returns ~0.884
*/
function factory( d1, d2 ) {
	if (
		isnan( d1 ) ||
		isnan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return constantFunction( NaN );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for an F distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 10.0 );
	* // returns <number>
	*/
	function cdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= 0.0 ) {
			return 0.0;
		}
		if ( x === PINF ) {
			return 1.0;
		}
		if ( d1 * x > d2 ) {
			return betainc( (d1*x)/(d2+(d1*x)), d1/2.0, d2/2.0, true, false );
		}
		return betainc( d2/(d2+(d1*x)), d2/2.0, d1/2.0, true, true );
	}
}


// EXPORTS //

module.exports = factory;
