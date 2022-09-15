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
var ln = require( '@stdlib/math/base/special/ln' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// VARIABLES //

var LLN2 = ln( LN2 );


// MAIN //

/**
* Returns the median for a Gumbel distribution with location `mu` and scale `beta`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} median
*
* @example
* var y = median( 0.0, 1.0 );
* // returns ~0.367
*
* @example
* var y = median( 5.0, 2.0 );
* // returns ~5.733
*
* @example
* var y = median( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = median( 0.0, NaN );
* // returns NaN
*
* @example
* var y = median( 0.0, 0.0 );
* // returns NaN
*/
function median( mu, beta ) {
	if (
		isnan( mu ) ||
		isnan( beta ) ||
		beta <= 0.0
	) {
		return NaN;
	}
	return mu - ( beta * LLN2 );
}


// EXPORTS //

module.exports = median;
