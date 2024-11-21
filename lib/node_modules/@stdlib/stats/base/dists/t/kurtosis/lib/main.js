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
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the excess kurtosis of a Student's t distribution.
*
* @param {NonNegativeNumber} v - degrees of freedom
* @returns {NonNegativeNumber} excess kurtosis
*
* @example
* var v = kurtosis( 9.0 );
* // returns 1.2
*
* @example
* var v = kurtosis( 5.0 );
* // returns 6.0
*
* @example
* var v = kurtosis( 3.0 );
* // returns Infinity
*
* @example
* var v = kurtosis( 0.5 );
* // returns NaN
*
* @example
* var v = kurtosis( -0.2 );
* // returns NaN
*
* @example
* var v = kurtosis( NaN );
* // returns NaN
*/
function kurtosis( v ) {
	if ( isnan( v ) || v <= 2.0 ) {
		return NaN;
	}
	if ( v <= 4.0 ) {
		return PINF;
	}
	return 6.0 / ( v - 4.0 );
}


// EXPORTS //

module.exports = kurtosis;
