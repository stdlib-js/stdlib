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
var gammaCDF = require( '@stdlib/stats/base/dists/gamma/cdf' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 1, 1.0 );
* // returns ~0.865
*
* @example
* var y = cdf( 2.0, 3, 1.0 );
* // returns ~0.323
*
* @example
* var y = cdf( 2.0, 2.5, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( -1.0, 2, 2.0 );
* // returns 0.0
*
* @example
* var y = cdf( +Infinity, 4, 2.0 );
* // returns 1.0
*
* @example
* var y = cdf( -Infinity, 4, 2.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 0, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, -1, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1, -1.0 );
* // returns NaN
*/
function cdf( x, k, lambda ) {
	if ( !isNonNegativeInteger( k ) ) {
		return NaN;
	}
	return gammaCDF( x, k, lambda );
}


// EXPORTS //

module.exports = cdf;
