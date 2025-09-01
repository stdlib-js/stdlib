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
* Returns the variance of a Planck distribution.
*
* @private
* @param {number} lambda - shape parameter
* @returns {number} variance
*
* @example
* var v = variance( 0.1 );
* // returns ~99.9167
*
* @example
* var v = variance( 1.5 );
* // returns ~0.3697
*
* @example
* var v = variance( NaN );
* // returns NaN
*
* @example
* var v = variance( -1.0 );
* // returns NaN
*/
function variance( lambda ) {
	return addon( lambda );
}


// EXPORTS //

module.exports = variance;
