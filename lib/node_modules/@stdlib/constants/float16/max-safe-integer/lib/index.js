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
* Maximum safe half-precision floating-point integer.
*
* @module @stdlib/constants/float16/max-safe-integer
* @type {number}
*
* @example
* var FLOAT16_MAX_SAFE_INTEGER = require( '@stdlib/constants/float16/max-safe-integer' );
* // returns 2047
*/


// MAIN //

/**
* The maximum safe half-precision floating-point integer.
*
* ## Notes
*
* The maximum is equal to
*
* ```tex
* 2^{11} - 1
* ```
*
* @constant
* @type {number}
* @default 2047
* @see [Safe Integers]{@link http://www.2ality.com/2013/10/safe-integers.html}
* @see [Half-precision floating-point format]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
*/
var FLOAT16_MAX_SAFE_INTEGER = 2047;


// EXPORTS //

module.exports = FLOAT16_MAX_SAFE_INTEGER;
