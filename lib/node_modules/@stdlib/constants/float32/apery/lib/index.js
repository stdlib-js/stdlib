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
* Apéry's constant.
*
* @module @stdlib/constants/float32/apery
* @type {number}
*
* @example
* var FLOAT32_APERY = require( '@stdlib/constants/float32/apery' );
* // returns 1.202056884765625
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Apéry's constant.
*
* @constant
* @type {number}
* @default 1.202056884765625
* @see [OEIS]{@link https://oeis.org/A002117}
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Ap%C3%A9ry%27s_constant}
*/
var FLOAT32_APERY = float64ToFloat32( 1.2020569031595942 );


// EXPORTS //

module.exports = FLOAT32_APERY;
