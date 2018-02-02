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

var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );
var pow = require( '@stdlib/math/base/special/pow' );
var abs = require( '@stdlib/math/base/special/abs' );
var coefficients = require( './coefficients.js' );


// MAIN //

/**
* Evaluates a Lucas polynomial.
*
* @param {integer} n - Lucas polynomial to evaluate
* @param {number} x - value at which to evaluate a Lucas polynomial
* @returns {number} result
*
* @example
* var v = lucaspoly( 5, 1.0 );
* // returns 11.0
*/
function lucaspoly( n, x ) {
	var coefs;
	var an;
	var v;

	an = abs( n );
	coefs = coefficients( an );

	v = evalpoly( coefs, x );
	if ( n >= 0 ) {
		return v;
	}
	return pow( -1.0, an ) * v;
}


// EXPORTS //

module.exports = lucaspoly;
