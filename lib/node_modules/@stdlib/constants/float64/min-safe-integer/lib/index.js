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
* Minimum safe double-precision floating-point integer.
*
* @module @stdlib/constants/float64/min-safe-integer
* @type {number}
*
* @example
* var FLOAT64_MIN_SAFE_INTEGER = require( '@stdlib/constants/float64/min-safe-integer' );
* // returns -9007199254740991
*/


// MAIN //

/**
* Minimum safe double-precision floating-point integer.
*
* ## Notes
*
* The number has the value
*
* ```tex
* -(2^{53} - 1)
* ```
*
* @constant
* @type {number}
* @default -9007199254740991
* @see [Safe Integers]{@link http://www.2ality.com/2013/10/safe-integers.html}
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MIN_SAFE_INTEGER = -9007199254740991;


// EXPORTS //

module.exports = FLOAT64_MIN_SAFE_INTEGER;
