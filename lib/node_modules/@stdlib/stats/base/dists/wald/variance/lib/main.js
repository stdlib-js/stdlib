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


// MAIN //

/**
* Returns the variance for a Wald distribution with mean `mu` and shape parameter `lambda`.
*
* @param {PositiveNumber} mu - mean
* @param {PositiveNumber} lambda - shape parameter
* @returns {PositiveNumber} variance
*
* @example
* var y = variance( 5.0, 3.0 );
* // returns ~41.67
*
* @example
* var y = variance( 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = variance( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = variance( 0.0, NaN );
* // returns NaN
*
* @example
* var y = variance( 1.0, 0.0 );
* // returns NaN
*/
function variance( mu, lambda ) {
	if (
		isnan( mu ) ||
		isnan( lambda ) ||
		mu <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	return (mu * mu * mu) / lambda;
}


// EXPORTS //

module.exports = variance;
