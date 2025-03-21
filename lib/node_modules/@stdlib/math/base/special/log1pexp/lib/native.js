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
* Computes the natural logarithm of \\( 1 + \exp(x) \\).
*
* @private
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = log1pexp( 1.1 );
* // returns ~1.387
*
* @example
* var v = log1pexp( 100.0 );
* // returns 100.0
*
* @example
* var v = log1pexp( NaN );
* // returns NaN
*/
function log1pexp( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = log1pexp;
