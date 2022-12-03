/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var Float32Array = require( '@stdlib/array/float32' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @private
* @param {number} x - input value
* @returns {Float32Array} output array
*
* @example
*
* @example
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var v = normalize( toFloat32( 1.401e-45 ) );
* // returns <Float32Array>[ ~0, -52 ]
*
* @example
* var v = normalize( 0.0 );
* // returns <Float32Array>[ 0, 0 ]
*
* @example
* var PINF = require( '@stdlib/constants/float32/pinf' );
*
* var v = normalize( PINF );
* // returns <Float32Array>[ Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants/float32/ninf' );
*
* var v = normalize( NINF );
* // returns <Float32Array>[ -Infinity, 0 ]
*
* @example
* var v = normalize( NaN );
* // returns <Float32Array>[ NaN, 0 ]
*/
function normalize( x ) {
	var out = new Float32Array( 2 );
	addon( out, x );
	return out;
}


// EXPORTS //

module.exports = normalize;
