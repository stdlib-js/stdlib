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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var LNPI = require( '@stdlib/constants/float64/ln-pi' );


// VARIABLES //

// Constant: log(sqrt(2/pi)) = 0.5 * log(2/pi) = 0.5 * (ln(2) - ln(pi))
var C = 0.5 * ( LN2 - LNPI );


// MAIN //

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a half-normal distribution with scale parameter `sigma`.
*
* @param {number} x - input value
* @param {PositiveNumber} sigma - scale parameter
* @returns {number} evaluated logarithm of PDF
*
* @example
* var y = logpdf( 0.8, 1.0 );
* // returns ~-0.546
*
* @example
* var y = logpdf( 0.5, 1.0 );
* // returns ~-0.351
*
* @example
* var y = logpdf( 1.2, 2.0 );
* // returns ~-1.099
*
* @example
* var y = logpdf( -0.2, 1.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = logpdf( 2.0, -1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 0.0 );
* // returns NaN
*/
function logpdf( x, sigma ) {
	if (
		isnan( x ) ||
		isnan( sigma ) ||
		sigma <= 0.0
	) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return NINF;
	}
	return C - ln( sigma ) - ( (x*x) / ( 2.0 * (sigma*sigma) ) );
}


// EXPORTS //

module.exports = logpdf;
