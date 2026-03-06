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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the quantile function for an exponential distribution with rate parameter `lambda` at a probability `p`.
*
* @param {Probability} p - input value
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0 );
* // returns ~1.609
*
* @example
* var y = quantile( 0.5, 4.0 );
* // returns ~0.173
*
* @example
* var y = quantile( 0.5, 0.1 );
* // returns ~6.931
*
* @example
* var y = quantile( -0.2, 0.1 );
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
* // Negative rate parameter:
* var y = quantile( 0.5, -1.0 );
* // returns NaN
*/
function quantile( p, lambda ) {
	if (
		isnan( lambda ) ||
		lambda < 0.0 ||
		lambda === PINF ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return -ln( 1.0 - p ) / lambda;
}


// EXPORTS //

module.exports = quantile;
