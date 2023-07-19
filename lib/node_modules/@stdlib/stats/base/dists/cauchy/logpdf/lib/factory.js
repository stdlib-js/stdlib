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
var log1p = require( '@stdlib/math/base/special/log1p' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var LNPI = require( '@stdlib/constants/float64/ln-pi' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (logPDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma`.
*
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 4.0, 2.0 );
*
* var y = logpdf( 10.0 );
* // returns ~-4.14
*
* y = logpdf( 3.0 );
* // returns ~-2.061
*/
function factory( x0, gamma ) {
	if (
		isnan( gamma ) ||
		isnan( x0 ) ||
		gamma <= 0.0
	) {
		return constantFunction( NaN );
	}
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (logPDF) for a Cauchy distribution.
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
		return -( LNPI + ln( gamma ) + log1p( pow( (x-x0)/gamma, 2.0 ) ) );
	}
}


// EXPORTS //

module.exports = factory;
