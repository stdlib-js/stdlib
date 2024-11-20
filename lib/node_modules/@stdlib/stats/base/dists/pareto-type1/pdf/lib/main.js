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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 4.0, 1.0, 1.0 );
* // returns ~0.063
*
* @example
* var y = pdf( 20.0, 1.0, 10.0 );
* // returns 0.025
*
* @example
* var y = pdf( 7.0, 2.0, 6.0 );
* // returns ~0.21
*
* @example
* var y = pdf( 7.0, 6.0, 3.0 );
* // returns ~0.005
*
* @example
* var y = pdf( 1.0, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = pdf( 1.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = pdf( 0.5, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = pdf( 0.5, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.5, 1.0, NaN );
* // returns NaN
*/
function pdf( x, alpha, beta ) {
	var denom;
	var num;
	if (
		isnan( x ) ||
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return NaN;
	}
	if ( x >= beta ) {
		num = alpha * pow( beta, alpha );
		denom = pow( x, alpha + 1.0 );
		return num / denom;
	}
	return 0.0;
}


// EXPORTS //

module.exports = pdf;
