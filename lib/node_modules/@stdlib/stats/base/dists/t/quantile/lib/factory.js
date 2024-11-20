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
var kernelBetaincinv = require( '@stdlib/math/base/special/kernel-betaincinv' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sign = require( '@stdlib/math/base/special/signum' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a Student's t distribution with degrees of freedom `v`.
*
* @param {PositiveNumber} v - degrees of freedom
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 0.5 );
* var y = quantile( 0.5 );
* // returns 0.0
*
* y = quantile( 0.8 );
* // returns ~2.513
*
* y = quantile( 1.0 );
* // returns Infinity
*/
function factory( v ) {
	if ( isnan( v ) || v <= 0.0 ) {
		return constantFunction( NaN );
	}
	return quantile;

	/**
	* Evaluates the quantile function for a Student's t distribution.
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
		var prob;
		var xs;

		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		prob = ( p > 0.5 ) ? 1.0 - p : p;
		xs = kernelBetaincinv( v / 2.0, 0.5, 2.0 * prob, 1.0 - (2.0 * prob) );
		return sign( p - 0.5 ) * sqrt( v * xs[ 1 ] / xs[ 0 ] );
	}
}


// EXPORTS //

module.exports = factory;
