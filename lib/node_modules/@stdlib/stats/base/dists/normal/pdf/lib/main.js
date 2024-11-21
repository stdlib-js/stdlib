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

var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a normal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
*
* @param {number} x - input value
* @param {number} mu - mean
* @param {NonNegativeNumber} sigma - standard deviation
* @returns {number} evaluated probability density function
*
* @example
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns ~0.054
*
* @example
* var y = pdf( -1.0, 4.0, 2.0 );
* // returns ~0.009
*
* @example
* var y = pdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative standard deviation:
* var y = pdf( 2.0, 0.0, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( 2.0, 8.0, 0.0 );
* // returns 0.0
*
* @example
* var y = pdf( 8.0, 8.0, 0.0 );
* // returns Infinity
*/
function pdf( x, mu, sigma ) {
	var s2;
	var A;
	var B;
	if (
		isnan( x ) ||
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return NaN;
	}
	if ( sigma === 0.0 ) {
		return ( x === mu ) ? PINF : 0.0;
	}
	s2 = pow( sigma, 2.0 );
	A = 1.0 / sqrt( s2*TWO_PI );
	B = -1.0 / ( 2.0*s2 );
	return A * exp( B * pow(x-mu, 2.0) );
}


// EXPORTS //

module.exports = pdf;
