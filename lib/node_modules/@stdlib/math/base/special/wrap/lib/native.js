/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Wraps a value on the half-open interval `[min,max)`.
*
* @private
* @param {number} v - input value
* @param {number} min - minimum value
* @param {number} max - maximum value
* @returns {number} wrapped value
*
* @example
* var v = wrap( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* v = wrap( -3.14, 0.0, 5.0 );
* // returns ~1.86
*
* v = wrap( 10.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrap( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrap( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = wrap( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = wrap( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = wrap( 3.14, 0.0, NaN );
* // returns NaN
*
* v = wrap( 3.14, 5.0, 0.0 );
* // returns NaN
*/
function wrap( v, min, max ) {
	return addon( v, min, max );
}


// EXPORTS //

module.exports = wrap;
