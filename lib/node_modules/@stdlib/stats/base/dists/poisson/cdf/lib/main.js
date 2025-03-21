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

var gammainc = require( '@stdlib/math/base/special/gammainc' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var floor = require( '@stdlib/math/base/special/floor' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.5 );
* // returns ~0.986
*
* @example
* var y = cdf( 2.0, 10.0 );
* // returns ~0.003
*
* @example
* var y = cdf( -1.0, 4.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative mean parameter:
* var y = cdf( 2.0, -1.0 );
* // returns NaN
*/
function cdf( x, lambda ) {
	if ( isnan( x ) || isnan( lambda ) || lambda < 0.0 ) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( lambda === 0.0 ) {
		return 1.0;
	}
	if ( x === PINF ) {
		return 1.0;
	}
	return gammainc( lambda, floor( x ) + 1.0, true, true );
}


// EXPORTS //

module.exports = cdf;
