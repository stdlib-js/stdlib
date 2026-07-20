/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Splits a single-precision floating-point number into a normalized fraction and an integer power of two.
*
* @private
* @param {number} x - input value
* @returns {Float32Array} output array
*
* @example
* var out = frexpf( 4.0 );
* // returns <Float32Array>[ 0.5, 3 ]
*
* @example
* var out = frexpf( 0.0 );
* // returns <Float32Array>[ 0.0, 0 ]
*
* @example
* var out = frexpf( -0.0 );
* // returns <Float32Array>[ -0.0, 0 ]
*
* @example
* var out = frexpf( NaN );
* // returns <Float32Array>[ NaN, 0 ]
*
* @example
* var out = frexpf( Infinity );
* // returns <Float32Array>[ Infinity , 0 ]
*
* @example
* var out = frexpf( -Infinity );
* // returns <Float32Array>[ -Infinity , 0 ]
*/
function frexpf( x ) {
	var out = new Float32Array( 2 );
	addon( x, out );
	return out;
}


// EXPORTS //

module.exports = frexpf;
