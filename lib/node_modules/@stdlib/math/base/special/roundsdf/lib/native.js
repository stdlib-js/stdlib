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
* Rounds a single-precision floating-point number to the nearest value with `n` significant figures.
*
* @private
* @param {number} x - input value
* @param {PositiveInteger} n - number of significant figures
* @param {PositiveInteger} b - base
* @returns {number} rounded value
*
* @example
* var v = roundsdf( 3.1415927410125732, 3, 10 );
* // returns ~3.14
*
* @example
* var v = roundsdf( 3.1415927410125732, 1, 10 );
* // returns 3.0
*
* @example
* var v = roundsdf( 12368.0, 2, 10 );
* // returns 12000.0
*
* @example
* var v = roundsdf( 0.0313, 2, 2 );
* // returns 0.03125
*/
function roundsdf( x, n, b ) {
	return addon( x, n, b );
}


// EXPORTS //

module.exports = roundsdf;
