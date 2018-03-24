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


// MAIN //

/**
* Returns a function for evaluating the quantile function for a triangular distribution with lower limit `a`, upper limit `b` and mode `c`.
*
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 2.0, 4.0, 2.5 );
* var y = quantile( 0.4 );
* // returns ~2.658
*
* y = quantile( 0.8 );
* // returns ~3.225
*/
function factory( a, b, c ) {
	var pInflection;
	var fact1;
	var fact2;

	if (
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		a > c ||
		c > b
	) {
		return constantFunction( NaN );
	}

	pInflection = ( c - a ) / ( b - a );
	fact1 = ( b - a ) * ( c - a);
	fact2 = ( b - a ) * ( b - c );
	return quantile;

	/**
	* Evaluates the quantile function for a triangular distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {number} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( p ) {
		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		if ( p < pInflection ) {
			return a + sqrt( fact1 * p );
		}
		if ( p > pInflection ) {
			return b - sqrt( fact2 * ( 1.0 - p ) );
		}
		// Case: p = pInflection
		return c;
	}
}


// EXPORTS //

module.exports = factory;
