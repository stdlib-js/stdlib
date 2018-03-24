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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns the mode for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {number} mode
*
* @example
* var y = mode( 5.0, 2.0, 0.0 );
* // returns ~1.928
*
* @example
* var y = mode( 5.0, 2.0, -5.0 );
* // returns ~-3.072
*
* @example
* var y = mode( 1.0, 1.0, 0.0 );
* // returns ~0.5
*
* @example
* var y = mode( NaN, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = mode( 1.0, NaN, 0.0 );
* // returns NaN
*
* @example
* var y = mode( 1.0, 1.0, NaN );
* // returns NaN
*/
function mode( alpha, s, m ) {
	var ainv;
	if (
		isnan( alpha ) ||
		isnan( s ) ||
		isnan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return NaN;
	}
	ainv = 1.0 / alpha;
	return m + ( s * pow( 1.0+ainv, -ainv ) );
}


// EXPORTS //

module.exports = mode;
