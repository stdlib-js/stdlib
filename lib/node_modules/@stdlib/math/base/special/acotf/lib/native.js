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
* Computes the inverse cotangent of a single-precision floating-point number.
*
* @private
* @param {number} x - input value
* @returns {number} inverse cotangent (in radians)
*
* @example
* var v = acotf( 2.0 );
* // returns ~0.4636
*
* @example
* var v = acotf( 0.0 );
* // returns ~1.5708
*
* @example
* var v = acotf( 0.5 );
* // returns ~1.1071
*
* @example
* var v = acotf( 1.0 );
* // returns ~0.7854
*
* @example
* var v = acotf( NaN );
* // returns NaN
*
* @example
* var v = acotf( Infinity );
* // returns 0.0
*/
function acotf( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = acotf;
