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
* Smallest positive double-precision floating-point subnormal number.
*
* @module @stdlib/constants/float64/smallest-subnormal
* @type {number}
*
* @example
* var FLOAT64_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float64/smallest-subnormal' );
* // returns 4.940656458412465e-324
*/


// MAIN //

/**
* The smallest positive double-precision floating-point subnormal number.
*
* ## Notes
*
* The number has the value
*
* ```tex
* \frac{1}{2^{1023-1} 2^{52}}
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 0 00000000000 00000000000000000000 00000000000000000000000000000001
* ```
*
* @constant
* @type {number}
* @default 4.940656458412465e-324
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_SMALLEST_SUBNORMAL = 4.940656458412465e-324;


// EXPORTS //

module.exports = FLOAT64_SMALLEST_SUBNORMAL;
