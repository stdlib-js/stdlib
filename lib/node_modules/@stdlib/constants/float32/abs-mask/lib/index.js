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
* Mask for excluding the sign bit of a single-precision floating-point number.
*
* @module @stdlib/constants/float32/abs-mask
* @type {uinteger32}
*
* @example
* var FLOAT32_ABS_MASK = require( '@stdlib/constants/float32/abs-mask' );
* // returns 2147483647
*/


// MAIN //

/**
* Mask for excluding the sign bit of a single-precision floating-point number.
*
* ## Notes
*
* The high word mask for excluding the sign bit of a single-precision floating-point number is an unsigned 32-bit integer with the value \\( 2147483647 \\), which corresponds to the bit sequence
*
* ```binarystring
* 0 11111111 11111111111111111111111
* ```
*
* @constant
* @type {uinteger32}
* @default 0x7fffffff
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_ABS_MASK = 0x7fffffff>>>0;


// EXPORTS //

module.exports = FLOAT32_ABS_MASK;
