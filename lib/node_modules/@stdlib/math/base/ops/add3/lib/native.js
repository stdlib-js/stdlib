/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the sum of three double-precision floating-point numbers.
*
* @private
* @param {number} x - first input value
* @param {number} y - second input value
* @param {number} z - third input value
* @returns {number} sum
*
* @example
* var v = add3( -1.0, 5.0, 2.0 );
* // returns 6.0
*
* @example
* var v = add3( 2.0, 5.0, 2.0 );
* // returns 9.0
*
* @example
* var v = add3( 0.0, 5.0, 2.0 );
* // returns 7.0
*
* @example
* var v = add3( -0.0, 0.0, -0.0 );
* // returns 0.0
*
* @example
* var v = add3( NaN, NaN, NaN );
* // returns NaN
*/
function add3( x, y, z ) {
	return addon( x, y, z );
}


// EXPORTS //

module.exports = add3;
