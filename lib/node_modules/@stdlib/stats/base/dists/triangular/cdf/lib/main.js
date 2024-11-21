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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
*
* @param {number} x - input value
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 0.5, -1.0, 1.0, 0.0 );
* // returns 0.875
*
* @example
* var y = cdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.75
*
* @example
* var y = cdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~0.278
*
* @example
* var y = cdf( -2.0, -1.0, 1.0, 0.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 0.0, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.0, 0.0, 1.5 );
* // returns NaN
*/
function cdf( x, a, b, c ) {
	var denom1;
	var denom2;

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
	if ( x <= a ) {
		return 0.0;
	}
	denom1 = ( b - a ) * ( c - a );
	denom2 = ( b - a ) * ( b - c );

	// Case: x > a
	if ( x <= c ) {
		return pow( x - a, 2.0 ) / denom1;
	}
	// Case: x > c
	if ( x < b ) {
		return 1.0 - ( pow( b - x, 2.0 ) / denom2 );
	}
	// Case: x >= b
	return 1.0;
}


// EXPORTS //

module.exports = cdf;
