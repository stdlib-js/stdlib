/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var quantileGamma = require( '@stdlib/stats/base/dists/gamma/quantile' );


// MAIN //

/**
* Evaluates the quantile function for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a probability `p`.
*
* @param {Probability} p - input value
* @param {NonNegativeInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 2, 1.0 );
* // returns ~2.994
*
* @example
* var y = quantile( 0.5, 4, 2.0 );
* // returns ~1.836
*
* @example
* var y = quantile( 1.1, 1, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 1, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, 1, NaN );
* // returns NaN
*
* @example
* // Non-integer shape parameter:
* var y = quantile( 0.5, 0.5, 1.0 );
* // returns NaN
*
* @example
* // Non-positive shape parameter:
* var y = quantile( 0.5, -1, 1.0 );
* // returns NaN
*
* @example
* // Non-positive rate parameter:
* var y = quantile( 0.5, 1, -1.0 );
* // returns NaN
*/
function quantile( p, k, lambda ) {
	if ( !isNonNegativeInteger( k ) ) {
		return NaN;
	}
	return quantileGamma( p, k, lambda );
}


// EXPORTS //

module.exports = quantile;
