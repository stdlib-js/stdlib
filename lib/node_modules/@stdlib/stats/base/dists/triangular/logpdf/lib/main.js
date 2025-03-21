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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c` at a value `x`.
*
* @param {number} x - input value
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~-0.693
*
* @example
* var y = logpdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = logpdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~-2.89
*
* @example
* var y = logpdf( -2.0, -1.0, 1.0, 0.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( NaN, 0.0, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, NaN, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 1.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 1.0, 0.0, 1.5 );
* // returns NaN
*/
function logpdf( x, a, b, c ) {
	var denom1;
	var denom2;
	var denom3;

	if (
		isnan( x ) ||
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		a > c ||
		c > b
	) {
		return NaN;
	}
	if ( x < a ) {
		return NINF;
	}
	denom1 = ln( b - a ) + ln( c - a );
	denom2 = ln( b - a );
	denom3 = ln( b - a ) + ln( b - c );

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


// EXPORTS //

module.exports = logpdf;
