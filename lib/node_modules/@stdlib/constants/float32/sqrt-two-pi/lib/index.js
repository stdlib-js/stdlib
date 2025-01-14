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
* Square root of the mathematical constant `π` times `2` as a single-precision floating-point number.
*
* @module @stdlib/constants/float32/sqrt-two-pi
* @type {number}
*
* @example
* var FLOAT32_SQRT_TWO_PI = require( '@stdlib/constants/float32/sqrt-two-pi' );
* // returns 2.5066282749176025
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Square root of the mathematical constant `π` times `2` as a single-precision floating-point number.
*
* @constant
* @type {number}
* @default 2.5066282749176025
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Pi}
*/
var FLOAT32_SQRT_TWO_PI = float64ToFloat32( 2.506628274631000502415765284811045253e+00 ); // eslint-disable-line max-len


// EXPORTS //

module.exports = FLOAT32_SQRT_TWO_PI;
