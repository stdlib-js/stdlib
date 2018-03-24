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
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 3.0, 3.0, 5.0 );
*
* var y = cdf( 10.0 );
* // returns ~0.806
*
* y = cdf( 7.0 );
* // returns ~0.034
*/
function factory( alpha, s, m ) {
	if (
		isnan( alpha ) ||
		isnan( s ) ||
		isnan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return constantFunction( NaN );
	}
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Fréchet distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( -2.0 );
	* // returns <number>
	*/
	function cdf( x ) {
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= m ) {
			return 0.0;
		}
		z = ( x - m ) / s;
		return exp( -pow( z, -alpha ) );
	}
}


// EXPORTS //

module.exports = factory;
