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
* Square of the mathematical constant `π`.
*
* @module @stdlib/constants/float32/pi-squared
* @type {number}
*
* @example
* var FLOAT32_PI_SQUARED = require( '@stdlib/constants/float32/pi-squared' );
* // returns 9.869604110717773
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Square of the mathematical constant `π`.
*
* @constant
* @type {number}
* @default 9.869604110717773
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Pi}
*/
var FLOAT32_PI_SQUARED = float64ToFloat32( 9.869604401089358 );


// EXPORTS //

module.exports = FLOAT32_PI_SQUARED;
