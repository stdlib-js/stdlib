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
* Base 10 logarithm of Euler's number.
*
* @module @stdlib/constants/float32/log10-e
* @type {number}
*
* @example
* var FLOAT32_LOG10E = require( '@stdlib/constants/float32/log10-e' );
* // returns 0.4342944920063019
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Base 10 logarithm of Euler's number.
*
* @constant
* @type {number}
* @default 0.4342944920063019
* @see [OEIS]{@link https://oeis.org/A001113}
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/E_%27mathematical_constant%28}
*/
var FLOAT32_LOG10E = float64ToFloat32( 0.4342944819032518 );


// EXPORTS //

module.exports = FLOAT32_LOG10E;
