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
var isInteger = require( '@stdlib/math/base/assert/is-integer' );


// MAIN //

/**
* Returns the median of a discrete uniform distribution.
*
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} median
*
* @example
* var v = median( 0, 1 );
* // returns 0.5
*
* @example
* var v = median( -4, 4 );
* // returns 0.0
*
* @example
* var v = median( 0, 10 );
* // returns 5.0
*
* @example
* var v = median( 1, -0.1 );
* // returns NaN
*
* @example
* var v = median( -0.1, 1 );
* // returns NaN
*
* @example
* var v = median( 2, NaN );
* // returns NaN
*
* @example
* var v = median( NaN, 2 );
* // returns NaN
*/
function median( a, b ) {
	if (
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return NaN;
	}
	return ( a/2 ) + ( b/2 );
}


// EXPORTS //

module.exports = median;
