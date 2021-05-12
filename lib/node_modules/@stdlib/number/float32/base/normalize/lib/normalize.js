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

var FLOAT32_SMALLEST_NORMAL = require( '@stdlib/constants/float32/smallest-normal' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var abs = require( '@stdlib/math/base/special/abs' );
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

// (1<<32)
var SCALAR = 8388608;


// MAIN //

/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} x - single-precision floating-point number
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var v = normalizef( [ 0.0, 0 ], toFloat32( 1.401e-45 ) );
* // returns [ 1.1754943508222875e-38, -23 ]
*
* @example
* var v = normalizef( [ 0.0, 0 ], 0.0 );
* // returns [ 0.0, 0 ];
*
* @example
* var PINF = require( '@stdlib/constants/float32/pinf' );
*
* var v = normalizef( [ 0.0, 0 ], PINF );
* // returns [ +Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants/float32/ninf' );
*
* var v = normalizef( [ 0.0, 0 ], NINF );
* // returns [ -Infinity, 0 ]
*
* @example
* var v = normalizef( [ 0.0, 0 ], NaN );
* // returns [ NaN, 0 ]
*/
function normalizef( out, x ) {
	if (
		x !== x ||
		x === PINF ||
		x === NINF
	) {
		out[ 0 ] = x;
		out[ 1 ] = 0;
		return out;
	}
	if ( x !== 0.0 && abs( x ) < FLOAT32_SMALLEST_NORMAL ) {
		x = toFloat32( x*SCALAR );
		out[ 0 ] = x;
		out[ 1 ] = -23;
		return out;
	}
	out[ 0 ] = x;
	out[ 1 ] = 0;
	return out;
}


// EXPORTS //

module.exports = normalizef;
