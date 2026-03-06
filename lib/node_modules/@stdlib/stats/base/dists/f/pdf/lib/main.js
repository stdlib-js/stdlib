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
var PINF = require( '@stdlib/constants/float64/pinf' );
var ibetaDerivative = require( './ibeta_derivative.js' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.5, 1.0 );
* // returns ~0.057
*
* @example
* var y = pdf( 0.1, 1.0, 1.0 );
* // returns ~0.915
*
* @example
* var y = pdf( -1.0, 4.0, 2.0 );
* // returns 0.0
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
*
* @example
* var y = pdf( 2.0, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( 2.0, -1.0, 1.0 );
* // returns NaN
*/
function pdf( x, d1, d2 ) {
	var v1x;
	var y;
	var z;
	if (
		isnan( x ) ||
		isnan( d1 ) ||
		isnan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return NaN;
	}
	if ( x < 0.0 || x === PINF ) {
		return 0.0;
	}
	if ( x === 0.0 ) {
		if ( d1 < 2.0 ) {
			return PINF;
		}
		if ( d1 === 2.0 ) {
			return 1.0;
		}
		return 0.0;
	}
	v1x = d1 * x;
	if ( v1x > d2 ) {
		y = ( d2 * d1 ) / ( ( d2 + v1x ) * ( d2 + v1x ) );
		return y * ibetaDerivative( d2 / ( d2+v1x ), d2/2.0, d1/2.0 );
	}
	z = d2 + v1x;
	y = ((z * d1) - (x * d1 * d1)) / ( z * z );
	return y * ibetaDerivative( v1x / ( d2+v1x ), d1/2.0, d2/2.0 );
}


// EXPORTS //

module.exports = pdf;
