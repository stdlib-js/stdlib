/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var expm1 = require( '@stdlib/math/base/special/expm1' );
var floor = require( '@stdlib/math/base/special/floor' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} lambda - shape parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.5 );
* // returns ~0.7769
*
* @example
* var y = cdf( 2.0, 1.5 );
* // returns ~0.9889
*
* @example
* var y = cdf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Invalid shape parameter
* var y = cdf( 2.0, -1.4 );
* // returns NaN
*/
function cdf( x, lambda ) {
	if ( isnan( x ) || isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( x === PINF ) {
		return 1.0;
	}
	return -expm1( -lambda * ( floor(x)+1.0 ) );
}


// EXPORTS //

module.exports = cdf;
