/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Tests if two single-precision floating-point numbers are approximately the same value within a specified number of ULPs (units in the last place).
*
* @private
* @param {number} a - first input value
* @param {number} b - second input value
* @param {number} maxULP - maximum allowed ULP difference
* @returns {boolean} boolean indicating whether two single-precision floating-point numbers are approximately the same value within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float32/eps' );
*
* var bool = isAlmostSameValue( 1.0, 1.0+EPS, 1 );
* // returns true
*
* @example
* var bool = isAlmostSameValue( 0.0, -0.0, 0 );
* // returns false
*
* @example
* var bool = isAlmostSameValue( NaN, NaN, 1 );
* // returns true
*/
function isAlmostSameValue( a, b, maxULP ) {
	return addon( a, b, maxULP );
}


// EXPORTS //

module.exports = isAlmostSameValue;
