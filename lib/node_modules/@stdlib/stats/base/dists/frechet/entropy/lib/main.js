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
var GAMMA = require( '@stdlib/constants/float64/eulergamma' );


// MAIN //

/**
* Returns the differential entropy for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {PositiveNumber} entropy
*
* @example
* var y = entropy( 1.0, 1.0, 0.0 );
* // returns ~2.154
*
* @example
* var y = entropy( 5.0, 2.0, 0.0 );
* // returns ~0.776
*
* @example
* var y = entropy( NaN, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = entropy( 1.0, NaN, 0.0 );
* // returns NaN
*
* @example
* var y = entropy( 1.0, 1.0, NaN );
* // returns NaN
*/
function entropy( alpha, s, m ) {
	if (
		isnan( alpha ) ||
		isnan( s ) ||
		isnan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return NaN;
	}
	return 1.0 + ( GAMMA / alpha ) + GAMMA + ln( s / alpha );
}


// EXPORTS //

module.exports = entropy;
