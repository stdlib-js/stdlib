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
* Computes the number of representable single-precision floating-point values that separate two single-precision floating-point numbers along the real number line.
*
* @private
* @param {number} x - first value
* @param {number} y - second value
* @returns {number} result
*
* @example
* var EPS = require( '@stdlib/constants/float32/eps' );
*
* var d = ulpdiff( 1.0, 1.0+EPS );
* // returns 1.0
*
* @example
* var d = ulpdiff( 1.0, NaN );
* // returns NaN
*/
function ulpdiff( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = ulpdiff;
