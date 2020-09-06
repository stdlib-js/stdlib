/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isInfinitef = require( '@stdlib/math/base/assert/is-infinitef' );
var PINF = require( '@stdlib/constants/math/float32-pinf' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the hypotenuse avoiding overflow and underflow (single-precision).
*
* @param {number} x - number
* @param {number} y - number
* @returns {number} hypotenuse
*
* @example
* var h = hypotf( -5.0, 12.0 );
* // returns 13.0
*
* @example
* var h = hypotf( NaN, 12.0 );
* // returns NaN
*
* @example
* var h = hypotf( -0.0, -0.0 );
* // returns 0.0
*/
function hypotf( x, y ) {
	var tmp;
	if ( isnanf( x ) || isnanf( y ) ) {
		return NaN;
	}
	if ( isInfinitef( x ) || isInfinitef( y ) ) {
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
	y = float64ToFloat32( y / x );
	return float64ToFloat32( x * float64ToFloat32( sqrt( float64ToFloat32( 1.0 + float64ToFloat32(y*y) ) ) ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = hypotf;
