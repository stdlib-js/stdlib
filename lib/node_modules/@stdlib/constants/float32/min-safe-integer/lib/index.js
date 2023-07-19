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
* Minimum safe single-precision floating-point integer.
*
* @module @stdlib/constants/float32/min-safe-integer
* @type {number}
*
* @example
* var FLOAT32_MIN_SAFE_INTEGER = require( '@stdlib/constants/float32/min-safe-integer' );
* // returns -16777215
*/


// MAIN //

/**
* Minimum safe single-precision floating-point integer.
*
* ## Notes
*
* The minimum safe integer is given by
*
* ```tex
* -(2^{24} - 1)
* ```
*
* @constant
* @type {number}
* @default -16777215
* @see [Safe Integers]{@link http://www.2ality.com/2013/10/safe-integers.html}
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_SAFE_INTEGER = -16777215;


// EXPORTS //

module.exports = FLOAT32_MIN_SAFE_INTEGER;
