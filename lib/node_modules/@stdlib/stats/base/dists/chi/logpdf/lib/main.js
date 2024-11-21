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
var gammaln = require( '@stdlib/math/base/special/gammaln' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a chi distribution with degrees of freedom `k` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 0.3, 4.0 );
* // returns ~-4.35
*
* @example
* var y = logpdf( 0.7, 0.7 );
* // returns ~-0.622
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
* // Negative degrees of freedom:
* var y = logpdf( 2.0, -1.0 );
* // returns NaN
*/
function logpdf( x, k ) {
	var out;
	var kh;
	if (
		isnan( x ) ||
		isnan( k ) ||
		k < 0.0
	) {
		return NaN;
	}
	if ( k === 0.0 ) {
		// Point mass at 0...
		return ( x === 0.0 ) ? PINF : NINF;
	}
	if ( x < 0.0 || x === PINF ) {
		return NINF;
	}
	kh = k / 2.0;
	out = ( ( 1.0-kh ) * LN2 ) + ( ( k-1.0 ) * ln( x ) ) - ( (x*x) / 2.0 );
	out -= gammaln( kh );
	return out;
}


// EXPORTS //

module.exports = logpdf;
