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

var cdf = require( '@stdlib/stats/base/dists/binomial/cdf' );


// MAIN //

/**
* Performs a search to the left.
*
* @private
* @param {NonNegativeInteger} x - starting guess
* @param {Probability} r - probability
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} `r` quantile of the specified distribution
*/
function searchLeft( x, r, n, p ) {
	while ( x !== 0 && cdf( x-1, n, p) >= r ) {
		x -=1;
	}
	return x;
}


// EXPORTS //

module.exports = searchLeft;
