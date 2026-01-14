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
* Computes the hyperbolic arctangent of a number.
*
* @private
* @param {number} x - input value
* @returns {number} hyperbolic arctangent (in radians)
*
* @example
* var v = atanh( 0.0 );
* // returns 0.0
*
* @example
* var v = atanh( 0.9 );
* // returns ~1.472
*
* @example
* var v = atanh( 1.0 );
* // returns Infinity
*
* @example
* v = atanh( -1.0 );
* // returns -Infinity
*
* @example
* var v = atanh( NaN );
* // returns NaN
*/
function atanh( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = atanh;
