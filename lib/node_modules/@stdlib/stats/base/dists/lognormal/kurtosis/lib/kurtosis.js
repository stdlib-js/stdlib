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
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Returns the excess kurtosis for a lognormal distribution with location `mu` and scale `sigma`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {number} excess kurtosis
*
* @example
* var y = kurtosis( 0.0, 1.0 );
* // returns ~110.936
*
* @example
* var y = kurtosis( 5.0, 2.0 );
* // returns ~9220556.977
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
function kurtosis( mu, sigma ) {
	var out;
	var s2;
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma <= 0.0
	) {
		return NaN;
	}
	s2 = sigma * sigma;
	out = exp( 4.0*s2 );
	out += 2.0 * exp( 3.0*s2 );
	out += 3.0 * exp( 2.0*s2 );
	out -= 6.0;
	return out;
}


// EXPORTS //

module.exports = kurtosis;
