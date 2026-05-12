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
* Maximum safe nth Tribonacci number when stored in double-precision floating-point format.
*
* @module @stdlib/constants/float64/max-safe-nth-tribonacci
* @type {integer}
*
* @example
* var FLOAT64_MAX_SAFE_NTH_TRIBONACCI = require( '@stdlib/constants/float64/max-safe-nth-tribonacci' );
* // returns 63
*/


// MAIN //

/**
* Maximum safe nth Tribonacci number when stored in double-precision floating-point format.
*
* @constant
* @type {integer}
* @default 63
* @see [Tribonacci number]{@link https://en.wikipedia.org/wiki/Tribonacci_number}
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MAX_SAFE_NTH_TRIBONACCI = 63|0; // eslint-disable-line id-length


// EXPORTS //

module.exports = FLOAT64_MAX_SAFE_NTH_TRIBONACCI;
