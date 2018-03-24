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


// MAIN //

/**
* Returns a function for evaluating the quantile function for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 3.0, 3.0, 5.0 );
*
* var y = quantile( 0.8 );
* // returns ~9.946
*
* y = quantile( 0.2 );
* // returns ~7.56
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
	return quantile;

	/**
	* Evaluates the quantile function for a Fréchet distribution.
	*
	* @private
	* @param {number} p - input probability
	* @returns {number} evaluated quantile function
	*
	* @example
	* var y = quantile( -2.0 );
	* // returns <number>
	*/
	function quantile( p ) {
		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		return m + ( s * ( pow( -ln( p ), -1.0/alpha ) ) );
	}
}


// EXPORTS //

module.exports = factory;
