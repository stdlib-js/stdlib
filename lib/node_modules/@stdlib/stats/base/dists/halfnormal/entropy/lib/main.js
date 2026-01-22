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
var ln = require( '@stdlib/math/base/special/ln' );
var GAMMA = require( '@stdlib/constants/float64/eulergamma' );
var SQRT_HALF_PI = require( '@stdlib/constants/float64/sqrt-half-pi' );


// MAIN //

/**
* Returns the differential entropy of a half-normal distribution.
*
* @param {PositiveNumber} sigma - scale parameter
* @returns {number} entropy
*
* @example
* var v = entropy( 1.0 );
* // returns ~1.014
*
* @example
* var v = entropy( 5.0 );
* // returns ~2.624
*
* @example
* var v = entropy( -0.2 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( sigma ) {
	if ( isnan( sigma ) || sigma <= 0.0 ) {
		return NaN;
	}
	return 0.5 + ln( sigma ) + ln( SQRT_HALF_PI ) + ( 0.5 * GAMMA );
}


// EXPORTS //

module.exports = entropy;
