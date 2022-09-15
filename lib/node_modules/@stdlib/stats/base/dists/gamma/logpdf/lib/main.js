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
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var gammaDeriv = require( './gamma_p_derivative.js' );


// MAIN //

/**
* Evaluates the logarithm of the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.5, 1.0 );
* // returns ~-2.919
*
* @example
* var y = logpdf( 0.1, 1.0, 1.0 );
* // returns ~-0.1
*
* @example
* var y = logpdf( -1.0, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( NaN, 0.6, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, 1.0, NaN );
* // returns NaN
*
* @example
* // Negative shape parameter:
* var y = logpdf( 2.0, -1.0, 1.0 );
* // returns NaN
*
* @example
* // Negative rate parameter:
* var y = logpdf( 2.0, 1.0, -1.0 );
* // returns NaN
*/
function logpdf( x, alpha, beta ) {
	if (
		isnan( x ) ||
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha < 0.0 ||
		beta <= 0.0
	) {
		return NaN;
	}
	if ( x < 0.0 || x === PINF ) {
		return NINF;
	}
	if ( alpha === 0.0 ) {
		// Point mass at 0...
		return ( x === 0.0 ) ? PINF : NINF;
	}
	return ln( gammaDeriv( alpha, x * beta ) ) + ln( beta );
}


// EXPORTS //

module.exports = logpdf;
