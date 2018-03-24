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
var gamma = require( '@stdlib/math/base/special/gamma' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a Gumbel distribution with location parameter `mu` and scale parameter `b` at a value `t`.
*
* @param {number} t - input value
* @param {number} mu - mean
* @param {PositiveNumber} beta - scale parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( -1.0, 0.0, 3.0 );
* // returns 6.0
*
* @example
* var y = mgf( 0.1, 0.0, 3.0 );
* // returns ~1.298
*
* @example
* var y = mgf( 0.0, 0.0, 1.0 );
* // returns 1.0
*
* @example
* var y = mgf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Non-positive scale parameter:
* var y = mgf( 0.0, 0.0, -1.0 );
* // returns NaN
*/
function mgf( t, mu, beta ) {
	if (
		isnan( t ) ||
		isnan( mu ) ||
		isnan( beta ) ||
		beta <= 0.0 ||
		t >= 1.0/beta
	) {
		return NaN;
	}
	return gamma( 1.0 - (beta * t) ) * exp( mu * t );
}


// EXPORTS //

module.exports = mgf;
