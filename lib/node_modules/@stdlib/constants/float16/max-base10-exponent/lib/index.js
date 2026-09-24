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

/**
* The maximum base 10 exponent for a half-precision floating-point number.
*
* @module @stdlib/constants/float16/max-base10-exponent
* @type {integer32}
*
* @example
* var FLOAT16_MAX_BASE10_EXPONENT = require( '@stdlib/constants/float16/max-base10-exponent' );
* // returns 4
*/


// MAIN //

/**
* The maximum base 10 exponent for a half-precision floating-point number.
*
* @constant
* @type {integer32}
* @default 4
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT16_MAX_BASE10_EXPONENT = 4|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_MAX_BASE10_EXPONENT;
