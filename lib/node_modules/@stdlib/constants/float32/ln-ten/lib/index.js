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
* Natural logarithm of `10` as a single-precision floating-point number.
*
* @module @stdlib/constants/float32/ln-ten
* @type {number}
*
* @example
* var LN10 = require( '@stdlib/constants/float32/ln-ten' );
* // returns  2.3025851249694824
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Natural logarithm of `10` as a single-precision floating-point number.
*
* ```tex
* \ln 10
* ```
*
* @constant
* @type {number}
* @default 2.3025851249694824
*/
var FLOAT32_LN10 = float64ToFloat32( 2.30258509299404568401799145468436420760110148862877297603332790096757260967735248023599720508959829834196778404e+00 ); // eslint-disable-line max-len


// EXPORTS //

module.exports = FLOAT32_LN10;
