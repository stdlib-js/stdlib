/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Returns the positive difference between `x` and `y` if `x > y`; otherwise, returns `0`.
*
* @private
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} positive difference
*
* @example
* var v = pdifff( 5.9, 3.15 );
* // returns 2.75
*
* @example
* var v = pdifff( 3.14, 4.2 );
* // returns 0.0
*
* @example
* var v = pdifff( 3.14, NaN );
* // returns NaN
*
* @example
* var v = pdifff( -0.0, +0.0 );
* // returns +0.0
*/
function pdifff( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = pdifff;
