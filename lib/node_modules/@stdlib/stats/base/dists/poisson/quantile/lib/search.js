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

var cdf = require( '@stdlib/stats/base/dists/poisson/cdf' );


// VARIABLES //

var methods;


// FUNCTIONS //

/**
* Performs a search to the left.
*
* @private
* @param {NonNegativeInteger} x - starting guess
* @param {Probability} p - probability
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {NonNegativeInteger} `p` quantile of the specified distribution
*/
function searchLeft( x, p, lambda ) {
	while ( true ) {
		if ( x === 0 || cdf( x - 1.0, lambda ) < p ) {
			return x;
		}
		x -= 1;
	}
}

/**
* Performs a search to the right.
*
* @private
* @param {NonNegativeInteger} x - starting guess
* @param {Probability} p - probability
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {NonNegativeInteger} `p` quantile of the specified distribution
*/
function searchRight( x, p, lambda ) {
	while ( true ) {
		x += 1;
		if ( cdf( x, lambda ) >= p ) {
			return x;
		}
	}
}


// MAIN //

methods = {
	'left': searchLeft,
	'right': searchRight
};


// EXPORTS //

module.exports = methods;
