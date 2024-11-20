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

var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );


// MAIN //

/**
* Restricts a single-precision floating-point number to a specified range.
*
* @param {number} v - input value
* @param {number} min - minimum value
* @param {number} max - maximum value
* @returns {number} value restricted to a specified range
*
* @example
* var v = clampf( 3.0, 0.0, 5.0 );
* // returns 3.0
*
* v = clampf( -3.0, 0.0, 5.0 );
* // returns 0.0
*
* v = clampf( 10.0, 0.0, 5.0 );
* // returns 5.0
*
* v = clampf( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = clampf( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = clampf( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = clampf( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = clampf( 3.14, 0.0, NaN );
* // returns NaN
*/
function clampf( v, min, max ) {
	if (
		isnanf( v ) ||
		isnanf( min ) ||
		isnanf( max )
	) {
		return NaN;
	}
	// Simple cases...
	if ( v < min ) {
		return min;
	}
	if ( v > max ) {
		return max;
	}
	// Special cases for handling +-0.0...
	if ( min === 0.0 && isNegativeZerof( v ) ) {
		return min; // +-0.0
	}
	if ( v === 0.0 && isNegativeZerof( max ) ) {
		return max; // -0.0
	}
	// Case: min <= v <= max
	return v;
}


// EXPORTS //

module.exports = clampf;
