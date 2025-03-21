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
var betainc = require( '@stdlib/math/base/special/betainc' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var floor = require( '@stdlib/math/base/special/floor' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 3.0, 20, 0.2 );
* // returns ~0.411
*
* @example
* var y = cdf( 21.0, 20, 0.2 );
* // returns 1.0
*
* @example
* var y = cdf( 5.0, 10, 0.4 );
* // returns ~0.834
*
* @example
* var y = cdf( 0.0, 10, 0.4 );
* // returns ~0.006
*
* @example
* var y = cdf( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 20, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.5, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, -2.0, 0.5 );
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
function cdf( x, n, p ) {
	if (
		isnan( x ) ||
		isnan( n ) ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0 ||
		!isNonNegativeInteger( n ) ||
		n === PINF
	) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( x >= n ) {
		return 1.0;
	}
	x = floor( x + 1.0e-7 );
	return betainc( p, x + 1.0, n - x, true, true );
}


// EXPORTS //

module.exports = cdf;
