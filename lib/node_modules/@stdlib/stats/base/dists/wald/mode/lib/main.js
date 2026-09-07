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
* Returns the mode for a Wald distribution with mean `mu` and shape parameter `lambda`.
*
* @param {PositiveNumber} mu - mean
* @param {PositiveNumber} lambda - shape parameter
* @returns {number} mode
*
* @example
* var y = mode( 5.0, 2.0 );
* // returns ~0.655
*
* @example
* var y = mode( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mode( 1.0, NaN );
* // returns NaN
*
* @example
* var y = mode( 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = mode( 0.0, 1.0 );
* // returns NaN
*/
function mode( mu, lambda ) {
	var r;
	var v;
	if (
		isnan( mu ) ||
		isnan( lambda ) ||
		mu <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	r = mu / lambda;
	v = 1.5 * r;
	return mu * ( sqrt( 1.0 + ( v*v ) ) - v );
}


// EXPORTS //

module.exports = mode;
