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

var WEIGHT = require( './weight.json' );
var ROOT = require( './root.json' );
var f26 = require( './f26.js' );


// MAIN //

/**
* Evaluates a Gauss-Legendre quadrature rule.
*
* @private
* @param {number} q - quadrature point
* @param {number} aii - integral bound
* @param {number} r - relative error tolerance
* @param {number} ci - integral upper bound
* @param {number} a - lower bound of integration
* @param {number} b - upper bound of integration
* @param {number} n - number of quadrature points
* @param {number} v - number of integration variables
* @param {number} l - logarithm of the absolute value of the integral
* @returns {number} integral value
*/
function gausslegdquad( q, aii, r, ci, a, b, n, v, l ) {
	var wsum = 0.0;
	var cmm = ( b - a ) / 2.0;
	var d = ( b + a ) / 2.0;
	var j;
	for ( j = 0; j < n; j++ ) {
		if ( ROOT[ j ] === 0.0 ) {
			wsum += WEIGHT[ j ] * f26( q, d, aii, ci, r, v, l );
		} else {
			wsum += WEIGHT[ j ] *
				( f26( q, ( ROOT[ j ] * cmm ) + d, aii, ci, r, v, l ) );
		}
	}
	return cmm * wsum;
}


// EXPORTS //

module.exports = gausslegdquad;
