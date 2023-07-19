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
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c`.
*
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 0.0, 10.0, 5.0 );
* var y = logpdf( 2.0 );
* // returns ~-2.526
*
* y = logpdf( 12.0 );
* // returns -Infinity
*/
function factory( a, b, c ) {
	var denom1;
	var denom2;
	var denom3;

	if (
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		a > c ||
		c > b
	) {
		return constantFunction( NaN );
	}

	denom1 = ln( b - a ) + ln( c - a );
	denom2 = ln( b - a );
	denom3 = ln( b - a ) + ln( b - c );
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a triangular distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( 12.0 );
	* // returns <number>
	*/
	function logpdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < a ) {
			return NINF;
		}
		// Case: x >= a
		if ( x < c ) {
			return LN2 + ln( x - a ) - denom1;
		}
		if ( x === c ) {
			return LN2 - denom2;
		}
		// Case: x > c
		if ( x <= b ) {
			return LN2 + ln( b - x ) - denom3;
		}
		// Case: x > b
		return NINF;
	}
}


// EXPORTS //

module.exports = factory;
