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

var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the skewness of an F distribution.
*
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {PositiveNumber} skewness
*
* @example
* var v = skewness( 3.0, 7.0 );
* // returns 11.0
*
* @example
* var v = skewness( 4.0, 12.0 );
* // returns ~3.207
*
* @example
* var v = skewness( 8.0, 7.0 );
* // returns ~10.088
*
* @example
* var v = skewness( 1.0, 4.0 );
* // returns NaN
*
* @example
* var v = skewness( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = skewness( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = skewness( 2.0, NaN );
* // returns NaN
*
* @example
* var v = skewness( NaN, 2.0 );
* // returns NaN
*/
function skewness( d1, d2 ) {
	var out;
	if ( d1 <= 0.0 || d2 <= 6.0 ) {
		return NaN;
	}
	out = ( ( 2.0*d1 ) + d2 - 2.0 ) * sqrt( 8.0 * ( d2-4.0 ) );
	out /= ( d2-6.0 ) * sqrt( d1 * ( d1+d2-2.0 ) );
	return out;
}


// EXPORTS //

module.exports = skewness;
