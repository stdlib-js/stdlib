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

/**
* Mask for the exponent of a single-precision floating-point number.
*
* @module @stdlib/constants/float32/exponent-mask
* @type {uinteger32}
*
* @example
* var FLOAT32_EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' );
* // returns 2139095040
*/


// MAIN //

/**
* Mask for the exponent of a single-precision floating-point number.
*
* ## Notes
*
* The mask for the exponent of a single-precision floating-point number is an unsigned 32-bit integer with the value \\( 2139095040 \\), which corresponds to the bit sequence
*
* ```binarystring
* 0 11111111 00000000000000000000000
* ```
*
* @constant
* @type {uinteger32}
* @default 0x7f800000
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_EXPONENT_MASK = 0x7f800000;


// EXPORTS //

module.exports = FLOAT32_EXPONENT_MASK;
