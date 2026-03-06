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

/**
* Smallest positive single-precision floating-point subnormal number.
*
* @module @stdlib/constants/float32/smallest-subnormal
* @type {number}
*
* @example
* var FLOAT32_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float32/smallest-subnormal' );
* // returns 1.401298464324817e-45
*/


// MAIN //

/**
* Smallest positive single-precision floating-point subnormal number.
*
* ## Notes
*
* The number has the value
*
* ```tex
* \frac{1}{2^{127-1} 2^{23}}
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 0 00000000 00000000000000000000001
* ```
*
* @constant
* @type {number}
* @default 1.401298464324817e-45
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_SMALLEST_SUBNORMAL = 1.401298464324817e-45;


// EXPORTS //

module.exports = FLOAT32_SMALLEST_SUBNORMAL;
