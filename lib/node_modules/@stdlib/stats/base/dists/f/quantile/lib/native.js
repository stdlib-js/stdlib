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
* Evaluates the quantile function for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a probability `p`.
*
* @private
* @param {Probability} p - input value
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns ~9.472
*
* @example
* var y = quantile( 0.5, 4.0, 2.0 );
* // returns ~1.207
*
* @example
* var y = quantile( 1.1, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, -1.0 );
* // returns NaN
*/
function quantile( p, d1, d2 ) {
	return addon( p, d1, d2 );
}


// EXPORTS //

module.exports = quantile;
