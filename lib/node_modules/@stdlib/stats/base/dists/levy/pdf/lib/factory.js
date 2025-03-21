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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a Lévy distribution.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} c - scale parameter
* @returns {Function} PDF
*
* @example
* var pdf = factory( 10.0, 2.0 );
* var y = pdf( 11.0 );
* // returns ~0.208
*
* y = pdf( 10.0 );
* // returns 0.0
*/
function factory( mu, c ) {
	if ( isnan( mu ) || isnan( c ) || c <= 0.0 ) {
		return constantFunction( NaN );
	}
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a Lévy distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( -1.2 );
	* // returns <number>
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= mu ) {
			return 0.0;
		}
		return sqrt( c/TWO_PI ) * exp( -c / ( 2.0*(x-mu) ) ) / pow( x-mu, 1.5 );
	}
}


// EXPORTS //

module.exports = factory;
