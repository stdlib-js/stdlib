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


// VARIABLES //

var COSINE_EXCESS_KURTOSIS = -0.5937628755982794; // 6(90-π^4)/(5(π^4-6)^2)


// MAIN //

/**
* Returns the excess kurtosis for a raised cosine distribution with location `mu` and scale `s`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} s - scale parameter
* @returns {number} excess kurtosis
*
* @example
* var y = kurtosis( 0.0, 1.0 );
* // returns ~-0.594
*
* @example
* var y = kurtosis( 5.0, 2.0 );
* // returns ~-0.594
*
* @example
* var y = kurtosis( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = kurtosis( 0.0, NaN );
* // returns NaN
*
* @example
* var y = kurtosis( 0.0, 0.0 );
* // returns NaN
*/
function kurtosis( mu, s ) {
	if (
		isnan( mu ) ||
		isnan( s ) ||
		s <= 0.0
	) {
		return NaN;
	}
	return COSINE_EXCESS_KURTOSIS;
}


// EXPORTS //

module.exports = kurtosis;
