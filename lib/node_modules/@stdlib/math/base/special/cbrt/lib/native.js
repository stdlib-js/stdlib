/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Computes the cube root of a double-precision floating-point number.
*
* @private
* @param {number} x - input value
* @returns {number} cube root
*
* @example
* var v = cbrt( 64.0 );
* // returns 4.0
*
* @example
* var v = cbrt( 27.0 );
* // returns 3.0
*
* @example
* var v = cbrt( 0.0 );
* // returns 0.0
*
* @example
* var v = cbrt( -9.0 );
* // returns ~-2.08
*
* @example
* var v = cbrt( NaN );
* // returns NaN
*/
function cbrt( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = cbrt;
