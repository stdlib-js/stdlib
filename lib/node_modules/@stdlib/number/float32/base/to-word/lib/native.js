/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number.
*
* @private
* @param {number} x - single-precision floating-point number
* @returns {unsigned32} unsigned 32-bit integer
*
* @example
* var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var f32 = float64ToFloat32( 1.337 );
* // returns 1.3370000123977661
*
* var w = toWordf( f32 ); // => 0 01111111 01010110010001011010001
* // returns 1068180177
*/
function toWordf( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = toWordf;
