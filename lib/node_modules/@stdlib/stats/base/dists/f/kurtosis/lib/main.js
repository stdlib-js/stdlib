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

var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns the excess kurtosis of an F distribution.
*
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {PositiveNumber} excess kurtosis
*
* @example
* var v = kurtosis( 3.0, 9.0 );
* // returns ~124.667
*
* @example
* var v = kurtosis( 4.0, 12.0 );
* // returns ~26.143
*
* @example
* var v = kurtosis( 8.0, 9.0 );
* // returns ~100.167
*
* @example
* var v = kurtosis( 1.0, 8.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = kurtosis( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 2.0, NaN );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 2.0 );
* // returns NaN
*/
function kurtosis( d1, d2 ) {
	var denom;
	var num;

	if ( d1 <= 0.0 || d2 <= 8.0 ) {
		return NaN;
	}
	num = ( d1 * ( ( 5.0*d2 ) - 22.0 ) * ( d1+d2-2.0 ) ) +
		( ( d2-4.0 ) * pow( d2-2.0, 2.0 ) );
	denom = d1 * ( d2-6.0 ) * ( d2-8.0 ) * ( d1+d2-2.0 );
	return 12.0 * num / denom;
}


// EXPORTS //

module.exports = kurtosis;
