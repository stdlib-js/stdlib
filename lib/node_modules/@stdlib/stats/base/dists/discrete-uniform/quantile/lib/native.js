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
* Evaluates the quantile function for a discrete uniform distribution with minimum support `a` and maximum support `b` at a probability `p`.
*
* @private
* @param {Probability} p - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {integer} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0, 1 );
* // returns 1
*
* @example
* var y = quantile( 0.5, 0, 10 );
* // returns 5
*
* @example
* var y = quantile( 1.1, 0, 1 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 0, 1 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 0, 1 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 2, 1 );
* // returns NaN
*/
function quantile( p, a, b ) {
	return addon( p, a, b );
}


// EXPORTS //

module.exports = quantile;
