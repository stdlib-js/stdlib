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

var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );


// VARIABLES //

var DENOM = 2.0 * pow( erfcinv( 0.5 ), 2.0 );


// MAIN //

/**
* Returns the median for a Lévy distribution with location `mu` and scale `c`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} c - scale parameter
* @returns {number} median
*
* @example
* var y = median( 0.0, 1.0 );
* // returns ~2.198
*
* @example
* var y = median( 5.0, 2.0 );
* // returns ~9.396
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
function median( mu, c ) {
	if (
		isnan( mu ) ||
		isnan( c ) ||
		c <= 0.0
	) {
		return NaN;
	}
	return mu + ( c / DENOM );
}


// EXPORTS //

module.exports = median;
