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
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );


// MAIN //

/**
* Returns the differential entropy of a Rayleigh distribution.
*
* @param {PositiveNumber} sigma - scale parameter
* @returns {number} entropy
*
* @example
* var v = entropy( 9.0 );
* // returns ~3.139
*
* @example
* var v = entropy( 2.0 );
* // returns ~1.635
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
	return 1.0 + ln( sigma / SQRT2 ) + ( 0.5 * GAMMA );
}


// EXPORTS //

module.exports = entropy;
