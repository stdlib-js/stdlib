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

var PINF = require( '@stdlib/constants/float64/pinf' );
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );


// MAIN //

/**
* Computes the absolute difference.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} absolute difference
*
* @example
* var d = absoluteDifference( 2.0, 5.0 );
* // returns 3.0
*
* @example
* var d = absoluteDifference( -1.0, 3.14 );
* // returns ~4.14
*
* @example
* var d = absoluteDifference( 10.1, -2.05 );
* // returns ~12.15
*
* @example
* var d = absoluteDifference( -0.0, 0.0 );
* // returns +0.0
*
* @example
* var d = absoluteDifference( NaN, 5.0 );
* // returns NaN
*
* @example
* var d = absoluteDifference( Infinity, -Infinity  );
* // returns Infinity
*
* @example
* var d = absoluteDifference( Infinity, Infinity  );
* // returns NaN
*/
function absoluteDifference( x, y ) {
	if ( isnan( x ) || isnan( y ) ) {
		return NaN;
	}
	if ( isInfinite( x ) || isInfinite( y ) ) {
		if ( x === y ) {
			return NaN;
		}
		return PINF;
	}
	return abs( x - y );
}


// EXPORTS //

module.exports = absoluteDifference;
