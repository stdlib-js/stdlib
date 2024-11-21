/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var lngamma = require( '@stdlib/math/base/special/gammaln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var LN_TWO = require( '@stdlib/constants/float64/ln-two' );
var prangeVInf = require( './prange_v_inf.js' );


// MAIN //

/**
* Evaluates a Gauss-Legendre quadrature.
*
* @private
* @param {number} q - quadrature point
* @param {number} za - integral bound
* @param {number} aii - integral bound
* @param {number} c - integral upper bound
* @param {number} r - relative error tolerance
* @param {number} v - number of integration variables
* @param {number} l - logarithm of the absolute value of the integral
* @returns {number} integral value
*/
function f26( q, za, aii, c, r, v, l ) {
	var aux1;
	var yyi;
	var aux;

	yyi = ( za * l ) + ( 2.0 * aii * l ) + l;
	aux1 = prangeVInf( sqrt(yyi / 2.0) * q, r );
	if ( aux1 === 0 ) {
		aux1 = 1.0e-37;
	}
	aux = ( c * ln(aux1) ) + ln(l) + ( (v / 2.0) * ln(v) ) +
		( -yyi * v / 4.0 ) + ( ( ( v / 2.0 ) - 1.0 ) * ln(yyi) ) -
		( ( v * LN_TWO ) + lngamma( v / 2.0 ) );
	if ( abs( aux ) >= 1.0e30 ) {
		return 0.0;
	}
	return exp( aux );
}


// EXPORTS //

module.exports = f26;
