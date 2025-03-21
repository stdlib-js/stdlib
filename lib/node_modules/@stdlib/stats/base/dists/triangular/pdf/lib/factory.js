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


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c`.
*
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Function} PDF
*
* @example
* var pdf = factory( 0.0, 10.0, 5.0 );
* var y = pdf( 2.0 );
* // returns 0.08
*
* y = pdf( 12.0 );
* // returns 0.0
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

	denom1 = ( b - a ) * ( c - a );
	denom2 = b - a;
	denom3 = ( b - a ) * ( b - c );
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a triangular distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( 12.0 );
	* // returns <number>
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < a ) {
			return 0.0;
		}
		// Case: x >= a
		if ( x < c ) {
			return 2.0 * ( x - a ) / denom1;
		}
		if ( x === c ) {
			return 2.0 / denom2;
		}
		// Case: x > c
		if ( x <= b ) {
			return 2.0 * ( b - x ) / denom3;
		}
		// Case: x > b
		return 0.0;
	}
}


// EXPORTS //

module.exports = factory;
