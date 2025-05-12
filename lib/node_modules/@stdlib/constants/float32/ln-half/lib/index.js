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
* Natural logarithm of `1/2` as a single-precision floating-point number.
*
* @module @stdlib/constants/float32/ln-half
* @type {number}
*
* @example
* var LN_HALF = require( '@stdlib/constants/float32/ln-half' );
* // returns -0.6931471824645996
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Natural logarithm of `1/2` as a single-precision floating-point number.
*
* ```tex
* \ln (1/2)
* ```
*
* @constant
* @type {number}
* @default -0.6931471824645996
*/
var FLOAT32_LN_HALF = float64ToFloat32(-0.69314718055994530941723212145817656807550013436025525412); // eslint-disable-line max-len


// EXPORTS //

module.exports = FLOAT32_LN_HALF;
