/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the skewness for a Wald distribution with mean `mu` and shape parameter `lambda`.
*
* @param {PositiveNumber} mu - mean
* @param {PositiveNumber} lambda - shape parameter
* @returns {PositiveNumber} skewness
*
* @example
* var y = skewness( 5.0, 2.0 );
* // returns ~4.743
*
* @example
* var y = skewness( 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = skewness( 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = skewness( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = skewness( 1.0, NaN );
* // returns NaN
*
* @example
* var y = skewness( 0.0, 0.0 );
* // returns NaN
*/
function skewness( mu, lambda ) {
	if (
		isnan( mu ) ||
		isnan( lambda ) ||
		mu <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	return 3.0 * sqrt( mu / lambda );
}


// EXPORTS //

module.exports = skewness;
