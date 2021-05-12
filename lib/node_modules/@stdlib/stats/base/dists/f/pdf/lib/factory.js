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

var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var ibetaDerivative = require( './ibeta_derivative.js' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2`.
*
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {Function} PDF
*
* @example
* var pdf = factory( 6.0, 7.0 );
* var y = pdf( 7.0 );
* // returns ~0.004
*
* y = pdf( 2.0 );
* // returns ~0.166
*/
function factory( d1, d2 ) {
	var zeroVal;
	var d1by2;
	var d2by2;
	var d1d2;
	if (
		isnan( d1 ) ||
		isnan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return constantFunction( NaN );
	}
	d1d2 = d1 * d2;
	d1by2 = d1 / 2.0;
	d2by2 = d2 / 2.0;
	zeroVal = 0.0;
	if ( d1 < 2.0 ) {
		zeroVal = PINF;
	}
	else if ( d1 === 2.0 ) {
		zeroVal = 1.0;
	}
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for an F distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( 2.3 );
	* // returns <number>
	*/
	function pdf( x ) {
		var v1x;
		var y;
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 || x === PINF ) {
			return 0.0;
		}
		if ( x === 0.0 ) {
			return zeroVal;
		}
		v1x = d1 * x;
		if ( v1x > d2 ) {
			y = d1d2 / ( ( d2 + v1x ) * ( d2 + v1x ) );
			return y * ibetaDerivative( d2 / ( d2 + v1x ), d2by2, d1by2 );
		}
		z = d2 + v1x;
		y = ((z * d1) - (x * d1 * d1)) / ( z * z );
		return y * ibetaDerivative( d1 * x / ( d2 + v1x ), d1by2, d2by2 );
	}
}


// EXPORTS //

module.exports = factory;
