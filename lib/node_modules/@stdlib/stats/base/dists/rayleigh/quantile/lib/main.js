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
var log1p = require( '@stdlib/math/base/special/log1p' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Evaluates the quantile function for a Rayleigh distribution with scale parameter `sigma` at a probability `p`.
*
* @param {Probability} p - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0 );
* // returns ~1.794
*
* @example
* var y = quantile( 0.5, 4.0 );
* // returns ~4.71
*
* @example
* var y = quantile( 1.1, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = quantile( 0.5, -1.0 );
* // returns NaN
*/
function quantile( p, sigma ) {
	var s2;
	if ( isnan( sigma ) || sigma < 0.0 ) {
		return NaN;
	}
	if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
		return NaN;
	}
	if ( sigma === 0.0 ) {
		return 0.0;
	}
	s2 = sigma * sigma;
	return sqrt( -2.0 * s2 * log1p( -p ) );
}


// EXPORTS //

module.exports = quantile;
