/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var log1p = require( '@stdlib/math/base/special/log1p' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a Bradford distribution with shape parameter `c` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} c - shape parameter
* @returns {Probability} evaluated PDF
*
* @example
* var v = pdf( 0.1, 0.1 );
* // returns ~1.039
*
* @example
* var v = pdf( 0.5, 5.0 );
* // returns ~0.797
*
* @example
* var v = pdf( 1.0, 10.0 );
* // returns ~0.379
*
* @example
* var v = pdf( 2.0, 0.5 );
* // returns 0.0
*
* @example
* var v = pdf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var v = pdf( 0.5, 0.0 );
* // returns NaN
*
* @example
* var v = pdf( 0.5, -5.0 );
* // returns NaN
*
* @example
* var v = pdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var v = pdf( 1.0, NaN );
* // returns NaN
*/
function pdf( x, c ) {
	var k;
	if ( isnan( c ) || isnan( x ) || c <= 0.0 ) {
		return NaN;
	}
	if ( x < 0.0 || x > 1.0 ) {
		return 0.0;
	}
	k = log1p( c );
	return c / ( ( 1.0 + ( c*x ) ) * k );
}


// EXPORTS //

module.exports = pdf;
