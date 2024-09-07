/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Computes `x * ln(y)` so that the result is `0` if `x = 0` for single-precision floating-point numbers `x` and `y`.
*
* @private
* @param {number} x - input value
* @param {number} y - input value
* @returns {number} function value
*
* @example
* var v = xlogyf( 3.0, 2.0 );
* // returns ~2.079
*
* @example
* var v = xlogyf( 0.0, 2.0 );
* // returns 0.0
*/
function xlogyf( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = xlogyf;
