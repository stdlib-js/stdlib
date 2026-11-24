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
* Evaluates the quantile function for a Planck distribution with shape parameter `lambda`.
*
* @private
* @param {Probability} p - input probability
* @param {PositiveNumber} lambda - shape parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0.4 );
* // returns 4.0
*
* @example
* var y = quantile( 0.5, 1.4 );
* // returns 0.0
*
* @example
* var y = quantile( NaN, 0.8 );
* // returns NaN
*
* @example
* var y = quantile( 0.4, NaN );
* // returns NaN
*
* @example
* var y = quantile( -0.5, 1.0 );
* // returns NaN
*/
function quantile( p, lambda ) {
	return addon( p, lambda );
}


// EXPORTS //

module.exports = quantile;
