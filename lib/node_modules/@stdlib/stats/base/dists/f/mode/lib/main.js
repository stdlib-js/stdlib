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

// MAIN //

/**
* Returns the mode of an F distribution.
*
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {PositiveNumber} mode
*
* @example
* var v = mode( 3.0, 5.0 );
* // returns ~0.238
*
* @example
* var v = mode( 4.0, 12.0 );
* // returns ~0.429
*
* @example
* var v = mode( 8.0, 4.0 );
* // returns 0.5
*
* @example
* var v = mode( 3.0, -0.1 );
* // returns NaN
*
* @example
* var v = mode( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = mode( 3.0, NaN );
* // returns NaN
*
* @example
* var v = mode( NaN, 2.0 );
* // returns NaN
*/
function mode( d1, d2 ) {
	if ( d1 <= 2.0 || d2 <= 0.0 ) {
		return NaN;
	}
	return ( ( d1-2.0 ) / d1 ) * ( d2 / ( d2+2.0 ) );
}


// EXPORTS //

module.exports = mode;
