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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns an unsigned 16-bit integer corresponding to the IEEE 754 binary representation of a half-precision floating-point number.
*
* @private
* @param {number} x - half-precision floating-point number
* @returns {unsigned16} unsigned 16-bit integer
*
* @example
* var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
*
* var f16 = float64ToFloat16( 1.337 );
* // returns 1.3369140625
*
* var w = toWord( f16 ); // => 0 01111 0101011001
* // returns 15705
*/
function toWord( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = toWord;
