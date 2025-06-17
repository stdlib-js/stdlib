/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns a single-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
*
* @private
* @param {number} x - number from which to derive a magnitude
* @param {number} y - number from which to derive a sign
* @returns {number} a single-precision floating-point number
*
* @example
* var z = flipsignf( -3.0, 10.0 );
* // returns -3.0
*
* @example
* var z = flipsignf( -3.0, -1.0 );
* // returns 3.0
*
* @example
* var z = flipsignf( 1.0, -0.0 );
* // returns -1.0
*
* @example
* var z = flipsignf( -3.0, -0.0 );
* // returns 3.0
*
* @example
* var z = flipsignf( -0.0, 1.0 );
* // returns -0.0
*
* @example
* var z = flipsignf( 0.0, -1.0 );
* // returns -0.0
*/
function flipsignf( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = flipsignf;
