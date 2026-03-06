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
var PI = require( '@stdlib/constants/float64/pi' );


// VARIABLES //

var KURTOSIS = -( ( 6.0*PI*PI ) - ( 24.0*PI ) + 16.0 ) / ( (4.0-PI)*(4.0-PI) );


// MAIN //

/**
* Returns the excess kurtosis of a Rayleigh distribution.
*
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {NonNegativeNumber} excess kurtosis
*
* @example
* var v = kurtosis( 9.0 );
* // returns ~0.245
*
* @example
* var v = kurtosis( 5.0 );
* // returns ~0.245
*
* @example
* var v = kurtosis( 3.0 );
* // returns ~0.245
*
* @example
* var v = kurtosis( -0.2 );
* // returns NaN
*
* @example
* var v = kurtosis( NaN );
* // returns NaN
*/
function kurtosis( sigma ) {
	if ( isnan( sigma ) || sigma < 0.0 ) {
		return NaN;
	}
	return KURTOSIS;
}


// EXPORTS //

module.exports = kurtosis;
