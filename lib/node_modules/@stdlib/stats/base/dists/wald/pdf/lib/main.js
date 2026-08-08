/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var exp = require( '@stdlib/math/base/special/exp' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} mu - mean
* @param {PositiveNumber} lambda - shape parameter
* @returns {number} evaluated probability density function
*
* @example
* var y = pdf( 2.0, 1.0, 1.0 );
* // returns ~0.110
*
* @example
* var y = pdf( 0.5, 2.0, 3.0 );
* // returns ~0.362
*
* @example
* var y = pdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 1.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 1.0, 1.0, NaN );
* // returns NaN
*
* @example
* // Non-positive mean:
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 2.0, -1.0, 1.0 );
* // returns NaN
*
* @example
* // Negative shape parameter:
* var y = pdf( 2.0, 1.0, -1.0 );
* // returns NaN
*
* @example
* // Zero shape parameter (degenerate distribution):
* var y = pdf( 2.0, 1.0, 0.0 );
* // returns 0.0
*
* @example
* var y = pdf( 1.0, 1.0, 0.0 );
* // returns Infinity
*
* @example
* // Non-positive x:
* var y = pdf( 0.0, 1.0, 1.0 );
* // returns 0.0
*
* @example
* var y = pdf( -1.0, 1.0, 1.0 );
* // returns 0.0
*/
function pdf( x, mu, lambda ) {
	var A;
	var B;
	var v;
	if (
		isnan( x ) ||
		isnan( mu ) ||
		isnan( lambda ) ||
		mu <= 0.0 ||
		lambda < 0.0
	) {
		return NaN;
	}
	if ( lambda === 0.0 ) {
		return ( x === mu ) ? PINF : 0.0;
	}
	if ( x <= 0.0 || !isFinite( x ) ) {
		return 0.0;
	}
	A = sqrt( lambda / TWO_PI );
	B = -lambda / ( 2.0 * mu * mu );
	v = x - mu;
	return A / ( x * sqrt( x ) ) * exp( B * v * v / x );
}


// EXPORTS //

module.exports = pdf;
