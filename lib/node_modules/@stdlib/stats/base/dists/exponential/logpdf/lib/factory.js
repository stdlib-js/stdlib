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
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for an exponential distribution with parameter `lambda`.
*
* @param {PositiveNumber} lambda - rate parameter
* @returns {Function} logarithm of probability density function (logPDF)
*
* @example
* var logpdf = factory( 0.5 );
* var y = logpdf( 3.0 );
* // returns ~-2.193
*
* y = logpdf( 1.0 );
* // returns ~-1.193
*/
function factory( lambda ) {
	if ( isnan( lambda ) || lambda < 0.0 || lambda === PINF ) {
		return constantFunction( NaN );
	}
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for an exponential distribution.
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
		return -( x*lambda ) + ln( lambda );
	}
}


// EXPORTS //

module.exports = factory;
