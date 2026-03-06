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
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var log2 = require( '@stdlib/math/base/special/log2' );


// MAIN //

/**
* Rounds a numeric value to the nearest power of two toward zero.
*
* @param {number} x - input value
* @returns {number} rounded value
*
* @example
* var v = trunc2( 3.141592653589793 );
* // returns 2.0
*
* @example
* var v = trunc2( 13.0 );
* // returns 8.0
*
* @example
* var v = trunc2( -0.314 );
* // returns -0.25
*/
function trunc2( x ) {
	var sign;
	if (
		isnan( x ) ||
		isInfinite( x ) ||
		x === 0.0
	) {
		return x;
	}
	if ( x < 0 ) {
		x = -x;
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	return sign * pow( 2.0, floor( log2( x ) ) );
}


// EXPORTS //

module.exports = trunc2;
