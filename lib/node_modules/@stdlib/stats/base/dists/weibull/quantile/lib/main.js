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

var ln = require( '@stdlib/math/base/special/ln' );
var pow = require( '@stdlib/math/base/special/pow' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Evaluates the quantile function for a Weibull distribution with scale parameter `k` and shape parameter `lambda` at a probability `p`.
*
* @param {Probability} p - input value
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns ~1.609
*
* @example
* var y = quantile( 0.5, 2.0, 4.0 );
* // returns ~3.33
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
* var y = quantile( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, -1.0 );
* // returns NaN
*/
function quantile( p, k, lambda ) {
	if (
		isnan( k ) ||
		isnan( lambda ) ||
		isnan( p ) ||
		k <= 0.0 ||
		lambda <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return lambda * pow( -ln( 1.0 - p ), 1.0/k );
}


// EXPORTS //

module.exports = quantile;
