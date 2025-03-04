/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* The maximum biased base 2 exponent for a single-precision floating-point number.
*
* @module @stdlib/constants/float32/max-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT32_MAX_BASE2_EXPONENT = require( '@stdlib/constants/float32/max-base2-exponent' );
* // returns 127
*/


// MAIN //

/**
* The maximum biased base 2 exponent for a single-precision floating-point number.
*
* ```text
* 11111110 => 254 - BIAS = 127
* ```
*
* where `BIAS = 127`.
*
* @constant
* @type {integer32}
* @default 127
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MAX_BASE2_EXPONENT = 127|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MAX_BASE2_EXPONENT;
