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

var betaln = require( '@stdlib/math/base/special/betaln' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability density function (logPDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 0.5, 1.0, 1.0 );
* // returns 0.0
*
* @example
* var y = logpdf( 0.5, 2.0, 4.0 );
* // returns ~0.223
*
* @example
* var y = logpdf( 0.2, 2.0, 2.0 );
* // returns ~-0.041
*
* @example
* var y = logpdf( 0.8, 4.0, 4.0 );
* // returns ~-0.556
*
* @example
* var y = logpdf( -0.5, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( 1.5, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( 0.5, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 0.5, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = logpdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.5, 1.0, NaN );
* // returns NaN
*/
function logpdf( x, alpha, beta ) {
	var out;
	if (
		isnan( x ) ||
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return NaN;
	}
	if ( x < 0.0 || x > 1.0 ) {
		// Support of the Beta distribution: [0,1]
		return NINF;
	}
	if ( x === 0.0 ) {
		if ( alpha < 1.0 ) {
			return PINF;
		}
		if ( alpha > 1.0 ) {
			return NINF;
		}
		return ln( beta );
	}
	if ( x === 1.0 ) {
		if ( beta < 1.0 ) {
			return PINF;
		}
		if ( beta > 1.0 ) {
			return NINF;
		}
		return ln( alpha );
	}
	out = ( alpha-1.0 ) * ln( x );
	out += ( beta-1.0 ) * log1p( -x );
	out -= betaln( alpha, beta );
	return out;
}


// EXPORTS //

module.exports = logpdf;
