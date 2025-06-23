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
* Natural logarithm of the square root of `2π`.
*
* @module @stdlib/constants/float32/ln-sqrt-two-pi
* @type {number}
*
* @example
* var FLOAT32_LN_SQRT_TWO_PI = require( '@stdlib/constants/float32/ln-sqrt-two-pi' );
* // returns 0.9189385175704956
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Natural logarithm of the square root of `2π`.
*
* ```tex
* \ln \sqrt{2\pi}
* ```
*
* @constant
* @type {number}
* @default 0.9189385175704956
*/
var FLOAT32_LN_SQRT_TWO_PI = float64ToFloat32( 0.9189385332046728 );


// EXPORTS //

module.exports = FLOAT32_LN_SQRT_TWO_PI;
