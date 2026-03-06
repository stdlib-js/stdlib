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
* Evaluates the probability density function (PDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.5, 1.0, 1.0 );
* // returns 1.0
*
* @example
* var y = pdf( 0.5, 2.0, 4.0 );
* // returns ~1.688
*
* @example
* var y = pdf( 0.2, 2.0, 2.0 );
* // returns ~0.768
*
* @example
* var y = pdf( 0.8, 4.0, 4.0 );
* // returns ~1.686
*
* @example
* var y = pdf( -0.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = pdf( 1.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = pdf( 2.0, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = pdf( 2.0, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 1.0, NaN );
* // returns NaN
*/
function pdf( x, a, b ) {
	if (
		isnan( x ) ||
		isnan( a ) ||
		isnan( b ) ||
		a <= 0.0 ||
		b <= 0.0
	) {
		return NaN;
	}
	if ( x <= 0.0 || x >= 1.0 ) {
		return 0.0;
	}
	return ( a*b ) * pow( x, a - 1.0 ) * pow( 1.0 - pow( x, a ), b - 1.0 );
}


// EXPORTS //

module.exports = pdf;
