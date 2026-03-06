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


// MAIN //

/**
* Returns the excess kurtosis of a Bernoulli distribution.
*
* @param {Probability} p - success probability
* @returns {PositiveNumber} excess kurtosis
*
* @example
* var v = kurtosis( 0.1 );
* // returns ~5.111
*
* @example
* var v = kurtosis( 0.5 );
* // returns -2.0
*
* @example
* var v = kurtosis( 1.1 );
* // returns NaN
*
* @example
* var v = kurtosis( NaN );
* // returns NaN
*/
function kurtosis( p ) {
	var pq;
	if (
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	pq = p * ( 1.0 - p );
	return ( 1.0/pq ) - 6.0;
}


// EXPORTS //

module.exports = kurtosis;
