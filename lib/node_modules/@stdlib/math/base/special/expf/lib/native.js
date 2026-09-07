/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Evaluates the natural exponential function for a single-precision floating-point number.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = expf( 4.0 );
* // returns ~54.5982
*
* @example
* var v = expf( -9.0 );
* // returns ~1.234e-4
*
* @example
* var v = expf( 0.0 );
* // returns 1.0
*
* @example
* var v = expf( NaN );
* // returns NaN
*/
function expf( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = expf;
