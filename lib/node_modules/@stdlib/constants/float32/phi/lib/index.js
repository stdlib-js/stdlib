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
* Golden ratio.
*
* @module @stdlib/constants/float32/phi
* @type {number}
*
* @example
* var FLOAT32_PHI = require( '@stdlib/constants/float32/phi' );
* // returns 1.6180340051651
*/

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Golden ratio.
*
* @constant
* @type {number}
* @default 1.6180340051651
* @see [OEIS]{@link http://oeis.org/A001622}
* @see [Wikipedia]{@link https://en.wikipedia.org/wiki/Golden_ratio}
*/
var FLOAT32_PHI = float64ToFloat32( 1.61803398874989484820458683436563811772030917980576286213544862 ); // eslint-disable-line max-len


// EXPORTS //

module.exports = FLOAT32_PHI;
