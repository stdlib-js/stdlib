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
* Returns the minimum single-precision floating-point number.
*
* @private
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} minimum value
*
* @example
* var v = minf( 4.2, 3.14 );
* // returns ~3.14
*
* @example
* var v = minf( 0.0, -0.0 );
* // returns -0.0
*
* @example
* var v = minf( 3.14, NaN );
* // returns NaN
*
* @example
* var v = minf( NaN, 5.0 );
* // returns NaN
*/
function minf( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = minf;
