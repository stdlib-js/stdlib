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
* Computes the cosine of a single-precision floating-point number minus one.
*
* @private
* @param {number} x - input value (in radians)
* @returns {number} cosine minus one
*
* @example
* var v = cosm1f( 0.0 );
* // returns 0.0
*
* @example
* var v = cosm1f( 3.141592653589793/4.0 );
* // returns ~-0.293
*
* @example
* var v = cosm1f( -3.141592653589793/6.0 );
* // returns ~-0.134
*
* @example
* var v = cosm1f( NaN );
* // returns NaN
*/
function cosm1f( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = cosm1f;
