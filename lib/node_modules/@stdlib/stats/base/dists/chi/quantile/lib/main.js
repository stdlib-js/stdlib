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

var gammaQuantile = require( '@stdlib/stats/base/dists/gamma/quantile' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Evaluates the quantile function for a chi distribution with degrees of freedom `k` at a probability `p`.
*
* @param {Probability} p - input value
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0 );
* // returns ~1.282
*
* @example
* var y = quantile( 0.5, 4.0 );
* // returns ~1.832
*
* @example
* var y = quantile( 0.8, 0.1 );
* // returns ~0.116
*
* @example
* var y = quantile( -0.2, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 1.1, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative degrees of freedom:
* var y = quantile( 0.5, -1.0 );
* // returns NaN
*/
function quantile( p, k ) {
	return sqrt( gammaQuantile( p, k/2.0, 0.5 ) );
}


// EXPORTS //

module.exports = quantile;
