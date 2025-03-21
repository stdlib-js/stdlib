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


// MAIN //

/**
* Returns the differential entropy for a logistic distribution with location `mu` and scale `s`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} s - scale parameter
* @returns {number} entropy
*
* @example
* var y = entropy( 0.0, 1.0 );
* // returns 2.0
*
* @example
* var y = entropy( 5.0, 2.0 );
* // returns ~2.693
*
* @example
* var y = entropy( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = entropy( 0.0, NaN );
* // returns NaN
*
* @example
* var y = entropy( 0.0, 0.0 );
* // returns NaN
*/
function entropy( mu, s ) {
	if (
		isnan( mu ) ||
		isnan( s ) ||
		s <= 0.0
	) {
		return NaN;
	}
	return ln( s ) + 2.0;
}


// EXPORTS //

module.exports = entropy;
