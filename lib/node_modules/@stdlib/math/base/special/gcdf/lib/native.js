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
* Computes the greatest common divisor (gcd) of two single-precision floating point numbers.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {number} greatest common divisor
*
* @example
* var v = gcdf( 0.0, 0.0 );
* // returns 0.0
*
* @example
* var v = gcdf( 48.0, 18.0 );
* // returns 6.0
*/
function gcdf( a, b ) {
	return addon( a, b );
}


// EXPORTS //

module.exports = gcdf;
