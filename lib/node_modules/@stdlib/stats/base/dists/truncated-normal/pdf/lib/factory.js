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
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var normalCDF = require( '@stdlib/stats/base/dists/normal/cdf' );
var PI = require( '@stdlib/constants/float64/pi' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, mean `mu` and standard deviation `sigma`.
*
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {Function} PDF
*/
function factory( a, b, mu, sigma ) {
	var s2x2;
	var A;
	var B;
	var C;

	if (
		isnan( a ) ||
		isnan( b ) ||
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma <= 0.0 ||
		a >= b
	) {
		return constantFunction( NaN );
	}
	s2x2 = 2.0 * pow( sigma, 2.0 );
	A = 1.0 / ( sqrt( s2x2 * PI ) );
	B = -1.0 / ( s2x2 );
	C = normalCDF( (b-mu)/sigma ) - normalCDF( (a-mu)/sigma );
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a truncated normal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < a || x > b ) {
			return 0.0;
		}
		return A * exp( B * pow( x - mu, 2.0 ) ) / C;
	}
}


// EXPORTS //

module.exports = factory;
