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

var PI = require( '@stdlib/constants/float64/pi' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns the excess kurtosis of a half-normal distribution.
*
* @param {PositiveNumber} sigma - scale parameter
* @returns {number} excess kurtosis
*/
function kurtosis( sigma ) {
	if ( isnan( sigma ) || sigma <= 0.0 ) {
		return NaN;
	}
	return ( 8.0 * ( PI - 3.0 ) ) / ( ( PI - 2.0 ) * ( PI - 2.0 ) );
}


// EXPORTS //

module.exports = kurtosis;
