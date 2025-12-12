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

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the variance of a triangular distribution.
*
* @private
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} c - mode
* @returns {PositiveNumber} variance
*
* @example
* var v = variance( 0.0, 1.0, 0.5 );
* // returns ~0.042
*
* @example
* var v = variance( 4.0, 12.0, 5.0 );
* // returns ~3.17
*
* @example
* var v = variance( -4.0, 4.0, 0.0 );
* // returns ~2.67
*
* @example
* var v = variance( 1.0, -0.1, 0.5 );
* // returns NaN
*
* @example
* var v = variance( 2.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var v = variance( NaN, 2.0, 1.0 );
* // returns NaN
*/
function variance( a, b, c ) {
	return addon( a, b, c );
}


// EXPORTS //

module.exports = variance;
