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
var gamma = require( '@stdlib/math/base/special/gamma' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a chi distribution with degrees of freedom `k` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.3, 4.0 );
* // returns ~0.013
*
* @example
* var y = pdf( 0.7, 0.7 );
* // returns ~0.537
*
* @example
* var y = pdf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = pdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pdf( NaN, 2.0 );
* // returns NaN
*
* @example
* // Negative degrees of freedom:
* var y = pdf( 2.0, -1.0 );
* // returns NaN
*/
function pdf( x, k ) {
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
		return ( x === 0.0 ) ? PINF : 0.0;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	kh = k / 2.0;
	out = pow( 2.0, 1.0-kh ) * pow( x, k-1.0 ) * exp( -(x*x)/2.0 );
	out /= gamma( kh );
	return out;
}


// EXPORTS //

module.exports = pdf;
