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
* Returns the variance of a negative binomial distribution.
*
* @param {PositiveNumber} r - number of failures until experiment is stopped
* @param {Probability} p - success probability
* @returns {PositiveNumber} variance
*
* @example
* var v = variance( 100, 0.2 );
* // returns 2000.0
*
* @example
* var v = variance( 20, 0.5 );
* // returns 40.0
*
* @example
* var v = variance( 10.3, 0.8 );
* // returns ~3.219
*
* @example
* var v = variance( -2, 0.5 );
* // returns NaN
*
* @example
* var v = variance( 20, 1.1 );
* // returns NaN
*
* @example
* var v = variance( 20, NaN );
* // returns NaN
*
* @example
* var v = variance( NaN, 0.5 );
* // returns NaN
*/
function variance( r, p ) {
	if (
		isnan( r ) ||
		isnan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return ( ( 1.0-p ) * r ) / ( p*p );
}


// EXPORTS //

module.exports = variance;
