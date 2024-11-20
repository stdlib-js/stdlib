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
* Difference between one and the smallest value greater than one that can be represented as a half-precision floating-point number.
*
* @module @stdlib/constants/float16/eps
* @type {number}
*
* @example
* var FLOAT16_EPSILON = require( '@stdlib/constants/float16/eps' );
* // returns 0.0009765625
*/


// MAIN //

/**
* Difference between one and the smallest value greater than one that can be represented as a half-precision floating-point number.
*
* ## Notes
*
* The difference is equal to
*
* ```tex
* \frac{1}{2^{10}}
* ```
*
* @constant
* @type {number}
* @default 0.0009765625
* @see [Half-precision floating-point format]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
* @see [Machine Epsilon]{@link https://en.wikipedia.org/wiki/Machine_epsilon}
*/
var FLOAT16_EPSILON = 0.0009765625; // In JavaScript, can only represent as a double-precision floating-point number (float64)


// EXPORTS //

module.exports = FLOAT16_EPSILON;
