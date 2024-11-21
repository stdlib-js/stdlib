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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var round = require( '@stdlib/math/base/special/round' );
var mean = require( '@stdlib/stats/base/dists/binomial/mean' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the median of a binomial distribution.
*
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} median
*
* @example
* var v = median( 100, 0.1 );
* // returns 10
*
* @example
* var v = median( 20, 0.5 );
* // returns 10
*
* @example
* var v = median( 10.3, 0.5 );
* // returns NaN
*
* @example
* var v = median( 20, 1.1 );
* // returns NaN
*
* @example
* var v = median( 20, NaN );
* // returns NaN
*/
function median( n, p ) {
	if (
		isnan( n ) ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0 ||
		!isNonNegativeInteger( n ) ||
		n === PINF
	) {
		return NaN;
	}
	return round( mean( n, p ) );
}


// EXPORTS //

module.exports = median;
