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
var SQRT_PI = require( '@stdlib/constants/float64/sqrt-pi' );
var PI = require( '@stdlib/constants/float64/pi' );


// VARIABLES //

var SKEWNESS = 2.0 * SQRT_PI * ( PI-3.0 ) / pow( 4.0-PI, 1.5 );


// MAIN //

/**
* Returns the skewness of a Rayleigh distribution.
*
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {NonNegativeNumber} skewness
*
* @example
* var v = skewness( 9.0 );
* // returns ~0.631
*
* @example
* var v = skewness( 2.0 );
* // returns ~0.631
*
* @example
* var v = skewness( -0.2 );
* // returns NaN
*
* @example
* var v = skewness( NaN );
* // returns NaN
*/
function skewness( sigma ) {
	if ( isnan( sigma ) || sigma < 0.0 ) {
		return NaN;
	}
	return SKEWNESS;
}


// EXPORTS //

module.exports = skewness;
