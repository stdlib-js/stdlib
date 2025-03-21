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
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a Weibull distribution.
*
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {Function} function to evaluate the logarithm of the probability density function
*
* @example
* var logpdf = factory( 7.0, 6.0 );
* var y = logpdf( 7.0 );
* // returns ~-1.863
*
* y = logpdf( 5.0 );
* // returns ~-1.219
*/
function factory( k, lambda ) {
	var lnkl;
	if (
		isnan( k ) ||
		isnan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return constantFunction( NaN );
	}
	lnkl = ln( k / lambda );
	return logpdf;

	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a Weibull distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.3 );
	* // returns <number>
	*/
	function logpdf( x ) {
		var xol;
		if ( x < 0.0 ) {
			return NINF;
		}
		if ( x === PINF || x === NINF ) {
			return NINF;
		}
		if ( x === 0.0 ) {
			return ( k === 1.0 ) ? ln( k / lambda ) : NINF;
		}
		xol = x / lambda;
		return lnkl + ( ( k - 1.0 ) * ln( xol ) ) - pow( xol, k );
	}
}


// EXPORTS //

module.exports = factory;
