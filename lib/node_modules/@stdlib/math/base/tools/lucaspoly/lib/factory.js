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

var evalpoly = require( '@stdlib/math/base/tools/evalpoly' ).factory;
var pow = require( '@stdlib/math/base/special/pow' );
var abs = require( '@stdlib/math/base/special/abs' );
var coefficients = require( './coefficients.js' );


// MAIN //

/**
* Returns a function for evaluating a Lucas polynomial.
*
* @param {integer} n - Lucas polynomial to evaluate
* @returns {Function} function for evaluating a Lucas polynomial
*
* @example
* var polyval = factory( 5 );
*
* var v = polyval( 1.0 );
* // returns 11.0
*
* v = polyval( 2.0 );
* // returns 82.0
*/
function factory( n ) {
	var coefs;
	var an;
	var f;
	var s;

	an = abs( n );
	coefs = coefficients( an );

	f = evalpoly( coefs );
	s = pow( -1.0, an );
	if ( n >= 0 || s === 1.0 ) {
		return f;
	}
	return polyval;

	/**
	* Evaluates a Lucas polynomial.
	*
	* @private
	* @param {number} x - value at which to evaluate a Lucas polynomial
	* @returns {number} result
	*/
	function polyval( x ) {
		return -1.0 * f( x );
	}
}


// EXPORTS //

module.exports = factory;
