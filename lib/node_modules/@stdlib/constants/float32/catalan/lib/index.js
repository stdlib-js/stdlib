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
* Catalan's constant.
*
* @module @stdlib/constants/float32/catalan
* @type {number}
*
* @example
* var FLOAT32_CATALAN = require( '@stdlib/constants/float32/catalan' );
* // returns 0.9159656167030334
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Catalan's constant.
*
* @constant
* @type {number}
* @default 0.9159656167030334
* @see [OEIS]{@link http://oeis.org/A006752}
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Catalan%27s_constant}
*/
var FLOAT32_CATALAN = float64ToFloat32( 0.915965594177219 );


// EXPORTS //

module.exports = FLOAT32_CATALAN;
