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
* Fourth root of double-precision floating-point epsilon.
*
* @module @stdlib/constants/float64/fourth-root-eps
* @type {number}
*
* @example
* var FLOAT64_FOURTH_ROOT_EPS = require( '@stdlib/constants/float64/fourth-root-eps' );
* // returns 0.0001220703125
*/


// MAIN //

/**
* Fourth root of double-precision floating-point epsilon.
*
* ```tex
* \sqrt{\sqrt{\frac{1}{2^{52}}}}
* ```
*
* @constant
* @type {number}
* @default 0.0001220703125
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
* @see [Machine Epsilon]{@link https://en.wikipedia.org/wiki/Machine_epsilon}
*/
var FLOAT64_FOURTH_ROOT_EPS = 0.0001220703125;


// EXPORTS //

module.exports = FLOAT64_FOURTH_ROOT_EPS;
