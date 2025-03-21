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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
*
* @private
* @param {number} x - input value
* @returns {Array<number>} output array
*
* @example
* var out = frexp( 4.0 );
* // returns [ 0.5, 3 ]
*
* @example
* var out = frexp( 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var out = frexp( -0.0 );
* // returns [ -0.0, 0 ]
*
* @example
* var out = frexp( NaN );
* // returns [ NaN, 0 ]
*
* @example
* var out = frexp( Infinity );
* // returns [ Infinity , 0 ]
*
* @example
* var out = frexp( -Infinity );
* // returns [ -Infinity , 0 ]
*/
function frexp( x ) {
	var out = new Float64Array( 2 );
	addon( out, x );
	return [ out[ 0 ], out[ 1 ] ];
}


// EXPORTS //

module.exports = frexp;
