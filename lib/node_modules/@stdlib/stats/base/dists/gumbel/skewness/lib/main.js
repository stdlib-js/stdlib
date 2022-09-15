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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var zeta = require( '@stdlib/math/base/special/riemann-zeta' );
var PI = require( '@stdlib/constants/float64/pi' );


// VARIABLES //

var SKEWNESS = 12.0 * sqrt( 6.0 ) * zeta( 3.0 ) / ( PI*PI*PI );


// MAIN //

/**
* Returns the skewness for a Gumbel distribution with location `mu` and scale `beta`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} skewness
*
* @example
* var y = skewness( 0.0, 1.0 );
* // returns ~1.14
*
* @example
* var y = skewness( 5.0, 2.0 );
* // returns ~1.14
*
* @example
* var y = skewness( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = skewness( 0.0, NaN );
* // returns NaN
*
* @example
* var y = skewness( 0.0, 0.0 );
* // returns NaN
*/
function skewness( mu, beta ) {
	if (
		isnan( mu ) ||
		isnan( beta ) ||
		beta <= 0.0
	) {
		return NaN;
	}
	return SKEWNESS;
}


// EXPORTS //

module.exports = skewness;
