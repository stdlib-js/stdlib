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
* Smallest positive half-precision floating-point normal number.
*
* @module @stdlib/constants/float16/smallest-normal
* @type {number}
*
* @example
* var FLOAT16_SMALLEST_NORMAL = require( '@stdlib/constants/float16/smallest-normal' );
* // returns 6.103515625e-5
*/


// MAIN //

/**
* Smallest positive half-precision floating-point normal number.
*
* ## Notes
*
* The number has the value
*
* ```tex
* \frac{1}{2^{15-1}}
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 0 00001 0000000000
* ```
*
* @constant
* @type {number}
* @default 6.103515625e-5
* @see [Half-precision floating-point format]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
*/
var FLOAT16_SMALLEST_NORMAL = 6.103515625e-5;


// EXPORTS //

module.exports = FLOAT16_SMALLEST_NORMAL;
