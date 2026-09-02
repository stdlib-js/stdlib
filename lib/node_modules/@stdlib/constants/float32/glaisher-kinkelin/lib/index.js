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
* Glaisher-Kinkelin constant.
*
* @module @stdlib/constants/float32/glaisher-kinkelin
* @type {number}
*
* @example
* var FLOAT32_GLAISHER = require( '@stdlib/constants/float32/glaisher-kinkelin' );
* // returns 1.2824270725250244
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Glaisher-Kinkelin constant.
*
* @constant
* @type {number}
* @default 1.2824270725250244
* @see [OEIS]{@link https://oeis.org/A074962}
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Glaisher%E2%80%93Kinkelin_constant}
*/
var FLOAT32_GLAISHER = float64ToFloat32( 1.2824271291006226 );


// EXPORTS //

module.exports = FLOAT32_GLAISHER;
