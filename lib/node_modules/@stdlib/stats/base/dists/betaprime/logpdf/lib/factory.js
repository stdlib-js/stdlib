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
var betaln = require( '@stdlib/math/base/special/betaln' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (logPDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 0.5, 0.5 );
*
* var y = logpdf( 0.8 );
* // returns ~-1.62
*
* y = logpdf( 0.3 );
* // returns ~-0.805
*/
function factory( alpha, beta ) {
	var betalnAB;
	if (
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return constantFunction( NaN );
	}
	betalnAB = betaln( alpha, beta );
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a beta prime distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated natural logarithm of the PDF
	*
	* @example
	* var y = logpdf( 0.3 );
	* // returns <number>
	*/
	function logpdf( x ) {
		var out;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= 0.0 ) {
			// Support of the BetaPrime distribution: (0,∞)
			return NINF;
		}
		out = ( alpha-1.0 ) * ln( x );
		out -= ( alpha+beta ) * log1p( x );
		out -= betalnAB;
		return out;
	}
}


// EXPORTS //

module.exports = factory;
