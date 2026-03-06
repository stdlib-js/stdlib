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
var exp = require( '@stdlib/math/base/special/exp' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.3, 4.0 );
* // returns ~1.205
*
* @example
* var y = pdf( 2.0, 0.7 );
* // returns ~0.173
*
* @example
* var y = pdf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = pdf( 0, NaN );
* // returns NaN
*
* @example
* var y = pdf( NaN, 2.0 );
* // returns NaN
*
* @example
* // Negative rate:
* var y = pdf( 2.0, -1.0 );
* // returns NaN
*/
function pdf( x, lambda ) {
	var scale;
	if (
		isnan( x ) ||
		isnan( lambda ) ||
		lambda < 0.0 ||
		lambda === PINF
	) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	scale = 1.0 / lambda;
	return exp( -x / scale ) / scale;
}


// EXPORTS //

module.exports = pdf;
