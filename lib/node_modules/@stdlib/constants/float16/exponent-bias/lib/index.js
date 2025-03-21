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
* The bias of a half-precision floating-point number's exponent.
*
* @module @stdlib/constants/float16/exponent-bias
* @type {integer32}
*
* @example
* var FLOAT16_EXPONENT_BIAS = require( '@stdlib/constants/float16/exponent-bias' );
* // returns 15
*/


// MAIN //

/**
* The bias of a half-precision floating-point number's exponent.
*
* ## Notes
*
* The bias can be computed via
*
* ```tex
* \mathrm{bias} = 2^{k-1} - 1
* ```
*
* where \\(k\\) is the number of bits in the exponent; here, \\(k = 5\\).
*
* @constant
* @type {integer32}
* @default 15
* @see [Half-precision floating-point format]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
*/
var FLOAT16_EXPONENT_BIAS = 15|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_EXPONENT_BIAS;
