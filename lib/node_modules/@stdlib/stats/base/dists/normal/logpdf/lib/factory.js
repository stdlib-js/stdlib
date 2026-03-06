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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/logpdf' ).factory;
var LN_TWO_PI = require( '@stdlib/constants/float64/ln-two-pi' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a normal distribution.
*
* @param {number} mu - mean
* @param {NonNegativeNumber} sigma - standard deviation
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 10.0, 2.0 );
* var y = logpdf( 10.0 );
* // returns ~-1.612
*
* y = logpdf( 5.0 );
* // returns ~-4.737
*/
function factory( mu, sigma ) {
	var s2;
	var A;
	var B;
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return constantFunction( NaN );
	}
	if ( sigma === 0.0 ) {
		return degenerate( mu );
	}
	s2 = pow( sigma, 2.0 );
	A = (-0.5) * ( ( 2.0*ln( sigma ) ) + LN_TWO_PI );
	B = -1.0 / ( 2.0*s2 );
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a normal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( -3.14 );
	* // returns <number>
	*/
	function logpdf( x ) {
		return A + ( B * pow( x-mu, 2.0 ) );
	}
}


// EXPORTS //

module.exports = factory;
