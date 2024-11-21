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
* Evaluates the probability mass function (PMF) for a Bernoulli distribution with success probability `p` at a value `x`.
*
* @param {number} x - input value
* @param {Probability} p - success probability
* @returns {Probability} evaluated PMF
*
* @example
* var y = pmf( 1.0, 0.3 );
* // returns 0.3
*
* @example
* var y = pmf( 0.0, 0.3 );
* // returns 0.7
*
* @example
* var y = pmf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = pmf( 0.8, 0.5 );
* // returns 0.0
*
* @example
* var y = pmf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pmf( NaN, 0.5 );
* // returns NaN
*
* @example
* // Invalid success probability:
* var y = pmf( 1.0, 1.5 );
* // returns NaN
*/
function pmf( x, p ) {
	if (
		isnan( x ) ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	if ( x === 0.0 ) {
		return 1.0 - p;
	}
	if ( x === 1.0 ) {
		return p;
	}
	return 0.0;
}


// EXPORTS //

module.exports = pmf;
