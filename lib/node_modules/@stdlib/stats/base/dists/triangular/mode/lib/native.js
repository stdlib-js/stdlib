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

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the mode of a triangular distribution.
*
* @private
* @param {NonNegativeNumber} a - lower bound
* @param {NonNegativeNumber} b - upper bound
* @param {NonNegativeNumber} c - mode (peak)
* @returns {NonNegativeNumber} mode
*
* @example
* var v = mode( 0.0, 10.0, 5.0 );
* // returns 5.0
*
* @example
* var v = mode( 2.0, 8.0, 4.0 );
* // returns 4.0
*
* @example
* var v = mode( -1.0, 5.0, 6.0 );
* // returns NaN
*
* @example
* var v = mode( NaN, 10.0, 5.0 );
* // returns NaN
*/
function mode( a, b, c ) {
	return addon( a, b, c );
}


// EXPORTS //

module.exports = mode;
