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
* Square root of the mathematical constant `π` as a single-precision floating-point number.
*
* @module @stdlib/constants/float32/sqrt-pi
* @type {number}
*
* @example
* var FLOAT32_SQRT_PI = require( '@stdlib/constants/float32/sqrt-pi' );
* // returns 1.7724539041519165
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Square root of the mathematical constant `π` as a single-precision floating-point number.
*
* @constant
* @type {number}
* @default 1.7724539041519165
* @see [OEIS]{@link https://oeis.org/A002161}
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Pi}
*/
var FLOAT32_SQRT_PI = float64ToFloat32( 1.772453850905516027298167483341145182797549456122387128213 ); // eslint-disable-line max-len


// EXPORTS //

module.exports = FLOAT32_SQRT_PI;
