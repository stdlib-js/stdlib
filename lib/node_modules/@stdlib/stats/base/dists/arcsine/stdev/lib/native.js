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
* Returns the standard deviation of an arcsine distribution with minimum support `a` and maximum support `b`.
*
* @private
* @param {number} a - minimum support
* @param {number} b - maximum support
* @returns {number} standard deviation
*
* @example
* var y = stdev( 0.0, 1.0 );
* // returns ~0.354
*
* @example
* var y = stdev( 4.0, 12.0 );
* // returns ~2.828
*
* @example
* var y = stdev( -4.0, 4.0 );
* // returns ~2.828
*
* @example
* var y = stdev( +Infinity, 4.0 );
* // returns NaN
*
* @example
* var y = stdev( -Infinity, 4.0 );
* // returns Infinity
*
* @example
* var y = stdev( 1.0, NaN );
* // returns NaN
*
* @example
* var y = stdev( NaN, 2.0 );
* // returns NaN
*/
function stdev( a, b ) {
	return addon( a, b );
}


// EXPORTS //

module.exports = stdev;
