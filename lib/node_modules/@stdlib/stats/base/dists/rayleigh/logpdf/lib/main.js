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
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the logarithm of the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 0.3, 1.0 );
* // returns ~-1.249
*
* @example
* var y = logpdf( 2.0, 0.8 );
* // returns ~-1.986
*
* @example
* var y = logpdf( -1.0, 0.5 );
* // returns -Infinity
*
* @example
* var y = logpdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = logpdf( NaN, 2.0 );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = logpdf( 2.0, -1.0 );
* // returns NaN
*/
function logpdf( x, sigma ) {
	var s2i;
	var s2;
	if (
		isnan( x ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return NaN;
	}
	if ( sigma === 0.0 ) {
		return ( x === 0.0 ) ? PINF : NINF;
	}
	if ( x < 0.0 || x === PINF ) {
		return NINF;
	}
	s2 = pow( sigma, 2.0 );
	s2i = 1.0 / s2;
	return ln( s2i * x ) - ( pow( x, 2.0 ) / ( 2.0 * s2 ) );
}


// EXPORTS //

module.exports = logpdf;
