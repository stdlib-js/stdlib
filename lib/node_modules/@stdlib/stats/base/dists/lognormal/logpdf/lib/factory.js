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
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a lognormal distribution with location parameter `mu` and scale parameter `sigma`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 4.0, 2.0 );
* var y = logpdf( 10.0 );
* // returns ~-4.275
*
* y = logpdf( 2.0 );
* // returns ~-3.672
*/
function factory( mu, sigma ) {
	var s2;
	var A;
	var B;
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma <= 0.0
	) {
		return constantFunction( NaN );
	}
	s2 = pow( sigma, 2.0 );
	A = -0.5 * ln( 2.0 * s2 * PI );
	B = -1.0 / ( 2.0 * s2 );
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a lognormal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.5 );
	* // returns <number>
	*/
	function logpdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= 0.0 ) {
			return NINF;
		}
		return A - ln( x ) + ( B * pow( ln(x) - mu, 2.0 ) );
	}
}


// EXPORTS //

module.exports = factory;
