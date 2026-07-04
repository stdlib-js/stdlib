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
* Returns the mode of a log logistic distribution with scale parameter `alpha` and shape parameter `beta`.
*
* @private
* @param {PositiveNumber} alpha - scale parameter
* @param {PositiveNumber} beta - shape parameter
* @returns {NonNegativeNumber} mode
*
* @example
* var y = mode( 1.0, 2.0 );
* // returns ~0.577
*
* @example
* var y = mode( 4.0, 3.0 );
* // returns ~3.175
*
* @example
* var y = mode( 1.0, 1.0 );
* // returns 0.0
*
* @example
* var y = mode( NaN, 2.0 );
* // returns NaN
*
* @example
* var y = mode( 2.0, NaN );
* // returns NaN
*
* @example
* var y = mode( -1.0, 2.0 );
* // returns NaN
*
* @example
* var y = mode( 2.0, -1.0 );
* // returns NaN
*/
function mode( alpha, beta ) {
	return addon( alpha, beta );
}


// EXPORTS //

module.exports = mode;
