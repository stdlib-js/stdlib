/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var NINF = require( '@stdlib/constants/float64/ninf' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var LNPI = require( '@stdlib/constants/float64/ln-pi' );


// VARIABLES //

// Constant: log(sqrt(2/pi)) = 0.5 * log(2/pi) = 0.5 * (ln(2) - ln(pi))
var C = 0.5 * ( LN2 - LNPI );


// MAIN //

/**
* Returns a function for evaluating the logarithm of the probability density function (PDF) for a half-normal distribution with scale parameter `sigma`.
*
* @param {PositiveNumber} sigma - scale parameter
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 1.0 );
* var y = logpdf( 0.8 );
* // returns ~-0.546
*/
function factory( sigma ) {
	var lsigma;
	var sigma2;
	if (
		isnan( sigma ) ||
		sigma <= 0.0
	) {
		return constantFunction( NaN );
	}
	lsigma = ln( sigma );
	sigma2 = sigma * sigma;
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a half-normal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.3 );
	* // returns <number>
	*/
	function logpdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return NINF;
		}
		return C - lsigma - ( (x*x) / ( 2.0 * sigma2 ) );
	}
}


// EXPORTS //

module.exports = factory;
