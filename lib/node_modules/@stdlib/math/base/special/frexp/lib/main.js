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

var fcn = require( './assign.js' );


// MAIN //

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
*
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
	return fcn( x, [ 0.0, 0 ], 1, 0 );
}


// EXPORTS //

module.exports = frexp;
