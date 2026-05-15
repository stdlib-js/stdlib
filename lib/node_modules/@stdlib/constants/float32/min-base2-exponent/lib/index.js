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
* The minimum biased base 2 exponent for a normal single-precision floating-point number.
*
* @module @stdlib/constants/float32/min-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT32_MIN_BASE2_EXPONENT = require( '@stdlib/constants/float32/min-base2-exponent' );
* // returns -126
*/


// MAIN //

/**
* The minimum biased base 2 exponent for a normal single-precision floating-point number.
*
* ```text
* 1 - BIAS = -126
* ```
*
* where `BIAS = 127`.
*
* @constant
* @type {integer32}
* @default -126
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_BASE2_EXPONENT = -126|0; // eslint-disable-line id-length


// EXPORTS //

module.exports = FLOAT32_MIN_BASE2_EXPONENT;
