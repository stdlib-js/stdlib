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
var gamma = require( '@stdlib/math/base/special/gamma' );
var EPS = require( '@stdlib/constants/float64/eps' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of a Weibull distribution with shape `k` and scale `lambda`.
*
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 8.0, 10.0 );
*
* var y = mgf( 0.8 );
* // returns ~3150.149
*
* y = mgf( 0.08 );
* // returns ~2.137
*/
function factory( k, lambda ) {
	if (
		isnan( k ) ||
		isnan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a Weibull distribution.
	*
	* @private
	* @param {number} t - input value
	* @returns {number} evaluated MGF
	*
	* @example
	* var y = mgf( 0.5 );
	* // returns <number>
	*/
	function mgf( t ) {
		var summand;
		var sum;
		var c;
		var n;

		if ( isnan( t ) ) {
			return NaN;
		}
		sum = 1.0;
		c = 1.0;
		n = 0;
		do {
			n += 1;
			c *= ( t * lambda ) / n;
			if ( c === 0.0 ) {
				summand = 0.0;
			} else {
				summand = c * gamma( 1.0 + (n / k) );
			}
			sum += summand;
		} while ( summand / sum > EPS );
		return sum;
	}
}


// EXPORTS //

module.exports = factory;
