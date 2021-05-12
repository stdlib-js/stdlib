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
* Square root of half-precision floating-point epsilon.
*
* @module @stdlib/constants/float16/sqrt-eps
* @type {number}
*
* @example
* var FLOAT16_SQRT_EPSILON = require( '@stdlib/constants/float16/sqrt-eps' );
* // returns 0.03125
*/


// MAIN //

/**
* Square root of half-precision floating-point epsilon.
*
* ```tex
* \sqrt{\frac{1}{2^{10}}}
* ```
*
* @constant
* @type {number}
* @default 0.03125
* @see [Half-precision floating-point format]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
* @see [Machine Epsilon]{@link https://en.wikipedia.org/wiki/Machine_epsilon}
*/
var FLOAT16_SQRT_EPSILON = 0.03125;


// EXPORTS //

module.exports = FLOAT16_SQRT_EPSILON;
