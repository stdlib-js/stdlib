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
* Returns the skewness of a discrete uniform distribution.
*
* @private
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} skewness
*
* @example
* var v = skewness( 0, 1 );
* // returns 0.0
*
* @example
* var v = skewness( -4, 4 );
* // returns 0.0
*
* @example
* var v = skewness( 0, 10 );
* // returns 0.0
*/
function skewness( a, b ) {
	return addon( a, b );
}


// EXPORTS //

module.exports = skewness;
