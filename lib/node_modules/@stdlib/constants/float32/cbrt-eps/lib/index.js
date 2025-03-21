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
* Cube root of single-precision floating-point epsilon.
*
* @module @stdlib/constants/float32/cbrt-eps
* @type {number}
*
* @example
* var FLOAT32_CBRT_EPSILON = require( '@stdlib/constants/float32/cbrt-eps' );
* // returns 0.004921566694974899
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Cube root of single-precision floating-point epsilon.
*
* ```tex
* \sqrt[3]{\frac{1}{2^{23}}}
* ```
*
* @constant
* @type {number}
* @default 0.004921566694974899
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
* @see [Machine Epsilon]{@link https://en.wikipedia.org/wiki/Machine_epsilon}
*/
var FLOAT32_CBRT_EPSILON = float64ToFloat32( 0.004921566601151848 );


// EXPORTS //

module.exports = FLOAT32_CBRT_EPSILON;
