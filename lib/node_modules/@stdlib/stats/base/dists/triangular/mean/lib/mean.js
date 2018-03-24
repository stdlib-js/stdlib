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


// MAIN //

/**
* Returns the expected value of a triangular distribution.
*
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} c - mode
* @returns {number} expected value
*
* @example
* var v = mean( 0.0, 1.0, 0.5 );
* // returns ~0.5
*
* @example
* var v = mean( 4.0, 12.0, 9.0 );
* // returns ~8.333
*
* @example
* var v = mean( -4.0, 4.0, -1.0 );
* // returns ~-0.333
*
* @example
* var v = mean( 1.0, -0.1, 0.5 );
* // returns NaN
*
* @example
* var v = mean( 0.0, 1.0, 2.0 );
* // returns NaN
*
* @example
* var v = mean( NaN, 4.0, 2.0 );
* // returns NaN
*
* @example
* var v = mean( 0.0, NaN, 2.0 );
* // returns NaN
*
* @example
* var v = mean( 0.0, 4.0, NaN );
* // returns NaN
*/
function mean( a, b, c ) {
	if (
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		!( a <= c && c <= b )
	) {
		return NaN;
	}
	return ( a + b + c ) / 3.0;
}


// EXPORTS //

module.exports = mean;
