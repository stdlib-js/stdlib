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
* Returns the expected value for a Pareto Type I distribution with shape parameter `alpha` and scale parameter `beta`.
*
* @private
* @param {number} alpha - shape parameter
* @param {number} beta - scale parameter
* @returns {number} expected value
*
* @example
* var y = mean( 2.0, 1.0 );
* // returns 2.0
*
* @example
* var y = mean( 3.0, 2.0 );
* // returns 3.0
*
* @example
* var y = mean( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mean( 2.0, NaN );
* // returns NaN
*/
function mean( alpha, beta ) {
	return addon( alpha, beta );
}


// EXPORTS //

module.exports = mean;
