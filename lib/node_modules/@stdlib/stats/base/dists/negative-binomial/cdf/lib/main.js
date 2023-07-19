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

var betainc = require( '@stdlib/math/base/special/betainc' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var floor = require( '@stdlib/math/base/special/floor' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} r - number of successes until experiment is stopped
* @param {Probability} p - success probability
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 5.0, 20.0, 0.8 );
* // returns ~0.617
*
* @example
* var y = cdf( 21.0, 20.0, 0.5 );
* // returns ~0.622
*
* @example
* var y = cdf( 5.0, 10.0, 0.4 );
* // returns ~0.034
*
* @example
* var y = cdf( 0.0, 10.0, 0.9 );
* // returns ~0.349
*
* @example
* var y = cdf( 21.0, 15.5, 0.5 );
* // returns ~0.859
*
* @example
* var y = cdf( 5.0, 7.4, 0.4 );
* // returns ~0.131
*
* @example
* var y = cdf( 2.0, 0.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( NaN, 20.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 20.0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 20, -1.0 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 20, 1.5 );
* // returns NaN
*/
function cdf( x, r, p ) {
	var xint;
	if (
		isnan( x ) ||
		isnan( r ) ||
		isnan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( x === PINF ) {
		return 1.0;
	}
	// Ensure left-continuity:
	xint = floor( x + 1e-7 );
	return betainc( p, r, xint + 1.0 );
}


// EXPORTS //

module.exports = cdf;
