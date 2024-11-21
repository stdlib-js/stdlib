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
var ln = require( '@stdlib/math/base/special/ln' );
var LN_TWO_PI = require( '@stdlib/constants/float64/ln-two-pi' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a Lévy distribution.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} c - scale parameter
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 10.0, 2.0 );
* var y = logpdf( 11.0 );
* // returns ~-1.572
*
* y = logpdf( 10.0 );
* // returns -Infinity
*/
function factory( mu, c ) {
	if (
		isnan( mu ) ||
		isnan( c ) ||
		c <= 0.0
	) {
		return constantFunction( NaN );
	}
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a Lévy distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( -1.2 );
	* // returns <number>
	*/
	function logpdf( x ) {
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= mu ) {
			return NINF;
		}
		z = x - mu;
		return 0.5 * ( ln( c ) - LN_TWO_PI - ( c/z ) - ( 3.0*ln( z ) ) );
	}
}


// EXPORTS //

module.exports = factory;
