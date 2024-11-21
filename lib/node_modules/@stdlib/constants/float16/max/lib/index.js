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
* Maximum half-precision floating-point number.
*
* @module @stdlib/constants/float16/max
* @type {number}
*
* @example
* var FLOAT16_MAX = require( '@stdlib/constants/float16/max' );
* // returns 65504.0
*/


// MAIN //

/**
* The maximum half-precision floating-point number.
*
* ## Notes
*
* The maximum is given by
*
* ```tex
* 2^{15} (2 - 2^{-10})
* ```
*
* @constant
* @type {number}
* @default 65504.0
* @see [half-precision floating-point form]{@link https://en.wikipedia.org/wiki/Half-precision_floating-point_format}
*/
var FLOAT16_MAX = 65504.0;


// EXPORTS //

module.exports = FLOAT16_MAX;
