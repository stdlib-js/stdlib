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
* Returns the expected value of a chi distribution.
*
* @private
* @param {number} k - degrees of freedom
* @returns {number} expected value
*
* @example
* var y = mean( 2.0 );
* // returns ~1.253
*
* @example
* var v = mean( 9.0 );
* // returns ~2.918
*
* @example
* var v = mean( 1.0 );
* // returns ~0.798
*
* @example
* var y = mean( NaN );
* // returns NaN
*/
function mean( k ) {
	return addon( k );
}


// EXPORTS //

module.exports = mean;
