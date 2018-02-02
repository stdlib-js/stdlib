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
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the hypotenuse avoiding overflow and underflow.
*
* @param {number} x - number
* @param {number} y - number
* @returns {number} hypotenuse
*
* @example
* var h = hypot( -5.0, 12.0 );
* // returns 13.0
*
* @example
* var h = hypot( NaN, 12.0 );
* // returns NaN
*
* @example
* var h = hypot( -0.0, -0.0 );
* // returns 0.0
*/
function hypot( x, y ) {
	var tmp;
	if ( isnan( x ) || isnan( y ) ) {
		return NaN;
	}
	if ( isInfinite( x ) || isInfinite( y ) ) {
		return PINF;
	}
	if ( x < 0.0 ) {
		x = -x;
	}
	if ( y < 0.0 ) {
		y = -y;
	}
	if ( x < y ) {
		tmp = y;
		y = x;
		x = tmp;
	}
	if ( x === 0.0 ) {
		return 0.0;
	}
	y /= x;
	return x * sqrt( 1.0 + (y*y) );
}


// EXPORTS //

module.exports = hypot;
