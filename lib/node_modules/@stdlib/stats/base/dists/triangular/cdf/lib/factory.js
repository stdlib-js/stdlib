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


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c`.
*
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Function} CDF
*
* @example
* var cdf = factory( 0.0, 10.0, 2.0 );
* var y = cdf( 0.5 );
* // returns 0.0125
*
* y = cdf( 8.0 );
* // returns 0.95
*/
function factory( a, b, c ) {
	var denom1;
	var denom2;

	if (
		isnan( a ) ||
		isnan( b ) ||
		isnan( c )
	) {
		return constantFunction( NaN );
	}
	if ( !( a <= c && c <= b ) ) {
		return constantFunction( NaN );
	}

	denom1 = ( b - a ) * ( c - a );
	denom2 = ( b - a ) * ( b - c );
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a triangular distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2.0 );
	* // returns <number>
	*/
	function cdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= a ) {
			return 0.0;
		}
		// Case: x > a
		if ( x <= c ) {
			return pow( x - a, 2.0 ) / denom1;
		}
		// Case: x > c
		if ( x < b ) {
			return 1 - ( pow( b - x, 2.0 ) / denom2 );
		}
		// Case: x >= b
		return 1.0;
	}
}


// EXPORTS //

module.exports = factory;
