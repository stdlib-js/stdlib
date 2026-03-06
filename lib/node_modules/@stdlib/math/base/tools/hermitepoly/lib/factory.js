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
var isint = require( '@stdlib/math/base/assert/is-integer' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );
var pow = require( '@stdlib/math/base/special/pow' );
var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );


// MAIN //

/**
* Returns a function for evaluating a physicist's Hermite polynomial.
*
* @param {NonNegativeInteger} n - polynomial degree
* @returns {Function} function for evaluating a physicist's Hermite polynomial
*
* @example
* var polyval = factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -1.0
*/
function factory( n ) {
	var c;
	if ( n < 0 || isnan( n ) || !isint( n ) ) {
		return constantFunction( NaN );
	}
	if ( n === 0 ) {
		return constantFunction( 1.0 );
	}
	c = pow( 2.0, 0.5*n );
	return polyval;

	/**
	* Evaluates a physicist's Hermite polynomial.
	*
	* @private
	* @param {number} x - value at which to evaluate a physicist's Hermite polynomial
	* @returns {number} result
	*/
	function polyval( x ) {
		return c * normhermitepoly( n, SQRT2*x );
	}
}


// EXPORTS //

module.exports = factory;
