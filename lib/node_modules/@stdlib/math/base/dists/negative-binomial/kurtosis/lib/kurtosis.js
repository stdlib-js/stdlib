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
* Returns the excess kurtosis of a negative binomial distribution.
*
* @param {PositiveNumber} r - number of failures until experiment is stopped
* @param {Probability} p - success probability
* @returns {NonNegativeNumber} excess kurtosis
*
* @example
* var v = kurtosis( 100, 0.2 );
* // returns ~0.061
*
* @example
* var v = kurtosis( 20, 0.5 );
* // returns ~0.325
*
* @example
* var v = kurtosis( 10.3, 0.8 );
* // returns ~0.893
*
* @example
* var v = kurtosis( -2, 0.5 );
* // returns NaN
*
* @example
* var v = kurtosis( 20, 1.1 );
* // returns NaN
*
* @example
* var v = kurtosis( 20, NaN );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 0.5 );
* // returns NaN
*/
function kurtosis( r, p ) {
	if (
		isnan( r ) ||
		isnan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return ( 6.0/r ) + ( ( p*p ) / ( ( 1.0-p ) * r ) );
}


// EXPORTS //

module.exports = kurtosis;
