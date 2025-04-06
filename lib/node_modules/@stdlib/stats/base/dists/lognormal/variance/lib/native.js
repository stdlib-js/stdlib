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
* Returns the variance for a lognormal distribution with location `mu` and scale `sigma`.
*
* @private
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {NonNegativeNumber} variance
*
* @example
* var y = variance( 0.0, 1.0 );
* // returns ~4.671
*
* @example
* var y = variance( 5.0, 2.0 );
* // returns ~64457364.853
*
* @example
* var y = variance( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = variance( 0.0, NaN );
* // returns NaN
*
* @example
* var y = variance( 0.0, 0.0 );
* // returns NaN
*/
function variance( mu, sigma ) {
	return addon( mu, sigma );
}


// EXPORTS //

module.exports = variance;
