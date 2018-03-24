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
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at a value `x`.
*
* @param {number} x - input value
* @param {number} mu - location parameter
* @param {PositiveNumber} b - scale parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns ~0.068
*
* @example
* var y = pdf( -1.0, 2.0, 3.0 );
* // returns ~0.061
*
* @example
* var y = pdf( 2.5, 2.0, 3.0 );
* // returns ~0.141
*
* @example
* var y = pdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = pdf( 2.0, 0.0, -1.0 );
* // returns NaN
*/
function pdf( x, mu, b ) {
	var z;
	if (
		isnan( x ) ||
		isnan( mu ) ||
		isnan( b ) ||
		b <= 0.0
	) {
		return NaN;
	}
	z = ( x - mu ) / b;
	return 0.5 * exp( -abs( z ) ) / b;
}


// EXPORTS //

module.exports = pdf;
